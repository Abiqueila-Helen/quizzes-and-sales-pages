import { createFileRoute, notFound } from "@tanstack/react-router";
import { QuizContainer } from "@/components/quiz/QuizContainer";
import { getQuiz } from "@/data/quizzes";

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const quiz = getQuiz(params.slug);
    if (!quiz) throw notFound();
    return { quiz };
  },
  head: ({ loaderData }) => {
    const q = loaderData?.quiz;
    if (!q) return {};
    const canonical = q.seo.canonical ?? `/${q.slug}`;
    return {
      meta: [
        { title: q.seo.title },
        { name: "description", content: q.seo.description },
        { property: "og:title", content: q.seo.ogTitle ?? q.seo.title },
        { property: "og:description", content: q.seo.ogDescription ?? q.seo.description },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: canonical }],
    };
  },
  component: QuizPage,
});

function QuizPage() {
  const { quiz } = Route.useLoaderData();
  return <QuizContainer config={quiz} />;
}
