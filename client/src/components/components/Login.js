import "./FormStyles.css";
import { useState } from "react";
import {  Link ,useNavigate} from "react-router-dom";
import { FormItems } from "./FormItems";
import axios from "axios";
import { showErrMsg,showSuccessMsg } from "./Notification";
import {dispatchLogin} from "./redux/actions/authAction";
import { useDispatch } from "react-redux"; 

function Login() {
  
    const [user,setUser]=useState({
        email:"",
        password:"",
        err:"",
        success:""
      });
      const dispatch=useDispatch();
      const navigate=useNavigate()
      const {email,password,err,success}=user;
      const handleChange = e => {
        const {name,value}=e.target;
        setUser({
          ...user,
          [name]:value,err:"",success:""
        });
      } 
      
      const login= async e => {
        e.preventDefault();
        try {
         const res=await axios.post("http://localhost:5000/user/login",{email,password})
         setUser({...user,err:"",success:res.data.msg});
         localStorage.setItems("firstLogin",true);
         console.log(res)
         dispatch(dispatchLogin())
         navigate("/about")
        }catch(err) {
            err.response.data.msg && 
            setUser({...user,err:err.response.data.msg,success:""});
        }
      } 
  return (
    <>
      <div  className="container" style={{marginBottom:0}} >
        <div className="left">  
        {err&&showErrMsg(err)}
        {success&&showSuccessMsg(success)}
          <form onSubmit={login}>
            <input type="text" placeholder="Email" name="email" value={user.email} onChange={handleChange}/>
            <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
            <div className="btnAndForgot">
            <button className="btnlogin" type="submit">LOGIN</button>
            <Link to="/forgot_password">Forgot your password</Link>
            </div> 
          </form>
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
