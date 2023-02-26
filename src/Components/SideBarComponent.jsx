import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Col,
  Navbar,
  NavbarBrand,
  NavLink,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo/logo.png";
import {
  artistFetchFunctionAction,
  searchArrayAction,
  SEARCH_ON,
  selectedSongAction,
} from "../Redux/Actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faHouse } from "@fortawesome/free-solid-svg-icons";

const SideBarComponent = () => {
  const searchValue = useSelector((state) => state.search.searchValue);
  // const searchArray = useSelector((state) => state.search.searchArray);
  // const playerData = useSelector((state) => state.player.selectedSong);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Col xs={2} className="d-none d-lg-block">
      <Navbar
        expand="md"
        variant="black"
        className="text-light fixed-left justify-content-between px-2 py-1"
      >
        <Container className="flex-column align-items-start ">
          <NavbarBrand>
            <Link to="/">
              <img
                src={logo}
                alt=""
                style={{ height: "40px", width: "131px" }}
              />
            </Link>
          </NavbarBrand>

          <Navbar.Collapse
            className="flex-column align-items-start"
            style={{ fontSize: "1rem" }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <p
                className="px-2 py-2 mb-0 sidebarLink"
                onClick={() => {
                  dispatch(selectedSongAction(null));
                }}
              >
                <FontAwesomeIcon icon={faHouse} className="me-1" />
                Home
              </p>
            </Link>
            <NavLink className="px-2 py-2 sidebarLink">
              <FontAwesomeIcon icon={faBookOpen} className="me-1" />
              Your Library
            </NavLink>
            <div className="d-flex mt-3">
              <input
                type="text"
                style={{ width: "80%" }}
                placeholder="Search"
                className="px-2"
                value={searchValue}
                onChange={(e) => {
                  dispatch({
                    type: SEARCH_ON,
                    payload: e.target.value,
                  });
                }}
              />

              <Button
                variant="black"
                className="sidebarLink px-2 py-2 "
                style={{
                  border: "1px solid rgb(145, 145, 145)",
                  borderRadius: "2px",
                  fontSize: "0.9rem",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({
                    type: SEARCH_ON,
                    payload: searchValue,
                  });
                  dispatch(
                    artistFetchFunctionAction(searchValue, searchArrayAction)
                  );
                  dispatch(selectedSongAction(null));
                  navigate("/");
                }}
              >
                GO
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
        <Container className="flex-column">
          <Button className="mb-3 signup-btn" variant="light">
            Sign up
          </Button>
          <Button className="mb-3 login-btn" variant="black">
            Login
          </Button>
          <div className="d-flex mb-4">
            <NavLink
              className="me-3  nLink"
              style={{ color: "rgb(145, 145, 145)" }}
            >
              Cookie Policy
            </NavLink>
            <NavLink className="nLink" style={{ color: "rgb(145, 145, 145)" }}>
              Privacy
            </NavLink>
          </div>
        </Container>
      </Navbar>
    </Col>
  );
};
export default SideBarComponent;
