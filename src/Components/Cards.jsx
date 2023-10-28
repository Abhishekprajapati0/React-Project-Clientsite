import React from "react";

function Cards(props){
	return(
   <>
   <div className = "main">
    <div className="cords">
        <img src = {props.imagesrc}/>

        <div className="heading">
            <h1>{props.title}</h1>
            <hr/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
           <a href=""><button>ReadMore</button></a>
        </div>
    </div>
    </div>

		

	</>
	)
}
export default Cards;