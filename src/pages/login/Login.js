import React from "react";
import { useHistory, Link } from 'react-router-dom'
// import { Form, InputGroup, Button } from "react-bootstrap";



const Login = () => {

  const history = useHistory()
  const [validated, setValidated] = React.useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      history.replace('/dashboard')
    }

    setValidated(true);
    
  };

  return (
      <div className="d-flex align-items-center auth auth-bg-1 theme-one px-0">
        <div className="row w-100 mx-0">
          <div className="col-xl-4 col-lg-6 col-sm-8 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              {/* <div className="brand-logo">
                  <img src="../images/logo.svg" alt="logo" />
                </div>
              <h4>Hello! let's get started</h4>
              <h6 className="font-weight-light">Sign in to continue.</h6> */}
              <form className="pt-3" noValidate validated={validated} onSubmit={handleSubmit}>

                
                <div className="text-center mt-4 font-weight-light">
                  <span className="text-small font-weight-semibold">Not a member ? </span>
                  <Link to="/" className="text-black text-small">Please contact IT Web Apps.</Link>
                </div>
              </form>
            </div>
            <ul className="auth-footer">
                <li>
                  <Link to="/">Conditions</Link>
                </li>
                <li>
                  <Link to="/">Help</Link>
                </li>
                <li>
                  <Link to="/">Terms</Link>
                </li>
              </ul>

          </div>
        </div>
      </div>
  );
};

export default Login;
