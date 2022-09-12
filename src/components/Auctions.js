import React, { useState ,useEffect} from 'react';
import { ChakraProvider, SimpleGrid, Container ,Box, Select} from "@chakra-ui/react";
import Card from "./Card";

export default function Auctions() {
  const dataList = [
    {
      id: "1",
      name: "Sugar",
      image: "https://interpret-dreams-online.com/wp-content/uploads/2021/03/%D8%AD%D8%B5%D8%A7%D9%86-%D8%A3%D8%A8%D9%8A%D8%B6.jpg ",
      description: "can be any description...."

    },
    {
      id: "2",
      name: "Abiah",
      image: "https://th.bing.com/th/id/OIP.rjfmkYN6RkWG8syi6THmlAHaFS?pid=ImgDet&rs=1",
      description: "can be any description...."

    },
    {
      id: "3",
      name: "Sultan",
      image: "https://th.bing.com/th/id/OIP.lONgphKBa2nqqqpIKaKKigHaFZ?pid=ImgDet&rs=1",
      description: "Very short, can be any description...."

    },
  ];
  let [search,setSearch]=useState("");
  const [Data, setData] = useState(dataList);
  let setsearch=(e)=>{
    setSearch (e.target.value)
   }   
  useEffect(()=>{
    setData(dataList.filter((a)=>a.name.toLowerCase().includes(search.toLowerCase())))
  },[search])

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
        <SimpleGrid columns={[1, null, 2]} spacing="40px">
        <input type="search" onChange={setsearch}  class="form-control rounded" placeholder="Search...." aria-label="Search" aria-describedby="search-addon" />
        <Select placeholder='ONLINE AUCTIONS'bg="#FFFFFF" >
         <option value='option1'>RUNNING AUCTIONS</option>
         <option value='option2'>UPCOMING AUCTIONS</option>
         <option value='option3'>ENDED AUCTIONS</option>
        </Select>
        </SimpleGrid>

       </Box>

 
        <Box 
           bg={'#F7FAFC'}
           boxShadow="md"
           color="gray.500"
           m={{ sm: 4, md: 16, lg: 3 }}
           p={{ sm: 5, md: 5, lg: 5 }}>
          
       <SimpleGrid columns={[1]} gap='4'>
          {Data.map(function (data) {
            const { id, name, image, description } = data;
            return (
              <Card
                key={id}
                name={name}
                image={image}
                description={description}
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



    
