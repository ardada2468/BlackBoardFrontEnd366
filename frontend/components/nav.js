import React from "react";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "material-ui-search-bar";

const Nav = ({ categories, VidCatogories }) => {
  return (
    <div>
      <nav className="uk-navbar-container NavBar " data-uk-navbar>
        <div className="uk-navbar-left NavBar">
          <ul className="uk-navbar-nav NavBar ">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>

            <li>
              <Link href="/article/all">
                <a>Articles</a>
              </Link>
              <div className="uk-navbar-dropdown dropdownnav">
                <ul className="uk-nav uk-navbar-dropdown-nav dropdownnav">
                  <li className="DropdownCat">
                    <Link href={"/article/all"}>
                      <a className="blacktext">{"All Articles"}</a>
                    </Link>
                    {/* <li class="uk-nav-divider"></li> */}
                  </li>
                  {categories.map((category) => {
                    return (
                      <li key={category.id} className="DropdownCat">
                        <Link
                          as={`/category/${category.slug}`}
                          href="/category/[id]"
                        >
                          <a className="blacktext">{category.name}</a>
                        </Link>
                        {/* <li class="uk-nav-divider"></li> */}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li>
              <Link href="/video/all">
                <a>Videos</a>
              </Link>
              <div className="uk-navbar-dropdown dropdownnav">
                <ul className="uk-nav uk-navbar-dropdown-nav dropdownnav">
                  <li className="DropdownCat">
                    <Link href={"/video/all"}>
                      <a className="blacktext">{"All Videos"}</a>
                    </Link>
                    {/* <li class="uk-nav-divider"></li> */}
                  </li>

                  {VidCatogories.map((vidcatagory) => {
                    return (
                      <li key={vidcatagory.id} className="DropdownCat">
                        <Link
                          as={`/vidcategory/${vidcatagory.slug}`}
                          href="/vidcategory/[id]"
                        >
                          {/* {console.log(vidcatagory.slug)} */}
                          <a className="blacktext">{vidcatagory.Name}</a>
                        </Link>

                        {/* <a className="blacktext">{vidcatagory.Name}</a> */}

                        {/* <li class="uk-nav-divider"></li> */}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right NavBar">
          <SearchBar
            value={"Search"}
            // onChange={(newValue) => this.setState({ value: newValue })}
            // onRequestSearch={() => doSomethingWith(this.state.value)}
          />

        </div>
      </nav>
    </div>
  );
};

export default Nav;
