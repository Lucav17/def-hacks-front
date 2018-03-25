import React from "react";

const NavBar = props => {
  console.log(props);

  let content;
  console.log(window.location)

  if (!props.token) {
      if(window.location.href.includes('login') ) {
          content = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            
            <li className="nav-item">
                Don't have an account? <a href='/sign-up' >Sign up.</a>
            </li>
          </ul>
          )
      } else if(window.location.href.includes('sign-up')) {
        content = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            
            <li className="nav-item">
                Already have an account? <a href='/login' >Log in.</a>
            </li>
          </ul>
          )
      } else {
        content = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link action-button" href="#">
                  Create a Listing
                </a>
              </li>
            </ul>
          );
      }
    
  } else {
    content = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">
            Disabled
          </a>
        </li>
      </ul>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Def Hacks Front
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          {content}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
