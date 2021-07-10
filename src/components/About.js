import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../App.css'

const About = () => {
 
  const history =useHistory();
   
  const [userData,setUserData]=useState({});
      
  const userContact = async (e) =>{
     
     try {
       const res  =await fetch("/about",{
         method:"GET",
         headers:{
           Accept:"appllication/json",
            "Content-Type":"application/json"
           },
        credentials:"include"
     });
      const data =await res.json();
      
      if(!res.status===200){
         const error=new Error(res.error)
         throw error;
      }
     } catch (error) {
       console.log(error);
       history.push('/login')
     }
    
  }

  useEffect(() => {
   userContact();
  }, [])

    return (
        <div className="center1">
          <form method="GET">
          <h1> React Developer </h1>
          <ul>
            <li>

            </li>
          </ul>
          </form>
        
      </div>
    )
}

export default About
