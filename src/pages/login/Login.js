import React, { useContext, useState  } from 'react'
//router
import { useNavigate } from "react-router-dom"
//firebase
import {signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from '../../firebase/firebase.js';
import { AuthContext } from '../../assets/context/AuthContext.js';
const Login = () => {
  const [error,setError] = useState(false);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  //context
  const {dispatch} = useContext(AuthContext)
  const handleLogin =(e)=>{
    e.preventDefault();

    signInWithEmailAndPassword (auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch({type:"LOGIN",payload:user})
    navigate("/")
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    setError(true)
  });

  }
  return (
    <>
    <div className="login  h-screen flex justify-center items-center">
      <form className='flex flex-col' onSubmit={handleLogin}>
        <input type="email" placeholder='Email' className='mb-3 p-2 rounded border-gray-600 border-[0.5px] ' onChange={e=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' className='mb-3 p-2 rounded border-gray-600 border-[0.5px] ' onChange={e=>setPassword(e.target.value)}/>
        <button type="submit" className='bg-green-600 text-white font-bold capitalize p-2 rounded'>login</button>
       {error && <span className='text-red-500 font-bold text-xs text-center mt-5'>Wrong email or password!</span>}
      </form>

    </div>
    </>
  )
}

export default Login