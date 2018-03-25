import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Index from "./pages/Index";
import NavBar from "./components/Header";
import "./assets/style.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CompanyHome from "./pages/CompanyHome";
import ProfilePage from "./pages/ProfilePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null
    };
  }

  componentWillMount() {
    let key = window.localStorage.getItem("token");
    console.log(key);
    if (key) {
      this.setState({
        token: key
      });
    }
  }

  componentDidUpdate() {
    let key = window.localStorage.getItem("token");
    console.log(key);
    if (!key && this.state.token) {
      this.setState({
        token: null
      });
    }
  }

  render() {
    return (
      <div>
        <NavBar token={this.state.token} />
        <Switch>
        <Route path="/accounts/:id" component={ProfilePage} />
          <Route path="/account/home" component={CompanyHome} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Index} />
        </Switch>
      </div>
    );
  }
}

export default App;
