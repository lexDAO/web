import React from 'react';
import { Box } from '@chakra-ui/react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Lander from './components/Lander';
import Directory from './components/Directory';

function App() {
  return (
    <Box minHeight="100vh" textAlign="center">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Lander />} />
        <Route path="/directory" element={<Directory />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
