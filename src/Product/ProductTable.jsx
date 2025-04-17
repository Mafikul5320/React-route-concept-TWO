import React from 'react';

const ProductTable = ({ Alldata }) => {
    const {Name, Quantity, Price}=(Alldata)
    return (
        <div className='border-2 border-b-blue-600 rounded-2xl'>
            <h1 className='text-xl font-semibold'>Name: {Name} </h1>
            <h1 className='text-lg font-sans  font-semibold'>Quantit: {Quantity} </h1>
            <h1 className='text-lg font-mono  font-semibold'>Price: {Price} </h1>
            
        </div>
    );
};

export default ProductTable;