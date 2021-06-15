
import { ChakraProvider, Box } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Box maxWidth={650} mx="auto" my={12} px={2}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp