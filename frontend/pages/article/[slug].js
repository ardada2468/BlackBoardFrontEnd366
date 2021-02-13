import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
import Seo from "../../components/seo";
import { getStrapiMedia } from "../../lib/media";
import Typing from "react-typing-animation";
import Zoom from "react-reveal/Zoom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Article = ({
  article,
  articles,
  categories,
  homepage,
  global,
  landingpage,
  writers,
  vidcat,
  videos,
}) => {
  const imageUrl = getStrapiMedia(article.image);
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  return (
    <Layout categories={categories} vidcat={vidcat}>
      <Seo seo={seo} />
      <Zoom left cascade>
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin articalimg"
          data-src={imageUrl}
          data-srcset={imageUrl}
          data-uk-img
        ></div>
      </Zoom>
      {/* <Image className="img uk-light uk-padding uk-height-medium" data-src={imageUrl}></Image> */}

      <Zoom left cascade>
        <h1 className="Title">{article.title}</h1>
      </Zoom>

      <hr></hr>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown source={article.content} escapeHtml={false} />
          <hr className="uk-divider-small" />
          <Zoom left>
            <div
              className="uk-grid-small uk-flex-left writercard"
              data-uk-grid="true"
            >
              <div className="ImgContainer">
                {article.writer.picture && (
                  <Image
                    image={article.writer.picture}
                    style={{
                      position: "static",
                      borderRadius: "25%",
                      height: "auto",
                      width: "25%",
                      maxheight: "300px",
                    }}
                  />
                )}
              </div>
              <div className="uk-width-expand">
                <p className="uk-margin-remove-bottom">
                  Author: {article.writer.name}
                </p>
                <p className="uk-text-meta uk-margin-remove-top">
                  <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                </p>
              </div>
            </div>
          </Zoom>
          <Zoom left>
            <div
              className="uk-grid-small uk-flex-left writercard"
              data-uk-grid="true"
            >
              <div>
                {article.editor.Photo && (
                  <Image
                    image={article.editor.Photo}
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
                  Editor: {article.editor.Name}
                </p>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}&status=published`
  );
  const categories = await fetchAPI("/categories");
  const vidcat = await fetchAPI("/vid-catagories");
  return {
    props: { article: articles[0], categories, vidcat },
    revalidate: 1,
  };
}

export default Article;
