import axios from "axios";
import { useState } from "react";
import { Col, Container, Row, Form, Button, Modal } from "react-bootstrap";

const MemberAddModal = (props) => {
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [Phone, setPhone] = useState();
  const [Amount, setAmount] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("")
  };

  return (
    <Container>
      <Row>
        <Col>
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Add Member
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" value={Name} onChange={(e)=>{setName(e.target.value)}} placeholder="Sharjun-Hussain" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control value={Address} onChange={(e)=>{setAddress(e.target.value)}}  placeholder="1234 Main St" />
                </Form.Group>

                <Row>
                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formGridPhone"
                  >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" value={Phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="075 74 74 744" />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formGridPhone"
                  >
                    <Form.Label>Sandha Amount</Form.Label>
                    <Form.Control type="number" Amount={Amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder="" />
                  </Form.Group>
                </Row>

                <Button
                  style={{ alignSelf: "end", width: "100%" }}
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default MemberAddModal;
