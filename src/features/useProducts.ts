import firebase from "firebase/app";
import "firebase/firestore";
import { useQuery } from "react-query";
import { Product } from "./Product";

export const useProducts = () => {
  return useQuery("products", async () => {
    const query = await firebase.firestore().collection("products").get();
    const data: Product[] = query.docs.map((doc) => ({
      ...(doc.data() as Product),
      id: doc.id,
    }));
    return data;
  });
};
