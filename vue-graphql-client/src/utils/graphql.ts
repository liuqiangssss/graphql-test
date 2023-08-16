import ApolloClient from "apollo-boost";

const apolloClient = new ApolloClient({
  // 你需要在这里使用绝对路径
  uri: "http://localhost:3000/graphql",
});

export default apolloClient;
