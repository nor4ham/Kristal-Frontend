import React, { useState ,useEffect} from 'react';
import { ChakraProvider, SimpleGrid, Container ,Box, Select} from "@chakra-ui/react";
import Card from "./Card";

export default function Charity() {
  const dataList = [
    {
      id: "1",
      product: "Sugar",
      summary: "This is a summary, can be any length",
      longLine: "Very short, can be any description"
    },
    {
      id: "2",
      product: "Product Two",
      summary:
        "Another summary, make sure that this is very responsivesfafsdfsdfsdfsdfsfsfsdf",
      longLine: "Billy Bob Bob Bob Bob likes Markiplier gameplay videos"
    },
    {
      id: "3",
      product: "Long Product",
      summary: "Finalize them summary, hurry, we are close to deadline",
      longLine: "Wow, this is very descriptive! I wonder how long it is"
    },
  ];

  return (
    <ChakraProvider>
      <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Box w="100%" h="3" bg="#FFFFFF" />      
      <SimpleGrid columns={[1] } 
       w="100%"
       color='blackAlpha.700'
       fontWeight='bold'>    
        <Box 
           bg={'#F7FAFC'}
           boxShadow="md"
           color="gray.500"
           m={{ sm: 4, md: 16, lg: 3 }}
           p={{ sm: 5, md: 5, lg: 5 }}>
          
       <SimpleGrid columns={[1]} gap='4'>
          {dataList.map(function (data) {
            const { id, product, summary, longLine } = data;
            return (
              <Card
                key={id}
                product={product}
                summary={summary}
                longLine={longLine}
              />
             );
          })} 
        </SimpleGrid>
       </Box>

      
       </SimpleGrid>
 

       <Box w="100%" h="40" bg="#FFFFFF" />      
      </Container>
    </ChakraProvider>
  );
}



    