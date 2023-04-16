import React,{useEffect, useState} from 'react'
import {auth,Googleprovider,Gitprovider} from '../../firebase';
import { onAuthStateChanged , signOut} from 'firebase/auth';
// import ExApp from '../../ExApp';
const AuthDetails = () => {
    const [authUser,setAuthUser]=useState(null);
    useEffect(()=>{
        const listen=onAuthStateChanged(auth,(user)=>{
            if(user){
                setAuthUser(user)
            }else{
                setAuthUser(null)
            }
        });
        return ()=>{
            listen();
        }
    },[]);
    const usersignOut=()=>{
        signOut(auth).then(()=>{
            console.log('Signout');
        }).catch(error=>console.log(error))
    } 
     return (
    <div>{authUser?<><p>{`Signed in as ${authUser.email}`}</p><button onClick={usersignOut}>Sign out</button></>:<p> </p>}
    </div>
  )
}

export default AuthDetails