import React, { useState } from 'react'



const Form = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [password2,setPassword2]=useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(name && email && password && password2){
            if(password ===password2){
                alert("SignUp-Suuccessfully.")
            }else{
                alert("Error : password and confirm-password must be same")
            }
        }
        
        
    }


  return (
    <>
 
<body>
    <div class="form-container">
        <form onSubmit={(e)=>handleSubmit(e)}>
            <h2>Sign-Up or Form-Validation</h2>
            <div class="input-group">
                <label for="name">Name</label>
                <input type='text' placeholder='Enter Your Name '
                 onChange={(e)=>setName(e.target.value)}
                 value={name}
                 />
            </div>
            <span className={name ? "data" : "no-data"} > {name ? "": "Please enter Your Name."}</span>

            <div class="input-group">
                <label for="email">Email</label>
                <input type='email' placeholder='Enter Your Email'
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                />

            </div>
            <span className={name ? "data" : "no-data"}>{name ? "": "Please enter Your Email."}</span>

            <div class="input-group">
                <label for="message">Password</label>
                <input type='password' placeholder='Enter Your Password' 
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                />
            </div>
            <span className={name ? "data" : "no-data"}>{name ? "": "Please enter Your password."}</span>

            <div class="input-group">
                <label for="message">Confirm-Password</label>
                <input type='password' placeholder='Enter Your Confirm-Password' 
                onChange={(e)=>setPassword2(e.target.value)}
                value={password2}
                />
            </div>
            <span className={name ? "data" : "no-data"}>{name ? "": "Please enter Your confirm-password."}</span>

            <button type="submit">Submit</button>
        </form>
    </div>
</body>




    
    </>
  )
}

export default Form