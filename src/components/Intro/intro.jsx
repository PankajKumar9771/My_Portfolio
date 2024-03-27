import "./intro.css";
import bg from "../../assets/bg.png";
// import bg1 from "../../assets/bg1.jpg"
export default function () {
  return (
    <>
      <section id="intro">
        <div className="introContent">
          <span className="introHello">Hello , </span>
          <span className="introText">
            I'm <span className="introName">Pankaj</span>
            <br />
            Web Developer
          </span>

          <p className="introPara">
            I am a skilled web developer with experience in creating
            <br /> visually appealing and user friendly website.
          </p>
          <button className="introBtn">
            <i className="fa-solid fa-suitcase"></i>Hire Me !
          </button>
        </div>
        <img src={bg} alt="bg" className="bg" />
      </section>
    </>
  );
}
