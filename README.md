# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-expo-app -e with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)

## Video timecodes

> https://www.youtube.com/watch?v=iwgp777Mi54

1.  Initial commit - 07:00
2.  QuestionListItem - 11:30
3. Home page UI: FlatList of Questions - 45:00
4. Question Detailed Page - 52:00
5.  Answer FlatList - 1:16:00
6. Markdown parser - 1:29:00

`npm i html-entities`

`npm i react-native-markdown-display --legacy-peer-deps`

* VSCode setup - 1:37:30
* SO API - 1:44:00
* GraphQL benefits - 1:51:00
* Showcase StepZen - 1:54:00
* Install/Docs StepZen CLI - 1:56:00

```
npm install -g stepzen
stepzen login
What is your account name?: ___
What is your admin key?: ***
You have successfully logged in with the ___ account.
stepzen whoami
```
8. Init Stepzen - 1:59:30
-  Stepzen Rest to GQL - 2:01:00

```md
stepzen init
? What would you like your endpoint to be called? api/stackoverflow
```

```md
stepzen import curl https://introspection.apis.stepzen.com/customers --query-name "customers" --query-type "Customer" --name "customers"
? What would you like your endpoint to be called? api/stackoverflow
stepzen start
**dashboard site** graphql apis
```

9. StepZen GraphQL API - 2:06:00
- SO API with type Question - 2:07:00
- Combine types with materializer - 2:28:00

```js
type Question {
    ...
    answers: [Answer]
        @materializer(
        query: "answers { items }"
        arguments: [{ name: "questionId", field: "question_id" }]
    )
```

10. Install URQL - 2:40:00

`npm i urql graphql --legacy-peer-deps`

> Use Android Studio VD not web

- URQL with questionsQuery - 2:55:00

- ENV file

`npm install react-native-dotenv`

.env
```js
API_TOKEN=
```

babel.config.js
```js
...
    plugins: [
      ...
      "module:react-native-dotenv",
    ],
...
```

src/graphql/client.js
```js
...
import { API_TOKEN } from "@env";

const client = new Client({
    ...
      Authorization: `Apikey ${API_TOKEN}`,
    ...
```

11: Search - 3:10:00
https://reactnavigation.org/docs/native-stack-navigator/#headersearchbaroptions - 3:13:00
https://api.stackexchange.com/docs - 3:15:00
https://api.stackexchange.com/docs - 3:15:00
cd stepzen
stepzen start
Deploying api/stackoverflow to StepZen... done in 2.5s 🚀
cd ..
npm start

https://formidable.com/open-source/urql/docs/basics/react-preact/#pausing-usequery
https://reactnavigation.org/docs/native-stack-navigator/#headersearchbaroptions
Missing search on Android - 3:30:00









