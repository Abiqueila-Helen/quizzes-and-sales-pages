# ---- Build Stage ----
FROM node:20-alpine AS builder
WORKDIR /app

# Copia manifestos de dependência primeiro para melhor cache
COPY package*.json ./

# Instala dependências
RUN npm ci --legacy-peer-deps

# Copia o restante do projeto
COPY . .

# ===== Variáveis para o build do Vite =====
# Recebidas via --build-arg no momento do docker build
# ARG VITE_SUPABASE_URL
# ARG VITE_SUPABASE_PUBLISHABLE_KEY
# ARG VITE_APP_ENV=production
ARG VITE_APP_NAME="figtree-iavision"

# Exporta para o processo do build (usado apenas pelo Vite)
# ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL
# ENV VITE_SUPABASE_PUBLISHABLE_KEY=$VITE_SUPABASE_PUBLISHABLE_KEY
ENV VITE_APP_ENV=$VITE_APP_ENV
ENV VITE_APP_NAME=$VITE_APP_NAME

# Gera o build (Vite gera /dist)
RUN npm run build

# ---- Run Stage ----
FROM nginx:alpine

# Substitui a conf default do nginx pela nossa
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia apenas os artefatos do build do Vite (sem as credenciais)
COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe a porta padrão do Nginx
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
