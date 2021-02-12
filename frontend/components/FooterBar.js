import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = ({landingpage}) => {
  return (
    <footer>
    <p>© Arnav Dadarya</p>
    </footer>
  );
}

export async function getStaticProps() {
    // Run API calls in parallel
    const [articles, categories, homepage, global, landingpage, writers, vidcat, videos, purposes] = await Promise.all([
      fetchAPI("/articles?status=published"),
      fetchAPI("/categories"),
      fetchAPI("/homepage"),
      fetchAPI("/global"),
      fetchAPI("/landing-page"),
      fetchAPI("/writers"),
      fetchAPI("/vid-catagories"),
      fetchAPI("/videos"),
      fetchAPI("/our-purposes"),
  
    ]);
    return {
      props: {articles, categories, homepage, global, landingpage, writers, vidcat, videos, purposes},
      revalidate: 1,
    };
  
  }

export default FooterPage;