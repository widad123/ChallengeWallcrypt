import {Center, Image,Table,Thead,Tbody, Tr, Th,Td,TableContainer, } from '@chakra-ui/react'

function Coin({coinList}){

    const coin = coinList.map((coin)=>{
        return(
            <Tr key={coin.id}>
                <Td _hover={{color: "teal.500",}}>{coin.symbol}</Td>
                <Td _hover={{color: "teal.500",}}><Image src={coin.image} alt={coin.name} borderRadius='full' boxSize='50px' objectFit='cover'/></Td>
                <Td _hover={{color: "teal.500",}}>{coin.name}</Td>
                <Td _hover={{color: "teal.500",}}>{coin.current_price}</Td>
                <Td _hover={{color: "teal.500",}}> {coin.total_volume} </Td>
            </Tr>
          
        )        
    })

    return (
        <Center  p={4} color='black' mt="100px" mb="100px" >
            <TableContainer boxShadow='dark-lg'borderRadius="md">
            <Table variant='striped' colorScheme='purple'>
        <Thead>
        <Tr>
            <Th  _hover={{color: "teal.500",}}>Symbol</Th>
            <Th _hover={{color: "teal.500",}}>Logo</Th>
            <Th _hover={{color: "teal.500",}}>Name</Th>
            <Th _hover={{color: "teal.500",}}>Price</Th>
            <Th _hover={{color: "teal.500",}}>Volume</Th>
        </Tr>
    </Thead>
    <Tbody>
        {
        coin
        }
    </Tbody>
    </Table>

       </TableContainer>
        </Center>
    )
}

export default Coin