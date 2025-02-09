import { useEffect } from "react";
import { Helmet } from "react-helmet";
import BlogNavBar from "../../components/blog_navbar";
import image from "../../assets/boston.png"; // Use a relative path within src

function BostonWinter() {
  useEffect(() => {
    document.title = "In Boston’s Winter";
  }, []);

  // Container for the entire content (text and image)
  const containerStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "20px",
    marginTop: "20px",
  };

  // Style for the image frame (wrapper)
  const imageFrameStyle = {
    border: "2px solid #ccc",
    padding: "10px",
    borderRadius: "8px",
    width: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  // Style for the image itself (fills the frame)
  const imageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
  };

  // Styles for the poem text and date
  const poemTextStyle = {
    lineHeight: "1.6",
    fontSize: "1.1em",
  };

  const dateStyle = {
    textAlign: "right",
    fontStyle: "italic",
    marginTop: "20px",
  };

  return (
    <div>
      <BlogNavBar />
      <Helmet>
        <meta name="description" content="A reflective poem 'In Boston’s Winter'" />
      </Helmet>
      <div style={{ padding: "20px" }}>
        <h1>In Boston’s Winter</h1>
        <div style={containerStyle}>
          {/* Poem text section */}
          <div style={{ flex: "1" }}>
            <p style={poemTextStyle}>
              In Boston’s winter, <br />
              the cold shows me the way. <br />
              Frosty mornings and snowy nights <br />
              help me grow each day.
            </p>
            <p style={poemTextStyle}>
              Every icy breeze <br />
              teaches me strength and care— <br />
              in winter’s quiet moments, <br />
              I learn to be brave.
            </p>
            <p style={poemTextStyle}>
              No winter is harsh if you look closely, <br />
              and at the end of the day, <br />
              I know that everything will be okay.
            </p>
            <p style={dateStyle}>-- Dec 10, 2024</p>
          </div>
          {/* Image section inside a frame */}
          <div style={imageFrameStyle}>
            <img src={image} alt="Charles River - Boston Winter Scene" style={imageStyle} loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BostonWinter;
