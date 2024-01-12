const Container=(props)=>{
    return (
        <>
         <div className="my-container">
            <div className="header">
            {props.children[0]}
            </div>
            <div className="main">
            {props.children[1]}
            </div>
         </div>
      
        </>
    )
}
export default Container;