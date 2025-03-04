import React,{useState} from 'react'
import {RxCross2} from 'react-icons/rx'
import './LoginModal.css'
import supabase from '../../Superbase'

const LoginModal = ({isOpen, setIsOpen}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginType, setLoginType] = useState(true)

  const signup = async() =>{
    const {data, error} = await supabase.auth.signUp({
      email,
      password
    });
    console.log(data,error);
    if(data.user){
      alert("Account created, please verify your email.")
    }
  }

  const login = async() =>{
    const {data, error} = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if(error){
      alert(error.message);
      return
    }
  }

  return (
    isOpen ? (<div className="overlay">
      <div className="loginModel">
      
      <div className="left">
        <div className="left-container">
          <div className="login-title">
            <p className="login-des">
              Get Access to your Orders, whishlist and Recomantation
            </p>
          </div>
        </div>
      </div>

      <div className="right">
        <input 
        type="email" 
        className='login-input'
        placeholder='Email'
        required
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />    

        <input 
        type="password" 
        className='login-input'
        placeholder='Password'
        required
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />    
        <p className="termsandcon">
          By Continue, you agree to flipkart's {" "}
          <span style={{color:'blue'}}>Terms of use</span>
          <span style={{color:'blue'}}>Privacy policy</span>
        </p>
        {loginType?(
          <button className='login-btn'onClick={login}>Login</button>
        ):(
          <button className='login-btn' onClick={signup}>Signup</button>
        )}

        {loginType?(
          <p className="login-signup" onClick={()=>setLoginType(false)}>New to Flipkart? create an accont</p>
        ):(
          <p className="login-signup" onClick={()=>setLoginType(true)}>Already an User? Login to an account</p>
        )}
      </div>
          <div className="close" onClick={()=>setIsOpen(false)}>
              <RxCross2 />
          </div>
      </div>
    </div>):(<></>)
  )
}

export default LoginModal