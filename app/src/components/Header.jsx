import { useContext } from "react";
import NavigateList from "./NavigateList";
import { FoodStore } from "../store/FoodStore";
const Header=()=>{
    let list=["All","breakfast","lunch","dinner"];
    let {setCurInputVal}=useContext(FoodStore);
    let handleOnChange=(e)=>{
         setCurInputVal(e.target.value);
    }
    return (
        <>
        <nav>
            <div className="search-div">
                <img src="../public/logo.svg" alt="img" />
                <input type="text" placeholder="Search Food" onChange={(e)=>{handleOnChange(e)}}/>
            </div>
            <ul className="navigate-btns">
            {list.map((item)=>{
               return <NavigateList key={item} item={item}/>
            })}
            </ul>
        </nav>
        </>
    )
}

export default Header;