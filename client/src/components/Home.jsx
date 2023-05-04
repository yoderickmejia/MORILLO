import Navbarc from "./navbarc.jsx";
import SFooter from "./SFooter";
import conditionalrender from './Render.jsx';
import NavbarR from "./navbarcregistred.jsx";

const Home = ({ Comp }) => {
  return (
    <div className="main-container">
      <Navbarc />
      <main>
        <Comp />
      </main>
      <SFooter />
    </div>
  );
};

export default Home;
