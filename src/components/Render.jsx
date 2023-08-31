import React, {Component} from "react";
import Navbarc from "./navbarc";
import NavbarR from "./navbarcregistred";
import { useUserContext } from "./UserContext";

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

const ConditionalRender = () => {
    const [user, setUser] = useUserContext();
    const Login = () => {
        return (
            <div>
                <NavbarR /> 
            </div>
        )
    }
    
    const Logout = () => {
        return <div>
            <Navbarc />
        </div>
    }
        
    

    return (
        user.userData !== null? <Login /> : <Logout />
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

