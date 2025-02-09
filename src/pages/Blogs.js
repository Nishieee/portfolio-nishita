import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import BlogNavBar from "../components/blog_navbar";
import { Helmet } from "react-helmet";

function Blogs() {
  useEffect(() => {
    document.title = "nishita's thoughts (/ω＼)";
  }, []);

  return (
    <div>
      <Helmet>
        <meta name="description" content="nishita's thoughts" />
      </Helmet>
      <div className="flex-container" id="blog_header_card">
        <h1 id="blog_header">thoughts</h1>
        <BlogNavBar />
      </div>

      <p>a tiny page to jot down my big thoughts in the form of poems.</p>
      <hr className="dashed" />

      {/* BostonWinter blog post link */}
      <p>
        <NavLink to="/blogs/bostonwinter" className="clickable">
          <u>In Boston’s Winter</u>
        </NavLink>
        <br />
        <br />
        Reflections on Boston’s winter and nature
        <br />
        <br />
        -- Dec 10, 2024
      </p>

      <hr style={{ margin: "20px 0" }} />

      <p>
        <NavLink to="/blogs/newyork" className="clickable">
          <u>New York</u>
        </NavLink>
        <br />
        <br />
        A simple look at New York’s lively streets and the dreams they spark.
        <br />
        <br />
        -- Oct 18x, 2025
      </p>

      {/* You can add more blog links below as needed */}
    </div>
  );
}

export default Blogs;
