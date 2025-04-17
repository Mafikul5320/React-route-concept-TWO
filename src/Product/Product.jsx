import React, { useState } from 'react';

const Product = ({ HandleData }) => {
    const [Eroors, setError] = useState("")
    const HandleSubmit = (e) => {
        e.preventDefault()
        const Name = e.target.name.value
        const Price = e.target.price.value
        const Quantity = e.target.quantity.value
        const NewProduct = {
            Name,
            Price,
            Quantity,
        }
        if (Name.length === 0) {
            setError("price is Faild")
            return;
        }
        else{
            setError("good job")
            HandleData(NewProduct)

            return;
            
        }
       
        

    }
    return (
        <div>
            <form onSubmit={HandleSubmit}>
                <input type="text" name='name' placeholder='Enter Product Name' /><br />
                <input type="text" name='price' placeholder='Product price' /><br />
                <input type="text" name='quantity' placeholder='Product Quantity' /><br />
                <input type="submit" value="Add Product" />
            </form>
            <h1>{Eroors}</h1>
        </div>
    );
};

export default Product;