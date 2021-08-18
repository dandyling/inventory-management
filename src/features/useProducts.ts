import firebase from "firebase/app";
import "firebase/firestore";
import { useQuery } from "react-query";
import { Product } from "./Product";

interface useProductProps {
  enabled?: boolean;
}

const defaultProps: useProductProps = {
  enabled: true,
};

export const useProducts = (props: useProductProps = defaultProps) => {
  const { enabled } = props;
  return useQuery(
    "products",
    async () => {
      const query = await firebase.firestore().collection("products").get();
      const data: Product[] = query.docs.map((doc) => ({
        ...(doc.data() as Product),
        id: doc.id,
      }));
      return data;
    },
    {
      enabled,
    }
  );
};
