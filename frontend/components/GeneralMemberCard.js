import React from "react";
import Link from "next/link";
import Image from "./image";
import { Zoom, Bounce, LightSpeed, Slide } from "react-reveal";

const GeneralCard = ({ person }) => {
  return (
    <Zoom left duration={750}>
      {/* <Link as={`/article/${article.slug}`} href="/article/[id]"> </Link> */}
      <div className="AboutUsCard">
            <div className="uk-card-media-top">
              <Image image={person.Picture}/>
            </div>
            <div className="uk-card-body">
              <p id="title" className="uk-text-large">
                {person.Name}
              </p>
              <p id="category" className="uk-text-uppercase">
                {person.role}
              </p>
             
            </div>
      </div>
    </Zoom>
  );
};

export default GeneralCard;

//{
//   [
//     {
//     "id": 1,
//     "Name": "Sample",
//     "Email": "sample@gmail.com",
//     "ShortBio": "Sample Bio",
//     "role": "sample",
//     "created_at": "2021-02-14T00:43:16.665Z",
//     "updated_at": "2021-02-14T00:43:16.747Z",
//     "Picture": {
//     "id": 8,
//     "name": "00100srPORTRAIT_00100_BURST20200111151013235_COVER_2.jpg",
//     "alternativeText": "",
//     "caption": "",
//     "width": 1926,
//     "height": 1748,
//     "formats": {
//     "large": {
//     "ext": ".jpg",
//     "url": "https://storage.googleapis.com/bb-media-bucket/large_00100sr_PORTRAIT_00100_BURST_20200111151013235_COVER_2_8445125efc/large_00100sr_PORTRAIT_00100_BURST_20200111151013235_COVER_2_8445125efc.jpg",
//     "hash": "large_00100sr_PORTRAIT_00100_BURST_20200111151013235_COVER_2_8445125efc",
//     "mime": "image/jpeg",
//     "name": "large_00100srPORTRAIT_00100_BURST20200111151013235_COVER_2.jpg",
//     "path": null,
//     "size": 119.07,
//     "width": 1000,
//     "height": 908
//     },
//     "small": {
//     "ext": ".jpg",
//     "url": "https://storage.googleapis.com/bb-media-bucket/small_00100sr_PORTRAIT_00100_BURST_20200111151013235_COVER_2_8445125efc/small_00100sr_PORTRAIT_00100_BURST_20200111151013235_COVER_2_8445125efc.jpg",
//     "hash": "small_00100sr_PORTRAIT_00100_BURST_20200111151013235_COVER_2_8445125efc",
//     "mime": "image/jpeg",
//     "name": "small_00100srPORTRAIT_00100_BURST20200111151013235_COVER_2.jpg",
//     "path": null,
//     "size": 32.83,
//     "width": 500,
//     "height": 454
//     },
//     "medium": {
//     "ext": ".jpg",
//     "url": "https://storage.googleapis.com/bb-media-bucket/medium_00100sr_PORTRAIT_00100_BURST_20200111151013235_COVER_2_8445125efc/medium_00100sr_PORTRAIT_00100_BURST_20200111151013235_COVER_2_8445125efc.jpg",
//     "hash": "medium_00100sr_PORTRAIT_00100_BURST_20200111151013235_COVER_2_8445125efc",
//     "mime": "image/jpeg",
//     "name": "medium_00100srPORTRAIT_00100_BURST20200111151013235_COVER_2.jpg",
//     "path": null,
//     "size": 68.39,
//     "width": 750,
//     "height": 681
//     },
//     "thumbnail": {
//     "ext": ".jpg",
//     "url": "https://storage.googleapis.com/bb-media-bucket/thumbnail_00100sr_PORTRAIT_00100_BURST_20200111151013235_COVER_2_8445125efc/thumbnail_00100sr_PORTRAIT_00100_BURST_20200111151013235_COVER_2_8445125efc.jpg",
//     "hash": "thumbnail_00100sr_PORTRAIT_00100_BURST_20200111151013235_COVER_2_8445125efc",
//     "mime": "image/jpeg",
//     "name": "thumbnail_00100srPORTRAIT_00100_BURST20200111151013235_COVER_2.jpg",
//     "path": null,
//     "size": 5.77,
//     "width": 172,
//     "height": 156
//     }
//     },
//     "hash": "00100sr_PORTRAIT_00100_BURST_20200111151013235_COVER_2_8445125efc",
//     "ext": ".jpg",
//     "mime": "image/jpeg",
//     "size": 365.25,
//     "url": "https://storage.googleapis.com/bb-media-bucket/00100sr_PORTRAIT_00100_BURST_20200111151013235_COVER_2_8445125efc/00100sr_PORTRAIT_00100_BURST_20200111151013235_COVER_2_8445125efc.jpg",
//     "previewUrl": null,
//     "provider": "google-cloud-storage",
//     "provider_metadata": null,
//     "created_at": "2021-01-29T18:30:41.586Z",
//     "updated_at": "2021-01-29T18:30:41.631Z"
//     }
//     }
//     ]
// }