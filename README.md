Todo List App

## English EN
### Description
This is a simple **Todo List** web application that allows users to register, log in, and manage tasks. The frontend is built with React, and the backend is developed using PHP with a MySQL database.

### Features
- User registration and authentication (JWT-based login system)
- Add, edit, and delete tasks
- Secure API with token-based authentication

### Installation
#### 1. Clone the Repository
```sh
git clone https://github.com/your-repo/todo-app.git
cd todo-app
```

#### 2. Backend Setup
- Navigate to the `backend` folder
- Configure the database in `config/db.php`
- Import the `todo_list.sql` file into your MySQL database
- Start a local PHP server:
```sh
php -S localhost:8000 -t backend
```

#### 3. Frontend Setup
- Navigate to the `frontend` folder
- Install dependencies:
```sh
npm install
```
- Start the frontend server:
```sh
npm run dev
```

### Usage
1. Open the application in your browser (`http://localhost:5173`)
2. Register a new user
3. Log in and manage your tasks

### API Routes
- `POST /api.php` - Handles user authentication and task management
- `GET /api.php?email=user@example.com` - Fetches user tasks
- `DELETE /api.php` - Deletes a task

---

## Português 🇵🇹
### Descrição
Esta é uma aplicação web **Lista de Tarefas** que permite aos utilizadores registarem-se, fazer login e gerir tarefas. O frontend foi desenvolvido com React e o backend usa PHP com uma base de dados MySQL.

### Funcionalidades
- Registo e autenticação de utilizadores (sistema de login com JWT)
- Adicionar, editar e eliminar tarefas
- API segura com autenticação baseada em tokens

### Instalação
#### 1. Clonar o Repositório
```sh
git clone https://github.com/seu-repositorio/todo-app.git
cd todo-app
```

#### 2. Configuração do Backend
- Acesse a pasta `backend`
- Configure a base de dados no ficheiro `config/db.php`
- Importe o ficheiro `todo_list.sql` para a sua base de dados MySQL
- Inicie o servidor local PHP:
```sh
php -S localhost:8000 -t backend
```

#### 3. Configuração do Frontend
- Acesse a pasta `frontend`
- Instale as dependências:
```sh
npm install
```
- Inicie o servidor do frontend:
```sh
npm run dev
```

### Como Usar
1. Abra a aplicação no navegador (`http://localhost:5173`)
2. Registe um novo utilizador
3. Faça login e gerencie as suas tarefas

### Rotas da API
- `POST /api.php` - Lida com autenticação e gestão de tarefas
- `GET /api.php?email=usuario@example.com` - Obtém tarefas do utilizador
- `DELETE /api.php` - Exclui uma tarefa


