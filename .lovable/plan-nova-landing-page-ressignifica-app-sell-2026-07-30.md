# Nova Landing Page `/ressignifica-app-sell`

Landing page mobile-first de alta conversão para o App Ressignifica, com posicionamento novo:
**o app que recupera sua capacidade de produzir quando sua mente tenta te paralisar** — um botão de emergência, não um app de meditação.

A página `/appsre` atual continua intacta. Esta é uma página nova e independente.

## Identidade visual

- Mobile-first de verdade: tudo desenhado primeiro para telas de celular e depois expandido.
- Fundo branco / cinza claro, azul #1ABCFE e verde #0ACF83, tipografia Plus Jakarta Sans.
- Estética Apple: muito respiro, cards com cantos bem arredondados, sombras suaves, gradientes discretos, micro animações de entrada ao rolar.

## Estrutura (14 seções)

1. **Hero** — headline "Sua mente não está apenas roubando sua paz. Ela pode estar roubando o seu futuro financeiro.", subheadline sobre dias perdidos de produtividade, mockup premium do app, CTA "Quero Recuperar Minha Produtividade", selos de acesso imediato, garantia e compatibilidade Android/iPhone.
2. **O Ciclo Invisível** — infográfico vertical do loop (pensamento negativo → escassez → ansiedade → paralisia → procrastinação → produz menos → ganha menos → autoestima cai → recomeça) com a virada: disciplina nunca foi o problema.
3. **O Verdadeiro Problema** — narrativa do dia comum (acorda, pega o celular, compara, trava, adia, dorme culpado) em formato de timeline.
4. **Conheça o Ressignifica** — fluxo da intervenção: sentimento → intervenção → mudança de estado → microação → autoestima → produção → resultado financeiro.
5. **O Que Você Recebe** — 8 cards: áudios, vídeos, exercícios de ressignificação, microações, dashboard, registro de vitórias, check-in emocional, evolução diária.
6. **Por Que Funciona** — 4 cards (não depende de motivação / disciplina / força de vontade / interrompe o ciclo na hora) + comparativo visual.
7. **Sua Transformação** — Antes x Depois lado a lado.
8. **Bônus** — Comunidade Secreta e Webinar Exclusivo, cada um com capa própria.
9. **Oferta** — seção mais chamativa da página, no padrão do modelo de referência:
   - Timer de 15 minutos
   - Mensal R$ 9,90/mês → checkout `3bfg6d6_992279`
   - Trimestral R$ 22,20 ("Apenas R$ 7,40 por mês", selo "Mais Popular", card maior e destacado) → checkout `38uxdqx`
   - Anual R$ 47,88 ("Apenas R$ 3,99 por mês", selo "Maior Economia", destaque de economia vs. mensal) → checkout `39ainba`
   - Cada plano com lista de benefícios, ícones, selos de compra segura e garantia.
10. **Veja o Aplicativo** — carrossel com autoplay, setas e dots, lendo automaticamente todas as imagens de `src/assets/appsre/carousel` (basta soltar arquivos novos na pasta para aparecerem), com lightbox ao tocar.
11. **Depoimentos** — 3 relatos naturais com foto, nome, cidade, nota e resultado, usando as fotos já existentes (Daniela, Fernanda, Ricardo).
12. **Garantia** — bloco premium com selo grande, 7 dias incondicional.
13. **FAQ** — 5 perguntas (ansiedade, tempo para resultado, uso diário, é terapia?, como recebo acesso) em accordion animado.
14. **CTA Final** — fechamento emocional + botão "Quero Recuperar Minha Capacidade de Produzir".
15. **Rodapé** — © 2026 Ressignifica, Política de Privacidade, Termos de Uso, Contato (WhatsApp).

## Imagens (geradas por IA, todas novas)

- Hero exclusivo com mockup de smartphone moderno
- Ilustração do ciclo invisível (loop fechado)
- Ilustração do fluxo de intervenção
- Comparativo antes/depois
- Capa da Comunidade Secreta
- Capa do Webinar Exclusivo
- Elementos decorativos / ícones exclusivos

Os prints reais do app já presentes em `src/assets/appsre/carousel` são a fonte do carrossel — não serão inventadas telas de app.

## Detalhes técnicos

- Rota nova `src/routes/ressignifica-app-sell.tsx` com `head()` próprio (title, description, og:*, canonical) apontando para o novo posicionamento.
- Página em `src/pages/RessignificaAppSellPage.tsx`, quebrada em componentes de seção dentro de `src/components/ressignifica-sell/` para o arquivo não virar um monólito.
- Reaproveita as libs já instaladas: `embla-carousel-react` + `embla-carousel-autoplay`, `framer-motion`, `yet-another-react-lightbox`.
- Carrossel dinâmico via `import.meta.glob("@/assets/appsre/carousel/*", { eager: true })`, ordenado por nome de arquivo.
- Tokens de cor (azul, verde, superfícies claras) adicionados em `src/styles.css` como variáveis dedicadas desta página, sem alterar os tokens usados pelas páginas existentes.
- Timer de 15 min com `useCountdown` local, sem persistência.
- Novas imagens em `src/assets/ressignifica-sell/`.
