import React from 'react';
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';
import { HStack, Link, IconButton } from '@chakra-ui/react';
import { HIGHLIGHT_COLOR } from '../theme';
import Disclaimer from './Disclaimer';

function Footer() {
  return (
    <>
      <HStack gap={2} mb={1} alignItems={'center'} justifyContent={'center'}>
        <Link
          href="https://twitter.com/lex_DAO"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            borderRadius="1.2rem"
            aria-label="Twitter"
            icon={<FaTwitter />}
            _hover={{ bg: HIGHLIGHT_COLOR }}
          />
        </Link>
        <Link
          href="https://discord.gg/QA75Zw4VTZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            borderRadius="1.2rem"
            aria-label="Discord"
            icon={<FaDiscord />}
            _hover={{ bg: HIGHLIGHT_COLOR }}
          />
        </Link>
        <Link
          href="https://github.com/lexDAO/LexCorpus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            borderRadius="1.2rem"
            aria-label="GitHub"
            icon={<FaGithub />}
            _hover={{ bg: HIGHLIGHT_COLOR }}
          />
        </Link>
      </HStack>
      <Disclaimer m={2} color="gray.600" />
    </>
  );
}

export default Footer;
