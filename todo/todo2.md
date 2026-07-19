# Tarefa: Análise completa da arquitetura do projeto e correção do processo de build Docker

## Objetivo

Preciso que você faça uma análise completa deste projeto para identificar a arquitetura utilizada e criar a forma correta de empacotá-lo em Docker para produção.

**Não quero apenas corrigir o erro atual.**

Quero entender exatamente como este projeto foi construído e qual é a forma correta de executá-lo em produção.

---

# Contexto

Este projeto:

- NÃO utiliza Supabase.
- NÃO possui arquivo `.env`.
- Será publicado em um servidor Hetzner utilizando Docker Swarm + Traefik.
- Atualmente estou utilizando um Dockerfile baseado em um projeto React + Vite SPA hospedado no Nginx.

Durante o build ocorre o erro:

```text
COPY --from=builder /app/dist /usr/share/nginx/html

failed to calculate checksum...

"/app/dist": not found
```

Além disso aparecem avisos semelhantes a:

```text
Unsupported engine

required: node >=22.12

current: node 20
```

Portanto preciso descobrir se o problema é apenas a versão do Node ou se todo o Dockerfile está incorreto para este tipo de projeto.

---

# O que preciso que você analise

## 1. Identifique exatamente qual é a arquitetura deste projeto

Analise todos os arquivos relevantes e responda:

- É um projeto React comum?
- É um projeto Vite SPA?
- É um projeto TanStack Start?
- Utiliza SSR?
- Utiliza SSG?
- Utiliza Nitro?
- Utiliza Vinxi?
- Existe algum outro runtime envolvido?

Explique cada conclusão mostrando quais arquivos comprovam isso.

---

## 2. Analise todo o processo de build

Verifique arquivos como:

- package.json
- vite.config.*
- app.config.*
- nitro.config.*
- tsconfig.*
- qualquer configuração relacionada ao build

Descubra:

- qual comando realmente gera o build
- quais diretórios são produzidos
- se o projeto gera:

```
dist/
.output/
.vinxi/
build/
server/
```

ou qualquer outro diretório.

Informe exatamente qual é o artefato final produzido pelo build.

---

## 3. Descubra como a aplicação deve ser executada em produção

Depois do build, descubra qual é o processo correto para iniciar a aplicação.

Responda se ela deve ser executada através de:

- Node
- Nginx
- Nitro
- Vinxi
- outro runtime

Informe também qual comando realmente inicia a aplicação.

Exemplos:

```
npm run start
```

ou

```
node .output/server/index.mjs
```

ou qualquer outro comando encontrado.

Não faça suposições.

---

## 4. Analise o Dockerfile atual

Leia completamente o Dockerfile existente.

Explique:

- quais partes estão corretas
- quais partes estão incorretas
- por que ele tenta copiar `/app/dist`
- por que essa pasta não existe
- se este Dockerfile pertence originalmente a outro tipo de projeto

Explique tecnicamente o motivo.

---

## 5. Gere um Dockerfile correto

Depois da análise, gere um Dockerfile completo para este projeto.

Esse Dockerfile deve:

- utilizar a versão correta do Node
- utilizar multi-stage build
- seguir boas práticas
- produzir uma imagem pequena
- conter apenas os arquivos necessários para produção

Não reutilize o Dockerfile atual sem antes validar que ele é compatível com este framework.

---

## 6. Analise todas as variáveis de ambiente

Procure em todo o projeto:

- process.env
- import.meta.env
- variáveis VITE_*

Liste todas.

Informe:

- quais são obrigatórias
- quais são opcionais
- quais possuem valores padrão

Caso nenhuma variável seja obrigatória, informe isso.

---

## 7. Analise a compatibilidade do Node

Descubra exatamente:

- versão mínima suportada
- versão recomendada
- versão LTS recomendada

Explique por que o Dockerfile utilizando Node 20 gera warnings.

Informe qual imagem Docker deve ser utilizada.

Exemplo:

```
node:22-alpine
```

ou

```
node:24-alpine
```

---

## 8. Procure erros ocultos

Depois de entender a arquitetura do projeto, analise todo o fluxo de build.

Descubra se existem outros problemas que ainda não apareceram porque o build interrompe antes.

Liste todos eles.

---

## 9. Entregáveis

Ao final da análise entregue:

### Diagnóstico completo

Explicação detalhada da arquitetura do projeto.

---

### Estrutura do build

Explique todo o fluxo:

- instalação
- build
- artefatos gerados
- execução

---

### Dockerfile definitivo

Forneça um Dockerfile completo pronto para produção.

---

### Comando correto para gerar a imagem

Exemplo:

```bash
docker build -t insightagency/quizzes-and-sales-pages:v0.0.1 .
```

ou qualquer outro que seja realmente necessário.

---

### Comando correto para executar localmente

Incluindo portas, variáveis e parâmetros necessários.

---

### Stack para Docker Swarm

Caso seja diferente de um container convencional, explique como deve ser implantado utilizando Traefik.

---

### Explicação técnica

Explique por que esta solução é a correta para este projeto e por que o Dockerfile anterior não funcionava.

---

## Importante

Não faça suposições.

Todas as conclusões devem ser baseadas exclusivamente na análise dos arquivos reais do projeto.

Se encontrar inconsistências entre a documentação e o código, priorize sempre o comportamento observado no código-fonte.