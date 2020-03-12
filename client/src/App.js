import React from "react";
import Home from "./pages/Home/";
import Portfolio from "./pages/Portfolio/"
import Contact from "./pages/Contact/"
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./components/Footer";



// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <>
    <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path={["/","/home"]}>
            <Home />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio/>
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
         <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </BrowserRouter>
        <Footer/>
 </>
  );
}

export default App;
