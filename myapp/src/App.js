
import './App.css';
import "./tailwind.output.css"
import {  Route, Switch } from 'react-router-dom';
import Home from "./components/home"
import SignIn from "./components/signin"
import SignUp from "./components/signup"




function App() {
  return (
    <div className="App">
      


      <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      </Switch>
      
     

    </div>
  );
}

export default App;
