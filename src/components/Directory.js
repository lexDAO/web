import {
  Grid,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import React from 'react';
import { members } from '../assets/members';

function Directory() {
  return (
    <Grid minH="85vh" m={10}>
      <Heading>Our Members</Heading>
      <Table variant="striped" size="md">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Jurisdiction</Th>
            <Th>Practice Area</Th>
            <Th>Link</Th>
            <Th>Contact</Th>
          </Tr>
        </Thead>
        <Tbody>
          {members.map((member, index) => {
            return (
              <Tr key={index}>
                <Td>{member.name}</Td>
                <Td>{member.description}</Td>
                <Td>{member.jurisdiction}</Td>
                <Td>{member.practice}</Td>
                <Td>{member.link}</Td>
                <Td>{member.contact}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Grid>
  );
}

export default Directory;
