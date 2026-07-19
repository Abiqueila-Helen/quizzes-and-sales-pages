# Deploy da aplicação

## Visão geral

Este projeto não é um frontend estático simples. O build gera um artefato de execução do TanStack Start/Nitro em .output, e o container precisa iniciar o servidor com Node na porta 3000.

## 1. Pré-requisitos

- Docker instalado
- Docker Hub acessível
- acesso ao ambiente do Swarm/Portainer
- uma versão nova para a imagem, por exemplo: v0.0.2

## 2. Build da imagem

No diretório da aplicação, execute:

```bash
VERSION=v0.0.2

docker build \
  -t insightagency/quizzes-and-sales-pages:v0.0.1 \
  .
```

Se quiser, também pode marcar como latest:

```bash
docker tag insightagency/quizzes-and-sales-pages:v0.0.1 insightagency/quizzes-and-sales-pages:latest
```

## 3. Testar a imagem localmente

```bash
docker run --rm -p 3000:3000 --name quizzes-test insightagency/quizzes-and-sales-pages:v0.0.1
```

Depois, acesse:

```text
http://localhost:3000
```

Para parar o container:

```bash
docker rm -f quizzes-test
```

## 4. Login no Docker Hub

```bash
docker login
```

## 5. Publicar a nova imagem

```bash
VERSION=v0.0.2

docker push insightagency/quizzes-and-sales-pages:v0.0.1
docker push insightagency/quizzes-and-sales-pages:latest
```

## 6. Atualizar o Swarm/Portainer

1. Atualize a tag da imagem no arquivo docker-stack.yml:

```yaml
image: insightagency/quizzes-and-sales-pages:v0.0.2
```

2. Faça o deploy da stack novamente no Portainer ou no Swarm.

3. O Traefik deve apontar para a porta 3000 do container, conforme já configurado no stack.

## 7. Comandos úteis para manutenção

```bash
# Ver serviços
docker service ls

# Ver logs
docker service logs -f quizzes-and-sales-pages

# Atualizar um serviço manualmente
# Exemplo:
docker service update --image insightagency/quizzes-and-sales-pages:v0.0.2 <service-name>
```

## 8. Observações importantes

- Não use um Dockerfile baseado em Nginx estático para esta aplicação.
- O container precisa rodar o comando:

```bash
node /app/.output/server/index.mjs
```

- A aplicação expõe a porta 3000.
- Não há necessidade de passar build args de Supabase para este projeto neste fluxo atual.
- Se for necessário adicionar variáveis de ambiente no futuro, elas devem ser colocadas no bloco environment do docker-stack.yml.
