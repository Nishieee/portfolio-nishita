import { useEffect } from "react";
import React from 'react';

function Projects() {
  useEffect(() => {
    document.title = "Nishitas's projects ⊂((・▽・))⊃";
  }, []);

  return (
    <div>
      <p>
        some projects, find the rest on my{" "}
        <a href="https://github.com/Nishieee" class="clickable" target="_blank">
          github
        </a>{" "}
        <nobr>∩(︶▽︶)∩</nobr>
      </p>
      <hr class="dashed" />
      <p>
        <a
          href="https://nisheeematlani.notion.site/AIVY-AI-Powered-Learning-Assistant-194793336fb4804e930bdcfae9658adf?pvs=4"
          class="clickable"
          target="_blank"
        >
          <b>AIVY</b>
        </a>{" "}
        <br />
        an easy-to-use learning tool that uses AI and modern tech to combine text, videos, flashcards, and quizzes in one place for personalized learning.
      </p>


      <p>
        <a
          href="https://www.notion.so/nisheeematlani/Disaster-Response-Analyzer-194793336fb4809ebb4ce57f2de8a072"
          class="clickable"
          target="_blank"
        >
          <b>Disaster Response Analyzer</b>
        </a>{" "}
        <br /> is a simple tool that uses smart language processing and machine learning to quickly sort and prioritize emergency messages for faster disaster response.
      </p>
      <p>
        <a
          href="https://www.notion.so/nisheeematlani/Movie-Database-Management-System-194793336fb48001b46ee61a8d359d35"
          class="clickable"
          target="_blank"
        >
          <b>Movie Database</b>
        </a>{" "}
        <br />
        a simple platform that organizes movie data and lets users add reviews, ratings, custom watchlists, and visual data tools for an improved experience.
      </p>


      <p>
        <i>(this page is a work in progress, more projects and pictures coming soon!)</i>
      </p>
    </div>
  );
}

export default Projects;
