// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import BlogNavBar from "../components/blog_navbar";
// import ImageHoverCard from "../components/image_hover_card";
// import { Helmet } from "react-helmet";

// function Log() {
//   useEffect(() => {
//     document.title = "mihir's log (/ω＼)";
//     document.metaDescription = "test";
//   }, []);

//   return (
//     <div>
//       <Helmet>
//         <meta name="description" content="mihir's logbook" />
//       </Helmet>
//       <div class="flex-container" id="blog_header_card">
//         <h1 id="blog_header">logbook</h1>
//         <BlogNavBar></BlogNavBar>
//       </div>

//       <p>
//         archive of events and adventures and eye rolls{" "}
//       </p>
//       <hr class="dashed"></hr>
//       {/* <p>
//         <b>Aug 2023</b>
//         <br />-{" "}
//         <NavLink to="/blogs/nyc" class="clickable">
//           <u>[blog]</u>
//         </NavLink>{" "}
//         a nyc summer
//         <br />-{" "}
//         <NavLink to="/blogs/google" class="clickable">
//           <u>[blog]</u>
//         </NavLink>{" "}
//         a summer with google
//         <br />- went viral on{" "}
//         <a
//           href="https://twitter.com/qvinnh/status/1688944756422836224?s=20"
//           class="clickable"
//           target="_blank"
//         >
//           twitter
//         </a>
//       </p>
//       <p>
//         <b>July 2023</b>
//         <br />- broke staging lol
//         <br />- saw a baseball game in ny :)
//         <br />- visited <ImageHoverCard
//           text="sf"
//           imageSrc={"/images/sf.png"}
//         />{" "}
//         and the <ImageHoverCard text="bay area" imageSrc={"/images/bay.png"} />{" "}
//         for the first time!
//       </p>
//       <p>
//         <b>June 2023</b>
//         <br />- survived new york{" "}
//         <ImageHoverCard text="smog" imageSrc={"/images/smog.png"} />{" "}
//         <nobr>(ºΔº)</nobr>
//       </p>
//       <p>
//         <b>May 2023</b>
//         <br />- started working at google on their editors accessibility team
//         <nobr>ヽ(・∀・)ﾉ</nobr>
//         <br />- moved to nyc for the summer
//       </p>
//       <p>
//         <b>Mar 2023</b>
//         <br />- signed an offer with google for the summer! <br /> -{" "}
//         <NavLink to="/blogs/quinn-ai" class="clickable">
//           <u>[blog]</u>
//         </NavLink>{" "}
//         added{" "}
//         <NavLink to="/quinn-ai" class="clickable">
//           <u>quinn ai</u>
//         </NavLink>{" "}
//         to the website
//       </p>
//       <p />
//       <p>
//         <b>Feb 2023</b>
//         <br />- created this website!
//       </p>
//       <p />
//       <p>
//         <b>Jul 2022</b>
//         <br />- biked my first century mile with the same{" "}
//         <ImageHoverCard text="friends" imageSrc={"/images/bikers.png"} />{" "}
//         (toronto -&gt; niagara falls)
//       </p>
//       <p />
//       <p>
//         <b>June 2022</b>
//         <br />- biked 75km for brain health with my{" "}
//         <ImageHoverCard text="friends" imageSrc={"/images/friends.png"} />{" "}
//         <ImageHoverCard
//           text="(i at a banana on the highway)"
//           imageSrc={"/images/banana.png"}
//         />{" "}
//         <br />- went to{" "}
//         <ImageHoverCard text="vancouver" imageSrc={"/images/vancouver.png"} />!
//       </p>
//       <p />
//       <p>
//         <b>May 2022</b>
//         <br />- started my first pm internship with purolator!
//       </p>
//       <p>
//         <p />
//         <b> Feb 2022</b>
//         <br />- snowboarded the{" "}
//         <ImageHoverCard
//           text="west coast"
//           imageSrc={"/images/snowboarding.png"}
//         />{" "}
//         for the first time
//       </p>
//       <p>
//         <p />
//         <b> Aug 2021</b>
//         <br />- hiked{" "}
//         <ImageHoverCard
//           text="lake garibaldi"
//           imageSrc={"/images/garibaldi.png"}
//         />
//         (first big hike)
//       </p>
//       <p /> */}
//       <p></p>
//       <p>
//         <b> June 2024</b>
//         <br />- started my ML internship at Kohler Co. working on vision inspection
//         <br /> [music recc] 360 by charli xcx (it's brat summer :P)
//       </p>
//       <p>
//         <b> May 2024</b>
//         <br />- wrapped up my first semester with three amazing courses (re: first blog for more details!)
//         <br />- spent lots of time in parks watching squirrels and reading books
//         <br />- started cooking a lot : pasta, brownies and more
//       </p>
//       <p>
//         <b> April 2024</b>
//         <br />- saw the solar eclipse!
//         <br />- celebrated holi in the US for the first time
//         <br />- generated (deformed) cats for my vision class
//       </p>
//       <p>
//         <b> March 2024</b>
//         <br />- started working in the (x)Ability Design Lab at UIUC on a health agent with GPT for low-vision users
//         <br />[music recc] vintage red by jay jay pistolet
//       </p>
//       <p>
//         <b> February 2024</b>
//         <br />- became a regular library goer and geese watcher (they're so cute!)
//       </p>
//       <p>
//         <b> Jan 2024</b>
//         <br />- exploring the snowy UIUC and excited for classes from 16th!
//       </p>
//       <p>
//         <b> Dec 2023</b>
//         <br />- submitted my senior year thesis work with Prof. Shashikant Dugad on QA framework for components in the CMS experiment to the Journal of Instrumentation (JINST)
//         <br />- shifted to Champaign, IL for grad school
//       </p>
//       <p>
//         <b> Oct 2023</b>
//         <br />- resumed my work as a Research Assitant with Dr. Sarika Jain on Legal AI exploring judgement predictions
//       </p>
//       <p />
//       <p>
//         <b> Sept 2023</b>
//         <br />- getting the hang of AWS with CLoud Practitioner Essentials
//         <br />[music recc] not strong enough by boy genius
//       </p>
//       <p />
//       <p>
//         <b> Aug 2023</b>
//         <br />- started teaching math as a volunteer at Teach for India
//         <br />[film recc] joyland by saim sadiq
//       </p>
//       <p />
//       <p>
//         <b> Jun 2023</b>
//         <br />- biked all night for 16kms with friends for funnies
//         <br />[music recc] did you know there is a tunnel under the ocean blvd by lana del rey
//       </p>
//       <p />
//       <p>
//         <b> Mar 2023</b>
//         <br />- conducted the Syrus Hackathon 2023 with CodeCell-VESIT
//       </p>
//       <p />
//       <p>
//         <b> Feb 2023</b>
//         <br />[show recc] the last of us on HBO
//       </p>
//       <p />
//       <p>
//         <b> Jan 2023</b>
//         <br />- went to my senior year trip with friends to North India and made a lot of sweet memories
//         <br />- did debates and poetry for the college festival
//         <br />[music recc] crush by ethel cain
//       </p>
//       <p />
//       <p>
//         <b>Dec 2022</b>
//         <br />- saw a beautiful sunset at Suruchi beach, IN
//         <br />- went to Goa, IN and ate a lot
//         <br />[film recc] after sun by charlotte wells
//       </p>
//       <p />
//       <p>
//         <b>Oct 2022</b>
//         <br />- gave my TOEFL
//         <br />- went to Aurangabad, IN and saw big caves at Ajanta-Ellora
//         <br />- went to my first concert (prateek kuhad) and cried
//         <br />[music recc] portrait of time by peter cat recording co.
//       </p>
//       <p />
//       <p>
//         <b>Aug 2022</b>
//         <br />- gave my GRE
//         <br />- started my remote research internship at National Institute of Technology - Kurukshetra, IN
//         <br />- went to Calcutta, IN and won the National Smart India Hackathon 2022
//       </p>
//       <p />
//       <p>
//         <b>July 2022</b>
//         <br /> [music recc] punisher by phoebe bridgers
//       </p>
//       <p />
//       <p>
//         <b>May 2022</b>
//         <br />- the paper from ICIRTE conference proceedings is now available to read on Elsevier SSRN
//       </p>
//       <p />
//       <p>
//         <b>April 2022</b>
//         <br />- presented my junior year work project titled 'DOT-HAZMAT' at 7th ICIRTE
//       </p>
//       <p />
//       <p>
//         <b>Mar 2022</b>
//         <br />- after two years of zoom, uni went offline again
//       </p>
//       <p />
//       <p>
//         <b>Jan 2022</b>
//         <br />- colored my hair purple and loved it
//         <br />- started my SWE internship at Atto Infotech
//         <br />[book recc] on earth we are briefly gorgeous by ocean vuong
//       </p>
//       <p />
//       <p>
//         <b>Nov 2021</b>
//         <br />- went to Rameswaram, IN and brought home a lot of seashells
//         <br />[show/book recc] tales of the city by armistead maupin

//       </p>
//       <p />
//       <p>
//         <b>Aug 2021</b>
//         <br />- started exploring machine learning and the highlight was my all time favorite video of neural networks by 3blue1brown
//       </p>
//       <p />
//       <p>
//         <b>Dec 2020</b>
//         <br />[show recc] fleabag by phoebe waller-bridge
//       </p>
//       <p />
//       <p>
//         <b>Mar 2020</b>
//         <br />- the pandemic hit us and i went back into my cocoon
//       </p>
//       <p />
//       <p>
//         <b>Sept 2019</b>
//         <br />- went to Singapore and held a parrot on my arm
//         <br />[book recc] god of small things by arundhati roy
//       </p>
//       <p />
//       <p>
//         <b>Aug 2019</b>
//         <br />- started studying at VESIT, University of Mumbai
//       </p>
//       <p>
//         .
//         <br />.
//         <br />.
//         <br /> collection of mildly sweet moments :3
//         <br />.
//         <br />.
//         <br />.
//       </p>
//       <p>
//         <b>Jan 2002</b>
//         <br />- birth
//       </p>

//       <p>
//         if you'd like to discuss anything ML/data or film/music, please feel free to write to me :)</p>
//     </div>
//   );
// }

// export default Log;
