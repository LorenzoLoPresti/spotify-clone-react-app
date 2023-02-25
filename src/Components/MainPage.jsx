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

  let popArtists = [
    "maroon5",
    "coldplay",
    "onerepublic",
    "jamesblunt",
    "katyperry",
    "arianagrande",
  ];

  let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

  const random = (artistList) => {
    let randomArtists = [];
    while (randomArtists.length < 4) {
      // pushes elements inside the array until it has 4 strings
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]; // select an element from the array with an index between 0 and 7
      if (!randomArtists.includes(artist)) {
        // checks if the artist is not already present in the array
        randomArtists.push(artist); // pushes the artist in the array
      }
    }
    // setRandomRockArtist(randomArtists);
    return randomArtists;
  };

  const [randomRockArtist, setRandomRockArtist] = useState(random(rockArtists));
  const [randomPopArtist, setRandomPopArtist] = useState(random(popArtists));
  const [randomHipHopArtist, setRandomHipHopArtist] = useState(
    random(hipHopArtists)
  );

  useEffect(() => {
    // random();

    for (let i = 0; i < 3; i++) {
      dispatch(
        artistFetchFunctionAction(randomRockArtist[i], artistRockFetchAction)
      );
    }

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
      <Col xs={10}>
        <Row xl={4}>
          <h2 className="text-light pt-5 ">{"genre"}</h2>
        </Row>
        <Row className="text-light py-3">
          {/* <HomeArtistSection genre="Rock Classics" list={artistList} />
          <HomeArtistSection genre="Pop Culture" list={popArtistList} />
          <HomeArtistSection genre="Hip Hop" list={hipHopArtistList} /> */}
          {randomRockArtist.map((element, index) => {
            return (
              <HomeArtistSection
                list={artistList}
                index={index}
                key={"sono" + index}
              />
            );
          })}
        </Row>
        <Row xl={4}>
          <h2 className="text-light pt-5 ">{"genre"}</h2>
        </Row>
        <Row className="text-light py-3">
          {/* <HomeArtistSection genre="Rock Classics" list={artistList} />
          <HomeArtistSection genre="Pop Culture" list={popArtistList} />
          <HomeArtistSection genre="Hip Hop" list={hipHopArtistList} /> */}
        </Row>
        <Row xl={4}>
          <h2 className="text-light pt-5 ">{"genre"}</h2>
        </Row>
        <Row className="text-light py-3">
          {/* <HomeArtistSection genre="Rock Classics" list={artistList} />
          <HomeArtistSection genre="Pop Culture" list={popArtistList} />
          <HomeArtistSection genre="Hip Hop" list={hipHopArtistList} /> */}
        </Row>
      </Col>
    </Col>
  );
};
export default MainPage;
