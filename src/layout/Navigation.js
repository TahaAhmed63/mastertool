import {Link} from "react-router-dom";
// import { Fragment,  } from "react";
import { connect } from "react-redux";
import { navigationToggle } from "../redux/actions/siteSettings";
const Navigation = ({ navigation, navigationToggle }) => {
  // const [subMenu, setSubMenu] = useState(null);
  return (
    <>
      <div
        onClick={() => navigationToggle(false)}
        className={`metaportal_fn_leftnav_closer ${navigation ? "active" : ""}`}
      />
      <div className={`metaportal_fn_leftnav ${navigation ? "active" : ""}`}>
      <Link
          href="#"
          className="fn__closer"
          onClick={() => navigationToggle(false)}
        >
          <span />
       </Link>
        <div className="navbox">
          <div className="list_holder">
            {/* <ul className="metaportal_fn_items">
              <li>
                <div className="item">
                <Link
                    href="https://opensea.io/"
                    target="_blank"
                    rel="noreferrer"
                  />
                  <span className="icon">
                    <img src="/img/market/opensea.png" alt="" />
                  </span>
                  <span className="text">Opensea</span>
                </div>
              </li>
              <li>
                <div className="item">
                <Link
                    href="https://discord.com/"
                    target="_blank"
                    rel="noreferrer"
                  />
                  <span className="icon">
                    <img src="/img/market/discord.png" alt="" />
                  </span>
                  <span className="text">Discord</span>
                </div>
              </li>
            </ul> */}
          </div>
          <div className="nav_holder">
            {/* For JS */}
            <span className="icon">
              <img src="/svg/down.svg" alt="" className="fn__svg" />
            </span>
            {/* For JS */}
            <ul
              style={{
                transform: `translateX(${ null ? "-100" : "0"}%)`,
              }}
            >
              <li>
              <Link
                  to="/"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   setSubMenu("home");
                  // }}
                  // className={`${subMenu == "home" ? "active" : ""}`}
                >
                  <span className="creative_link">
                    Home
                    <img src="/svg/down.svg" alt="" className="fn__svg" />
                  </span>
               </Link>
                {/* <ul className="sub-menu">
                  <li>
                  <Link
                      href="#"
                      className="prev"
                      onClick={() => setSubMenu(null)}
                    >
                      <span className="creative_link">
                        <img src="/svg/down.svg" alt="" className="fn__svg" />
                        Home
                      </span>
                   </Link>
                  </li>

                  <li>
                    <Link href="/">
                    <Link onClick={() => navigationToggle(false)}>
                        <span className="creative_link">#1 3D Carousel</span>
                     </Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-2">
                    <Link onClick={() => navigationToggle(false)}>
                        <span className="creative_link">
                          #2 Bended Carousel
                        </span>
                     </Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-3">
                    <Link onClick={() => navigationToggle(false)}>
                        <span className="creative_link">
                          #3 Video Background
                        </span>
                     </Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-4">
                    <Link onClick={() => navigationToggle(false)}>
                        <span className="creative_link">#4 Water Effect</span>
                     </Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-5">
                    <Link onClick={() => navigationToggle(false)}>
                        <span className="creative_link">
                          #5 Simple Carousel
                        </span>
                     </Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-6">
                    <Link onClick={() => navigationToggle(false)}>
                        <span className="creative_link">
                          #6 Fullscreen Slider
                        </span>
                     </Link>
                    </Link>
                  </li>
                </ul> */}
              </li>
              {/* <li>
                <Link href="/nft/1">
                <Link onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Mint Page</span>
                 </Link>
                </Link>
              </li> */}
                  <li>
                <Link href="/about">
                <Link onClick={() => navigationToggle(false)}>
                    <span className="creative_link">About</span>
                 </Link>
                </Link>
              </li>
              <li>
                <Link href="/collection">
                <Link onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Charecters</span>
                 </Link>
                </Link>
              </li>
          
              {/* <li>
              <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSubMenu("pages");
                  }}
                  className={`${subMenu == "pages" ? "active" : ""}`}
                >
                  <span className="creative_link">
                    Pages
                    <img src="/svg/down.svg" alt="" className="fn__svg" />
                  </span>
               </Link>
                <ul className="sub-menu">
                  <li>
                  <Link
                      href="#"
                      className="prev"
                      onClick={() => setSubMenu(null)}
                    >
                      <span className="creative_link">
                        <img src="/svg/down.svg" alt="" className="fn__svg" />
                        Pages
                      </span>
                   </Link>
                  </li>

                  <li>
                    <Link href="/coming-soon">
                    <Link onClick={() => navigationToggle(false)}>
                        <span className="creative_link">Coming Soon</span>
                     </Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/404">
                    <Link onClick={() => navigationToggle(false)}>
                        <span className="creative_link">404 Page</span>
                     </Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/protected">
                    <Link onClick={() => navigationToggle(false)}>
                        <span className="creative_link">Protected Page</span>
                     </Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/no-results">
                    <Link onClick={() => navigationToggle(false)}>
                        <span className="creative_link">Search No Results</span>
                     </Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookies">
                    <Link onClick={() => navigationToggle(false)}>
                        <span className="creative_link">Cookies</span>
                     </Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/policy">
                    <Link onClick={() => navigationToggle(false)}>
                        <span className="creative_link">Privacy Policy</span>
                     </Link>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">
                    <Link onClick={() => navigationToggle(false)}>
                        <span className="creative_link">
                          Terms &amp; Conditions
                        </span>
                     </Link>
                    </Link>
                  </li>
                </ul>
              </li> */}
              {/* <li>
                <Link href="/blog">
                <Link onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Blog</span>
                 </Link>
                </Link>
              </li> */}
              <li>
                <Link href="/news">
                <Link onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Blog</span>
                 </Link>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                <Link onClick={() => navigationToggle(false)}>
                    <span className="creative_link">contact</span>
                 </Link>
                </Link>
              </li>
            </ul>
          </div>
          <div className="info_holder">
            <div className="copyright">
              <p>
                Copyright 2023 - Designed &amp; Developed by{" "}
              <Link
                 
                >
                  HNH Softtech Solutions
               </Link>
              </p>
            </div>
            <div className="social_icons">
              <ul>
                <li>
                <Link href="#">
                    <img
                      src="/svg/social/twitter-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                 </Link>
                </li>
                <li>
                <Link href="#">
                    <img
                      src="/svg/social/facebook-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                 </Link>
                </li>
                <li>
                <Link href="#">
                    <img
                      src="/svg/social/instagram-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                 </Link>
                </li>
                <li>
                <Link href="#">
                    <img
                      src="/svg/social/pinterest-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                 </Link>
                </li>
                <li>
                <Link href="#">
                    <img
                      src="/svg/social/behance-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                 </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  navigation: state.site.navigation,
});
export default connect(mapStateToProps, { navigationToggle })(Navigation);
