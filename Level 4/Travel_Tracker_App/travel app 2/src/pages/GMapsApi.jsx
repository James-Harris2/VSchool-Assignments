import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Heading , Text, Box, SimpleGrid} from '@chakra-ui/react';


function GMapsApi() {

    const boxStyles = {
        p: "10px",
        bg: "purple.400",
        color: "white",
        m: "10px",
        textAlign: "center",
        ":hover" :{
            color: 'black',
            bg: 'blue.200'
        }
    
    }
const [results, setResults] = useState([]);
const [loading, setLoading] = useState(true);

useEffect (() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        setResults(response.data);
        setLoading(false);
    })
    .catch(error => {
        console.log("Error fetching results", error);
        setLoading(false);
    });
}, []);
if (loading) {
    return <div>Loading...</div>;
}
return (
    <SimpleGrid columns={1}> 
    
    <Container as="section" maxW="4xl" py="50">
        <Heading my='30px' p='10px'>Cool gift from JamesMart</Heading>
        <Text ml="30px" color="grey.800"fontWeight="bold" > Welcome In </Text>
        <Box my="30" p="100px" bg="red">
            <Text color="white">
        <ul className="color">
            {results.map(result => (
                <li className ="map" key={result.id}>
                     {result.title} {result.completed? '(Completed)' : '(Pending)'}   
                </li>
            ))}
        </ul>
        </Text>
         <Box sx={boxStyles}>
            Hello, shoppers
            
        </Box>

        </Box>
    </Container>  
    </SimpleGrid>
    )
}

export default GMapsApi;

