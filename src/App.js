import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import SideBarComponent from "./Components/SideBarComponent";
import MainPage from "./Components/MainPage";
import PlayerComponent from "./Components/PlayerComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsComponents from "./Components/DetailsComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container fluid className="text-start">
          <Row>
            <SideBarComponent />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/details/:list" element={<DetailsComponents />} />
            </Routes>
          </Row>
          <PlayerComponent />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
