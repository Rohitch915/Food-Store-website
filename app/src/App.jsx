import { useReducer, useState } from "react"
import Container from "./components/Container"
import Header from "./components/Header"
import Main from "./components/Main"
import {FoodStore} from "./store/FoodStore"


function App() {
 let [navigateState,setNavigateState]=useState("All");
 let [curInputVal,setCurInputVal]=useState("");
  return (
    <>
    <FoodStore.Provider value={{setNavigateState,navigateState,setCurInputVal,curInputVal}}> 
       <Container> 
        <Header/> 
         <Main></Main>
      </Container>
     </FoodStore.Provider>
    </>
  )
}

export default App
