import Nav from "./nav";
import FooterPage from "./FooterBar";

const Layout = ({ children, categories, seo, vidcat }) => (
  <>
    <Nav categories={categories} VidCatogories={vidcat} />
    {children}
    <FooterPage></FooterPage>
  </>
);

export default Layout;
