import Navbarc from "./navbarc.jsx";
import SFooter from "./SFooter";
import NavbarR from "./navbarcregistred.jsx";
import { Login } from './Render';
import { Logout } from './Render';
import ConditionalRender from "./Render.jsx";

const Home = ({ Comp }) => {
  return (
    <div className="main-container">
      <div>
        <ConditionalRender 
        />
      </div>
      <main>
        <Comp />
      </main>
      <SFooter />
    </div>
  );
};

export default Home;
