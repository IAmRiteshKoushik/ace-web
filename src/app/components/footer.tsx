import React from "react";
import "./footer_styles.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col">
          <div className="social-icons">
            <i id="member" className="fa-solid fa-people-group"></i>
          </div>
          <p>
            Start your journey into the world of start-ups and innovations by
            becoming a part of our club
          </p>
        </div>
        <div className="col">
          <div className="social-icons" id="media">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-google"></i>
          </div>
          <p>
            Start your journey into the world of start-ups and innovations by
            becoming a part of our club
          </p>
        </div>
        <div className="col">
          <div className="social-icons">
            <form>
              <i className="fa-regular fa-envelope"></i>
              <input type="email" placeholder="  Enter your email" required />
              <i className="fa-solid fa-arrow-right"></i>
            </form>
          </div>
          <p>
            Start your journey into the world of start-ups and innovations by
            becoming a part of our club
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
