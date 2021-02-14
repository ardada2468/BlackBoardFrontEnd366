import React from "react";
import Articles from "../../components/articles";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { fetchAPI, getStrapiURL } from "../../lib/api";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Image from "../../components/image";
import { getStrapiMedia } from "../../lib/media";
import Typist from "react-typist";
import Example from "../../components/TextAffect";
import TextLoop from "react-text-loop";
import { Wave } from "react-animated-text";
import { Random } from "react-animated-text";
import ScrollAnimation from "react-animate-on-scroll";
import Typing from "react-typing-animation";
import Zoom from "react-reveal/Zoom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Container, Row, Col } from "react-bootstrap";
import GeneralCard from "../../components/GeneralMemberCard"

const aboutus = ({
  categories,
  global,
  landingpage,
  vidcat,
  genMembers,
}) => {


  return (
    <div>
      <Layout categories={categories} vidcat={vidcat}>
            <div>
                <h1 className="Title">Meet the Team</h1>
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTW_uFkHTqJuPGjK3605w9FFIxCeejW4pIh-RD4KLNSRgdVo7KQyhyzn8upmtYSAld04x8aQV-nBuu5/embed?start=true&amp;loop=true&amp;delayms=15000" width="1440" height="839" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
            </div>
      </Layout>
    </div>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [
    categories,
    global,
    landingpage,
    vidcat,
    genMembers,

  ] = await Promise.all([
    fetchAPI("/categories"),
   fetchAPI("/global"),
    fetchAPI("/landing-page"),  
    fetchAPI("/vid-catagories"),
    fetchAPI("/General-Members")

  ]);
  return {
    props: {
     
      categories,
      global,
      landingpage,
      vidcat,
      genMembers,
    },
    revalidate: 1,
  };
}

export default aboutus;
