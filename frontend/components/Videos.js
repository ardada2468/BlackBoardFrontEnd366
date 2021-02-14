import React from "react";
import { getStrapiURL } from "../lib/api";
import Card from "./card";
import axios from "axios";
import VidCard from "./VideosCard";

const Vidoes = ({ vidoes }) => {
  return (
    <div>
      {/* <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid> */}
      {vidoes.map((video, i) => {
        return (
          <div
            class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin Card"
            uk-grid
          >
            <VidCard video={video} key={`${video.slug}`} /> 
          </div>
        );
      })}
    </div>
    // </div>
  );
};

export default Vidoes;
