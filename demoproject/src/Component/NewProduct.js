
import "./NewProduct.css";
import ProductForm from "./ProductForm";
function NewProduct(props){

    function saveProduct(product)
    {
        console.log("i am inside the new product");
        console.log(product);

        props.printProduct(product);
    }
    return (
    <div className="new-product">

        <ProductForm onSaveProduct={saveProduct}/>
    </div>
    );
}

export default NewProduct;