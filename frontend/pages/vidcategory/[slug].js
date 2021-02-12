import Articles from "../../components/articles";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Vidoes from "../../components/Videos"
const Category = ({category, categories, vidcat, articalCat }) => {
  const seo = {
    metaTitle: category.Name,
    metaDescription: `All ${category.Name} videos`,
  };

  return (
    <Layout categories={articalCat} vidcat={vidcat}>
      <Seo seo={seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1 className="Title">{category.Name}</h1>
            {<Vidoes vidoes={category.videos}></Vidoes>}
          {/* <Articles articles={category.articles} /> */}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI("/vid-catagories");

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
  const category = (await fetchAPI(`/vid-catagories?slug=${params.slug}`))[0];
  const categories = await fetchAPI("/vid-catagories");
  const articalCat = await fetchAPI("/categories");
  const vidcat = await fetchAPI("/vid-catagories");

  return {
    props: { category, categories, vidcat, articalCat },
    revalidate: 1,
  };
}

export default Category;
