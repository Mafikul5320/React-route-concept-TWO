import React, { useState } from 'react';

const useCreateHooks = (defaultValue) => {
    const [InputFrom, ChangeInputFrom] = useState(defaultValue);
    const HandelChange = (event) => {
        ChangeInputFrom(event.target.value)

    }
    return [InputFrom, HandelChange];
};

export default useCreateHooks;