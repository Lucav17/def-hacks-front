import React, { Component } from "react";

class Login extends Component {

    handleClick() {
        let user = document.getElementById('email'),
            pass = document.getElementById('pass');

        if(!user || !pass) {
            alert('Please enter all fields')
        } else {
            
        }
    }
  render() {
    return (
      <div className="auth-container">
        <div className="container">
          <div className="row" />
          <div className="col-sm-6 offset-sm-3">
            <div className="auth-card">
              <h3>Log into your account</h3>
              <div className="field-holder">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                    <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    id='email'
                    type="email"
                    style={{borderLeft:"none"}}
                    className="form-control"
                    placeholder="Email Address"
                  />
                  
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                    <i class="fas fa-unlock"></i>
                    </span>
                  </div>
                  <input
                    id='pass'
                    type="password"
                    style={{borderLeft:"none"}}
                    className="form-control"
                    placeholder="Password"
                  />
                  
                </div>

                <button type='button' className='btn btn-primary'>Log in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
