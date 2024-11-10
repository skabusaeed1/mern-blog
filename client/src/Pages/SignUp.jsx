import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react';
import { Alert,Button,Spinner } from 'flowbite-react';

const SignUp = () => {
  const [formData, setData] = useState({});
  const [errMessage, setErrMessage] =useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>{
    setData({...formData,[e.target.id]: e.target.value.trim()});
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(!formData.username || !formData.password || !formData.email){
      return setErrMessage("Please fill out all fields");
    }

    try {
      setLoading(true);
      setErrMessage(null);
      const res = await fetch('/api/auth/signup',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(formData),
      })
      const data = await res.json();
      if(data.success == false){
        setLoading(false);
        return setErrMessage(data.message);
      }
      setLoading(false);
      setData({});
      if(res.ok){
        navigate('./sign-in');
      }
    } catch (error) {
      setErrMessage(error.message);
      setLoading(false);
      console.log(loading);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <lable>Your UserName</lable>
          <input type="text" placeholder='Username' id='username' onChange={handleChange}/>
        </div>
        <div>
          <lable>Your Email</lable>
          <input type="email" placeholder='name@company.com' id='email' onChange={handleChange}/>
        </div>
        <div>
          <lable>Your password</lable>
          <input type="password" placeholder='Password' id='password' onChange={handleChange}/>
        </div>
        <Button type='submit' style={{color:'#fff',backgroundColor:'blue'}} disabled={loading}>
          {
            loading ? (
               <>
               <Spinner size='small'></Spinner>
               <span>Loading...</span>
               </>
            ) : "Sign up"
          }
        </Button>
      </form>
      <div>
        <span>Have an account?</span>
        <Link to='/sign-in'>Sign In</Link>
      </div>
      {
        errMessage && (
          <Alert>
            {errMessage}
          </Alert>
        )
      }
    </div>
  )
}

export default SignUp
