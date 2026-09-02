
import { useState } from "react";
import "./ProductForm.css"
function ProductForm(props){
const [newtitle, setTitle]= useState("");
const [newdate, setDate]= useState("");

   function inputChangeHandler(e){
    setTitle(e.target.value);
    // console.log(newtitle);
   }
   
    function dateChangeHandler(e){
      setDate(e.target.value);
    //    console.log(newdate);
    }

    function submitHandler(e)
    {
        e.preventDefault();  // just to remove the default function of the submit button

        const productObj={
            title: newtitle,
            date: newdate
        } 
        // console.log(productObj);

        props.onSaveProduct(productObj);

        // to emppty the titlr and date on UI
        setTitle(" ");
        setDate(" ")
    }
   
    return(
        <form onSubmit={submitHandler}>
            <div className="new-product_controls">
            <div className="new-product_control">
                <label>Title</label>
                <input type="text" value={newtitle} onChange={inputChangeHandler}></input>
            </div>
            <div className="new-product_control">
                 <label>Date</label>
                <input type="Date" value={newdate} onChange={dateChangeHandler} min="2025-01-01" max="2026-12-12"></input>
            </div>
            <div className="new-product_button">
                <button type="submit"> Add Product</button>
            </div>

            </div>
            
        </form>
    );
}

export default ProductForm;