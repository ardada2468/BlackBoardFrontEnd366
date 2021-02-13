import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
import Seo from "../../components/seo";
import { getStrapiMedia } from "../../lib/media";

const Video = ({
  article,
  articles,
  categories,
  homepage,
  global,
  landingpage,
  writers,
  vidcat,
  videos,
  video,
}) => {
  const imageUrl = getStrapiMedia(video.VideoThumbnail);
  const seo = {
    metaTitle: video.title,
    metaDescription: video.description,
    shareImage: video.VideoThumbnail,
    video: true,
  };

  return (
    <Layout categories={categories} vidcat={vidcat}>
      <Seo seo={seo} />
      <div
        id="banner"
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin articalimg"
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
      ></div>
      {/* <Image className="img uk-light uk-padding uk-height-medium" data-src={imageUrl}></Image> */}
      <h1 className="Title">{video.Title}</h1>
      <hr></hr>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown source={video.HTMLVideo} escapeHtml={false} />

          <hr className="uk-divider-small" />
          <div
            className="uk-grid-small uk-flex-left writercard"
            data-uk-grid="true"
          >
            <div>
              {video.writer.picture && (
                <Image
                  image={video.writer.picture}
                  style={{
                    position: "static",
                    borderRadius: "25%",
                    height: "auto",
                    width: "25%",
                  }}
                />
              )}
            </div>
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">
                Author: {video.writer.name}
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">{video.published_at}</Moment>
              </p>
            </div>
          </div>
          <div
            className="uk-grid-small uk-flex-left writercard"
            data-uk-grid="true"
          >
            <div>
              {video.editor.Photo && (
                <Image
                  image={video.editor.Photo}
                  style={{
                    position: "static",
                    borderRadius: "25%",
                    height: "auto",
                    width: "25%",
                  }}
                />
              )}
            </div>
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">
                Editor: {video.editor.Name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const videos = await fetchAPI("/videos");

  return {
    paths: videos.map((video) => ({
      params: {
        slug: video.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const videos = await fetchAPI(`/videos?slug=${params.slug}&status=published`);
  const categories = await fetchAPI("/categories");
  const vidcat = await fetchAPI("/vid-catagories");
  return {
    props: { video: videos[0], categories, vidcat },
    revalidate: 1,
  };
}

export default Video;
