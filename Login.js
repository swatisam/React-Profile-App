//import React and Component
import React from "react";
//import axios module
// import axios from "axios";
//export Component
export default class Login extends React.Component{
    login = (event)=>{
        event.preventDefault();
        this.props.history.push("/dashboard");
        /*axios.post("http://localhost:8080/login",obj)
             .then((posRes)=>{
                if(posRes.data.login == "success"){
                    let str = JSON.stringify(posRes.data);
                    window.localStorage
                          .setItem("login_details",str);
                    this.props.history.push("/dashboard");                
                }else{
                    alert("Login Fail");
                }
             }).catch((errRes)=>{
                console.log(errRes);
        });*/
        this.uname.value = "";
        this.upwd.value = "";
    };
    render(){
        return(
            <div>
                <fieldset>
                    <legend>Login</legend>
                    <label style={{marginRight:100}}>Uname</label>
                    <input type="text"
                           ref={(input)=>this.uname = input}/>                   
                    
                    <br></br><br></br>
                    <label style={{marginRight:100}}>Upwd.</label>
                    <input type="password"
                           ref={(input)=>this.upwd=input}/>
                
                    <br></br><br></br>
                    <button onClick={this.login}><b>Login</b></button>
                </fieldset>
            </div>
        )
    };
};