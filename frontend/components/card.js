import React from "react";
import Link from "next/link";
import Image from "./image";
import { Zoom, Bounce, LightSpeed, Slide } from "react-reveal";

const Card = ({ article }) => {
  return (
    <Zoom left duration={750}>
      <Link as={`/article/${article.slug}`} href="/article/[id]">
        <a className="uk-link-reset cardLink">
          {/* <div className="uk-card uk-card-hover uk-card-body"> */}
          <div className="Card">
            <div className="uk-card-media-top">
              <Image image={article.image} />
            </div>
            <div className="uk-card-body">
              <p id="category" className="uk-text-upperyEcase">
                {article.category.name}
              </p>
              <p id="title" className="uk-text-large">
                {article.title}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </Zoom>
  );
};

export default Card;
