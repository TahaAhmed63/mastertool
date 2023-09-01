import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="left_part">
            <p>
              Copyright 2023 — Designed &amp; Developed by{" "}
              <Link
              to=""
                target="_blank"
                rel="noreferrer"
              >
                HNH Softech Solutions
              </Link>
            </p>
          </div>
          <div className="right_part">
            <ul>
              <li>
                <Link to="/policy">
                  <Link className="creative_link">Privacy Policy</Link>
                </Link>
              </li>
              <li>
                <Link to="/cookies">
                  <Link className="creative_link">Cookies</Link>
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions">
                  <Link className="creative_link">Terms &amp; Conditions</Link>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
