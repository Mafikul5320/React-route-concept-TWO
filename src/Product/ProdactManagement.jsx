import React, { useState } from 'react';
import ProductTable from './ProductTable';
import Product from './Product';

const ProdactManagement = () => {
    
    const [ProductData, setProductData] = useState([])


    const HandleData = (ObjectData) => {
        const AllProduct =[...ProductData , ObjectData]
        setProductData(AllProduct)
    }

    return (
        <div>
                        <Product HandleData={HandleData}></Product>
            <div>
                {
                    ProductData.map((Alldata, index)=> <ProductTable key={index} Alldata={Alldata}></ProductTable> )
                }
            </div>

        </div>
    );
};

export default ProdactManagement;