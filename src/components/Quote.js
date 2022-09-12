import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';
 export default function WithLargeQuote() {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
        We had an incredible experience working with Chakra Templates and were
        impressed they made such a big difference in only three weeks. Our team
        is so grateful for the wonderful improvements they made and their
        ability to get familiar with the product concept so quickly.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
        src='llll'
          alt={'Jenny Wilson'}
          mb={2}
        />

        <Text fontWeight={600}>Jenny Wilson</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Vice President
        </Text>
      </Box>
    </Stack>
  );
}