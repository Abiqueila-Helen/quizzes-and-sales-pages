import type { QuizConfig } from "@/types/quiz";
import oDialogoInterno from "./o-dialogo-interno";
import prisaoDaAutossabotagem from "./prisao-da-autossabotagem";
import diagnosticoGratuito from "./diagnostico-gratuito";
import pararDeProcrastinar from "./parar-de-procrastinar";

/**
 * Registry de quizzes. Para adicionar um novo quiz:
 *   1. crie src/data/quizzes/meu-novo-quiz.ts exportando um QuizConfig default
 *   2. importe aqui e adicione ao objeto abaixo
 * Pronto — a rota /meu-novo-quiz passa a funcionar automaticamente.
 */
export const quizzes: Record<string, QuizConfig> = {
  [oDialogoInterno.slug]: oDialogoInterno,
  [prisaoDaAutossabotagem.slug]: prisaoDaAutossabotagem,
  [diagnosticoGratuito.slug]: diagnosticoGratuito,
  [pararDeProcrastinar.slug]: pararDeProcrastinar,
};

export function getQuiz(slug: string): QuizConfig | undefined {
  return quizzes[slug];
}
