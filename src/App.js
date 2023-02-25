import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import SideBarComponent from "./Components/SideBarComponent";
import MainPage from "./Components/MainPage";
import PlayerComponent from "./Components/PlayerComponent";

function App() {
  return (
    <div className="App">
      7
      <Container fluid className="text-start">
        <Row>
          <SideBarComponent />
          <MainPage />
        </Row>
        <PlayerComponent />
      </Container>
    </div>
  );
}

export default App;
