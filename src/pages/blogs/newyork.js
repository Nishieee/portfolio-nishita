import { useEffect } from "react";
import { Helmet } from "react-helmet";
import BlogNavBar from "../../components/blog_navbar";
import image from "../../assets/newyork.png"; // Use a relative path within src

function NewYorkVibrantBeat() {
    useEffect(() => {
        document.title = "New York’s Vibrant Beat";
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

    // Styles for the poem text (decreased font size from 1.1em to 1em)
    const poemTextStyle = {
        lineHeight: "1.6",
        fontSize: "1em",
    };

    // Optional: date style if you want to include a date
    const dateStyle = {
        textAlign: "right",
        fontStyle: "italic",
        marginTop: "20px",
    };

    return (
        <div>
            <BlogNavBar />
            <Helmet>
                <meta
                    name="description"
                    content="A reflective poem 'New York’s Vibrant Beat'"
                />
            </Helmet>
            <div style={{ padding: "20px" }}>
                <h1>New York’s Vibrant Beat</h1>
                <div style={containerStyle}>
                    {/* Poem text section */}
                    <div style={{ flex: "1" }}>
                        <p style={poemTextStyle}>
                            In New York, the city is always awake, <br />
                            Bright lights and busy streets make dreams come true. <br />
                            Every step holds a promise of something new, <br />
                            A spark of hope shining in all we do.
                        </p>
                        <p style={poemTextStyle}>
                            Each corner tells a story of courage and fight, <br />
                            Faces of strangers glow with a warm light. <br />
                            In the rush and hum of every busy street, <br />
                            I find the strength to chase dreams and never retreat.
                        </p>
                        <p style={poemTextStyle}>
                            Through crowded avenues and hidden quiet nooks, <br />
                            Every moment here writes a tale in its books, <br />
                            In this vibrant beat that never fades away, <br />
                            I learn to rise, to shine, and greet each day.
                        </p>
                        {/* Uncomment the next line if you want to display a date */}
                        {/* <p style={dateStyle}>-- Feb 09, 2025</p> */}
                    </div>
                    {/* Image section inside a frame */}
                    <div style={imageFrameStyle}>
                        <img
                            src={image}
                            alt="New York City Scene"
                            style={imageStyle}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewYorkVibrantBeat;
