import ui from "../../assets/ui.jpg";
import "./work.css";

export default function Works() {
  return (
    <section className="works">
      <h2 className="port">My Portfoliyo</h2>
      <p className="desc">
        In my Portfoliyo, you'll find a culmination of my passion for design and
        technology. With a background in [insert relevant background], I bring
        creativity, innovation, and technical expertise to every project.
      </p>
      <div className="portImages">
        <img src={ui} alt="" className="portImg" />
        <img src={ui} alt="" className="portImg" />
        <img src={ui} alt="" className="portImg" />
        <img src={ui} alt="" className="portImg" />
        <img src={ui} alt="" className="portImg" />
        <img src={ui} alt="" className="portImg" />
          </div>
          <button className="btn">See More</button>
    </section>
  );
}
