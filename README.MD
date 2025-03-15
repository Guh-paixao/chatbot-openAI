# 🚀 Monólito com ChatGPT 3.5

## 📌 Sobre o Projeto

Este projeto consiste em uma aplicação web monolítica que utiliza a API do ChatGPT 3.5 para interações dinâmicas com o modelo de linguagem da OpenAI. A aplicação é composta por um frontend e um backend, permitindo que os usuários enviem mensagens e recebam respostas diretamente do chatbot.

A arquitetura utilizada é simples e eficaz, combinando tecnologias modernas para proporcionar uma interface intuitiva e uma comunicação eficiente com a API.

## 🛠️ Tecnologias Utilizadas

O desenvolvimento foi realizado utilizando as seguintes tecnologias:

- **Vite** - Ferramenta para criação e build rápida de aplicações frontend.
- **React** - Biblioteca para construção de interfaces de usuário dinâmicas e reutilizáveis.
- **Node.js** - Ambiente de execução para o backend, permitindo a comunicação com a API da OpenAI.
- **Express** - Framework para Node.js utilizado na criação de um servidor backend simples e eficiente.
- **Tailwind CSS** - Framework CSS utilitário para estilização responsiva e moderna.
- **Shadcn** - Biblioteca de componentes UI para otimizar o design da interface.
- **Git** - Sistema de controle de versão para gerenciar o histórico do projeto.
- **pnpm** - Gerenciador de pacotes eficiente para instalação e execução do projeto.
- **API OpenAI (ChatGPT 3.5)** - Plataforma de IA utilizada para responder às interações dos usuários.

> **Nota:** O projeto foi desenvolvido utilizando a API do ChatGPT 3.5, mas também pode ser adaptado para versões mais recentes, como o ChatGPT 4.

## 🏗️ Estrutura do Projeto

A aplicação é dividida em duas partes principais:

### **Frontend**
- Implementado com **React** e **Vite** para garantir uma interface leve e responsiva.
- Utiliza **Tailwind CSS** e **Shadcn** para estilização moderna.
- Gerencia estados e interações com o backend de forma eficiente.

### **Backend**
- Construído com **Node.js** e **Express** para manipulação das requisições HTTP.
- Faz a comunicação direta com a API do ChatGPT 3.5 para processar as mensagens enviadas pelo usuário.
- Gerencia erros e respostas da API antes de repassá-las ao frontend.

## ⚙️ Como Rodar o Projeto

### **Pré-requisitos**
Antes de iniciar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [pnpm](https://pnpm.io/)

### **Passos para Executar**

1. Clone o repositório:
   ```sh
   git clone https://github.com/Guh-paixao/chatbot-openAI.git
   ```
2. Acesse o diretório do servidor e inicie o backend:
   ```sh
   cd server
   pnpm i
   pnpm dev
   ```
3. Em um novo terminal, acesse o diretório do cliente e inicie o frontend:
   ```sh
   cd client
   pnpm i
   pnpm run dev
   ```
4. Acesse a aplicação em seu navegador:
   ```
   http://localhost:3000
   ```

## 📌 Melhorias Futuras

- Implementar comunicação em tempo real com **WebSockets**.
- Melhorar a experiência do usuário com mais interações visuais.
- Expandir funcionalidades com suporte a diferentes modelos de IA.
- Modularização do backend para maior escalabilidade.

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

Feito com 💙 por [Gustavo Paixão](https://github.com/Guh-paixao).

