import { Container, Col, Table, Button } from "react-bootstrap";
import { useState } from "react";
import AccountAddModal from "../AddModals/AccountAdd";



const Accounts = () => {
  const [ModalShow, setModalShow] = useState(false);
  

  

  return (

    <Container fluid className="mt-3">
      <>
        {/* Members with Monthly Buttons */}
        <Col md={12} xs={12} className="ps-0 pe-0">
          <div className="Front-cards-Background-card">
            <div className="d-flex justify-content-between ">
              <h3 className="text-start text-white py-3">
                Accounts
              </h3>
              <div className="py-3">
                {" "}
                
                
                <Button onClick={() => setModalShow(true)}>
                  Add Account
                </Button>
                <AccountAddModal
                  show={ModalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
            <AccountsTable  />
          </div>
        </Col>
      </>
    </Container>
  );
};

export default Accounts;

const AccountsTable = () => {
  return (
    <Table hover striped variant="dark" bordered className="print-table">
      <thead>
        <tr>
          <th>#</th>
          <th className="text-center">Account</th>
          <th className="text-center">Current Balance</th>
          <th className="text-center">Status</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Memebrts</td>
          <td>Month</td>
          <td>Month</td>
        </tr>
      </tbody>
    </Table>
  );
};

