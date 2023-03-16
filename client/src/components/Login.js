import "./FormStyles.css";
import { useState } from "react";
import { Form, Link } from "react-router-dom";
import { FormItems } from "./FormItems";
import axios from "axios";
import { useNavigate  } from 'react-router-dom';

function Login() {
  
    const navigate = useNavigate();

    const [user,setUser]=useState({
        
        email:"",
        password:""
       
      });
      const handleChange = e => {
        const {name,value}=e.target;
        setUser({
          ...user,
          [name]:value
        });
      } 
      const login= ()=> {
        axios.post("http://localhost:5000/signin",user)
        .then(res => 
          {
            if(res.status==200){
              console.log("successfully got 200 response ", res.status)
              navigate('/dashboard')
            }
            alert(res.data.message)
          }
          );
      } 
      const registerCall=()=>{
        <Form />
      }
  return (
    <>
     
      <div className="container">
      
        <div className="left">
          {/* <form action=""> */}
          
            <input type="text" placeholder="Email" name="email" value={user.email} onChange={handleChange}/>
            <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
            
            {/* <input type="text" placeholder="State" /> */}
            {/* <div className="left-inner"> */}
              {/* <select id="sign-as" name="sign-as" className="field">
                <option disabled="disabled" selected="selected">
                  Register As.
                </option>
                <option value="donor">Recepient</option>
                <option value="recepient">Donor</option>
              </select> */}
              {/* <input type="text" className="field" placeholder="Phone" /> */}
            {/* </div> */}
            {/* <p>
              By signing up you are agree to our terms and use and privacy
              policy.
            </p> */}
            <button className="btnlogin"onClick={login}>LOGIN</button>
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
export default Login;
