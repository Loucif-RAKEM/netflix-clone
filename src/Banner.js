import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./requests";

function Banner() {
  const baseUrl = "http://image.tmdb.org/t/p/original/";

  const [bannerMovie, setBannerMovie] = useState({});
  // generate one random movie for the main banner
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setBannerMovie(
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ]
      );
    }
    fetchData();
  }, []);

  // function used to trucate long strings (It also adds ... at the end)
  const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + "..." : str;
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseUrl}${bannerMovie?.backdrop_path})`,
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {bannerMovie?.title ||
            bannerMovie?.name ||
            bannerMovie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(bannerMovie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
