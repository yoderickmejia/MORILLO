import Navbarc from "./navbarc.jsx";
import SFooter from "./SFooter";
import {conditionalrender} from './Render.jsx';
import NavbarR from "./navbarcregistred.jsx";
import { Login } from './Render';
import { Logout } from './Render';

const Home = ({ Comp }) => {
  return (
    <div className="main-container">
      <div>
        {conditionalrender.state? <Login />:<Logout />}
      </div>
      <main>
        <Comp />
      </main>
      <SFooter />
    </div>
  );
};

export default Home;
