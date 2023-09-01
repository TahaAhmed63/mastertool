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
                <Link>
                <Link className="creative_link">Master Tool</Link>
                </Link>
              </Link>
            </div>
          </div>
          <div className="nav" style={{ opacity: 1 }}>
            <ul>
              <li>
                <Link to="/">
                  <Link className="creative_link">Home</Link>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <Link className="creative_link">About</Link>
                </Link>
              </li>
              <li>
                <Link to="/collection">
                  <Link className="creative_link">Charecters</Link>
                </Link>
              </li>
              <li>
                <Link to="/news">
                  <Link className="creative_link">Blog</Link>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <Link className="creative_link">Contact</Link>
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="wallet">
            <Link
              to="#"
              // onClick={(e) => {
              //   e.preventDefault();
              //   walletToggle(true);
              // }}
              className="metaportal_fn_button wallet_opener"
            >
              <span>Download it</span>
            </Link>
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
