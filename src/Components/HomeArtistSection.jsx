import { useEffect } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  artistFetchAction,
  artistListAction,
  artistFetchFunctionAction,
} from "../Redux/Actions";

const HomeArtistSection = ({ genre, list }) => {
  const albumList = useSelector((state) => state.rock.rockArtistFetch);
  const loading = useSelector((state) => state.rock.loading);
  const pop = useSelector((state) => state.pop.popArtistFetch);
  //   const [randomRockArtist, setRandomRockArtist] = useState(null);

  //   //   useEffect(() => {
  //   //     console.log(list);
  //   //   }, []);
  //   //   console.log("pippo", list);

  //   let rockArtists = [
  //     "queen",
  //     "u2",
  //     "thepolice",
  //     "eagles",
  //     "thedoors",
  //     "oasis",
  //     "thewho",
  //     "bonjovi",
  //   ];

  //   const random = () => {
  //     let rockRandomArtists = [];
  //     while (rockRandomArtists.length < 4) {
  //       // pushes elements inside the array until it has 4 strings
  //       let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]; // select an element from the array with an index between 0 and 7
  //       if (!rockRandomArtists.includes(artist)) {
  //         // checks if the artist is not already present in the array
  //         rockRandomArtists.push(artist); // pushes the artist in the array
  //       }
  //     }
  //     setRandomRockArtist(rockRandomArtists);
  //   };

  //   useEffect(() => {
  //     random();
  //     console.log(randomRockArtist);
  //   }, []);

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
                <img src={list && list.data[0].album.cover_big} alt="" />
                <p href="" className="d-block">
                  {list && list?.data[0]?.album.title}
                </p>
                <p href="" className="d-block">
                  {list && list?.data[0]?.artist.name}
                </p>
              </Col>
              <Col className="text-center">
                <img src={list && list?.data[1]?.album.cover_big} alt="" />
                <p href="" className="d-block">
                  {list && list?.data[1]?.album.title}
                </p>
                <p href="" className="d-block">
                  {list && list?.data[1]?.artist.name}
                </p>
              </Col>
              <Col className="text-center">
                <img src={list && list?.data[2]?.album.cover_big} alt="" />
                <p href="" className="d-block">
                  {list && list?.data[2]?.album.title}
                </p>
                <p href="" className="d-block">
                  {list && list?.data[2]?.artist.name}
                </p>
              </Col>
              <Col className="text-center">
                <img src={list && list?.data[3]?.album.cover_big} alt="" />
                <p href="" className="d-block">
                  {list && list?.data[3]?.album.title}
                </p>
                <p href="" className="d-block">
                  {list && list?.data[3]?.artist.name}
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
