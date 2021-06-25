import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div id="contact me">
        <div className="footer-content">
          <p>My Personal Websites</p>
          <ul className="socials">
            <li>
              <a
                href="https://www.linkedin.com/in/jared-sutch-5400b446/"
                target="_blank"
                rel="noopener"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/whitespice97"
                target="_blank"
                rel="noopener"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jwsutch/"
                target="_blank"
                rel="noopener"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/JaredWilliam97"
                target="_blank"
                rel="noopener"
              >
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href="mailto: sutch002@yahoo.com">
                <i className="fa fa-yahoo"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright &copy;2021 <span>Jared Sutch</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
