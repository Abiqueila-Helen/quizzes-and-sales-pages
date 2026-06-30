import { useEffect } from "react";
import { CheckCircle2, ChevronLeft, Clock3 } from "lucide-react";
import type { QuizOption, QuizQuestion } from "@/types/quiz";
import type { UseQuizApi } from "@/hooks/use-quiz";
import type { QuizConfig } from "@/types/quiz";
import { Processing } from "./Processing";
import { Result } from "./Result";

interface Props {
  config: QuizConfig;
  quiz: UseQuizApi;
}

const BASE_URL = "https://imersao.cristinacamargo.com.br";

function PercentagesScreen({ weights, diagnoses, onComplete }: { weights: Record<string, number>; diagnoses: QuizConfig["diagnoses"]; onComplete: () => void }) {
  const maxWeight = Math.max(...Object.values(weights), 1);

  const items = diagnoses.map((d) => {
    const raw = weights[d.key] ?? 0;
    const pct = Math.round((raw / maxWeight) * 80) + 10;
    return { key: d.key, title: d.title, pct };
  });

  useEffect(() => {
    const timer = setTimeout(onComplete, 5000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <section className="min-h-screen bg-marfim flex flex-col items-center justify-center px-5">
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-marrom mb-8 text-center">
        Seu padrão emocional predominante
      </h2>
      <div className="w-full max-w-md space-y-4">
        {items.map((item) => (
          <div key={item.key} className="rounded-xl border border-border bg-white/80 p-4 shadow-sm">
            <p className="font-body text-sm text-muted mb-2">{item.title}</p>
            <div className="h-3 w-full rounded-full bg-border overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${item.pct}%`,
                  background: "linear-gradient(to right, #A0632A, #D4A257)",
                }}
              />
            </div>
            <p className="mt-1 font-body text-right text-xs text-muted">{item.pct}%</p>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={onComplete}
        className="mt-10 rounded-full bg-gold px-8 py-3 font-semibold text-marrom shadow-[0_4px_24px_rgba(212,162,87,0.35)] hover:-translate-y-0.5 transition-transform"
      >
        Ver meu resultado completo
      </button>
    </section>
  );
}

export function DiagnosticoGratuitoFlow({ config, quiz }: Props) {
  if (quiz.stage === "hero") {
    return (
      <section className="min-h-screen bg-marfim pb-20 relative overflow-hidden">
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(400%); }
          }
          .progress-shimmer::after {
            content: '';
            position: absolute;
            inset: 0;
            width: 25%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            animation: shimmer 1.6s ease-in-out infinite;
          }
          @keyframes btnShimmer {
            0% { transform: translateX(-100%) skewX(-12deg); }
            100% { transform: translateX(400%) skewX(-12deg); }
          }
          .opt-btn-shimmer {
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
            transform: translateX(-100%) skewX(-12deg);
            pointer-events: none;
          }
          .opt-btn:hover .opt-btn-shimmer {
            animation: btnShimmer 0.65s ease forwards;
          }
        `}</style>
        <div className="px-5 pt-10 sm:pt-14">
          <div className="max-w-xl mx-auto relative z-10">
            <div className="text-center mb-8">
              <span className="inline-block uppercase text-xs tracking-[0.2em] text-ambar font-body font-medium mb-4">
                {config.hero.badge ?? "Diagnóstico gratuito"}
              </span>
              <h1 className="font-display font-semibold text-4xl sm:text-5xl text-marrom leading-tight mb-4">
                {config.hero.headline}
              </h1>
            </div>

            <div className="relative w-full mb-8 overflow-hidden" style={{ aspectRatio: "4/3", borderRadius: 16, border: "2px solid #D4A257" }}>
              <img
                src={`${BASE_URL}/quiz/q1.jpeg`}
                alt=""
                className="w-full h-full object-cover object-top block"
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center px-5 py-3" style={{ backgroundColor: "#D4A257", zIndex: 6 }}>
                <p className="font-body font-medium text-[15px] text-white text-center tracking-wide">
                  {config.hero.subheadline ?? "Um diagnóstico que vai mudar sua vida."}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="inline-flex items-center gap-2 text-sm text-muted">
                <Clock3 className="h-4 w-4" />
                {config.hero.footnote ?? "Leva menos de 2 minutos."}
              </div>
              <button
                type="button"
                onClick={quiz.start}
                className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gold px-8 py-4 text-base font-semibold tracking-wide text-marrom shadow-[0_4px_24px_rgba(212,162,87,0.35)] transition-all hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transition-transform duration-700 group-hover:translate-x-[100%]" />
                <span>{config.hero.button}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (quiz.stage === "questions" && quiz.currentQuestion) {
    return (
      <section className="min-h-screen bg-marfim pb-20 relative overflow-hidden">
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(400%); }
          }
          .progress-shimmer::after {
            content: '';
            position: absolute;
            inset: 0;
            width: 25%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            animation: shimmer 1.6s ease-in-out infinite;
          }
          @keyframes btnShimmer {
            0% { transform: translateX(-100%) skewX(-12deg); }
            100% { transform: translateX(400%) skewX(-12deg); }
          }
          .opt-btn-shimmer {
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
            transform: translateX(-100%) skewX(-12deg);
            pointer-events: none;
          }
          .opt-btn:hover .opt-btn-shimmer {
            animation: btnShimmer 0.65s ease forwards;
          }
        `}</style>

        <div className="px-5 pt-10 sm:pt-14">
          <div className="max-w-xl mx-auto relative z-10">
            <div className="text-center mb-8">
              <span className="inline-block uppercase text-xs tracking-[0.2em] text-ambar font-body font-medium mb-4">
                Diagnóstico gratuito
              </span>
              <h1 className="font-display font-semibold text-4xl sm:text-5xl text-marrom leading-tight mb-4">
                Descubra qual padrão está conduzindo sua vida
              </h1>
            </div>

            <div className="relative w-full mb-8 overflow-hidden" style={{ aspectRatio: "4/3", borderRadius: 16, border: "2px solid #D4A257" }}>
              <img
                src={quiz.currentQuestion.image ?? `${BASE_URL}/quiz/q1.jpeg`}
                alt=""
                className="w-full h-full object-cover object-top block"
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center px-5 py-3" style={{ backgroundColor: "#D4A257", zIndex: 6 }}>
                <p className="font-body font-medium text-[15px] text-white text-center tracking-wide">
                  Um diagnóstico que vai mudar sua vida.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-body font-light text-sm text-muted">
                  Pergunta {quiz.index + 1} de {quiz.total}
                </span>
                <span className="font-body font-light text-sm text-muted">
                  {Math.round(((quiz.index + 1) / quiz.total) * 100)}%
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-border">
                <div
                  className="progress-shimmer relative h-2 overflow-hidden rounded-full"
                  style={{ width: `${Math.round(((quiz.index + 1) / quiz.total) * 100)}%`, background: "linear-gradient(to right, #A0632A, #D4A257)" }}
                />
              </div>
            </div>

            <div style={{ animation: "fadeInUp 0.4s ease forwards" }}>
              <p className="mb-8 font-display font-semibold text-3xl leading-snug text-marrom sm:text-4xl">
                {quiz.currentQuestion.title}
              </p>

              <div className="mb-10 space-y-3">
                {quiz.currentQuestion.options.map((option, index) => (
                  <button
                    key={option.id}
                    type="button"
                    className="opt-btn relative w-full overflow-hidden rounded-xl border px-5 py-4 text-left transition-all"
                    style={{
                      backgroundColor: "#FAF5EE",
                      borderColor: "#E2CEAD",
                      borderWidth: 1.5,
                      borderStyle: "solid",
                    }}
                    onClick={() => quiz.answer(option)}
                  >
                    <span className="opt-btn-shimmer" />
                    <span className="flex items-start gap-4">
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-medium font-body"
                        style={{
                          backgroundColor: ["#E2CEAD", "#D4A257", "#A0632A", "#5C3A1E"][index % 4],
                          color: index === 2 || index === 3 ? "#ffffff" : "#1A0E06",
                        }}
                      >
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="font-body text-[20px] leading-relaxed" style={{ color: "#5C3A1E" }}>
                        {option.label}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (quiz.stage === "processing") {
    return <Processing title={config.processing.title ?? "Analisando suas respostas..."} steps={config.processing.steps} onComplete={quiz.finishProcessing} />;
  }

  if (quiz.stage === "percentages") {
    return <PercentagesScreen weights={quiz.weights} diagnoses={config.diagnoses} onComplete={quiz.showResult} />;
  }

  if (quiz.stage === "result") {
    return (
      <div className="min-h-screen bg-background">
        <Result diagnosis={quiz.diagnosis} offer={config.offer} brand={config.brand} />
      </div>
    );
  }

  return null;
}