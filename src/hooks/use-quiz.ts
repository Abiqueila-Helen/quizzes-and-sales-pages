import { useCallback, useMemo, useState } from "react";
import type { DiagnosisKey, DiagnosisResult, QuizConfig, QuizOption } from "@/types/quiz";

type Stage = "hero" | "questions" | "processing" | "result";

export interface UseQuizApi {
  stage: Stage;
  index: number;
  total: number;
  answers: Record<string, string>;
  currentQuestion: QuizConfig["questions"][number] | null;
  start: () => void;
  answer: (option: QuizOption) => void;
  back: () => void;
  finishProcessing: () => void;
  reset: () => void;
  diagnosis: DiagnosisResult | null;
  weights: Record<DiagnosisKey, number>;
}

export function useQuiz(config: QuizConfig): UseQuizApi {
  const [stage, setStage] = useState<Stage>("hero");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const total = config.questions.length;
  const currentQuestion = stage === "questions" ? config.questions[index] ?? null : null;

  const weights = useMemo(() => {
    const acc: Record<DiagnosisKey, number> = {};
    for (const q of config.questions) {
      const chosenId = answers[q.id];
      if (!chosenId) continue;
      const opt = q.options.find((o) => o.id === chosenId);
      if (!opt?.weights) continue;
      for (const [k, v] of Object.entries(opt.weights)) {
        acc[k] = (acc[k] ?? 0) + v;
      }
    }
    return acc;
  }, [answers, config.questions]);

  const diagnosis = useMemo<DiagnosisResult | null>(() => {
    if (stage !== "result") return null;
    let bestKey: string | null = null;
    let bestVal = -Infinity;
    for (const [k, v] of Object.entries(weights)) {
      if (v > bestVal) {
        bestVal = v;
        bestKey = k;
      }
    }
    const key = bestKey ?? config.defaultDiagnosis ?? config.diagnoses[0]?.key;
    return config.diagnoses.find((d) => d.key === key) ?? config.diagnoses[0] ?? null;
  }, [stage, weights, config]);

  const start = useCallback(() => {
    setStage("questions");
    setIndex(0);
  }, []);

  const answer = useCallback(
    (option: QuizOption) => {
      const q = config.questions[index];
      if (!q) return;
      setAnswers((prev) => ({ ...prev, [q.id]: option.id }));
      if (index + 1 < total) {
        setIndex((i) => i + 1);
      } else {
        setStage("processing");
      }
    },
    [config.questions, index, total],
  );

  const back = useCallback(() => {
    if (stage !== "questions") return;
    if (index === 0) {
      setStage("hero");
      return;
    }
    setIndex((i) => Math.max(0, i - 1));
  }, [stage, index]);

  const finishProcessing = useCallback(() => setStage("result"), []);

  const reset = useCallback(() => {
    setStage("hero");
    setIndex(0);
    setAnswers({});
  }, []);

  return {
    stage,
    index,
    total,
    answers,
    currentQuestion,
    start,
    answer,
    back,
    finishProcessing,
    reset,
    diagnosis,
    weights,
  };
}
