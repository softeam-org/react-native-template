# Template React Native CLI

Este é o template da SofTeam para aplicações React Native CLI, servindo como diretriz para os projetos da empresa. Para ver o template com expo, clique [aqui](https://github.com/softeam-org/expo-template).

1. [Pré-Requisitos](#pré-requisitos)
2. [Configuração](#configuração)
3. [Scripts](#scripts)
4. [Estrutura](#estrutura)
5. [Criando novos componentes/páginas](#criando-novos-componentes/páginas)
6. [Dependências](#dependências)

## Pré-requisitos

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [React Native](https://reactnative.dev/docs/0.9/getting-started)

## Configuração

1. Crie um projeto com o react-native-cli.

```sh
# Iniciando projeto
react-native init NomeDoProjeto

# Navegando para a pasta raiz
cd NomeDoProjeto

```

2. Clone o repositório e mova os arquivos para a pasta do projeto.

```sh
# Clonando o repositório
git clone https://github.com/SofTeamEJC/react-native-template.git

# Movendo o conteúdo do repositório para a raíz do projeto
mv .\react-native-template\* .\

# Apagando a pasta clonada
rm react-native-template

# Instalando as dependências do projeto
npm i
```

## Scripts

Para executar um script, rode `npm run <nome_do_script>` na pasta raiz do projeto.

- **android:** Faz a compilação para o android.
- **ios:** Faz a compilação para o ios.
- **start:** Inicial o Bandle do javascript.
- **test:** Executa os testes.
- **lint:** Busca erros de lint e formata todos os arquivos.
- **generate:** Gera componentes ou páginas.

## Estrutura

### Pastas

- Em `assets/`, ficam os recursos do aplicativo como animações, imagens, ícones, fontes.
- Em `components/`, ficam os componentes do aplicativo como Botão, Input, etc.
- Em `configs/`, ficam as configurações do aplicativo.
- Em `contexts/`, ficam os contextos criados para a ContextApi.
- Em `hooks/`, ficam os seus hooks.
- Em `pages/`, ficam as telas do aplicativo.
- Em `routes/`, ficam as rotas do aplicativo.
- Em `sagas/`, ficam os arquivos relacionado ao redux-saga.
- Em `services/`, ficam os arquivos de serviços como api, socket, etc.
- Em `stores/`, ficam todos os stories e os reducers do redux .
- Em `themes/`, ficam os arquivos relacionado ao tema, como cores, métricas, etcs.
- Em `utils/`, ficam funções utilitárias, que fogem ao escopo dos demais diretórios. Esses métodos costumam ser acessados por diferentes arquivos.

### Arquivos de inicialização

- `src/index.js` Inicia toda a aplicação, cria o store do redux e configura a StatusBar.
- `src/routes/index.js` Inicia o NavigationContainer
- `src/routes/StackRouter.js` Configura a navegação stack
- `src/stores/index.js` Inicia o store do redux
- `src/stores/reducers/reducer.js` Configura um reducer do redux
- `src/store/reducers/index.js` Combina todos os reducers do redux

## Criando novos componentes/páginas

Suponha que seu gerente acabou de lhe alocar em um novo projeto, e para sua primeira sprint lhe foi assinalada a tarefa de adicionar um novo Botão(componente) e uma nova tela de produtos(página) à aplicação.

O primeiro passo é executar esse comando no terminal:

```sh
yarn generate
```

Depois vai aparece um questionário de acordo com os seus interesses

Exemplo do Botão

```sh
? O que você quer gerar? components
? Do que devemos chamá-lo? Botao
? Você quer criar um teste? No
```

Iremos obter dois arquivos na pasta `components/Botao`:

index.js

```js
import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const Botao = () => {
	return <View style={styles.container} />;
};

export default Botao;
```

styles.js

```js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default styles;
```

Agora para criar a página, vamos repetir o comando:

```sh
yarn generate
```

Aí no questionário nos vamos marcar:

```sh
? O que você quer gerar? pages
? Do que devemos chamá-lo? Produto
? Você quer criar um teste? No
```

E também obter dois arquivos, porém dessa vez é na pasta `pages/Produto`:

index.js

```js
import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const Produto = () => {
	return <View style={styles.container} />;
};

export default Produto;
```

styles.js

```js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default styles;
```

## Dependências

### Produção

- [@react-native-community/masked-view](https://www.npmjs.com/package/@react-native-community/masked-view)
- [@react-navigation/native](https://www.npmjs.com/package/@react-navigation/native)
- [@react-navigation/stack](https://www.npmjs.com/package/@react-navigation/stack)
- [react](https://www.npmjs.com/package/react)
- [react-native](https://www.npmjs.com/package/react-native)
- [react-native-gesture-handler](https://www.npmjs.com/package/react-native-gesture-handler)
- [react-native-reanimated](https://www.npmjs.com/package/react-native-reanimated)
- [react-native-safe-area-context](https://www.npmjs.com/package/react-native-safe-area-context)
- [react-native-screens](https://www.npmjs.com/package/react-native-screens)
- [react-redux](https://www.npmjs.com/package/react-redux)
- [redux](https://www.npmjs.com/package/redux)
- [redux-thunk](https://www.npmjs.com/package/redux-thunk)

### Desenvolvimento

- [@babel/core](https://www.npmjs.com/package/@babel/core)
- [@babel/runtime](https://www.npmjs.com/package/@babel/runtime)
- [@react-native-community/eslint-config](https://www.npmjs.com/package/@react-native-community/eslint-config)
- [babel-jest](https://www.npmjs.com/package/babel-jest)
- [eslint](https://www.npmjs.com/package/eslint)
- [jest](https://www.npmjs.com/package/jest)
- [metro-react-native-babel-preset](https://www.npmjs.com/package/metro-react-native-babel-preset)
- [plop](https://www.npmjs.com/package/plop)
- [react-test-renderer](https://www.npmjs.com/package/react-test-renderer)
