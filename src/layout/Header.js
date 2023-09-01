import {Link} from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
import { stickyNav } from "../utilits";

const Header = ({ walletToggle, navigationToggle }) => {
  useEffect(() => {
    stickyNav();
  }, []);

  return (
    <header id="header">
      <div className="header">
        <div className="header_in">
          <div className="trigger_logo">
            <div className="trigger" onClick={() => navigationToggle(true)}>
              <span />
            </div>
            <div className="logo">
              <Link to="/">
                <a>
                <a className="creative_link">Master Tool</a>
                </a>
              </Link>
            </div>
          </div>
          <div className="nav" style={{ opacity: 1 }}>
            <ul>
              <li>
                <Link to="/">
                  <a className="creative_link">Home</a>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <a className="creative_link">About</a>
                </Link>
              </li>
              <li>
                <Link to="/collection">
                  <a className="creative_link">Charecters</a>
                </Link>
              </li>
              <li>
                <Link to="/news">
                  <a className="creative_link">Blog</a>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <a className="creative_link">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="wallet">
            <a
              href="#"
              // onClick={(e) => {
              //   e.preventDefault();
              //   walletToggle(true);
              // }}
              className="metaportal_fn_button wallet_opener"
            >
              <span>Download it</span>
            </a>
          </div> */}
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  Header
);
