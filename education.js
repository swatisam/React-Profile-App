//import React, Component
import React from "react";
//import axios module
import axios from "axios";
//export Component
export default class About extends React.Component{
     constructor(){
         super();
         this.state = {
            result : []
         };
     };
     componentDidMount(){
        //read the data from local storage
        let str = window.localStorage.getItem("login_details");
        //convert str to obj
        let obj = JSON.parse(str);
        //make the rest api call
     };
     render(){
        return(
        <div>
          <h1>Education</h1>
          <p>Software engineers specialize in either computer software applications or computer software systems. They analyze users' needs and then design, test, and develop software by applying the theories and principles of computer science and mathematical analysis.</p>
        </div>)
     };
};