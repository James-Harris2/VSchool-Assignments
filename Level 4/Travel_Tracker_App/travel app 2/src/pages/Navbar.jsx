// My navigation bar menu item with logo
import { Flex, Box, Heading, Text, Button, Spacer, HStack } from "@chakra-ui/react";





function Navbar() {
  return (
  <Flex as="nav" p="10px" alignItems="center">
    {/* This is the Heading for the NavBar */}
      <Heading as="h1">JamesMart</Heading>
      <Spacer />
      
        
      <HStack spacing="20px">
        <Box bg="gray.200" p="10px"> Sign In </Box>
        <Text>Welcome</Text>
        <Button>Logout</Button>

      </HStack>
    
</Flex>


      
        

      


 )
}
 
  


export default Navbar