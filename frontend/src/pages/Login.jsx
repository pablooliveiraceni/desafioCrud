import { useState } from 'react';

export default function Login() {

   const { user, setUser } = useState("");

    return (
        <div className="login-box">
            <h1>Login</h1>
            
            <div className="textbox">
                <input type="text" placeholder="Username" name="" value={user} onChange={(event) => setUser(event.value)}/>
            </div>

            <div className="textbox">
                <input type="password" placeholder="Password" name="" value=""/>
            </div>
            
            <button type="submit">Sing in</button>


        </div>
    )
}