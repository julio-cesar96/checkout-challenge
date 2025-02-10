
# Checkout Challenge

Este projeto é uma aplicação de checkout, onde o objetivo é implementar funcionalidades para o processo de compra em um sistema de e-commerce. Ele foi desenvolvido com o intuito de desafiar desenvolvedores a colocarem em prática seus conhecimentos em tecnologias como React, TypeScript e Vite.

## Tecnologias Utilizadas

- **React**: Biblioteca para a construção da interface do usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Context API**: Para compartilhamento de dados de forma global.
- **React Testing Library + Jest**: Para criação de teste unitários.
- **Vite**: Ferramenta de build moderna que oferece uma experiência de desenvolvimento rápida.
- **JSON-Server**: Utilizado para simular uma API RESTful durante o desenvolvimento.
- **Ant Design**: Bibliteca de UI.

## Como Rodar o Projeto Localmente

### **Clone este repositório**:
   Abra seu terminal e digite:
   ```bash
   git clone https://github.com/julio-cesar96/checkout-challenge.git
   ```

### **Instale as dependências**:
   Navegue até o diretório do projeto e instale as dependências necessárias:
   ```bash
   cd checkout-challenge
   npm install
   ```

### **Rodando o servidor de desenvolvimento**:
   Para iniciar a aplicação, execute:
   ```bash
   npm run dev
   ```
   Isso irá iniciar o servidor e você poderá acessar a aplicação no seu navegador a partir do link que irá mostrar no terminal.

### **Simulando a API**:

  Para rodar o mock do servidor, execute:
  ```bash
   npm run mock-api
   ```
  O JSON Server rodando em http://localhost:5000

   Para simular as requisições de uma API local, execute:
   ```bash
   npx json-server --watch src/mocks/db.json --port 5000
   ```
   A API estará disponível em `http://localhost:5000`.

### Testes

Para rodar os testes, execute:
```bash
  npm run test
```
