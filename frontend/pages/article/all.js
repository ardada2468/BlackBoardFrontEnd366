import React from "react";
import Articles from "../../components/articles";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";
import Typing from 'react-typing-animation';
import Zoom from 'react-reveal/Zoom';
  

const AllArticals = ({articles, categories, homepage, global, landingpage, writers, vidcat, videos}) => {



  return (

    <div>
    <Layout categories={categories} vidcat={vidcat} >
      <Seo seo={homepage.seo} />
        <div className="uk-section">
        <div className="uk-container uk-container-large">
        {/* <LandingPage></LandingPage> */}
        <Zoom left cascade duration={550}>
        <h1 className="Title">{homepage.hero.title}</h1>
      </Zoom>

          {/* <Zoom left> */}
          <Articles articles={articles} />
          {/* </Zoom> */}

        </div>
      </div>
    </Layout>
  </div>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage, global, landingpage, writers, vidcat, videos] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/global"),
    fetchAPI("/landing-page"),
    fetchAPI("/writers"),
    fetchAPI("/vid-catagories"),
    fetchAPI("/videos"),

  ]);
  return {
    props: {articles, categories, homepage, global, landingpage, writers, vidcat, videos},
    revalidate: 1,
  };

}


export default AllArticals;
