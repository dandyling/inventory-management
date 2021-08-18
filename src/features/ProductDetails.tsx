import {
  AspectRatio,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  theme,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory, useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { useProducts } from "./useProducts";
import { useProductState } from "./useProductState";

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: products = [] } = useProducts();
  const product = products.find((p) => p.id === id);
  const {
    productState,
    handleProductNameChange,
    handleProductCategoryNameChange,
    handleProductPriceChange,
  } = useProductState(product);
  const history = useHistory();

  if (!product) {
    return null;
  }
  return (
    <Layout
      icon={<FaArrowLeft />}
      onIconClick={() => history.goBack()}
      title="Product Details"
    >
      <Flex
        flexDirection="column"
        backgroundColor="white"
        borderTopLeftRadius="3xl"
        borderTopRightRadius="3xl"
        padding="4"
        flex="1"
        overflowY="scroll"
      >
        <AspectRatio
          mb="2"
          padding="2"
          backgroundColor="white"
          borderRadius="2xl"
          ratio={3 / 4}
          borderWidth="1px"
          borderColor="gray.200"
          shadow="lg"
        >
          <Image borderRadius="2xl" src={product.imageUrl} alt={product.name} />
        </AspectRatio>
        <Form>
          <FormControl my="4" id="product-name">
            <FormLabel>Name</FormLabel>
            <Input
              size="lg"
              value={productState?.name}
              onChange={handleProductNameChange}
            />
          </FormControl>
          <FormControl my="4" id="product-category">
            <FormLabel>Category</FormLabel>
            <Input
              size="lg"
              value={productState?.categoryName}
              onChange={handleProductCategoryNameChange}
            />
          </FormControl>
          <FormControl my="4" id="product-price">
            <FormLabel>Price</FormLabel>
            <Input
              size="lg"
              type="number"
              value={productState?.price}
              onChange={handleProductPriceChange}
            />
          </FormControl>
        </Form>
      </Flex>
    </Layout>
  );
};

const Form = styled.form`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  flex-direction: column;
  label {
    margin-bottom: 0.25rem;
    font-weight: 500;
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.blackAlpha[800]};
  }
`;
