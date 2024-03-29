import React from "react";
import { getStrapiURL } from "../lib/api";
import Card from "./card";
import axios from "axios";

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  console.log("In Artical");

  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          {leftArticles.map((article, i) => {
            return (
              <Card
                article={article}
                className="Title"
                keyc={`${article.slug}`}
              />
            );
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightArticles.map((article, i) => {
              return <Card article={article} key={`${article.slug}`} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;