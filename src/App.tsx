import * as React from "react"
import { Button, ChakraProvider, theme } from "@chakra-ui/react"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Button variant={"outline"}>Try autocomplete in variant prop</Button>
  </ChakraProvider>
)
