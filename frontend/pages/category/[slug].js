import Articles from "../../components/articles";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Zoom from "react-reveal/Zoom";
import Reveal from "react-reveal/Reveal";
import Slide from "react-reveal/Slide";

const Category = ({ category, categories, vidcat }) => {
  const seo = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} articles`,
  };

  return (
    <Layout categories={categories} vidcat={vidcat}>
      <Seo seo={seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <Zoom left cascade duration={550}>
            <h1 className="Title">{category.name}</h1>
          </Zoom>
          <Zoom left>
            <Articles articles={category.articles} />
          </Zoom>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI("/categories");

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0];
  const categories = await fetchAPI("/categories");
  const vidcat = await fetchAPI("/vid-catagories");

  return {
    props: { category, categories, vidcat },
    revalidate: 1,
  };
}

export default Category;
