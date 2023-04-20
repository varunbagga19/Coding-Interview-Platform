import React from 'react';
import {useState,useEffect} from 'react';
import './logsignIn.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {auth,provider,Gitprovider} from '../../firebase';
import { ProviderId, createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup } from 'firebase/auth';
const LogSignIn = () => {
    //अवसर्पिणी
    const handleSignUp = () => {
        const container = document.getElementById('container');
        container.classList.add('right-panel-active');
      };
      const handleSignIn = () => {
        const container = document.getElementById('container');
        container.classList.remove('right-panel-active');
      };
    
      //Agni mul vistar
                const [email,setEmail]= useState('');
                const [password,setpassword]= useState('');
                const [error,setError]=useState(null);
                const [uperror,setupError]=useState(null);
    //signin ke liye
    const signIn =(e)=>{ 
      e.preventDefault();
      signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
        // console.log(userCredential);
      }).catch((error)=>{
        setError(error.message);
        });
    } 
    //signUP ke liye
     const signup =(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
        //   console.log(userCredential);
        }).catch((uperror)=>{
        setupError(uperror.message);
      });
      }
      //signinwithpopup
            //with google
        const [gvalue,setgValue]=useState('');
        const [gerror,setGerror]=useState(null);
      const signInwithgoogle =()=>{
        signInWithPopup(auth,provider).then((data)=>{
          // const name=data.user.displayName;
          const email=data.user.email;
          // const profile=data.user.photoURL;
                setgValue(email)
                    localStorage.setItem("email",email);
                    // localStorage.setItem("name",name);
                    // localStorage.setItem("profile",profile);
        }).catch((error)=>{
          setGerror(gerror.message);
        }) }
         useEffect(()=>{
            setgValue(localStorage.getItem('email'))
              })
                //with github




      return (
    <div><h2>Welcome To Plasma Interview</h2>
        <div className="container" id="container">
        <div className="form-container sign-up-container">
            <form onSubmit={signup}>
                <h1>Create Account</h1>
                <div className="social-container">
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social"><i className="fab fa-github"></i></a>
                    <a href="#" className="social"><i className="fab fa-google"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" name="email" placeholder='Enter your mail' 
                         value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                                  />  
                             <input type="password" name="password" placeholder='Enter your password' 
                             value={password}
                          onChange={(e)=>setpassword(e.target.value)}
                                  />
                                  <p>{uperror}</p>
                         <button type="submit" > Signup </button>
                     </form>
        </div>
        <div className="form-container sign-in-container">
            <form onSubmit={signIn}>
                <h1>Sign in</h1>
                <div className="social-container">
                {gvalue ?(
                           <a onClick={signInwithgoogle} className="social">
                             <i className="fab fa-google-plus-g"></i>
                           </a>):(
                             <p>{gerror}</p>
                         ) }
                        
                    <a href="#" className="social"><i className="fab fa-github"></i></a>
                    <a href="#" className="social"><i className="fab fa-google"></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" name="email" placeholder='Enter your mail' 
                         value={email}
                         onChange={(e)=>setEmail(e.target.value)}
                     />
                   <input type="password" name="password" placeholder='Enter your password' 
                               value={password}
                                  onChange={(e)=>setpassword(e.target.value)}
                                  /><a href="#">Forgot your password?</a>
                               <button type="submit" >Login In</button>
                               <div>{ error}</div>
              </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button className="ghost" id="signIn" onClick={handleSignIn} >Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button className="ghost" id="signUp" onClick={handleSignUp} >Sign Up</button>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <p>
         Copyright &copy; { new Date().getFullYear()}  Created with <i className="fa fa-heart" />  by IPECians
        </p>
    </footer></div>
  )
}

export default LogSignIn;