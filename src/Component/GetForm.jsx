import React from 'react';

const GetForm = () => {
    const HandelForm = (event) => {
        console.log(event.get('name'))
    }
    return (
        <div>
            <form action={HandelForm}>
                <input type="text" name='name' placeholder='Your Name' /><br />
                <input type="email" name='email' placeholder='Your password' /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default GetForm;