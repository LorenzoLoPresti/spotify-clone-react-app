import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ArtistPageComponent = () => {
  const params = useParams();
  console.log(params);
  const [fetchResult, setFetchResult] = useState();
  const [loading, setLoading] = useState(true);

  const singleAlbumFetch = async (artist) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setFetchResult(data);
      }
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    singleAlbumFetch(params.artist);
    console.log("coakfowek", fetchResult && fetchResult.data);
  }, []);

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage mt-4">
      <div className="row mb-3">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <span>TRENDING</span>
          <span>PODCAST</span>
          <span>MOODS AND GENRES</span>
          <span>NEW RELEASES</span>
          <span>DISCOVER</span>
        </div>
      </div>

      {loading ? (
        <div className="d-none"></div>
      ) : (
        <div className="row">
          <div className="col-12 col-md-10 col-lg-10 mt-5">
            <h2 className="titleMain">{fetchResult?.data[0].artist.name}</h2>
            <div id="followers">{fetchResult?.data[0].id + " follower"}</div>
            <div
              className="d-flex justify-content-center"
              id="button-container"
            >
              <button
                className="btn btn-success me-2 mainButton"
                id="playButton"
              >
                PLAY
              </button>
              <button
                className="btn btn-outline-light mainButton"
                id="followButton"
              >
                FOLLOW
              </button>
            </div>
          </div>
        </div>
      )}
      {loading ? (
        <div
          className="d-flex justify-content-center"
          style={{ height: "100vh", width: "100%" }}
        >
          <Spinner className="align-self-center" variant="light" />
        </div>
      ) : (
        <div className="row mb-3">
          <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
            <div className="mt-4 d-flex justify-content-start">
              <h2 className="text-white font-weight-bold">Tracks</h2>
            </div>
            <div className="pt-5 mb-5">
              <div className="row" id="apiLoaded">
                <Row>
                  {fetchResult?.data?.map((list, index) => (
                    <Col className="text-center mainPage mb-5">
                      <Link
                        to={"/details/" + list?.album.id}
                        style={{ textDecoration: "none" }}
                      >
                        <img src={list && list.album.cover_big} alt="" />

                        <p className="d-block">
                          {list && list?.title.length < 16
                            ? "Track: " + list?.title
                            : "Track: " + list.title.substring(0, 16) + "..."}
                        </p>
                      </Link>
                      <Link
                        to={"/artist/" + list?.artist.name}
                        style={{ textDecoration: "none" }}
                      >
                        <p className="d-block">
                          {list && list?.album.title.length < 16
                            ? "Album: " + list?.album.title
                            : "Album: " +
                              list.album.title.substring(0, 16) +
                              "..."}
                        </p>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ArtistPageComponent;
