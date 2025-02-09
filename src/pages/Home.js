import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const hobbies = [
  "writing quotes on my instagram page",
  "cafe hopping around the city",
  "pretending to be busy",
  "walking through cities staring skylines",
  "sitting in grass",
  "eating some ramen",
  "walking through art galleries",
  "listening to phoebe bridgers",
  "bar hopping through neighbourhoods",
  "finding the best croissant to eat",
  "trying to find the nearest beach",
  "crafting a new playlist",
  "still breaking code lol",
];

const name = [
  "Nishita",
  "निशिता",
  "نشیتا",
  "尼什塔",
  "ニシタ",
];


function useWordCycle(words) {
  const [currentWord, setCurrentWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  const handleClick = () => {
    const currentIndex = words.indexOf(currentWord);
    const nextIndex = (currentIndex + 1) % words.length;
    setCurrentWord(words[nextIndex]);
  };

  return [currentWord, handleClick];
}

function Home() {
  useEffect(() => {
    document.title = "Nishiee's Journey <3";
  }, []);

  const [currentHobby, handleHobbyClick] = useWordCycle(hobbies);
  const [currentName, handleNameClick] = useWordCycle(name);


  return (
    <div>
      <h2>i'm <a class="clickable" id="name" onClick={handleNameClick}>
        {currentName}
      </a>  :)</h2>
      <p>
        a data analyst, engineer, and scientist currently pursuing graduate studies at <a href="https://www.northeastern.edu/" target="_blank" class="clickable">
          Northeastern University</a>.
        I focus on turning raw data into actionable insights through analysis, efficient pipeline design, and machine learning. Outside of work, I explore new cities, discover cafés, and enjoy gaming. Learn more about my current interests by clicking <a class="clickable" id="hobbies" onClick={handleHobbyClick}>
          {currentHobby}
        </a>.
      </p>

      <p>
        reach out to me anytime at{" "}
        <a href="mailto:matlaninishi@gmail.com" class="clickable">
          matlaninishi@gmail.com
        </a>
        <br />
      </p>
      <div class="box">
        i'm looking for full-time Data Analyst/Engineering positions from Aug 2025 in the States! shoot me an{" "}
        <a href="mailto:matlaninishi@gmail.com" class="clickable">
          email
        </a>{" "}
        if you (or your friends) are hiring &lt;3{" "} let's talk about why i'd be a good fit for your team.
      </div>
    </div>
  );
}

export default Home;
