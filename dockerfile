# Usa a imagem oficial do Node como base
FROM node:18

# Cria o diretório da aplicação
WORKDIR /app

# Copia os arquivos do projeto
COPY package*.json ./
RUN npm install

# Copia o restante da aplicação
COPY . .

# Compila o projeto
RUN npm run build

# Expondo a porta padrão do Nest
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:prod"]
