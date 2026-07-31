# Nova landing `/ressignifica-app-sell-pie` — cópia fiel de theiam.app com identidade FigTree

Reprodução fiel da referência `modelo01-mobile.png` / `https://theiam.app/`: mesmo fluxo, mesma estrutura, mesmas seções e os mesmos textos. Nada de seções inventadas — a única adição é a seção de Oferta pedida na tarefa. A página `/ressignifica-app-sell` atual permanece intacta.

## Correção necessária antes de tudo

`src/styles.css` linha 1 tem `@import url('https://fonts.googleapis.com/css2?family=Cause...')`, que quebra o build (Tailwind v4 resolve `@import` pelo sistema de arquivos). Será removido; as fontes passam a ser carregadas por `<link>` em `src/routes/__root.tsx`.

## Tipografia

Títulos em **Fraunces** (Google Fonts, substituta mais próxima da fonte da referência), textos em sans (DM Sans / Plus Jakarta já em uso). Ambas carregadas via `<link>` no `__root.tsx`.

## Paleta FigTree

- `#373435` (carvão — texto e blocos de contraste); `#BF7F4D` (ocre — acentos)
- `#FFFFFF` (áreas claras); `#FFCC29` (destaques/selos); `#CCE7D4` e `#D2E28B` (fundos suaves e gradientes)
- Substituições: `#443634` → `#373435`; fundos escuros da referência → `#CCE7D4`; gradientes suaves → `#CCE7D4` → `#D2E28B`

## Estrutura (mesma ordem da referência)

1. **Hero** — mesmo layout e texto ("Cultive o amor-próprio, alimente a autoconfiança e manifeste seus desejos"). No lugar dos botões App Store / Google Play, dois CTAs de destaque que rolam até a oferta: "Quero Recuperar Meus Dias" e "Escolher Meu Plano".
2. **01 Afirmações** — mockup de celular + "Cultive o seu amor-próprio" e texto de apoio.
3. **02 Conquista** — grade de ícones/cartões + "Escolha afirmações que ressoem profundamente em você".
4. **03 Temas** — cartões de temas + "Personalize sua experiência com temas, lembretes e widgets".
5. **Benefícios** — lista numerada 01 a 05 com os mesmos títulos e textos da referência, incluindo o bloco de destaque em texto grande.
6. **Depoimentos** — cartões empilhados com nome e "Ver mais", como na referência.
7. **Oferta (nova seção — único acréscimo)** — detalhada abaixo, posicionada após os depoimentos.
8. **Footer simples** — "Baixe já" adaptado (sem os botões de loja, com CTA para a oferta), © Ressignifica, Política de Privacidade, Termos de Uso, Contato.

Sem header superior ("I am, Blo"), sem a seção "Conheça todos os nossos aplicativos", **sem FAQ e sem seção de Garantia isolada** (a garantia aparece apenas como selo dentro da seção de oferta, conforme a tarefa).

## Seção de Oferta

Maior destaque da página: temporizador regressivo, cards premium, botões grandes, selos de compra segura e garantia, forte hierarquia. Ordem: Anual → Trimestral → Mensal. Destaque tipográfico no valor mensal equivalente; valor total em texto menor.

- **Anual** — selo "Maior Economia", **Apenas R$ 3,99 por mês**, "Cobrado R$ 47,88 por ano", "Economize 60%", benefício "Maior economia do ano", botão "Quero o Melhor Valor" → checkout `39ainba`
- **Trimestral** — selo "Mais Popular" (fundo `#373435`, texto `#FFCC29`), card em escala levemente maior com borda e sombra reforçadas, **Apenas R$ 7,40 por mês**, "Cobrado R$ 22,20 a cada 3 meses", "Economize 25%", benefício "Melhor custo-benefício", botão "Quero Economizar" → checkout `38uxdqx`
- **Mensal** — **Apenas R$ 9,90 por mês**, "Cobrado R$ 9,90 por mês", "Ideal para quem deseja conhecer o aplicativo", botão "Começar Agora" → checkout `3bfg6d6_992279`

Todos os cards com lista de benefícios, ícones, botão grande e cantos arredondados.

## Imagens

Novos elementos decorativos orgânicos e minimalistas gerados por IA (folhas, formas suaves, sol) em `src/assets/figtree-pie/`, no mesmo espírito da referência. Os prints do app vêm dos arquivos reais já existentes em `src/assets/appsre/carousel`.

## Detalhes técnicos

- Rota `src/routes/ressignifica-app-sell-pie.tsx` com `head()` próprio (title, description, og:*, canonical)
- Página `src/pages/RessignificaAppSellPiePage.tsx` composta por seções em `src/components/figtree-pie/`
- Tokens da paleta FigTree em módulo local `theme.ts`, sem alterar tokens globais das páginas existentes
- Reaproveita `framer-motion`, `embla-carousel-react`, `lucide-react` já instalados
- Timer de 15 min com hook local, sem persistência
