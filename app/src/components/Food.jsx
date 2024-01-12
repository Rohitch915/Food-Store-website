const Food=({item})=>{
    
    let url="http://localhost:9000"+item.image;
    return (
        <>
         <div className="food">
         <img src={url} alt="img45"/>
            <div className="info">
                <h3 className="food-heading">{item.name}</h3>
                <p>{item.text}</p>
                <button>{`$${item.price}.00`}</button>
            </div>
          
         </div>
         
        </>
    )
}

export default Food;