import React from 'react';
import { Box } from '@chakra-ui/react';

function Disclaimer(props) {
  return (
    <Box {...props}>
      LexDAO is a club, not a law firm and not even an incorporated entity.
      LexDAO is an unincorporated nonprofit association under Wyo. Stat. Title
      17, Ch. 22 of the laws of the State of Wyoming. Unless otherwise stated in
      writing, all conversations and communications with DAO members which take
      place in any public or semi-public forum (e.g. Discord or Twitter) are not
      to be considered legal advice for any purpose. For explicit statement, no
      individual DAO member is an agent of other DAO members or for LexDAO.
    </Box>
  );
}

export default Disclaimer;
