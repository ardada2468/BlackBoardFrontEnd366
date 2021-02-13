import React from "react";
import Link from "next/link";
import Image from "./image";
import Typing from "react-typing-animation";
import { Zoom, Bounce, LightSpeed, Slide } from "react-reveal";

const style = {
  width: "auto ",
  height: "250px",
};

const VidCard = ({ video }) => {
  return (
    <Slide left>
      <Link as={`/video/${video.slug}`} href="/video/[id]">
        <a className="uk-link-reset">
          <div class="uk-card-media-left uk-cover-container ">
            <Image style={style} image={video.VideoThumbnail} />
            {/* <canvas width="600" height="300"></canvas> */}
            <div class="uk-card-body RightAlign " id="card-body-h">
              <h3 class="uk-card-title">{video.Title}</h3>
              <p>{video.Description}</p>
            </div>
          </div>
          <div></div>
        </a>
      </Link>
    </Slide>
  );
};

export default VidCard;
