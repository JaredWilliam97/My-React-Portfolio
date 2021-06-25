import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div id="contact me">
        <div className="footer-content">
          <p>My Personal Websites</p>
          <ul className="socials">
            <li>
              <Link
                href="https://www.linkedin.com/in/jared-sutch-5400b446/"
                target="_blank"
                rel="noopener"
              >
                <i className="fa fa-linkedin-square"></i>
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/whitespice97"
                target="_blank"
                rel="noopener"
              >
                <i className="fa fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/jwsutch/"
                target="_blank"
                rel="noopener"
              >
                <i className="fa fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/JaredWilliam97"
                target="_blank"
                rel="noopener"
              >
                <i className="fa fa-github"></i>
              </Link>
            </li>
            <li>
              <Link href="mailto: sutch002@yahoo.com">
                <i className="fa fa-yahoo"></i>
              </Link>
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
