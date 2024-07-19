import React from 'react';
import './index.css'; 

const Login = () => {
    return (

        <div>
        <div className='login-container'>

            <h1>Welcome Back</h1>
            <h2>LOG IN</h2>

            <form className='container'>

            <label for='user Name'>Username:</label>
            <input type='text' id='username' required />

            <label for='email'>Email:</label>
            <input type='email' id='email' required />
    
            <label for='password'>Password:</label>
            <input type='password' id='password' required />

            <button type='submit'><b>Login</b></button>

            </form>

        </div>

        <div className='sign-up'>
                
        <h4>Don't have an account? </h4>
        <h3>Sign Up</h3>

         </div>

         </div>
    );
};

export default Login;