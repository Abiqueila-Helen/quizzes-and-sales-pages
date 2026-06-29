import type { QuizHero } from "@/types/quiz";
import { Clock3 } from "lucide-react";

interface Props {
  hero: QuizHero;
  onStart: () => void;
}

export function Hero({ hero, onStart }: Props) {
  return (
    <section className="container-quiz max-w-3xl py-16 sm:py-24 text-center animate-fade-up">
      {hero.badge && (
        <span className="inline-block rounded-full bg-gold px-5 py-2 text-xs sm:text-sm font-semibold tracking-wider text-gold-foreground">
          {hero.badge}
        </span>
      )}
      <h1 className="mt-8 font-serif text-3xl sm:text-5xl font-semibold leading-[1.15] text-foreground">
        {hero.headline}
      </h1>
      {hero.subheadline && (
        <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
          {hero.subheadline}
        </p>
      )}
      {hero.footnote && (
        <p className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Clock3 className="h-4 w-4" />
          {hero.footnote}
        </p>
      )}
      <div className="mt-10">
        <button
          onClick={onStart}
          className="inline-flex items-center justify-center rounded-md bg-gold px-10 py-4 text-sm sm:text-base font-semibold tracking-wider text-gold-foreground shadow-sm transition-all hover:brightness-95 active:scale-[0.98]"
        >
          {hero.button.toUpperCase()}
        </button>
      </div>
    </section>
  );
}
