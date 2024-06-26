/* eslint-disable react/no-unescaped-entities */
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import hadhiLogo from "./assets/images/hadhi-logo.png";
import { useState, useRef, useEffect } from "react";
import bg4 from "./assets/images/bg3.jpg";
import { Link, useNavigate} from "react-router-dom";
import { login } from "./redux/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import   content  from './Components/Content'
import { getCookie } from "react-use-cookie";


const Login = () => {


  const Navigate = useNavigate()
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const inputref = useRef(null);
  const dispatch = useDispatch();
  const {loading,user}  =  useSelector(state => state.authState)
  const organizationName = getCookie('OrganizationName')

  useEffect(() => {
    inputref.current.focus();
    
   
  }, []);


  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(Email,Password))
    setTimeout(() => {
      Navigate("/") }, 2000);
    
  };

  return (
    <Container
      style={{ backgroundImage: `url(${bg4})` }}
      fluid
      className="login-Container"
    >
      <Row>
        <Col>
          <div className="login-card">
            <div className="d-flex justify-content-center flex-column ">
              <Image className="login-logo" src={hadhiLogo} />
             
              <h2 className="text-center">Majidhul Haadhi</h2>
              <h4
                style={{ marginTop: "-13px", color: "#00728B" }}
                className="text-center "
              >
                {" "}
                Accounting Book
              </h4>
            </div>
            <hr />
            <Form onSubmit={HandleSubmit}>
              <Form.Group>
                <Form.Label style={{ marginBottom: "-5px", color: "white" }}>
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="form-control"
                  name="Email"
                 
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  ref={inputref}
                />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label style={{ marginBottom: "-5px", color: "white" }}>
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter The Password"
                  className="form-control"
                  name="Password"

                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>

              <Button
                type="submit"
                className="login-btn"
                disabled={loading}
              >
                {loading? <div className="loader"></div> : "Login"}
              </Button>
              <p className="text-center text-white mt-3">Don't have an account&nbsp; <Link to="/register"  className="login-signup-signin-btn" >Signup Here</Link></p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
