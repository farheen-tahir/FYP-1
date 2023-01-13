import "./FormStyles.css";
import { Link } from "react-router-dom";
import { FormItems } from "./FormItems";
import { useState } from "react";
import axios from "axios";
function Form() {
  function validateName(name) {
    var isValidName = true;
    if(/[!@#$%^&*(),.?":{}|<>]/g.test(name) || !/^[A-Z]/.test(name) || /\d+/g.test(name)) {
      isValidName = false;
    }
    return isValidName;
  }
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    type:""
  });
  // const {name,email,password,type}=user;
  const handleChange = e => {
    const {name,value}=e.target;
    setUser({
      ...user,
      [name]:value
    });
  } 
  const register=()=>{
    const {name,email,password,type}=user;
    if(name&&email&&password&&type) {
      if(false) {
        alert("successfully registered");
        axios.post("http://localhost:5000/signup",user).then(res => console.log(res));
      }else {
        alert("name contain character")
      }
      
    }else {
      alert("field cant be empty");
    }
    
  }
//   const signup=async(e)=> {
//     e.preventDefault();
//     const user={
//       name:name,email:email,password:password,type:type
//     };
//  const config={
//   headers:{
//     "Content-Type":"application/json",
//   },
//  };
//  try {
//   const body=JSON.stringify(user);
//   await axios.post("/signup",body,config);
//   setUser({
//     name:"",email:"",password:"",type:""
//   });
//   window.location.reload();
//  }catch(err) {
//   console.log("err",err.respnse.data);
//  }
    // const {name,email,password,type}=user;
    // console.log("hi");
    // axios.post("http://localhost:5000/signup",user).then(res=>console.log(res));
  // }
  // function signup() {
  // const {name,email,pass,type}=user;
  // fetch("http://localhost:3000/signup",{
  //   method:"POST",
  //   crossDomain:true,
  //   headers: {
  //     "Content-Type":"application/json",
  //     Accept:"application/json",
  //     "Access-Controll-Allow-Origin":"*",
  //   },body:JSON.stringify({
  //     name,email,pass,type
  //   }),
  // }).then((res)=>res.json()).then((data)=>{
  //   console.log(data,"register");
  // });
  // }
  return (
    <>
      <div class="main">
      
    {console.log("user",user)}
        <div class="containorupper">
          <div class="inner">
            <p>Login To Coninue</p>
            <Link to="/">
              <i class="fa-solid fa-xmark"></i>
            </Link>
          </div>
          <div class="mainheading">
            <a href="/">Sign In</a>
            <a href="/">Sign Up</a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="left">
          {/* <form onSubmit={(e)=>signup(e)}> */}
            <input type="text" placeholder="Name" name="name" value={user.name} onChange={handleChange}/>
            <input type="text" placeholder="Email" name="email" value={user.email} onChange={handleChange}/>
            <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
            {/* <input type="text" placeholder="Re-Enter Password" /> */}
            {/* <input type="text" placeholder="State" /> */}
            {/* <div className="left-inner"> */}
              <select id="sign-as"  className="field" name="type" value={user.type} onChange={handleChange}>
                <option disabled="disabled" selected="selected">
                  Register As.
                </option>
                <option value="recipient">Recepient</option>
                <option value="donor" >Donor</option>
              </select>
              {/* <input type="text" className="field" placeholder="Phone" /> */}
            {/* </div> */}
            <p>
              By signing up you are agree to our terms and use and privacy
              policy.
            </p>
            <button className="btnlogin" onClick={register}>Create an account</button>
          {/* </form> */}
        </div>
        <div className="seperator">
          <span></span>
        </div>
        <div className="sep">
          <span></span>
        </div>
        <div className="right">
          {/* <!-- <div class="card-body"> --> */}
          {FormItems.map((item, index) => {
            return (
              <a
                key={index}
                className={item.cName}
                href={item.url}
                role="button"
              >
                <i className={item.icon}></i>
                {item.title}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Form;
