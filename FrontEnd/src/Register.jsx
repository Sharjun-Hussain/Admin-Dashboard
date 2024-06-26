/* eslint-disable react/no-unescaped-entities */
import { Col, Container, Form, Image, Row, Button } from "react-bootstrap";
import hadhiLogo from "./assets/images/hadhi-logo.png";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "./redux/actions/UserActions";

const Register = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [Name, setName] = useState("");
  const [OrganizationName, setOrganizationName] = useState("");
  const inputref = useRef(null);
  const { loading } = useSelector((state) => state.authState);
  const dispatch = useDispatch();

  useEffect(() => {
    inputref.current.focus();
  }, []);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    dispatch(register(Email, Password, Phone, Name, OrganizationName));
  };

  return (
    <Container
      //   style={{ backgroundImage: `url(${bg4})` }}
      fluid
      className="login-Container bg-dark"
    >
      <Row>
        <Col md={12}>
          <div className="login-card   ">
            <div className="d-flex justify-content-center flex-column box-two">
              <Image className="login-logo" src={hadhiLogo} />
              <h2 className="text-center">Masjidhul Haadhi</h2>
              <h4
                style={{ marginTop: "-13px", color: "#00728B" }}
                className="text-center "
              >
                {" "}
                Accounting Book
              </h4>
            </div>
            <h5 className="text-center">Register Here</h5>
            <hr />
            <Row className="d-flex flex-row ">
              <Form onSubmit={HandleSubmit}>
                <Row className="d-flex flex-row ">
                  <Col>
                    <Form.Group>
                      <Form.Label
                        style={{ marginBottom: "-5px", color: "white" }}
                      >
                        Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Name Please?"
                        className="form-control"
                        name="Name"
                        required
                        value={Name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        ref={inputref}
                      />
                    </Form.Group>
                    <Form.Group className="mt-3">
                      <Form.Label
                        style={{ marginBottom: "-5px", color: "white" }}
                      >
                        Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter The Password"
                        className="form-control"
                        name="Password"
                        required
                        value={Password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </Form.Group>
                    <Form.Group className="mt-3">
                      <Form.Label
                        style={{ marginBottom: "-5px", color: "white" }}
                      >
                        Organization Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Organization Name"
                        className="form-control"
                        name="OrganizationName"
                        required
                        value={OrganizationName}
                        onChange={(e) => {
                          setOrganizationName(e.target.value);
                        }}
                        ref={inputref}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label
                        style={{ marginBottom: "-5px", color: "white" }}
                      >
                        Email
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Your Email Address"
                        className="form-control"
                        name="Email"
                        required
                        value={Email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        ref={inputref}
                      />
                    </Form.Group>
                    <Form.Group className="mt-3">
                      <Form.Label
                        style={{ marginBottom: "-5px", color: "white" }}
                      >
                        Phone Number
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter Phone Number"
                        className="form-control"
                        name="PnoneNumber"
                        required
                        value={Phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </Form.Group>
                    <Button
                      disabled={loading}
                      type="submit"
                      className="login-btn "
                    >
                      {" "}
                      {loading? <div className="loader"></div> : "Register"}
                    </Button>
                  </Col>
                  <h6 className="text-white text-center mt-3">
                    Already have an account&nbsp;
                    <Link to="/login" style={{ color: "red" }}>
                      Sign In
                    </Link>
                  </h6>
                </Row>
              </Form>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
