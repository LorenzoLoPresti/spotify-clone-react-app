import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import SingleAlbum from "./SingleAlbum";
import {
  artistFetchFunctionAction,
  artistRockFetchAction1,
  artistRockFetchAction2,
  artistRockFetchAction3,
  artistRockFetchAction4,
  artistPopFetchAction1,
  artistPopFetchAction2,
  artistPopFetchAction3,
  artistPopFetchAction4,
  artisthipHopFetchAction1,
  artisthipHopFetchAction2,
  artisthipHopFetchAction3,
  artisthipHopFetchAction4,
} from "../Redux/Actions";
import { useSelector } from "react-redux";

const MainPage = () => {
  const dispatch = useDispatch();

  // SLICE ROCK
  // const loading = useSelector((state) => state.rock.loading);
  const rockArtistList1 = useSelector((state) => state.rock.rockArtistFetch1);
  const rockArtistList2 = useSelector((state) => state.rock.rockArtistFetch2);
  const rockArtistList3 = useSelector((state) => state.rock.rockArtistFetch3);
  const rockArtistList4 = useSelector((state) => state.rock.rockArtistFetch4);
  const rockArtistListArray = [
    rockArtistList1,
    rockArtistList2,
    rockArtistList3,
    rockArtistList4,
  ];

  // SLICE POP
  const popArtistList1 = useSelector((state) => state.pop.popArtistFetch1);
  const popArtistList2 = useSelector((state) => state.pop.popArtistFetch2);
  const popArtistList3 = useSelector((state) => state.pop.popArtistFetch3);
  const popArtistList4 = useSelector((state) => state.pop.popArtistFetch4);
  const popArtistListArray = [
    popArtistList1,
    popArtistList2,
    popArtistList3,
    popArtistList4,
  ];

  // SLICE HIP HOP
  const hipHopArtistList1 = useSelector(
    (state) => state.hipHop.hipHopArtistFetch1
  );
  const hipHopArtistList2 = useSelector(
    (state) => state.hipHop.hipHopArtistFetch2
  );
  const hipHopArtistList3 = useSelector(
    (state) => state.hipHop.hipHopArtistFetch3
  );
  const hipHopArtistList4 = useSelector(
    (state) => state.hipHop.hipHopArtistFetch4
  );
  const hipHopArtistListArray = [
    hipHopArtistList1,
    hipHopArtistList2,
    hipHopArtistList3,
    hipHopArtistList4,
  ];

  // SEARCH VALUES
  const searchArray = useSelector((state) => state.search.searchArray);

  // ARRAY ARITISTI
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

  // FUNZIONE RANDOM
  const random = (artistList) => {
    let randomArtists = [];
    while (randomArtists.length < 4) {
      // pushes elements inside the array until it has 4 strings
      let artist = artistList[Math.floor(Math.random() * artistList.length)]; // select an element from the array with an index between 0 and 7
      if (!randomArtists.includes(artist)) {
        // checks if the artist is not already present in the array
        randomArtists.push(artist); // pushes the artist in the array
      }
    }
    // setRandomRockArtist(randomArtists);
    return randomArtists;
  };

  //STATO
  const [randomRockArtist, setRandomRockArtist] = useState(random(rockArtists));
  const [randomPopArtist, setRandomPopArtist] = useState(random(popArtists));
  const [randomHipHopArtist, setRandomHipHopArtist] = useState(
    random(hipHopArtists)
  );

  useEffect(() => {
    // random();
    let rockActionsArray = [
      artistRockFetchAction1,
      artistRockFetchAction2,
      artistRockFetchAction3,
      artistRockFetchAction4,
    ];

    for (let i = 0; i < rockActionsArray.length; i++) {
      dispatch(
        artistFetchFunctionAction(randomRockArtist[i], rockActionsArray[i])
      );
    }

    let popActionsArray = [
      artistPopFetchAction1,
      artistPopFetchAction2,
      artistPopFetchAction3,
      artistPopFetchAction4,
    ];

    for (let i = 0; i < popActionsArray.length; i++) {
      dispatch(
        artistFetchFunctionAction(randomPopArtist[i], popActionsArray[i])
      );
    }

    let hipHopActionsArray = [
      artisthipHopFetchAction1,
      artisthipHopFetchAction2,
      artisthipHopFetchAction3,
      artisthipHopFetchAction4,
    ];

    for (let i = 0; i < popActionsArray.length; i++) {
      dispatch(
        artistFetchFunctionAction(randomHipHopArtist[i], hipHopActionsArray[i])
      );
    }
  }, []);

  return (
    <Col md={9} className="offset-md-3 mainPage mt-3">
      <Row>
        <Col xs={9} className="col-lg-11 mainLinks d-none d-md-flex">
          <p>
            <span>TRENDING</span>
          </p>
          <p>
            {" "}
            <span>PODCAST</span>
          </p>
          <p>
            {" "}
            <span>MOODS AND GENRES</span>
          </p>
          <p>
            {" "}
            <span>NEW RELEASES</span>
          </p>
          <p>
            <span>DISCOVER</span>
          </p>
        </Col>
      </Row>
      <Col xs={10}>
        <>
          {searchArray && (
            <Row>
              <h2 className="text-light pt-5 ">{"Search"}</h2>
            </Row>
          )}
          <Row xl={4} className="text-light py-3 ">
            {searchArray &&
              searchArray?.data?.map((element, index) => {
                return (
                  <SingleAlbum
                    list={element}
                    index={index}
                    key={"sono" + index}
                  />
                );
              })}
          </Row>
        </>
        <Row>
          <h2 className="text-light pt-5 ">{"Rock Classic"}</h2>
        </Row>
        <Row xl={4} className="text-light py-3 ">
          {rockArtistListArray.map((element, index) => {
            return (
              <SingleAlbum
                list={element?.data[0]}
                index={index}
                key={"sono" + index}
              />
            );
          })}
        </Row>
        <Row>
          <h2 className="text-light pt-5 ">{"Pop Culture"}</h2>
        </Row>
        <Row xl={4} className="text-light py-3 ">
          {popArtistListArray.map((element, index) => {
            return (
              <SingleAlbum
                list={element?.data[0]}
                index={index}
                key={"sono" + index}
              />
            );
          })}
        </Row>
        <Row>
          <h2 className="text-light pt-5 ">{"Hip Hop"}</h2>
        </Row>
        <Row
          xl={4}
          className="text-light py-3"
          style={{ marginBottom: "7rem" }}
        >
          {hipHopArtistListArray.map((element, index) => {
            return (
              <SingleAlbum
                list={element?.data[0]}
                index={index}
                key={"sono" + index}
              />
            );
          })}
        </Row>
      </Col>
    </Col>
  );
};
export default MainPage;
