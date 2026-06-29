import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, nofollow" },
      { title: "—" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-sm">
        <h1 className="font-serif text-3xl text-foreground">Acesso restrito</h1>
        <p className="mt-3 text-muted-foreground text-sm">
          Esta página só é acessível através do link específico do seu diagnóstico.
        </p>
      </div>
    </div>
  );
}
