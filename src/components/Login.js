import React,{useState} from 'react'
import '../App.css'
import Logins from '../logo.svg'
import {useHistory} from 'react-router-dom';


const Login = () => {

    const history =useHistory();
    const [email,setEmail]=useState('')
    const[password,setPassword]=useState('')


    const loginUser = async (e) =>{
        e.preventDefault();
        
        // const{email,password} =user
       
        const res  =await fetch("/signin",{
             method:"POST",
             headers:{
                 "Content-Type":"application/json"
               },
             body:JSON.stringify({
               email,password
             })
         });
          const data =await res.json();
   
          if(res.status===400 || !data ){
                window.alert("Invalids data")
                console.log("Invalids data")
          }else{
           window.alert("filed data")
           history.push("/")
          }
      }

    return (


        <>
          <form method="POST">
            <div className=" center1 container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto ">
        <div className="card card0 border-0">
            <div className="row d-flex">
                <div className="col-lg-6">
                        <div className="row justify-content-center border-line align-items-center"> <image src={Logins} className="image" /> </div>
                </div>
                
                <div className="col-lg-6">
                    <div className="card2 card border-0 px-4 py-5">
                        <div className="row mb-2 px-3">
                            <h4 className="mb-0 mr-4 mt-2 mb-2">Sign in </h4>
                        </div>
                    
                        <div className="row px-3"> <label className="mb-1">
                                <h6 className="mb-2 text-sm">Email</h6>
                            </label> <input className="mb-4" type="text" name="email"
                             value={email}
                             onChange={(e)=>setEmail(e.target.value)}
                            
                            /> </div>
                        <div className="row px-3 mb-3"> <label className="mb-1">
                                <h6 className="mb-2 text-sm">Password</h6>
                            </label> <input type="password" name="password"
                              value={password}
                              onChange={(e)=>setPassword(e.target.value)}

                            /> </div>
                       
                        <div className="row mb-3 px-3"> <button type="submit"  name="signin" id="signin"  value="log in" onClick={loginUser} className="btn btn-red text-center">Sign in</button> </div>
                        
                    </div>
                </div>
            </div>
           
        </div>
    </div> 
    </form>
        </>
    )
}

export default Login;
