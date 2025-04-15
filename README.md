# 🧠 NestJS CRUD - Users API

Este é um projeto de exemplo que implementa um CRUD completo do módulo `User` com:

- ✅ **NestJS**
- 🐘 **PostgreSQL**
- 🐳 **Docker**
- 🧼 **Clean Architecture (leve e modular)**
- 📦 **TypeORM**
- 🧪 **Validação com class-validator**
- **Swagger**

---

## 🚀 Tecnologias

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [Swagger](https://swagger.io/) (OpenAPI)
- [Class Validator](https://github.com/typestack/class-validator)

---

## 🚀 Como rodar o projeto

### Pré-requisitos

- [Docker e Docker Compose](https://www.docker.com/)
- [Node.js](https://nodejs.org) (caso queira rodar fora do Docker)

### 1. Clone o repositório

```bash
git clone https://github.com/torresgdev/API_Users
cd API_Users
```

2. Suba os containers com Docker Compose

```bash
docker-compose up --build
```

Isso irá subir o PostgreSQL com o banco crudo e o NestJS na porta 3000.

---

📄 Documentação com Swagger
Após iniciar o projeto, acesse a documentação interativa da API no navegador:

📚 Swagger UI:
http://localhost:3000/api

Você pode testar todos os endpoints diretamente pela interface Swagger.

🌐 Rotas da API
🔄 CRUD de usuários

```bash
Método	Rota	Descrição
POST	/users	Cria um novo usuário
GET	/users	Lista todos os usuários
GET	/users/:id	Busca um usuário por ID
PUT	/users/:id	Atualiza um usuário
DELETE	/users/:id	Remove um usuário por ID
```
