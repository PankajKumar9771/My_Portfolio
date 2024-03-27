import ui from "../../assets/ui.jpg";
import web from "../../assets/web.jpg";
import app from "../../assets/app.png";
import "./about.css";
export default function About() {
  return (
    <section id="about">
      <div className="do">
        <h2 className="heading">What I do</h2>

        <p>
          I design user-centric websites and applications, focusing on intuitive
          interfaces and seamless user experiences. With expertise in UI/UX
          design, I create visually appealing designs that prioritize
          functionality and accessibility. My portfolio showcases projects that
          reflect my commitment to crafting engaging digital experiences
          tailored to user needs and business objectives.
        </p>
      </div>
      <div className="skills">
        <div className="skillbar">
          <img src={ui} alt="" className="skillImg" />
          <div className="skillContent">
            <h2>UI/UX</h2>
            <p>
              UI/UX focuses on intuitive interfaces and seamless experiences,
              integrating design elements for user satisfaction and engagement
              in digital products and platforms.
            </p>
          </div>
        </div>
        <div className="skillbar">
          <img src={web} alt="" className="skillImg" />
          <div className="skillContent">
            <h2>Web Dev</h2>
            <p>
              Web design integrates aesthetics, user experience, and
              functionality for engaging websites, encompassing graphic design,
              responsive layouts, and optimized content.
            </p>
          </div>
        </div>
        <div className="skillbar">
          <img src={ui} alt="" className="skillImg" />
          <div className="skillContent">
            <h2>App Dev</h2>
            <p>
              Apps offer efficient, user-friendly solutions for various needs,
              leveraging technology to streamline tasks and enhance experiences
              across devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
