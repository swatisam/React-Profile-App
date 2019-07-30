import React from "react";
// import axios from "axios";
export default class Portfolio extends React.Component{
    constructor(){
        super();
        this.state = {
            result : []
        }
    };
    componentDidMount(){
        let str = window.localStorage.getItem("login_details");
        let obj = JSON.parse(str);
    };
    render(){
        return(<div>
            <h1>My Portfolio</h1>
        </div>)
    }
};