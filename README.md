# 🧠 NestJS CRUD - Users API

Este é um projeto de exemplo que implementa um CRUD completo do módulo `User` com:

- ✅ **NestJS**
- 🐘 **PostgreSQL**
- 🐳 **Docker**
- 🧼 **Clean Architecture (leve e modular)**
- 📦 **TypeORM**
- 🧪 **Validação com class-validator**

---

## 📁 Estrutura de Pastas

src/ ├── users/ │ ├── dto/ │ │ ├── create-user.dto.ts │ │ └── update-user.dto.ts │ ├── entities/ │ │ └── user.entity.ts │ ├── users.controller.ts │ ├── users.service.ts │ └── users.module.ts ├── app.module.ts

---

---

## 🚀 Como rodar o projeto

### Pré-requisitos

- [Docker e Docker Compose](https://www.docker.com/)
- [Node.js](https://nodejs.org) (caso queira rodar fora do Docker)

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nest-users-api.git
cd nest-users-api
```

2. Suba os containers com Docker Compose

```bash
docker-compose up --build
```

Isso irá subir o PostgreSQL com o banco crudo e o NestJS na porta 3000.

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
