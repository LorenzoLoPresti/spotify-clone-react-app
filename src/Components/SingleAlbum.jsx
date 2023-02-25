import { Col, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

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
            <img src={list && list.data[0].album.cover_big} alt="" />
            <p className="d-block">
              {list && "Album: " + list?.data[0]?.album.title}
            </p>
            <p href="" className="d-block">
              {list && "Artist: " + list?.data[0]?.artist.name}
            </p>
          </Col>
        </>
      )}
    </>
  );
};

export default SingleAlbum;
