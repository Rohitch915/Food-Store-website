import { useContext, useState } from "react";
import FetchItems from "./FetchItems";
import Food from "./Food";
import { FoodStore } from "../store/FoodStore";

const Main = () => {
    let { navigateState, curInputVal } = useContext(FoodStore)
    let [foodData, setFoodData] = useState([])

    return (
        <>
            <main>
                <FetchItems setFoodData={setFoodData}></FetchItems>
                <div className="foods-list">
                    {foodData.map((item) => {
                        if (curInputVal == "") {
                            if (navigateState == "All") {
                                return <Food key={item.name} item={item} />
                            } else {
                                if (navigateState == item.type) {
                                    return <Food key={item.name} item={item} />
                                }
                            }
                        }else{
                            if(item.name.toLowerCase().includes(curInputVal.toLowerCase())){
                                return <Food key={item.name} item={item} />
                            }
                        }
                    })}
                </div>
            </main>
        </>
    )
}

export default Main;