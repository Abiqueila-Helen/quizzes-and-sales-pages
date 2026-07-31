## Implementar animação de texto contínuo e efeito de sobreposição entre seções

### 1. Texto contínuo (Marquee) em CSS

Implementar um componente de texto contínuo semelhante ao da referência para A frase "Eu mereço uma vida que seja prazerosa de viver.", onde uma frase se desloca continuamente **da direita para a esquerda**, em loop infinito, sem pausas e sem saltos perceptíveis.

### Requisitos

- Utilizar apenas **CSS** para a animação (keyframes + transform).
- A animação deve ser contínua (`linear`) e infinita.
- Duplicar o conteúdo para criar um loop perfeito, evitando espaços em branco ao reiniciar.
- O texto nunca deve parar ou "piscar".
- O container deve possuir `overflow: hidden`.
- O texto deve permanecer sempre em uma única linha (`white-space: nowrap`).
- Utilizar `transform: translate3d(...)` para aproveitar aceleração por GPU.
- Aplicar `will-change: transform` para otimizar a renderização.

### Velocidade

A velocidade deve reproduzir aproximadamente a referência:

- Movimento constante.
- Sem aceleração ou desaceleração (`animation-timing-function: linear`).
- Aproximadamente **18 a 22 segundos** para percorrer toda a largura do texto, resultando em um deslocamento suave e elegante.

---

## 2. Efeito de sobreposição entre seções (Stacking Sections)

Implementar o mesmo comportamento visual da referência, onde, ao rolar a página, cada nova seção parece subir por cima da anterior, criando um efeito de "cartões empilhados".

### Comportamento esperado

À medida que o usuário faz scroll:

- Cada seção sobe naturalmente.
- A nova seção cobre parcialmente a anterior.
- A transição deve ser suave.
- Não utilizar animações JavaScript para esse efeito.
- O efeito deve ser obtido através da composição do layout com CSS.

### Implementação

Cada seção deve possuir:

- `position: relative`
- `z-index` crescente conforme a ordem das seções
- `margin-top` negativo para criar a sobreposição entre uma seção e outra
- `overflow: visible` quando necessário
- Grandes bordas arredondadas na parte superior
- Fundo próprio para cada seção

Exemplo da estrutura visual:

```
Seção 1
████████████████████

        ╭────────────╮
        │ Seção 2    │
        │            │
        ╰────────────╯

                ╭────────────╮
                │ Seção 3    │
                │            │
                ╰────────────╯
```

### Bordas

Cada nova seção deve possuir:

- Border Top Left Radius grande
- Border Top Right Radius grande

Mantendo um visual semelhante à referência.

### Espaçamento

A sobreposição deve ocorrer utilizando margem negativa entre as seções, preservando a leitura do conteúdo e evitando cortes visuais.

### Responsividade

O efeito deve funcionar tanto no desktop quanto no mobile.

No mobile, manter o mesmo comportamento da referência, com sobreposição suave entre as seções e cantos superiores arredondados.

### Objetivo visual

A sensação final deve ser de que as seções são grandes "cards" empilhados, onde cada nova seção sobe gradualmente e cobre a anterior durante o scroll, proporcionando uma experiência premium e fluida.