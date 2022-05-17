
import './App.css';
import MiniDrawer from './Component/Drawer';
import { Route , Switch} from "react-router-dom";
import Home from './Containers/Home';
import About from './Containers/About';
import Medicine from './Containers/Medicine';
import Contact from './Containers/Contact';


function App() {
  return (
    <>
    <MiniDrawer>
      <Switch>
        <Route exact path={"/"} component={Home} /> 
        <Route exact path={"/About"} component={About} />
        <Route exact path={"/Medicine"} component={Medicine} /> 
        <Route exact path={"/Contact"} component={Contact} /> 
      </Switch>
    </MiniDrawer>
    </>
  );
}

export default App;
