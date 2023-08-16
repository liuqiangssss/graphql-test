import apolloClient from "../utils/graphql";
import qgl from "graphql-tag";

export const getBooks = () => {
  return apolloClient.query({
    query: qgl`query getBooks{
              books {
                  id
                  name
                  description
              }
          }
      `,
  });
};

export const getBook = (id: number) => {
  return apolloClient.query({
    query: qgl`
      query getBook($id: Int!){
        book(id: $id) {
          id
          name
          description
        }
      }
    `,
    variables: { id },
  });
};
export const addBook = (name: string) => {
  return apolloClient.mutate({
    mutation: qgl`
      mutation createBook($createBookDto:  CreateBookInput!){
        createBook(createBookDto: $createBookDto) {
          id
          name
          description
        }
      }
    `,
    variables: {
      createBookDto: {
        name,
      },
    },
  });
};

export const removeBook = (id: number) => {
  return apolloClient.mutate({
    mutation: qgl`
      mutation removeBook($id: Int!){
        removeBook(id: $id) {
          id
          name
          description
        }
      }
    `,
    variables: { id },
  });
};
