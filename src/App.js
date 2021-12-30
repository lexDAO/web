import React from 'react';
import { ChakraProvider, Box, Heading } from '@chakra-ui/react';
import { theme } from './theme.js';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { useRoutes } from 'hookrouter';
import routes from './router';

function App() {
  const routeResult = useRoutes(routes);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Box textAlign="center">
        <Nav />
        {routeResult || <Heading>PAGE NOT FOUND</Heading>}
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
