import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";
import Vidoes from "../../components/Videos";
import { Zoom } from "react-reveal";
const AllVids = ({
  categories,
  homepage,
  global,
  landingpage,
  writers,
  vidcat,
  videos,
}) => {
  return (
    <div>
      <Layout categories={categories} vidcat={vidcat}>
        {/* <Seo seo={homepage.seo} /> */}
        <div className="uk-section">
          <div className="uk-container uk-container-large">
          <Zoom left cascade duration={550}>
            <h1 className="Title">{"All Videos"}</h1>
          </Zoom>
            <hr></hr>
            <Zoom left>
              <Vidoes vidoes={videos}></Vidoes>
            </Zoom>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [categories, writers, vidcat, videos] = await Promise.all([
    fetchAPI("/categories"),
    fetchAPI("/writers"),
    fetchAPI("/vid-catagories"),
    fetchAPI("/videos"),
  ]);
  return {
    props: { categories, writers, vidcat, videos },
    revalidate: 1,
  };
}

export default AllVids;
