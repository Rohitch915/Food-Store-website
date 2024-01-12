import { createContext } from "react";


export const FoodStore=createContext({
    setNavigateState:()=>{},
    navigateState:"All",
    setCurInputVal:()=>{},
    curInputVal:""
})