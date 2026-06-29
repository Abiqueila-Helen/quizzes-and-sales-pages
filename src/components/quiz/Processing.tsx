import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import type { ProcessingStep } from "@/types/quiz";

interface Props {
  title?: string;
  steps: ProcessingStep[];
  onComplete: () => void;
}

export function Processing({ title = "Analisando suas respostas...", steps, onComplete }: Props) {
  const [doneCount, setDoneCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let acc = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];
    steps.forEach((s, i) => {
      acc += s.duration ?? 1400;
      timers.push(
        setTimeout(() => {
          if (!cancelled) setDoneCount(i + 1);
        }, acc),
      );
    });
    timers.push(
      setTimeout(() => {
        if (!cancelled) onComplete();
      }, acc + 500),
    );
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [steps, onComplete]);

  return (
    <section className="container-quiz py-20 sm:py-32 animate-fade-up">
      <div className="text-center">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
          {title}
        </h2>
      </div>
      <ul className="mt-10 mx-auto max-w-md flex flex-col gap-4">
        {steps.map((s, i) => {
          const done = i < doneCount;
          const active = i === doneCount;
          return (
            <li
              key={i}
              className={`flex items-center gap-3 text-base transition-opacity duration-300 ${
                done || active ? "opacity-100" : "opacity-40"
              }`}
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full border transition-colors ${
                  done
                    ? "bg-gold border-gold text-gold-foreground"
                    : "border-muted-foreground/40 text-muted-foreground"
                }`}
              >
                {done ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : <span className="text-xs">•</span>}
              </span>
              <span className={done ? "text-foreground" : "text-muted-foreground"}>
                {s.label}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
