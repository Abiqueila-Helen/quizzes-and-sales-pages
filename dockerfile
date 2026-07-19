# syntax=docker/dockerfile:1

FROM node:22-alpine

WORKDIR /app

# Instala as dependências
COPY package*.json ./
RUN npm ci --legacy-peer-deps

# Copia o restante do projeto
COPY . .

# Gera o build de produção
RUN npm run build

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8080

EXPOSE 8080

# Inicia o servidor de produção do TanStack Start / Nitro
CMD ["node", ".output/server/index.mjs"]