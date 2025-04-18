import React, { use } from 'react';
import { MyContexts } from './Head';

const Sister = () => {
    const [Money, setMoney] = use(MyContexts)
    return (
        <div className='bod'>
            <h3>Sister</h3>
            <button onClick={() => setMoney(Money + 1000)}>Add Money 5,000</button>
        </div>
    );
};

export default Sister;