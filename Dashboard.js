import React from 'react';
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Education from "../Education/education";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Route from "react-router-dom/Route";
export default class Dashboard extends React.Component{
    render(){
        return(<Router>
            <div>
                <Nav>
                    <NavLink to="/Home"
                     exact strict 
                     activeStyle={{color:'green'}}
                     style={{marginRight:100}}>Home
                   </NavLink>
                    <NavLink to="/education"
                     exact strict 
                     activeStyle={{color:'green'}}
                     style={{marginRight:100}}>Education
                   </NavLink>
                   
                    <NavLink to="/about" 
                            exact strict 
                            activeStyle={{color:'green'}}
                            style={{marginRight:100}}>About</NavLink>
                    <NavLink to="/portfolio" 
                            exact strict 
                            activeStyle={{color:'green'}}
                            style={{marginRight:100}}>Portfolio</NavLink>
                    <NavLink to="/contact" 
                            exact strict 
                            activeStyle={{color:'green'}}
                            style={{marginRight:100}}>Contact</NavLink>
                </Nav>
                <br/><br/>

                <Route path="/about" component={About}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/education" component={Education}/>
                
                
            </div>
        </Router>)
    };
};