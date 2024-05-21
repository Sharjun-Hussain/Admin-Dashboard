import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import hadhiLogo from "./assets/images/hadhi-logo.png";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2'



const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState(null);
  const inputref = useRef(null);

  useEffect(() => {
    inputref.current.focus();
  }, []);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/user/login", { Email, Password })
      .then((response) => {
        localStorage.setItem("token", response.data.generatedToken);
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
        
      });
  };

  return (
    <Container fluid className="login-Container">
  
      <Row>
        <Col>
          <div className="login-card">
            <div className="d-flex justify-content-center flex-column ">
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
            <hr />
            <Form>
              <Form.Group>
                <Form.Label style={{ marginBottom: "-5px", color: "white" }}>
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="form-control"
                  name="Email"
                  required
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
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>

              <Button
                onClick={HandleSubmit}
                type="submit"
                className="login-btn"
              >
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
