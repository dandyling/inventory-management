import {
  Grid,
  Image,
  Flex,
  Text,
  AspectRatio,
  Heading,
} from "@chakra-ui/react";
import * as React from "react";
import { Fragment } from "react";
import { products, Product } from "./Product";

export const CurrentInventory = () => {
  const categories = getCategories(products);
  return (
    <Flex
      backgroundColor="white"
      borderRadius="2xl"
      flexDirection="column"
      padding="4"
      flex="1"
    >
      {Object.keys(categories).map((categoryId) => {
        const categoryName = categories[categoryId];
        const categoryProducts = products.filter(
          (product) => product.categoryId === categoryId
        );
        return (
          <Fragment key={categoryId}>
            <Heading
              as="h2"
              textTransform="uppercase"
              fontSize="large"
              fontWeight="normal"
              color="gray.500"
              margin="2"
            >
              {categoryName}
            </Heading>
            <Grid
              gridTemplateColumns="4rem 1fr"
              gridAutoRows="auto"
              gridRowGap="8"
              gridColumnGap="4"
              padding="2"
            >
              {categoryProducts.map((product, i) => {
                return (
                  <Fragment key={product.id}>
                    <AspectRatio ratio={1}>
                      <Image borderRadius="1rem" src={product.imageUrl} />
                    </AspectRatio>
                    <Flex flexDirection="column" justifyContent="center">
                      <Heading as="h3" fontSize="medium" fontWeight="semibold">
                        {product.name}
                      </Heading>
                      <Flex mt="2" justifyContent="space-between">
                        <Text fontSize="large" fontWeight="bold">
                          RM {product.price.toFixed(2)}
                        </Text>
                        <Text>x{product.quantity}</Text>
                      </Flex>
                    </Flex>
                  </Fragment>
                );
              })}
            </Grid>
          </Fragment>
        );
      })}
    </Flex>
  );
};

export const getCategories = (products: Product[]) => {
  return products.reduce((allCategories: Record<string, string>, product) => {
    allCategories[product.categoryId] = product.categoryName;
    return allCategories;
  }, {});
};
