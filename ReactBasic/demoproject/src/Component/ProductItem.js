import Card from "./Card.js";
import ProductDate from "./ProductDate";
import "./ProductItem.css";
import React,{useState} from "react";
const ProductItem=(props)=>{
// let title=props.title;
const [title,setTitle]= useState(props.title);

    function clickHandler(){
    //    title='popcorn';
    setTitle("popcoorn");
        alert("button is clisvked");
    }
 
    return(
        <Card className="product-item">

            <ProductDate date={props.date}/>
            <div>
                <h2>{title}</h2>
            </div>
            <button onClick={clickHandler}>Add to Cart</button>
            
        </Card>
    );
}

export default ProductItem;