import { extendTheme } from '@chakra-ui/react';

export const HIGHLIGHT_COLOR = '#bf00ff';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
});
