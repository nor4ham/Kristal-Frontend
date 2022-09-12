import {
    Stack,
    Flex,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import HowToBidDetails from './HowToBidDetails.js'
  export default function WithBackgroundImage() {
    return (
      <>
      <Flex
        w={'full'}
        h={'30vh'}
        backgroundImage={
          'url(https://interpret-dreams-online.com/wp-content/uploads/2021/03/%D8%AD%D8%B5%D8%A7%D9%86-%D8%A3%D8%A8%D9%8A%D8%B6.jpg)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              HOW TO BID
            </Text>
    
          </Stack>
        </VStack>
      </Flex>
      <HowToBidDetails/>
    </>  
    );
  }