import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Details from "./pages/Details/Details";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Searvices from "./pages/Searvices/Searvices";
import Signup from "./pages/Signup/Signup";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Appoinment from "./pages/Appoinment/Appoinment";

function App() {
  return (
    <AuthProvider>
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
          <Route path="/details/:searviceId">
            <Header></Header>
            <Details></Details>
            <Footer></Footer>
          </Route>

          <PrivateRoute path="/appoinment">
            <Appoinment></Appoinment>
          </PrivateRoute>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
