import { useEffect } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  artistFetchAction,
  artistListAction,
  artistFetchFunctionAction,
} from "../Redux/Actions";

const HomeArtistSection = ({ genre }) => {
  const albumList = useSelector((state) => state.rock.rockArtistFetch);
  const loading = useSelector((state) => state.rock.loading);
  const pop = useSelector((state) => state.pop.popArtistFetch);

  console.log(loading);
  console.log(pop);

  return (
    <>
      <Col xs={10}>
        <Row xl={4}>
          <h2 className="text-light pt-5 ">{genre}</h2>
        </Row>
        <Row className="text-light py-3">
          {(loading && <Spinner animation="border" />) || (
            <>
              <Col className="text-center">
                <img
                  src={albumList && albumList?.data[0]?.album.cover_big}
                  alt=""
                />
                <p href="" className="d-block">
                  {albumList && albumList?.data[0]?.album.title}
                </p>
                <p href="" className="d-block">
                  {albumList && albumList?.data[0]?.artist.name}
                </p>
              </Col>
              <Col className="text-center">
                <img
                  src={albumList && albumList?.data[1]?.album.cover_big}
                  alt=""
                />
                <p href="" className="d-block">
                  {albumList && albumList?.data[1]?.album.title}
                </p>
                <p href="" className="d-block">
                  {albumList && albumList?.data[1]?.artist.name}
                </p>
              </Col>
              <Col className="text-center">
                <img
                  src={albumList && albumList?.data[2]?.album.cover_big}
                  alt=""
                />
                <p href="" className="d-block">
                  {albumList && albumList?.data[2]?.album.title}
                </p>
                <p href="" className="d-block">
                  {albumList && albumList?.data[2]?.artist.name}
                </p>
              </Col>
              <Col className="text-center">
                <img
                  src={albumList && albumList?.data[3]?.album.cover_big}
                  alt=""
                />
                <p href="" className="d-block">
                  {albumList && albumList?.data[3]?.album.title}
                </p>
                <p href="" className="d-block">
                  {albumList && albumList?.data[3]?.artist.name}
                </p>
              </Col>
            </>
          )}
        </Row>
      </Col>
    </>
  );
};

export default HomeArtistSection;
