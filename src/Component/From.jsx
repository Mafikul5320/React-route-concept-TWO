import React, { useState } from 'react';

const From = () => {
    const [Password, setPassword] = useState("")
    const [Error, setError] = useState('')
    const handleForm = (event) => {
        event.preventDefault()
    }
    const ChangePassword = (event) => {
        setPassword(event.target.value)
        if (Password.length <= 7) {
            setError("Your password very poor")
        }
        else{
            setError("Your Password is Strong")
        }
    }
    
    return (
        <div>
            <form onSubmit={handleForm}>

                <input type="text" name='name' placeholder='Your Name' /><br />
                <input type="email" name='email' placeholder='Your password' /> <br />
                <input type="password" name="password" onChange={ChangePassword} defaultValue={Password} placeholder='Your Password' id="" />
                <input type="submit" value="Submit" />
            </form>
            <div>
                <small className='text-red-500'>
                    {Error}
                </small>
            </div>
        </div>
    );
};

export default From;