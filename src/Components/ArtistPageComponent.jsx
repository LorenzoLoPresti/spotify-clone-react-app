import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    console.log(fetchResult);
  }, []);

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row mb-3">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-10 col-lg-10 mt-5">
          <h2 className="titleMain">{fetchResult?.data[0].artist.name}</h2>
          <div id="followers">{fetchResult?.data[0].id + " follower"}</div>
          <div className="d-flex justify-content-center" id="button-container">
            <button
              className="btn btn-success mr-2 mainButton d-none"
              id="playButton"
            >
              PLAY
            </button>
            <button
              className="btn btn-outline-light mainButton d-none"
              id="followButton"
            >
              FOLLOW
            </button>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
          <div className="mt-4 d-flex justify-content-start">
            <h2 className="text-white font-weight-bold">Tracks</h2>
          </div>
          <div className="pt-5 mb-5">
            <div className="row" id="apiLoaded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArtistPageComponent;
