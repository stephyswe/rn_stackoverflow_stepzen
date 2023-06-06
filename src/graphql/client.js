import { Client, cacheExchange, fetchExchange } from "urql";
import { API_TOKEN } from "@env";

const client = new Client({
  url: "https://prien.stepzen.net/api/stackoverflow/__graphql",
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    headers: {
      Authorization: `Apikey ${API_TOKEN}`,
    },
  },
});

export default client;
