interface Props {
  current: number; // 1-based
  total: number;
}

export function ProgressBar({ current, total }: Props) {
  const pct = Math.min(100, Math.max(0, (current / total) * 100));
  return (
    <div className="w-full">
      <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-gold transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="mt-2 text-center text-sm text-muted-foreground">
        Pergunta <span className="text-gold font-medium">{current}</span> de {total}
      </p>
    </div>
  );
}
