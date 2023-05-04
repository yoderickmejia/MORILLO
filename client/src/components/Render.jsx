import React, {Component} from "react";
import Navbarc from "./navbarc";
import NavbarR from "./navbarcregistred";

export function Login(){
    return (
        <div>
            <NavbarR /> 
        </div>
    );
}
export function Logout(){
    return (
        <div>
            <Navbarc />
        </div>
    );
}
export class conditionalrender extends Component{
    constructor(props){
        super(props);
        this.state = {
            Session:false
        };
    }
    render(){
        return(
            <div>
            {this.state.Session? <Login />:<Logout />}
            </div>
        );
    }
}