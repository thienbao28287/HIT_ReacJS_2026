import React from "react";
import "./Footer1.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main-content">
        <h3>SoftLand</h3>
        <p>
          Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
          eligendi fuga maxime saepe commodi placeat.
        </p>
        <div className="ft__social">
          <a href="#!">
            <div class="circle">
              <i class="fa-brands fa-x-twitter"></i>
            </div>
          </a>
          <a href="#!">
            <div class="circle">
              <i class="fa-brands fa-facebook"></i>
            </div>
          </a>
          <a href="#!">
            <div class="circle">
              <i class="fa-brands fa-instagram"></i>
            </div>
          </a>
          <a href="#!">
            <div class="circle">
              <i class="fa-brands fa-skype"></i>
            </div>
          </a>
          <a href="#!">
            <div class="circle">
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </a>
        </div>
        <hr />
        <div className="ft__author">
          <p>Copyright SoftLand All Rights Reserved</p>
          <p>Designed by BootstrapMade</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
