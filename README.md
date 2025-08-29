# Welcome to your Expo app 👋

Este é um projeto [Expo](https://expo.dev) criado com [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Começar

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o aplicativo:

   ```bash
   npx expo start
   ```

No output, você encontrará opções para abrir o aplicativo em:

- um build de desenvolvimento  
- um emulador Android  
- um simulador iOS  
- Expo Go, um sandbox limitado para testar o desenvolvimento de aplicativos com Expo

Você pode começar a desenvolver editando os arquivos dentro do diretório `app`. Este projeto usa roteamento baseado em arquivos.

## Scripts disponíveis

Os seguintes scripts estão disponíveis:

- `npm start`: Inicia o servidor de desenvolvimento Expo.  
- `npm run android`: Inicia o aplicativo em um dispositivo Android.  
- `npm run ios`: Inicia o aplicativo em um simulador iOS.  
- `npm run web`: Inicia o aplicativo na web.  
- `npm run lint`: Executa a verificação de linting com ESLint.  
- `npm run reset-project`: Move o código inicial para o diretório `app-example` e cria um novo diretório `app` em branco.

## Estrutura do projeto

- O aplicativo utiliza `expo-router` para roteamento.  
- Os dados do aplicativo são carregados de um arquivo `JSON` (`temas.json`).  
- A interface do usuário é construída com um componente `Card.tsx` para exibir os temas.  
- O aplicativo usa a fonte `Knewave-Regular.ttf`, que é carregada no `app/index.tsx`.

Junte-se à nossa comunidade de desenvolvedores criando aplicativos universais:

- [Expo no GitHub](https://github.com/expo/expo): Veja nossa plataforma de código aberto e contribua.  
- [Comunidade no Discord](https://discord.com/invite/expo): Converse com usuários do Expo e faça perguntas.

