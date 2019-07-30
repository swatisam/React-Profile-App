import React from "react";
// import axios from "axios";
export default class Contact extends React.Component{
    constructor(){
        super();
        this.state = {
            result : []
        };
    }
    componentDidMount(){
        let str = window.localStorage.getItem("login_details");
        let obj = JSON.parse(str);
    };
    render(){
        return(
            <div>
               <h1>Contact me</h1>
               <br/>
               <h2>contact form</h2>
               <h2>Contact information</h2>
            </div>
        )
    };
};