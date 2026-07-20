# Aplicação para gerenciar clientes

> 📚 **Documentação oficial:** [`docs/PROJECT_KNOWLEDGE_BASE.md`](docs/PROJECT_KNOWLEDGE_BASE.md)
> Todo desenvolvedor (humano ou IA) deve ler este documento antes de iniciar qualquer tarefa.

## 📋 Visão Geral

### 1. Instale as Dependências
```bash
npm i
```
### 2. Executar o Projeto

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Acessar em http://localhost:8080
```

# 🚀 Deploy em Produção - Client-hub

Este guia explica como fazer o deploy da aplicação **Client-hub** em produção usando Docker Swarm e Portainer.

## 1. Apagar imagens antigas (opcional, só para limpar)

Faça manualmente ou No terminal (Ubuntu/WSL): 

```bash
docker rmi -f quizzes-and-sales-pages:v0.0.1 quizzes-and-sales-pages:v0.0.1 insightagency/quizzes-and-sales-pages:v0.0.1 insightagency/interface:latest
```
O -f (force) é necessário porque algumas dessas imagens podem estar em uso/compartilhando o mesmo ID.

# 2. Fazer login no Docker Hub
```bash
docker login
```
---

## 3. Build da nova imagem

Substitua a versão pelo número desejado (exemplo: v0.0.1):
```bash
docker build \
  -t insightagency/quizzes-and-sales-pages:v0.0.5 \
  .
```

# 4. Testar localmente (opcional)
Rode a imagem para conferir antes de enviar:

```bash
docker run --rm -p 8080:8080 --name quizzes-test insightagency/quizzes-and-sales-pages:v0.0.5
```

Acesse em: http://localhost:8080

Para parar o container:

```bash
docker rm -f quizzes-test
```


## 5. Push da nova imagem

Envie para o repositório remoto:

```bash
docker push insightagency/quizzes-and-sales-pages:v0.0.5
```
## 6. Atualizar a stack no Portainer

1. Acesse o Portainer no navegador.

2. Vá em Stacks → escolha a stack interface.

3. Clique em Editor.

4. Atualize a imagem para a nova versão:

```bash
yaml
image: insightagency/quizzes-and-sales-pages:v0.0.5
```
5. Clique em Update the stack.

6. O Portainer vai baixar a nova imagem e recriar o container automaticamente.

## 7. Validar em produção
- Acesse: https://scalix.com.br



🔄 Boas práticas
- Sempre incremente a versão: v0.0.5, v0.0.5, etc.
- Opcional: também atualizar a tag latest para sempre apontar para a versão mais recente:
```bash
docker tag insightagency/quizzes-and-sales-pages:v0.0.5 insightagency/uizzes-and-sales-pages:latest
docker push insightagency/uizzes-and-sales-pages:latest
```












### Atualização de versão
```bash
# Fazer pull da nova imagem
docker pull insightagency/uizzes-and-sales-pages:latest

# Atualizar serviço
docker service update --image insightagency/uizzes-and-sales-pages:latest insight-agency_app

# Verificar rollout
docker service ps insight-agency_app
```

## 6. Configuração no Portainer

1. Acesse o Portainer na URL do seu swarm
2. Vá em **Stacks** → **Add stack**
3. Nome: `insight-agency`
4. Copie o conteúdo do `docker-stack.yml`
5. Em **Environment variables**, adicione:
   - `VITE_SUPABASE_URL`: sua URL do Supabase
   - `VITE_SUPABASE_PUBLISHABLE_KEY`: sua chave anon
6. Clique em **Deploy the stack**

## 7. Monitoramento e Manutenção

### Verificar saúde dos serviços
```bash
# Status dos serviços
docker service ls

# Logs detalhados
docker service logs -f insight-agency_app

# Estatísticas
docker stats
```

### Escalar serviços
```bash
# Aumentar réplicas
docker service scale insight-agency_app=3

# Reduzir réplicas
docker service scale insight-agency_app=1
```

### Rollback em caso de problemas
```bash
# Ver histórico de versões
docker service history insight-agency_app

# Fazer rollback
docker service rollback insight-agency_app
```

## 8. Troubleshooting

### Problemas comuns:

1. **Certificado SSL expirado**
   ```bash
   # Renovar com Certbot
   sudo certbot renew
   
   # Reiniciar serviço
   docker service update --force insight-agency_app
   ```

2. **Variáveis de ambiente não carregando**
   ```bash
   # Verificar secrets
   docker secret ls
   
   # Recriar secrets se necessário
   docker secret rm supabase_url supabase_anon_key
   echo "nova-url" | docker secret create supabase_url -
   echo "nova-chave" | docker secret create supabase_anon_key -
   ```

3. **Container não iniciando**
   ```bash
   # Ver logs detalhados
   docker service ps --no-trunc insight-agency_app
   docker service logs insight-agency_app
   ```

## 9. Validação Final

Após o deploy, acesse:
- **Aplicação**: https://app.insightagency-ia.com.br
- **Health check**: https://app.insightagency-ia.com.br/health

Teste:
- [ ] Login e autenticação
- [ ] Registro de novos usuários
- [ ] Funcionalidades principais
- [ ] Conexão com Supabase
- [ ] Carregamento de assets estáticos

## 🔒 Segurança

- Sempre use HTTPS em produção
- Mantenha certificados SSL atualizados
- Use secrets do Docker para variáveis sensíveis
- Configure firewall apropriadamente
- Monitore logs regularmente

## 🔄 Boas Práticas

- Sempre teste em staging antes de produção
- Use tags de versão específicas (não latest) em produção
- Monitore métricas de performance
- Configure alertas para falhas
- Faça backups regulares
- Documente mudanças no changelog
