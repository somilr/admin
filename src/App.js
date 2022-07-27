
import './App.css';
import MiniDrawer from './Component/Drawer';
import { Route , Switch} from "react-router-dom";
import Home from './Containers/Home';
import About from './Containers/About';
import Medicine from './Containers/Medicine';
import Contact from './Containers/Contact';
import Doctors from './Containers/Doctors';
import {Provider} from "react-redux"
import { configureStore } from "./redux/Store";
import Counter from './Containers/Counter/Counter';
import { PersistGate } from 'redux-persist/integration/react'
import PromiseExmple from './Containers/PromiseExmple';
import UsememoExmple from './Containers/UsememoExmple';
import UseCallBackep from './Containers/UseCallBackep';
import ThemeContext, { ThemeProvider } from './Context/ThemeContext';


function App() {
  const { store, persistor } = configureStore()
  return (
    <>
    <ThemeProvider>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <MiniDrawer>
        <Switch>
          <Route exact path={"/"} component={Home} /> 
          <Route exact path={"/About"} component={About} />
          <Route exact path={"/Medicine"} component={Medicine} /> 
          <Route exact path={"/Contact"} component={Contact} /> 
          <Route exact path={"/Doctors"} component={Doctors} />
          <Route exact path={"/Contact"} component={Counter} />
          <Route exact path={"/PromiseExmple"} component={PromiseExmple} />
          <Route exact path={"/UsememoExmple"} component={UsememoExmple} />
          <Route exact path={"/UseCallBackep"} component={UseCallBackep} />
          <Counter />
        </Switch>
      </MiniDrawer>
      </PersistGate>
      </Provider>
    </ThemeProvider>
    </>
  );
}

export default App;
