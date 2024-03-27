import facebook from "../../assets/facebook.png";
import amazon from "../../assets/amazon.png";
import microsoft from "../../assets/microsoft.png";
import google from "../../assets/google.png";
import "./contact.css";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0yz4ofq", "template_ravtuhv", form.current, {
        publicKey: "jCC3y34VU6imaLXvY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contactMain">
      <div id="clients">
        <h2 className="clientHeading">My Clients</h2>
        <p className="clientDesc">
          Clients in Portfoliyo are diverse, each with unique needs and goals.
          From individuals to businesses, we tailor solutions, build
          relationships, and deliver exceptional service to ensure success.
        </p>
        <div className="clientImgs">
          <img src={facebook} alt="clientImg" className="clientImg" />
          <img src={amazon} alt="clientImg" className="clientImg" />
          <img src={google} alt="clientImg" className="clientImg" />
          <img src={microsoft} alt="clientImg" className="clientImg" />
        </div>
      </div>
      <div id="contactUs">
        <h2 className="contactHeading">Contact Us</h2>
        <span className="contactDesc">
          Connect with Portfoliyo today to explore personalized solutions for
          your financial needs. Our dedicated team is ready to assist you in
          achieving your goals. Reach out now for expert guidance.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            name="user_name"
            placeholder="Your name"
            required
          />
          <input
            type="email"
            className="email"
            name="user_email"
            placeholder="Your email"
            required
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            className="contactMsg"
            required
          ></textarea>
          <button type="submit" className="submitBtn" value="Send">
            Submit
          </button>
        </form>
        <div className="links">
          <a href="" className="social">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="" className="social">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="" className="social">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="" className="social">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
