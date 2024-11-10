import React from 'react'
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
      <form>
        <div>
          <lable>Your UserName</lable>
          <input type="text" placeholder='Username' id='username' />
        </div>
        <div>
          <lable>Your Email</lable>
          <input type="text" placeholder='name@company.com' id='email' />
        </div>
        <div>
          <lable>Your password</lable>
          <input type="text" placeholder='Password' id='password' />
        </div>
        <button type='submit'>Sign up</button>
      </form>
      <div>
        <span>Have an account?</span>
        <Link to='/sign-in'>Sign In</Link>
      </div>
    </div>
  )
}

export default SignUp
