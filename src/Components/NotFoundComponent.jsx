import { Col } from "react-bootstrap";

const NotFoundComponent = () => {
  return (
    <Col
      style={{ height: "100vh", width: "100%" }}
      className="d-flex justify-content-center mt-5"
    >
      <h1 className="text-secondary">404 Not Found</h1>
    </Col>
  );
};
export default NotFoundComponent;
