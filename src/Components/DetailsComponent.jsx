import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DetailsComponents = () => {
  const params = useParams();
  const [fetchResult, setFetchResult] = useState();
  const [loading, setLoading] = useState(true);

  const durationConverter = (track) => {
    const minutes = Math.floor(
      parseInt(track) / 60 // setting the duration minutes
    );
    const seconds =
      parseInt(track) % 60 < 10
        ? "0" + (parseInt(track) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
        : parseInt(track) % 60;
    return minutes.toString() + ":" + seconds.toString();
  };

  const singleAlbumFetch = async (id) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + id
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
    singleAlbumFetch(params.list);
    console.log(fetchResult);
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
        <div
          className="d-flex justify-content-center"
          style={{ height: "100vh", width: "100%" }}
        >
          <Spinner className="align-self-center" variant="light" />
        </div>
      ) : (
        <div className="row">
          <div className="col-md-3 pt-5 text-center" id="img-container">
            <img
              src={fetchResult?.cover_big}
              className="card-img img-fluid"
              alt="Album"
            />
            <div className="mt-4 text-center">
              <p className="album-title">{fetchResult?.title}</p>
            </div>
            <div className="text-center">
              <p className="artist-name">{fetchResult?.artist.name}</p>
            </div>
            <div className="mt-4 text-center">
              <button id="btnPlay" className="btn btn-success" type="button">
                Play
              </button>
            </div>
          </div>
          <div className="col-md-8 p-5">
            <div className="row">
              <div className="col-md-10 mb-5" id="trackList">
                {fetchResult &&
                  fetchResult?.tracks?.data?.map((element, index) => (
                    <div className="py-3 trackHover" key={"track" + index}>
                      <a
                        href="#"
                        className="card-title trackHover px-3"
                        style={{ color: "white" }}
                      >
                        {element.title}
                      </a>
                      <small className="duration" style={{ color: "white" }}>
                        {durationConverter(element.duration)}
                      </small>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default DetailsComponents;
