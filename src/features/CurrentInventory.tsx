import {
  AspectRatio,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import "firebase/firestore";
import * as React from "react";
import { Fragment } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Product } from "./Product";
import { useProducts } from "./useProducts";

export const CurrentInventory = () => {
  const { data: products = [] } = useProducts();

  const categories = getCategories(products);
  return (
    <Layout
      icon={<FaBars />}
      onIconClick={console.log}
      title="Training Institute Board"
    >
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
                marginTop="2"
                marginX="2"
              >
                {categoryName}
              </Heading>
              <Grid
                gridTemplateColumns="4rem 1fr"
                gridAutoRows="auto"
                gridRowGap="4"
                gridColumnGap="4"
                padding="2"
              >
                {categoryProducts.map((product, i) => {
                  return (
                    <Fragment key={product.id}>
                      <Link to={`/${product.id}`}>
                        <AspectRatio
                          borderWidth="1px"
                          borderColor="gray.200"
                          ratio={3 / 4}
                          borderRadius="lg"
                          shadow="md"
                        >
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            borderRadius="lg"
                          />
                        </AspectRatio>
                      </Link>
                      <Link to={`/${product.id}`}>
                        <Flex
                          flexDirection="column"
                          justifyContent="center"
                          height="100%"
                        >
                          <Heading
                            as="h3"
                            fontSize="medium"
                            fontWeight="semibold"
                          >
                            {product.name}
                          </Heading>
                          <Flex mt="2" justifyContent="space-between">
                            <Text fontSize="large" fontWeight="bold">
                              RM {product.price.toFixed(2)}
                            </Text>
                            <Text>x{product.quantity}</Text>
                          </Flex>
                        </Flex>
                      </Link>
                    </Fragment>
                  );
                })}
              </Grid>
            </Fragment>
          );
        })}
      </Flex>
    </Layout>
  );
};

export const getCategories = (products: Product[]) => {
  return products.reduce((allCategories: Record<string, string>, product) => {
    allCategories[product.categoryId] = product.categoryName;
    return allCategories;
  }, {});
};
