# Tarefa: Atualizar tipografia e background das seções (referência: site anexo "I Am")

## 1. Títulos (H1/H2 de destaque — classe `.text-size-large`)
Aplicar em todos os títulos grandes da página:
```css
.text-size-large {
  font-family: 'Peachi', Arial, sans-serif;
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 1.3;
  color: var(--i-am-dark); /* se a variável não existir, usar #373435 */
  text-align: left; /* remover centralização e largura fixa herdadas */
  width: auto;
}
```
Se a fonte "Peachi" não estiver disponível no projeto, importar via `@font-face` ou
usar fallback próximo (ex: fonte serifada elegante tipo "Fraunces" ou "Playfair Display").

## 2. Subtítulos/parágrafos de apoio (classe `.text-size-regular`)
```css
.text-size-regular {
  font-family: 'DM Sans', Arial, sans-serif;
  font-size: 1.2rem;
  line-height: 1.6;
  color: #2f3a48cc;
  width: auto;
}
```
"DM Sans" está disponível no Google Fonts — importar se ainda não estiver no projeto.

## 3. Backgrounds das seções
Alternar as seções da página entre esses dois tons neutros (em vez do fundo atual):
- `#ebded6` (bege rosado — seções de destaque/intercaladas)
- `#fffdfd` (quase branco — seções neutras/padrão)
- `#faf5f5` (mais claro)
- `#443634` (mais escuro para rodapé) 

## Regra geral
- Aplicar as duas classes de texto (`text-size-large` e `text-size-regular`) de forma
  global/reutilizável, não como estilo isolado por seção
- Manter as cores de acento (laranja `#F58634`, azul `#00AFEF` etc.) só nos elementos
  já definidos nas tarefas anteriores (badges, CTAs, destaques) — os backgrounds
  `#ebded6`/`#fffdfd` substituem apenas o fundo das seções, não os acentos