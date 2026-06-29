import type { QuizOption, QuizQuestion } from "@/types/quiz";
import { ChevronLeft } from "lucide-react";
import { ProgressBar } from "./ProgressBar";

interface Props {
  question: QuizQuestion;
  index: number;
  total: number;
  onAnswer: (opt: QuizOption) => void;
  onBack: () => void;
  canGoBack: boolean;
}

export function Question({ question, index, total, onAnswer, onBack, canGoBack }: Props) {
  return (
    <section className="container-quiz py-8 sm:py-12 animate-fade-up" key={question.id}>
      <ProgressBar current={index + 1} total={total} />

      {canGoBack && (
        <button
          onClick={onBack}
          className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4" /> Voltar
        </button>
      )}

      <div className="mt-6 sm:mt-10 text-center">
        {question.subtitle && (
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
            {question.subtitle}
          </p>
        )}
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold leading-snug text-foreground">
          {question.title}
        </h2>
        {question.image && (
          <img
            src={question.image}
            alt=""
            className="mt-6 rounded-xl mx-auto max-h-72 object-cover"
          />
        )}
      </div>

      <ul className="mt-8 sm:mt-10 flex flex-col gap-3">
        {question.options.map((opt) => (
          <li key={opt.id}>
            <button
              onClick={() => onAnswer(opt)}
              className="w-full text-left rounded-xl border border-border bg-card px-5 py-4 sm:py-5 text-foreground shadow-sm transition-all hover:border-gold hover:shadow-md active:scale-[0.995] focus:outline-none focus:ring-2 focus:ring-gold"
            >
              {opt.label}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
