import { ChangeEvent, useEffect, useState } from "react";
import { Product } from "./Product";

export const useProductState = (initialValue: Product | undefined) => {
  const [productState, setProductState] = useState<Product | undefined>(
    initialValue
  );

  useEffect(() => {
    if (initialValue) {
      setProductState(initialValue);
    }
  }, [initialValue]);

  const handleProductNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (productState) {
      const newProductState = { ...productState };
      newProductState.name = e.currentTarget.value;
      setProductState(newProductState);
    }
  };

  const handleProductCategoryNameChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (productState) {
      const newProductState = { ...productState };
      newProductState.categoryName = e.currentTarget.value;
      setProductState(newProductState);
    }
  };

  const handleProductPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (productState) {
      const newProductState = { ...productState };
      newProductState.price = Number(e.currentTarget.value);
      setProductState(newProductState);
    }
  };

  return {
    productState,
    handleProductNameChange,
    handleProductCategoryNameChange,
    handleProductPriceChange,
  };
};
