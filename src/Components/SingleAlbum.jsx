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
          <Col className="text-center mainPage">
            <img src={list && list.album.cover_big} alt="" />
            <Link to={"/details/" + list?.album.id}>
              <p className="d-block">{list && "Album: " + list?.album.title}</p>
            </Link>
            <Link to={"/artist/" + list?.artist.name}>
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
