# Nova landing `/ressignifica-app-sell-pie` (estilo modelo01-mobile, identidade FigTree)

Página de vendas mobile-first inspirada na referência enviada: layout arejado, tipografia serifada grande, ilustrações orgânicas, seções numeradas e blocos de depoimentos. A página `/ressignifica-app-sell` atual permanece intacta.

## Correção necessária antes de tudo

`src/styles.css` tem na linha 1 um `@import url('https://fonts.googleapis.com/css2?family=Cause...')` que quebra o build (o Tailwind v4 resolve `@import` pelo sistema de arquivos). Será removido; as fontes continuam sendo carregadas por `<link>` em `src/routes/__root.tsx`.

## Identidade visual (FigTree)

- Escuro: `#373435` (carvão, texto e blocos de contraste), `#BF7F4D` (ocre, acentos e detalhes)
- Claro: `#FFFFFF` (áreas claras), `#FFCC29` (destaques/selos), `#CCE7D4` e `#D2E28B` (fundos suaves e gradientes)
- Substituições da referência: `#443634` → `#373435`; fundos escuros da referência → `#CCE7D4`; gradientes suaves → `#CCE7D4` → `#D2E28B`
- Tipografia serifada nos títulos + sans nos textos, muito respiro, cantos arredondados, animações suaves ao rolar

## Estrutura (sem header e sem "conheça todos os nossos aplicativos")

1. **Hero** — mesmo layout da referência (título serifado grande, ilustrações orgânicas ao fundo). No lugar dos botões App Store / Google Play, dois CTAs grandes que rolam até a oferta: "Quero Recuperar Meus Dias" e "Escolher Meu Plano".
2. **Demonstração do aplicativo** — bloco numerado com mockup de celular (usa os prints reais já existentes em `src/assets/appsre/carousel`).
3. **Exemplos** — grade de cartões/telas no padrão "Conquista/Temas" da referência.
4. **Benefícios** — lista numerada (01…05) com títulos serifados, igual à referência.
5. **Depoimentos** — cartões empilhados com nome e "Ver mais" no estilo da referência.
6. **Oferta (nova seção, maior destaque)** — timer regressivo, cards premium, botões grandes, selos de compra segura e garantia.
7. **Garantia** — 7 dias incondicional, selo em `#373435` com detalhe `#FFCC29`.
8. **FAQ** — accordion animado.
9. **Footer simples** — © Ressignifica, Política de Privacidade, Termos de Uso, Contato.

## Seção de oferta

Ordem: Anual → Trimestral → Mensal. Destaque tipográfico maior no valor mensal equivalente; valor total em texto menor.

- **Anual** — selo "Maior Economia", **Apenas R$ 3,99 por mês**, "Cobrado R$ 47,88 por ano", "Economize 60%", benefício "Maior economia do ano", botão "Quero o Melhor Valor" → checkout `39ainba`
- **Trimestral** — selo "Mais Popular" (fundo `#373435`, texto `#FFCC29`), card em escala levemente maior com borda e sombra reforçadas, **Apenas R$ 7,40 por mês**, "Cobrado R$ 22,20 a cada 3 meses", "Economize 25%", benefício "Melhor custo-benefício", botão "Quero Economizar" → checkout `38uxdqx`
- **Mensal** — **Apenas R$ 9,90 por mês**, "Cobrado R$ 9,90 por mês", "Ideal para quem deseja conhecer o aplicativo", botão "Começar Agora" → checkout `3bfg6d6_992279`

Todos os cards com lista de benefícios, ícones, botão grande e cantos arredondados.

## Imagens

Novos elementos decorativos orgânicos e minimalistas gerados por IA (folhas, formas suaves, sol) em `src/assets/figtree-pie/`, no espírito da referência mas sem copiá-la. Os prints do app vêm dos arquivos reais já existentes.

## Detalhes técnicos

- Rota `src/routes/ressignifica-app-sell-pie.tsx` com `head()` próprio (title, description, og:*, canonical)
- Página `src/pages/RessignificaAppSellPiePage.tsx` composta por seções em `src/components/figtree-pie/`
- Tokens da paleta FigTree em um módulo local `theme.ts` (mesmo padrão do `ui.tsx` atual), sem alterar tokens globais das páginas existentes
- Reaproveita `framer-motion`, `embla-carousel-react`, `lucide-react` já instalados
- Timer de 15 min com hook local, sem persistência
