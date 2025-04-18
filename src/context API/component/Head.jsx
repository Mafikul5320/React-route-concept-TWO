import React, { createContext, useState } from 'react';
import Father from './Father';

export const MyContexts = createContext(0)

const Head = () => {
    const [Money, setMoney] = useState(0)
    return (
        <div className='bod'>
            <p>Money:  {Money}</p>
            <h3>Head</h3>
            <MyContexts value={[Money, setMoney]}>
                <Father></Father>
            </MyContexts>
        </div>
    );
};

export default Head;