import React, {Component} from "react";
import Navbarc from "./navbarc";
import NavbarR from "./navbarcregistred";

// export function Login(props){
//     return (
//         <div>
//             <NavbarR/> 
//         </div>
//     );
// }
// export function Logout(){
//     return (
//         <div>
//             <Navbarc />
//         </div>
//     );
// }

const ConditionalRender = (props) => {
    const Login = () => {
        return (
            <div>
                <NavbarR user = {props.user} /> 
            </div>
        )
    }
    
    const Logout = () => {
        console.log("user not found")
        return <div>
            <Navbarc />
        </div>
    }
        
    

    return (
        props.session && props.user !== null? <Login /> : <Logout />
    )
}
export default ConditionalRender

// export class conditionalrender extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             Session:false,
//             User: []
//         };
//     }
//     render(){
//         return(
//             <div>
//             {this.state.Session && this.state.User !== null? <Login />:<Logout />}
//             </div>
//         );
//     }
// }

