//modules
import React from 'react';
import { Link } from 'react-router-dom';

//components
import OutlinedCustomField from '../components/OutlinedCustomField';
//css
import '../assets/css/signin.css'
function Signin() {
  return (
    <form className="signin-form">
    <h2 className="heading">Sign in</h2>
  
  
    <OutlinedCustomField type="email" className="email" placeholder="Email"  required={true}/>
    <small className="message">&nbsp;</small>
   
    <OutlinedCustomField type="password" className="password" placeholder="Password"  required={true}/>
    <small className="message">&nbsp;</small>
    <p className='have-not-account'><small>Haven't any account? <Link to="/signup">Sign up</Link></small></p>

    <button className="button positive" type="submit">Confirm</button>
  </form>
  )
}

export default Signin
