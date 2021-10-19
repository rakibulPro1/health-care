import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Details from "./pages/Details/Details";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Searvices from "./pages/Searvices/Searvices";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <Header></Header>
          <About></About>
          <Footer></Footer>
        </Route>
        <Route path="/searvices">
          <Header></Header>
          <Searvices></Searvices>
          <Footer></Footer>
        </Route>
        <Route path="details/:searviceId">
          <Details></Details>
        </Route>
        <Route path="/contact">
          <Header></Header>
          <Contact></Contact>
          <Footer></Footer>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/signup">
          <Signup></Signup>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
