import { ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CurrentInventory } from "./features/CurrentInventory";
import { ProductDetails } from "./features/ProductDetails";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Switch>
            <Route path="/:id">
              <ProductDetails />
            </Route>
            <Route exact path="/">
              <CurrentInventory />
            </Route>
          </Switch>
        </ChakraProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
