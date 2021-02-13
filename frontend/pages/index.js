import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI, getStrapiURL } from "../lib/api";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Image from "../components/image";
import { getStrapiMedia } from "../lib/media";
import Typist from "react-typist";
import Example from "../components/TextAffect";
import TextLoop from "react-text-loop";
import { Wave } from "react-animated-text";
import { Random } from "react-animated-text";
import ScrollAnimation from "react-animate-on-scroll";
import Typing from "react-typing-animation";
import Zoom from "react-reveal/Zoom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Container, Row, Col } from "react-bootstrap";

const Articals = ({
  articles,
  categories,
  homepage,
  global,
  landingpage,
  writers,
  vidcat,
  videos,
  purposes,
}) => {
  const style = {
    alignSelf: "center",
    width: "60%",
    margin: "auto",
    display: "block",
  };

  function getClassName(i) {
    if (i % 2 === 0) {
      return "SubjectsRight";
    } else return "SubjectsLeft";
  }

  let x = 0;
  function filterArt(articals) {
    let filterArt = [];
    for (let i = 0; i < articals.length; i++) {
      if (articals[i].content.includes("www.youtube.com")) {
        filterArt.push(articals[i]);
      }
    }
    console.log(filterArt);
  }

  filterArt(articles);

  return (
    <div>
      <Layout categories={categories} vidcat={vidcat}>
        <div className="MasterContainer">
          <div className="LandingCardBody">
            <div className="LandingCardCard">
              <img
                src={landingpage.DisplayImage.formats.large.url}
                alt="birthday"
                class="birthday"
              />
              <div className="LandingCardText">
                <h1>
                  <Typing speed={75}>{landingpage.HeaderTitle}</Typing>
                </h1>
                <h2 className="GetReadyTo">
                  {"A place to       "} <br></br>
                  <TextLoop interval={1050} mask={true}>
                    {purposes.map((purpose, i) => {
                      return (
                        <h2 className="flowingText">
                          <em>{["  " + purpose.Purpose]}</em>
                        </h2>
                      );
                    })}
                  </TextLoop>
                </h2>
              </div>
              <div className="LandingCardSpace"></div>
            </div>
          </div>

          <div className="MainSubjectContainer">
            <Zoom left>
              <div className="SubjectTitle">
                <h1>Subjects</h1>
              </div>
            </Zoom>

            <Zoom left>
              <div className="SubjectContainer">
                {categories.map((catagory) => {
                  x++;
                  return (
                    <div className={getClassName(x)}>
                      {console.log(x + " " + getClassName(x))}
                      <img src={catagory.Icon.formats.thumbnail.url}></img>
                      <h4>{catagory.name}</h4>
                    </div>
                  );
                })}
              </div>
            </Zoom>
          </div>

          <div className="OurPurpose">
            <div>
              <Zoom left>
                <div className="aboutUsCard">
                  <h1 className="Title">About Us</h1>
                  <p>{landingpage.OurPurpose}</p>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [
    articles,
    categories,
    homepage,
    global,
    landingpage,
    writers,
    vidcat,
    videos,
    purposes,
  ] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/global"),
    fetchAPI("/landing-page"),
    fetchAPI("/writers"),
    fetchAPI("/vid-catagories"),
    fetchAPI("/videos"),
    fetchAPI("/a-place-tos"),
  ]);
  return {
    props: {
      articles,
      categories,
      homepage,
      global,
      landingpage,
      writers,
      vidcat,
      videos,
      purposes,
    },
    revalidate: 1,
  };
}

export default Articals;
