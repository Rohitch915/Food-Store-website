import { useContext } from "react";
import { FoodStore } from "../store/FoodStore";
const NavigateList = ({ item }) => {
    let {setNavigateState,navigateState}=useContext(FoodStore)
    let handleBtn=()=>{
        setNavigateState(item);
       
    }
   
    return (
        <>
            {item == navigateState ? <li> <input type="button" value={item} className="nav-btn current-btn" onClick={()=>handleBtn()}/></li> :
                <li> <input type="button" value={item} className="nav-btn " onClick={()=>handleBtn()}/></li>
            }
           
        </>
    )
}

export default NavigateList;