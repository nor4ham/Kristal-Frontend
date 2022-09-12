import * as React from "react";
import { Box, Image, Flex, Badge, Text,Container,Table,Thead,Tfoot,Tr,Th,TableCaption,TableContainer,Divider,} from "@chakra-ui/react";
import { MdStar } from "react-icons/md";
import logo from './Header/img/Powered by.png'
 import Details from './Details.js'
function Card(props) {
  const { name, image, description } = props;
   return (
    <Box p="5" maxW="100%" borderWidth="1px"  bg="#FFFFFF"  boxShadow="md" transition="0.3s ease-in-out"

    _hover={{
      boxShadow:"md",
      bg: '#EEF7FF',
      transform: 'scale(1.05)',
     }}
    >
     <Box w="100%" h="60vh"  >

      <Flex>
      <Image w="50%" h="60vh" src={image}/>
      <Box w="50%" h="60vh"  bg="#0d155e" >

       <Box w="15hv" h="20px" bg="#4A545C">
        <Container maxW="full" mt={0} centerContent overflow="hidden">
         <Badge colorScheme="gry">UPCOMING AUCTION</Badge>
        </Container>
       </Box>
       <Box w="100%" h="5vh"  />

       <Box w="100%" h="60px" bg="#F1F0F0">
        <Container maxW="full" mt={0} centerContent overflow="hidden"><Image  src={logo}/></Container>
      </Box>

      <Box w="100%" h="5vh"  />


      <Container maxW="full" mt={0} centerContent overflow="hidden">
       <TableContainer>
  <Table variant='simple'>
    <TableCaption>{name}</TableCaption>
    <Thead>
      <Tr>
        <Th>STARTS AT</Th>
        <Th> MARCH 20, 2022</Th>
        <Th isNumeric> 11:00</Th>
      </Tr>
    </Thead>
    <Tfoot>
      <Tr>
        <Th>BIDUP STARTS</Th>
        <Th>MARCH 27, 2022</Th>
        <Th isNumeric>18:00</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>



       <Divider />
       <Badge colorScheme="gry">Start Price :$190.00</Badge>
       <Badge colorScheme="gry">Current Price :$320.00</Badge>
       <Flex mt={2} align="center">
        <Box as={MdStar} color="orange.400" />
        <Text ml={1} fontSize="sm">
          <b>4.84</b> (190)
        </Text>
      </Flex>
       </Container>

      </Box>

      </Flex>
      </Box>
      <Details/>
    </Box>

  );
}

export default Card;
