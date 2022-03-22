<p align = "center"> 
<img src="./readme/resturante.jpg" alt="Logo" width="150">
</p>

# Desenvolvimento de API

<p> Como parte do módulo 4, da formação de desenvolvimento Web full-stack da Resilia Educação, foi requerido a construção de uma API rest que deveria utilizar os padrões de MVC, os verbos HTTP e operações de CRUD. Para cada grupo foi designado um tema e cada integrante ficou responsável por uma entidade do respectivo tema. Logo, esse projeto trabalha com o tema restaurante mas a entidade encontrada nessa API é de Cardápio. </p>

## Ferramentas utilizadas:

Para o desenvolvimento foi utilizado JavaScript com NodeJS como linguagem da aplicação e o Express como framework, além do banco de dados relacional SQLite e o Insonia.

## Dependencias de desenvolvimento:

```js
"dependencies": {
    "express": "^4.17.3",
    "nodemon": "^2.0.15",
    "sqlite3": "^5.0.2",
    "sequelize": "^6.17.0",
    "dotenv-safe": "^8.2.0"
  }
```

## Inicialização da aplicação via terminal:

Para inicio da aplicação basta abrir o terminal na pasta do projeto ou executar o código abaixo.

```
npm start

```

## Rotas da aplicação:

[GET] /cardapio - A rota vai exibir todos os cardápios previamente cadastrados.

[GET] /cardapio/:id - A rota lista o cardápio baseado no ID.

[POST] /cardapio/criar - A rota cria um novo cardápio com as informações passadas no body da requisição.

Exemplo de criação:

```
{

	"entrada":"Pão Australiano",
	"pratoPrincipal":"Lasanha",
	"sobremesa":"Pudim",
	"bebida":"Suco de laranja"

}

```

[PUT] /cardapio/:id - A rota deve atualizar as informações do cardápio já cadastrados previamente.

[DELETE] /cardapio/:id - A rota deve deletar um prato baseado no ID do mesmo.

## Rodando o projeto:

Pré-requisitos:
Antes de começar, você precisará instalar em sua máquina as seguintes ferramentas: Git, Node.js e Insomnia.

Além disso, é aconselhável ter um editor como o VSCode ou Sublime para trabalhar com o código!

```
# Clone este repositório
$ git clone https://github.com/fernandasoaress/restaurante-API.git

# Acesse a pasta do projeto no terminal
$ cd restaurante-API



```
