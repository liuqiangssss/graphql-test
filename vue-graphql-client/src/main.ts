import { createApp, h } from "vue";
import "./style.css";
import App from "./App.vue";
import { provideApolloClient } from "@vue/apollo-composable";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "http://localhost:3000/graphql",
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
// apolloClient实例注入到上下文中
createApp({
  setup() {
    provideApolloClient(apolloClient);
  },
  render: () => h(App),
}).mount("#app");
