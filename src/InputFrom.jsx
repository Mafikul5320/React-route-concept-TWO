import React, { useState } from 'react';

const InputFrom = () => {
    const [Email, setEmail] = useState("")
    const[Error,setError]=useState('')
    const [Password, setPassword] = useState("")
    const HandelSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.email.value)
        console.log(e.target.Password.value)
    }
    const HandleChange = (event) => {
        console.log(event.target.value)
    }
    const HandlePasswordChange = e => {
        setPassword(e.target.value)
        if (Password.length < 6){
            setError("you is low")
        }
        else{
            setError('')
        }
    }
    return (
        <div>
            <form onSubmit={HandelSubmit}>
                <input type="email" name="email" onChange={HandleChange} defaultValue={Email} className="input" placeholder='Enter Enail' /><br />
                <input type="password" defaultValue={Password} onChange={HandlePasswordChange} name="Password" placeholder='Enter Password' /><br />
                <input type="submit" value="Submit" />
            </form>
            <span className='text-4xl text-red-500'>
                {Error}
            </span>
        </div>
    );
};

export default InputFrom;