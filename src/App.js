import React from "react"
import Signup from "./components/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddItems from "./components/users/AddItems";
import EditItems from "./components/users/EditItems";
import Items from "./components/users/Items";


function App() {
  return (
    <>
    {/* <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    > */}
      {/* <div className="w-100" style={{ maxWidth: "400px" }}> */}
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />


              <Route path="/general"  >
                <Navbar />
                <Home />
              </Route>

              <Route path="/about"  >
                <Navbar />
                <About />
              </Route>

              <Route path="/contact"  >
                <Navbar />
                <Contact />
              </Route>

              <Route path="/items/add" >
                <Navbar />
                <AddItems />
              </Route>

              <Route path="/items/edit/:id"  > 
                <Navbar />
                <EditItems/>
              </Route>

              <Route path="/items/:id"  >
                <Navbar />
                <Items />
              </Route>

              <Route component={NotFound} />
            </Switch>
          </AuthProvider>
        </Router>
      {/* </div> */}
    {/* </Container> */}
    </>
  )
}

export default App