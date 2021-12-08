import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  IconButton,
  Link,
  VStack,
  HStack,
  Flex,
  Grid,
  theme,
} from '@chakra-ui/react';
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Flex m={1} h={16} alignItems={'center'} justifyContent={'space-between'}>
	  <Box>LOGO</Box>
          <Flex alignItems={'center'} mr={2}>
            <HStack>
              <Text>
                <Link
                  href="https://lexdao.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </Link>
              </Text>
              <Text>
                <Link
                  href="https://discord.com/invite/4VdufxuMtt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Community
                </Link>
              </Text>
              <Text>
                <Link
                  href="https://app.daohaus.club/dao/0x64/0x58234d4bf7a83693dc0815d97189ed7d188f6981"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Governance
                </Link>
              </Text>
            </HStack>
          </Flex>
        </Flex>
        <Grid minH="85vh" >
          <VStack spacing={7} justifyContent={'center'} alignItems={'center'}>
            <Text as="h1" bgGradient='linear(to-l, #db34ff, #ffe313)' bgClip='text' fontSize="6xl" fontWeight='extrabold'>
              LexDAO
            </Text>
            <Text fontSize="2xl">
              Building the next generation of contracts
            </Text>
	    <HStack gap={2}>
	  <Link href="https://hackmd.io/@GsLbstMERBi_4-y2X9BKnw/rkoDWGLIF" target="_blank" rel="noopener noreferrer">  
	  <Button>Join us!</Button>
	  </Link>
	  <Link href="https://calendly.com/lexdao/legal-engineering-consultation?month=2021-12" target="_blank" rel="noopener noreferrer">
	    <Button>Book a Consultation</Button>
	  </Link>  
	  </HStack>
          </VStack>
        </Grid>
        <HStack gap={2} mb={1} alignItems={'center'} justifyContent={'center'}>
          <Link
            href="https://twitter.com/lex_DAO"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton aria-label="Twitter" icon={<FaTwitter />} />
          </Link>
          <Link
            href="https://discord.com/invite/4VdufxuMtt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton aria-label="Discord" icon={<FaDiscord />} />
          </Link>
          <Link
            href="https://github.com/lexDAO/LexCorpus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton aria-label="GitHub" icon={<FaGithub />} />
          </Link>
        </HStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
