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
  const popArtistList = useSelector((state) => state.pop.popArtistFetch);
  const hipHopArtistList = useSelector(
    (state) => state.hipHop.hipHopArtistFetch
  );
  const dispatch = useDispatch();
  // const [randomRockArtist, setRandomRockArtist] = useState(null);

  //   useEffect(() => {
  //     console.log(list);
  //   }, []);
  //   console.log("pippo", list);

  let rockArtists = [
    "queen",
    "u2",
    "thepolice",
    "eagles",
    "thedoors",
    "oasis",
    "thewho",
    "bonjovi",
  ];

  const random = () => {
    let rockRandomArtists = [];
    while (rockRandomArtists.length < 4) {
      // pushes elements inside the array until it has 4 strings
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]; // select an element from the array with an index between 0 and 7
      if (!rockRandomArtists.includes(artist)) {
        // checks if the artist is not already present in the array
        rockRandomArtists.push(artist); // pushes the artist in the array
      }
    }
    console.log(rockRandomArtists);
    // setRandomRockArtist(rockRandomArtists);
    return rockRandomArtists;
  };
  const [randomRockArtist, setRandomRockArtist] = useState(random());

  useEffect(() => {
    // random();
    console.log(randomRockArtist);
    dispatch(
      artistFetchFunctionAction(randomRockArtist[0], artistRockFetchAction)
    );
    dispatch(
      artistFetchFunctionAction(randomRockArtist[1], artistPopFetchAction)
    );
    dispatch(
      artistFetchFunctionAction(randomRockArtist[2], artisthipHopFetchAction)
    );
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
      <HomeArtistSection genre="Rock Classics" list={artistList} />
      <HomeArtistSection genre="Pop Culture" list={popArtistList} />
      <HomeArtistSection genre="Hip Hop" list={hipHopArtistList} />
    </Col>
  );
};
export default MainPage;
