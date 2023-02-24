import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  NavLink,
  Form,
  Button,
} from "react-bootstrap";
import logo from "../assets/logo/logo.png";

const SideBarComponent = () => {
  return (
    <Col xs={2} className="d-none d-md-block">
      <Navbar
        expand="md"
        variant="black"
        className="text-light fixed-left justify-content-between px-2 py-1"
      >
        <Container className="flex-column align-items-start ">
          <NavbarBrand>
            <img src={logo} alt="" style={{ height: "40px", width: "131px" }} />{" "}
          </NavbarBrand>
          <Navbar.Collapse
            className="flex-column align-items-start"
            style={{ fontSize: "1rem" }}
          >
            <NavLink className="px-2 py-2 sidebarLink">Home</NavLink>
            <NavLink className="px-2 py-2 sidebarLink">Your Library</NavLink>
            <Form className="d-flex mt-3">
              <input
                type="text"
                style={{ width: "80%" }}
                placeholder="Search"
                className="px-2"
              />
              <Button
                variant="black"
                className="sidebarLink px-2 py-2 "
                style={{
                  border: "1px solid rgb(145, 145, 145)",
                  borderRadius: "2px",
                  fontSize: "0.9rem",
                }}
              >
                GO
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
        <Container className="flex-column">
          <Button
            className="mb-3"
            variant="light"
            style={{
              width: "90%",
              border: "1px solid black",
              borderRadius: "20px",
            }}
          >
            Sign up
          </Button>
          <Button
            className="mb-3 text-light"
            variant="black"
            style={{
              width: "90%",
              border: "1px solid white",
              borderRadius: "20px",
            }}
          >
            Log in
          </Button>
          <div className="d-flex mb-3">
            <NavLink className="me-3">Cookie Policy</NavLink>
            <NavLink>Privacy</NavLink>
          </div>
        </Container>
      </Navbar>
    </Col>
  );
};
export default SideBarComponent;
