 import * as React from 'react'
 import Cart from '../src/Cart'
 import Details from '../src/Details'

 import theme from '../src/Theme'
 import '../src/styles.css'

// 1. import `ChakraProvider` component
import { Container, Flex, ChakraProvider } from '@chakra-ui/react'


// const colors = {
//   brand: {
//     900: '#1a365d',
//     800: '#153e75',
//     700: '#2a69ac',
//   },
// }

// const theme = extendTheme({ colors })


function App() {
  return (
    <ChakraProvider theme={theme}>
       <Container maxW="container.xl" p={0}>
    <Flex h={{ base: 'auto', md: '100vh'}}
     py={[0, 10, 20]} 
     direction={{base: 'column-reverse', md: 'row'}}>
      <Details />
      <Cart />
      
    </Flex>
  </Container>

  </ChakraProvider>
  );
}

export default App;
