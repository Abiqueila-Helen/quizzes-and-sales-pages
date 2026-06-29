import type { QuizConfig } from "@/types/quiz";
import { useQuiz } from "@/hooks/use-quiz";
import { QuizTopbar } from "./QuizTopbar";
import { Hero } from "./Hero";
import { Question } from "./Question";
import { Processing } from "./Processing";
import { Result } from "./Result";

interface Props {
  config: QuizConfig;
}

export function QuizContainer({ config }: Props) {
  const quiz = useQuiz(config);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizTopbar brand={config.brand} cta={config.topbarCta} />
      <main className="flex-1">
        {quiz.stage === "hero" && <Hero hero={config.hero} onStart={quiz.start} />}
        {quiz.stage === "questions" && quiz.currentQuestion && (
          <Question
            question={quiz.currentQuestion}
            index={quiz.index}
            total={quiz.total}
            onAnswer={quiz.answer}
            onBack={quiz.back}
            canGoBack={true}
          />
        )}
        {quiz.stage === "processing" && (
          <Processing
            title={config.processing.title}
            steps={config.processing.steps}
            onComplete={quiz.finishProcessing}
          />
        )}
        {quiz.stage === "result" && (
          <Result diagnosis={quiz.diagnosis} offer={config.offer} brand={config.brand} />
        )}
      </main>
    </div>
  );
}
