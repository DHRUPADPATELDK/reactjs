import React, {useState}  from 'react'
import '../App.css'
import {useHistory} from 'react-router-dom';
import Login from '../logo.svg'

const Signup = () => {
    let name, value;
    const history =useHistory();
    const [user,setUser]=useState({name:"",email:"",phone:"",work:"",password:"", cpassword:""})
      
    const handleInputs =(e)=>{
        console.log(e)
        name=e.target.name;
        value=e.target.value
        setUser({...user,[name]:value})
    }

   const PostData = async (e) =>{
     e.preventDefault();
     
     const{name,email,phone,work,password,cpassword} =user
    
     const res  =await fetch("/register",{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
            },
          body:JSON.stringify({
            name,email,phone,work,password,cpassword
          })
      });
       const data =await res.json();

       if(res.status===422 || !data ){
             window.alert("Invalids data")
             console.log("Invalids data")
       }else{
        window.alert("filed data")
        history.push("/login")
       }
   }


    return (
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card card0 border-0">
            <div className="row d-flex">
                <div className="col-lg-6">
                        <div className="row justify-content-center border-line align-items-center"> <image src={Login} className="image" /> </div>
                </div>
                
                <div className="col-lg-6">
                    <div className="card2 card border-0 px-4 py-5">
                       
                     <form method="POST">
                 
         
                        <div className="row px-3"> <label className="mb-1">
                                <h6 className="mb-2 text-sm">Name</h6>
                         </label> <input  className="mb-4" type="text" name="name" id="name"   
                            value={user.name} 
                            onChange={handleInputs}
                         /> </div>
                        
                        
                        <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-2 text-sm">Email</h6>
                        </label> <input className="mb-4" type="text" name="email" id="email"
                        value={user.email} 
                        onChange={handleInputs}
                        /> </div>

                        <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-2 text-sm">Enter Your Phone Number</h6>
                        </label> <input className="mb-4" type="number" name="phone"  id="phone" 
                        value={user.phone} 
                        onChange={handleInputs}
                        /> </div>

                        
                        <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-2 text-sm">Enter Your work</h6>
                        </label> <input className="mb-4" type="text" name="work"  id="work" value={user.work} 
                            onChange={handleInputs}/> </div>

                        <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-2 text-sm">Enter Your Password</h6>
                        </label> <input className="mb-4" type="text" name="password"  id="password"value={user.password} 
                            onChange={handleInputs}/> </div>

                        <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-2 text-sm">Confirm Password</h6>
                        </label> <input className="mb-4" type="text" name="cpassword" id="cpassword"value={user.cpassword} 
                            onChange={handleInputs} /> </div>
                      
                        <div className="row mb-3 px-3"> <button type="submit"  name="signup" id="signup" value="register" onClick={PostData}className="btn btn-red text-center">Sign up</button> </div>
                    
                      </form>
                    
                    
                    </div>
                </div>
            </div>
           
        </div>
    </div>

        
    )
}

export default Signup
