# Raizes Virtuais

O projeto "Raizes Virtuais" é uma aplicação que permite o gerenciamento de informações relacionadas a produtores rurais, suas fazendas e cultivos agrícolas. Além disso, oferece um painel de controle (dashboard) que permite a visualização rápida e eficiente de dados relevantes sobre a produção agrícola.

Principais funcionalidades do projeto:

- Cadastro e edição de produtores rurais, incluindo informações como nome, documento (CPF/CNPJ), nome da fazenda, área total da fazenda, área agricultável, área de vegetação e cultivos agrícolas realizados.
- Visualização de informações detalhadas sobre cada produtor rural, incluindo seus cultivos agrícolas e dados da fazenda.
- Possibilidade de adicionar, editar e remover um produtor.
- Geração de um painel de controle (dashboard) com gráficos e dados sobre a produção agrícola, como quantidade de produtores por estado, quantidade de cultivos por tipo de cultura, área total agricultável, área de vegetação, entre outros dados relevantes.
- Recursos de validação e tratamento de erros para garantir a consistência e integridade dos dados inseridos na aplicação.

O projeto utiliza tecnologias como Angular para o desenvolvimento da interface do usuário, serviços HTTP para comunicação com o servidor back-end, que é em node (Express) e Prisma para a interação com o banco de dados. Com essas tecnologias, busca-se construir uma aplicação robusta, de fácil manutenção e com boa experiência do usuário.

Por fim, o projeto "Raizes Virtuais" tem como objetivo auxiliar no gerenciamento eficiente da produção agrícola, proporcionando aos usuários uma plataforma moderna e intuitiva para consultas e análises de dados agrícolas.

## Requisitos do Sistema
Certifique-se de que você tenha as seguintes ferramentas instaladas em seu sistema:

Node.js (https://nodejs.org)

Angular CLI (https://angular.io/cli)

Prisma (https://www.prisma.io)

## Instalação

Clone o repositório do projeto:

```bash
 git clone https://github.com/annajuliafc/raizes-virtuais.git
```

### Instalação e Execução - Back-end

Navegue até a pasta back-end no terminal.

```bash
  cd ./back-end
```

Execute o seguinte comando para instalar as dependências necessárias.

```bash
  npm install
```

Execute o seguinte comando para inicializar o banco de dados Prisma.

```bash
  npx prisma generate
```

Execute o seguinte comando para iniciar o servidor do back-end.

```bash
  npm run dev
```

### Instalação e Execução - Front-end

Navegue até a pasta front-end no terminal.

```bash
  cd ./front-end
```

Execute o seguinte comando para instalar as dependências necessárias.

```bash
  npm install
```

Execute o seguinte comando para iniciar o servidor do front-end.

```bash
  ng serve
```

## Acesso à Aplicação

Após seguir os passos acima, acesse a aplicação em seu navegador através da seguinte URL:

Front-end: http://localhost:4200

## Considerações Finais

Este projeto é uma aplicação em desenvolvimento e está sujeito a melhorias e modificações. Caso encontre algum problema ou queira contribuir com o projeto, sinta-se à vontade para abrir um issue ou pull request no repositório do projeto (link do repositório).

Agradecemos por utilizar o Gerenciador de Produtores Rurais e Dashboard!
