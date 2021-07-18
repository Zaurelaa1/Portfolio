
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import About from "./components/About"
import Skills from "./components/Skills"
import Experiences from './components/Experiences';
import Contact from "./components/Contact"

import Footer from "./components/Footer"
import './App.css';

function App() {
  return (
    <Router>
   <div className="app">
   <NavBar />
   <Switch>
   <Route exact path="/" component={Home} />
   <Route exact path="/about" component={About} />
   <Route exact path="/skills" component={Skills} />
   <Route exact path="/experiences" component={Experiences} />
   <Route exact path="/contact" component={Contact} />
  
   </Switch>
   <Footer />
   </div>
   </Router>
  );
}

export default App;
