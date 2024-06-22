## Projeto Blog com API de Noticias IBGE

## Desafio Layout de Blog da comunidade CodeLab
Este projeto é uma aplicação web que utiliza a API de notícias do IBGE para exibir postagens em um layout de blog. O desafio original da comunidade CodeLab era criar o layout básico de um blog com postagens e um campo de busca, porém, decidi estender o projeto para incluir a integração com a API para praticar minhas habilidades.

## Link figma dos desafios 
[CodeLab](https://www.figma.com/design/Yb9IBH56g7T1hdIyZ3BMNO/Desafios---CodeLab?node-id=257087-8&t=zEiZdP6EcTY90fsB-0)

## Link para preview
[Ver projeto](https://gilecampos.github.io/codelab-blog01/)

### Funcionalidades

- **Listagem de Notícias**: Exibe uma lista de notícias relacionadas à tecnologia obtidas da API do IBGE.
- **Busca de Notícias**: Permite ao usuário buscar por notícias através de um campo de busca, utilizando debounce para otimizar as requisições.
- **Interação com Likes**: Permite ao usuário adicionar e remover "likes" nas notícias exibidas.

### Funcionalidades a desenvolver.
- **Salvar posts com like**: Salvar posts que receberam like no localstorage, para exibir posteriormente se o usuário retornar a página.

### Tecnologias Utilizadas

- **HTML**: Estrutura básica da aplicação.
- **CSS**: Estilização da aplicação.
- **JavaScript**: Lógica da aplicação, manipulação do DOM, e integração com a API do IBGE.

### Estrutura do Projeto

- **index.html**: Contém a estrutura HTML da aplicação.
- **src/**: Pasta contendo os arquivos JavaScript utilizados na aplicação.
  - **date.js**: Módulo responsável por manipular e formatar datas.
  - **element.js**: Módulo responsável por criar e manipular elementos do DOM.
  - **like.js**: Módulo responsável por gerenciar a lógica de "likes".
  - **sanitize.js**: Módulo responsável por sanitizar entradas e prevenir vulnerabilidades.
  - **service/notice.js**: Módulo responsável por buscar as notícias da API do IBGE.

### Como Utilizar

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/seu-usuario/codelab-blog01.git

2. **Abra o arquivo `index.html` em um navegador:**
  - Não é necessário configurar um servidor, basta abrir o arquivo diretamente em um navegador.

## Aprendizados
### Neste projeto, aprendi a:

  - Consumir APIs RESTful e manipular os dados retornados.
  - Manipular o DOM de forma eficiente utilizando JavaScript.
  - Aplicar a técnica de debounce para otimizar buscas e melhorar a performance da aplicação.
  - Modularizar o código JavaScript para melhorar a organização e manutenção do projeto.
  - Implementar práticas de segurança como sanitização de entradas para prevenir vulnerabilidades.
