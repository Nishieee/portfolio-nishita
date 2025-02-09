import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "Nishiee's Journey <3";
  }, []);

  return (
    <div>

      <p>
        <nobr><p>٩(◕‿◕｡)۶ LET’S GO!</p> </nobr>
      </p>

      <hr class="dashed" />

      <p>
        I'm all about lively energy and engaging conversations. You might find me at a busy book cafe—either
        lost in a great book or chatting passionately about the ideas that spark my curiosity.
        I can talk about my interests for hours, turning every conversation into a new adventure. Every cup of coffee just adds a little extra magic ☕.
      </p>



      <p> </p>

      <p>
        <b><i><u>currently:</u></i></b>
      </p>
      <p>
        I'm currently an AI Engineering Intern at <a href="https://www.humanitarians.ai/about" target="_blank" class="clickable"> Humanitarians AI</a>,
        where I build scalable data pipelines, integrate machine learning models, and transform raw data into actionable insights. I'm also a graduate student at
        <a href="https://www.northeastern.edu/" target="_blank" class="clickable"> Northeastern University</a>, specializing in data engineering and science.
        <br /><br />

        <p>
          I love using AI to simplify complex data into practical solutions. I'm driven by building projects that truly make a difference.
        </p>
        <br />
      </p>


      <p>
        <b><i><u>past experiences:</u></i></b>
      </p>
      <p>did some internships:</p>
      <ul>
        <li>
          worked as a Software Engineering Intern at <u>EPM Consultancy</u>, where i developed engineering projects using a range of tools to automate data pipelines, boost data processing scalability, ensure quality, and create robust APIs.
        </li>
        <br />
        <li>
          was a <u>Data Analyst intern</u> where in i was responsible for developing KPIs and interactive dashboards, optimizing workflows, and conducting A/B tests to boost product efficiency.

        </li>
        <br />

      </ul>
      <p></p>
      <p>
        I'm also involved in <u>multiple clubs</u>, including NEU Data Club, APMC, Black Cat Reads, and more—I'm all over the place!
      </p>
    </div>
  );
}

export default About;
