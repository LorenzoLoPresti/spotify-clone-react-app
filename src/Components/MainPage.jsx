import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import HomeArtistSection from "./HomeArtistSection";
import {
  artistFetchAction,
  artistFetchFunctionAction,
  artistListAction,
  artistRockFetchAction,
  artistPopFetchAction,
  artisthipHopFetchAction,
} from "../Redux/Actions";
import { useSelector } from "react-redux";

const MainPage = () => {
  const loading = useSelector((state) => state.rock.loading);
  const artistList = useSelector((state) => state.rock.rockArtistFetch);
  const dispatch = useDispatch();
  console.log(loading);
  console.log(artistList);

  useEffect(() => {
    dispatch(artistFetchFunctionAction("queen", artistRockFetchAction));
    dispatch(artistFetchFunctionAction("U2", artistPopFetchAction));
    dispatch(artistFetchFunctionAction("maroon5", artisthipHopFetchAction));
  }, []);
  return (
    <Col md={9} className="offset-md-3 mainPage ">
      <Row>
        <Col xs={9} className="col-lg-11 mainLinks d-none d-md-flex">
          <p>
            <a href="e">TRENDING</a>
          </p>
          <p>
            {" "}
            <a href="#">PODCAST</a>
          </p>
          <p>
            {" "}
            <a href="#">MOODS AND GENRES</a>
          </p>
          <p>
            {" "}
            <a href="#">NEW RELEASES</a>
          </p>
          <p>
            <a href="#">DISCOVER</a>
          </p>
        </Col>
      </Row>
      <HomeArtistSection genre="Rock Classics" data={artistList} />
      <HomeArtistSection genre="Rock Classics" data={artistList} />
      <HomeArtistSection genre="Rock Classics" data={artistList} />
    </Col>
  );
};
export default MainPage;
