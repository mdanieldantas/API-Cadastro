# Projeto API Cadastro

![Status do Projeto](https://img.shields.io/badge/status-em%20desenvolvimento-brightgreen)
![Licença](https://img.shields.io/badge/licença-MIT-blue)

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## Sobre o Projeto

Este projeto foca no uso do Prisma ORM para interação com bancos de dados em aplicações Node.js.
O objetivo é demonstrar como configurar e utilizar o Prisma em um ambiente de desenvolvimento moderno.

## Tecnologias Utilizadas

- Node.js
- Prisma ORM
- Docker
- Yarn
- Express
- Bcrypt
- Cors
- Dotenv
- Sucrase (para desenvolvimento)
- Nodemon (para desenvolvimento)

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js (versão 12 ou superior)
- Yarn
- Docker Desktop
- Git

## Instalação

1. Clone o repositório:

   ```
   git clone https://github.com/mdanieldantas/API-Cadastro.git
   ```

2. Navegue até o diretório do projeto:

   ```
   cd API-Cadastro
   ```

3. Instale as dependências:

   ```
   yarn install
   ```

4. Inicie o ambiente Docker:

   ```
   docker-compose up -d
   ```

5. Configure o Prisma:
   ```
   npx prisma init
   npx prisma migrate dev --name init
   ```

## Uso

1. Para iniciar o servidor de desenvolvimento:

   ```
   yarn start
   ```

2. Se encontrar problemas de acesso ao banco de dados, certifique-se de que o Docker está em execução:
   ```
   docker-compose up -d
   ```

## Contribuição

Contribuições são sempre bem-vindas! Por favor, siga estes passos:

1. Faça um fork do projeto
2. Crie sua feature branch: `git checkout -b minha-nova-feature`
3. Commit suas mudanças: `git commit -m 'Adiciona alguma feature'`
4. Push para a branch: `git push origin minha-nova-feature`
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

**M. Daniel Dantas** - [Entre em contato comigo no LinkedIn](https://www.linkedin.com/in/mdanieldantas)

**Email:** contatomarcosdgomes@gmail.com

**Link do Projeto:** [https://github.com/mdanieldantas/API-Cadastro.git](https://github.com/mdanieldantas/API-Cadastro.git)s://github.com/mdanieldantas/API-Cadastro.git](https://github.com/mdanieldantas/API-Cadastro.git)
