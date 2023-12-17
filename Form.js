import React, { useState } from 'react'



const Form = () => {
    // const[name,setName]= useState("")
    // const[email,setEmail] =useState("")
    // const[password,setPassword] =useState("")
    //multiplestate to one state 
    const[formData, setFormData]=useState({
        name:'',
        email:'',
        password:''
    })
    // const handleName = (e)=>{
    //     setName(e.target.value);
    // }
    // const handleEmail = (e)=>{
    //     setEmail(e.target.value);
    // }
    // const handlePassword =(e)=>{
    //     setPassword(e.target.value);
    // }
     const handleSubmit = (e)=>{
        e.preventDefault();
     }
    const  handleInput =(e)=>{
       const{name,value} =e.target;

       setFormData({...formData,[name]:value
       })
    }
  return (
    <form>
      <label>
        Name:
        {/* <input type='text' value={formData.name} onChange={handleName}/> */}
        <input type='text' name='name' value={formData.name} onChange={handleInput}/>
      </label>
      <br/>
      <label>
        Email:
        <input type='email' name='email' value={formData.mail} onChange={handleInput}/>
        {/* <input type='text'value={formData.mail} onChange={handleEmail}/> */}
      </label>
      <br/>
      <label>
        Password:
        {/* <input type='password'value={formData.password} onChange={handlePassword}/> */}
        <input type='password' name='password' value={formData.password} onChange={handleInput}/>
      </label>
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default Form
