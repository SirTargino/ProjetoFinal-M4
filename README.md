# ProjetoFinal-M4 - EcoFind ♻️


# Visão Geral


Este projeto full-stack desenvolvido em node.js é voltado para empresas que desejam se comprometer com a sustentabilidade. Com ele, é possível cadastrar, editar, excluir e procurar locais de reciclagem, bem como cadastrar sua empresa e expor o nome dela no website, que comprovará o compromisso com a sustentabilidade.




## Tecnologias

**Front-end:**Bootstrap, JavaScript

**Back-end:** node.js, Express, Sequelize

**Banco de Dados**: MySQL


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/SirTargino/ProjetoFinal-M4
```

Entre no diretório do projeto

```bash
  cd ProjetoFinal-M4
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```

Acesse o projeto:
```bash
  http://localhost:4000
```

Atenção: Certifique-se de que a conexão com o banco de dados foi estabelecida. Em caso de erro, verifique o arquivo **database.js** e faça as alterações necessárias! 
## Documentação da API
#### Criando um Local de Reciclagem

```http
  POST/registrar-local
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `ecoponto-name` | `string` | **Obrigatório**. O nome do ponto de reciclagem |
| `adress_ecoponto` |  `string` |  **Obrigatório**. Endereço do EcoPonto |
| `city_ecoponto` | `string` | **Obrigatório**. Cidade do Ecoponto |
| `description_ecoponto` | `text` | Descrição |

#### Obtendo todos os locais

```http
  GET/obter-locais
```


#### Editando locais de reciclagem

```http
  PUT/editar-local/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `UUID` | **Obrigatório**. ID do local a ser editado  |
| `newecoponto-name` | `string` | **Obrigatório**. O nome do ponto de reciclagem |
| `newadress_ecoponto` | `string` |  **Obrigatório**. Endereço do EcoPonto |
| `newcity_ecoponto` | `string` | **Obrigatório**. Cidade do Ecoponto |
| `newdescription_ecoponto` | `text` | Descrição |

#### Excluindo locais de reciclagem

```http
  PUT/deletar-local/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `UUID` | **Obrigatório**. ID do local a ser excluído  |

#### Cadastrando um usuário

```http
  POST/registrar-user
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `user_name` | `string` | **Obrigatório**. O nome do usuário |
| `email` | `string` |  **Obrigatório**. Email do usuário |
| `password` | `string` | **Obrigatório**. Senha do usuário |

#### Obtendo todos os usuários

```http
  GET/obter-users
```


#### Editando Usuários

```http
  PUT/editar-user/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `UUID` | **Obrigatório**. ID do usuário a ser editado |
| `newuser-name` | `string` | **Obrigatório**. O nome do usuário |
| `newemail` | `string` |  **Obrigatório**. Email do Usuário |
| `newpassword` | `string` | **Obrigatório**. Senha do usuário |

#### Excluindo Usuários

```http
  PUT/deletar-user/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `UUID` | **Obrigatório**. ID do usuário a ser excluído  |

#### Cadastrando uma empresa

```http
  POST/registrar-empresa
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `company-name` | `string` | **Obrigatório**. O nome do ponto da empresa |
| `adress` |  `string` |  **Obrigatório**. Endereço da Empresa |
| `city` | `string` | **Obrigatório**. Cidade da Empresa |
| `CNPJ` | `string` | **Obrigatório**. CNPJ da empresa |

#### Obtendo todos as Empresas

```http
  GET/obter-empresas
```


#### Editando Empresas

```http
  PUT/editar-empresa/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `newcnpj` | `string` | **Obrigatório**. CNPJ da empresa a ser editada |
| `newcompany-name` | `string` | **Obrigatório**. O nome do ponto da empresa |
| `newadress` |  `string` |  **Obrigatório**. Endereço do empresa |
| `newcity` | `string` | **Obrigatório**. Cidade do empresa |

#### Excluindo Empresas

```http
  PUT/deletar-empresa/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `UUID` | **Obrigatório**. ID da empresa a ser excluída  |

