import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Details from "./pages/Details/Details";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";

import Home from "./pages/Home/Home";
import Searvices from "./pages/Searvices/Searvices";

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

        {/* <Route path="details/:searviceId">
          <Details></Details>
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
