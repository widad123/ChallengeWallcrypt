import React ,{ useEffect,useState}from 'react'
import axios from 'axios'
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import Coin from './components/Coin'


function App() {
  const [coinList,setCoinList]=useState([])
  
  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    .then(function(response){
      setCoinList(response.data)
    })
  },[])

  return (
    <ChakraProvider>
    <Box className="App">
        <Coin coinList={coinList}/>
    </Box>
    </ChakraProvider>
  );


}

export default App;
