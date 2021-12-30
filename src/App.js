import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { theme } from './theme.js';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Lander from './components/Lander';
import Directory from './components/Directory';
import { useRoutes } from 'hookrouter';
import routes from './router';

function App() {
  const routeResult = useRoutes(routes);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Box textAlign="center">
        <Nav />
        {routeResult}
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
