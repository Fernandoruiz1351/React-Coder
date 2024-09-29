import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { MainRouter } from './router'



function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <NavBar />
      <MainRouter />
      <ItemListContainer greeting={"Bienvenido"}/>
    </ChakraProvider>
  )
}

export default App
