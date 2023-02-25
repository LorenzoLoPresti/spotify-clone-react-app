import { Link } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo/logo.png";
import {
  artistFetchFunctionAction,
  searchArrayAction,
  SEARCH_ON,
} from "../Redux/Actions";

const SideBarComponent = () => {
  // const [search, setSearch] = useState("");
  const searchValue = useSelector((state) => state.search.searchValue);
  const searchArray = useSelector((state) => state.search.searchArray);
  const dispatch = useDispatch();
  // console.log("stefano pls", search);

  return (
    <Col xs={2} className="d-none d-md-block">
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
            <Link to="/">
              <p className="px-2 py-2 sidebarLink">Home</p>
            </Link>
            <NavLink className="px-2 py-2 sidebarLink">Your Library</NavLink>
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
                  // setSearch(e.target.value);
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
                }}
              >
                GO
              </Button>
            </div>
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
            Login
          </Button>
          <div className="d-flex mb-4">
            <NavLink className="me-3" style={{ color: "rgb(145, 145, 145)" }}>
              Cookie Policy
            </NavLink>
            <NavLink style={{ color: "rgb(145, 145, 145)" }}>Privacy</NavLink>
          </div>
        </Container>
      </Navbar>
    </Col>
  );
};
export default SideBarComponent;
