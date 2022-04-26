import React , {useState} from "react";
import "./LoginScreen.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const LoginScreen = () => {
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [loading , setLoading ] = useState(false);
    const [message , setMessage ] = useState("");

    const handleLogin = () => {
        setLoading(true);
        setMessage("");
        axios({
            method : "POST",
            url : "https://nitc.cleverapps.io/api/auth/login",
            data : {
                "username" : username,
                "password" : password
            }
        }).then(response=>{
            setLoading(false);
            var data = response.data;
            
            if(data.message){
                setMessage(data.message);
            }else{
                navigate("/course")
            }
        })
    }
    return(
        <div className="login_container">
            <div className="login_form">
                <h1>Login</h1>
                <input
                    value={username}
                    className="input" 
                    placeholder="Username"
                    onChange={(event)=>setUsername(event.target.value)}
                /> <br/>
                <input
                    value={password}
                    type={"password"}
                    className="input" 
                    placeholder="Password"
                    onChange={(event)=>setPassword(event.target.value)}
                /> <br/>
                {loading === true && <div style={{marginTop:10}}>Loading ...</div>}
                {message !== "" && <div style={{marginTop:10,color:"red"}}>{message}</div>}
                <button onClick={handleLogin} className="btn_login">Login</button>
            </div>
        </div>
    )
}

export default LoginScreen;