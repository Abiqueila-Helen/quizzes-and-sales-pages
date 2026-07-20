import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/appsre-obrigado")({
  head: () => ({
    meta: [
      { title: "Pagamento realizado com sucesso! | Ressignifica" },
      { name: "description", content: "Seu acesso está quase pronto. Verifique seu e-mail para concluir o cadastro." },
      { property: "og:title", content: "Pagamento realizado com sucesso! | Ressignifica" },
      { property: "og:description", content: "Seu acesso está quase pronto. Verifique seu e-mail para concluir o cadastro." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ressignifica.app/appsre-obrigado" },
    ],
    links: [
      { rel: "canonical", href: "https://ressignifica.app/appsre-obrigado" },
    ],
  }),
  component: AppsreThankYouPage,
});

export default function AppsreThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Pagamento realizado com sucesso!
        </h1>
        <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line">{`Seu acesso está quase pronto.
Enviamos um e-mail para o endereço utilizado na compra.
Abra esse e-mail e clique no link para criar sua senha.
Depois disso faça login normalmente.`}</p>
        <a
          href="https://ressignifica.insightagency-ia.com.br/auth?mode=signin"
          className="inline-block bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Ir para Login
        </a>
      </div>
    </div>
  );
}