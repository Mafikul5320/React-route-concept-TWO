import React from 'react';
import useCreateHooks from './useCreateHooks';

const CustomHooksForm = () => {
    const [Name, ChangeName] = useCreateHooks("")
    const [Email, ChangeEmail] = useCreateHooks("")
    const [Password, ChangePassword] = useCreateHooks("")
    const HandelSembit = (e) => {
        e.preventDefault()
        console.log(Name, Email, Password)
    }
    return (
        <div>
            <form onSubmit={HandelSembit}>
                <input type="text" name='name' defaultValue={Name} onChange={ChangeName} placeholder='Enter Your Name' /><br />
                <input type="email" name="email" defaultValue={Email} onChange={ChangeEmail} placeholder='Enter Your Email' /> <br />
                <input type="password" name="password" defaultValue={Password} onChange={ChangePassword} placeholder='Enter Your Password' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CustomHooksForm;