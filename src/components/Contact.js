import React, { useEffect, useState } from 'react'
import '../App.css'


const Contact = () => {

  const [userData,setUserData]=useState({});
      
   const userContact = async (e) =>{
      
      try {
        const res  =await fetch("/getdata",{
          method:"GET",
          headers:{
             "Content-Type":"application/json"
            },
         
      });
       const data =await res.json();
       setUserData(data);

       if(!res.status===200){
          const error=new Error(res.error)
          throw error;
       }
      } catch (error) {
        console.log(error)
      }
     
   }

   useEffect(() => {
    userContact();
   }, [])


    return (
        <div classNameName="center1">
           
           <div className="contact_form">
           <div className="container">
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                   <div className="contact_form_container py-5"> 
                     <div className="contact_form_title">Get in Touch </div>
                       <form method="GET" id="contact_form">
                          <div className="contact_form_inputs d-flex flex-md-row flex-column mt-3 justify-content-between align-items-between">
                             <input type="text" id="contact_form_name" className="contact_form_name input_field" name="name" placeholder="Your name" value={userData.name}  />
                             <input type="email" id="contact_form_email" className="contact_form_email input_field" name="email" placeholder="Your Email" value={userData.email}  />
                             <input type="number" id="contact_form_phone" className="contact_form_phone input_field" name="phone" placeholder="Your Phone Number" value={userData.phone}  />
                           </div>
                          <div className="contact_form_text mt-5">
                            <textarea className="text_field contact_form_message" name="message" placeholder="Message" cols="30" rows="10">
                            </textarea>
                          </div>
                          <div className="contact_form_button">
                          <div className="row mb-3 px-3"> <button type="submit"  name="signup" id="signup"className="btn btn-red text-center">Sign up</button> </div>
                          </div>
                          </form>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
    )
}

export default Contact
