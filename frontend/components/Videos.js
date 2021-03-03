import React from "react";
import { getStrapiURL } from "../lib/api";
import Card from "./card";
import axios from "axios";
import VidCard from "./VideosCard";

const Vidoes = ({ vidoes }) => {
  const leftArticlesCount = Math.ceil(vidoes.length / 5);
  const leftArticles = vidoes.slice(0, leftArticlesCount);
  const rightArticles = vidoes.slice(leftArticlesCount, vidoes.length);
  return (
    // <div>
    //   {vidoes.map((video, i) => {
    //     return (
    //       <div
    //         class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin Card"
    //         uk-grid
    //       >
    //         <VidCard video={video} key={`${video.slug}`} /> 
    //       </div>
    //     );
    //   })}
    // </div>
    <div>
    <div className="uk-child-width-1-2@s" data-uk-grid="true">
      <div>
        {leftArticles.map((article, i) => {
          return (
            <VidCard video={article} key={`${article.slug}`}className="Title"/> 
          );
        })}
      </div>
      <div>
        <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
          {rightArticles.map((article, i) => {
            return        <VidCard video={article} key={`${article.slug}`} st yle= {""} /> 

          })}
        </div>
      </div>
    </div>
  </div>

  );
};

export default Vidoes;