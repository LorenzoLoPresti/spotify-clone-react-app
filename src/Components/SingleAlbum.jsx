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
          <Col className="text-center">
            <img src={list && list.data[0].album.cover_big} alt="" />
            <p href="" className="d-block">
              {list && list?.data[0]?.album.title}
            </p>
            <p href="" className="d-block">
              {list && list?.data[0]?.artist.name}
            </p>
          </Col>
        </>
      )}
    </>
  );
};

export default SingleAlbum;
