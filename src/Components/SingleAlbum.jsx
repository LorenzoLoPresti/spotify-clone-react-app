import { Col, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SingleAlbum = ({ list }) => {
  const loading = useSelector((state) => state.rock.loading);

  return (
    <>
      {(loading && (
        <Col className="text-center">
          <Spinner animation="border" />
        </Col>
      )) || (
        <>
          <Col className="text-center mainPage mb-5">
            <Link
              to={"/details/" + list?.album.id}
              style={{ textDecoration: "none" }}
            >
              <img src={list && list.album.cover_big} alt="" />

              <p className="d-block">
                {list && list?.album.title.length < 16
                  ? "Album: " + list?.album.title
                  : "Album: " + list.album.title.substring(0, 16) + "..."}
              </p>
            </Link>
            <Link
              to={"/artist/" + list?.artist.name}
              style={{ textDecoration: "none" }}
            >
              <p className="d-block">
                {list && "Artist: " + list?.artist.name}
              </p>
            </Link>
          </Col>
        </>
      )}
    </>
  );
};

export default SingleAlbum;
