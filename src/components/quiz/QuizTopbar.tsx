interface Props {
  brand: string;
  cta?: string;
}

export function QuizTopbar({ brand, cta }: Props) {
  return (
    <header className="border-b border-border/60 bg-background/80 backdrop-blur sticky top-0 z-30">
      <div className="container-quiz max-w-6xl flex items-center justify-between py-4">
        <span className="font-serif text-lg sm:text-xl font-semibold text-foreground">
          {brand}
        </span>
        {cta && (
          <span className="text-xs sm:text-sm text-muted-foreground">{cta}</span>
        )}
      </div>
    </header>
  );
}
