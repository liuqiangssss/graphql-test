import { useQuery } from "@vue/apollo-composable";
import qgl from "graphql-tag";

export const useBooks = () => {
  const { result } = useQuery(qgl`
        query getBooks{
            books {
                id
                name
                description
            }
        }
    `);
  return result;
};
