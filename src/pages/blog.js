import {Link} from "react-router-dom";
import Layout from "../layout/Layout";
import PageBanner from "../layout/PageBanner";
const Blog = () => {
  return (
    <Layout pageTitle={"Blog"}>
      <PageBanner pageName={"Blog Articles"} />

      <div className="metaportal_fn_bloglist">
        <div className="container small">
          <div className="bloglist">
            <ul className="fn-isotope">
              <li className="isotope-item">
                <div className="blog__item">
                  <div className="counter">
                    <span className="cc">
                      <span>01</span>
                    </span>
                  </div>
                  <div className="meta">
                    <p>August 09, 2022 / MetaVerse / 4 Comments</p>
                  </div>
                  <div className="title">
                    <h3>
                      <Link to="/blog-single">
                        <Link>Reasons Why People Use Discord</Link>
                      </Link>
                    </h3>
                  </div>
                  <div className="image">
                    <Link to="/blog-single">
                      <Link>
                        <img src="/img/blog/1.jpg" alt="" />
                      </Link>
                    </Link>
                  </div>
                  <div className="read_more">
                    <Link to="/blog-single">
                      <Link>
                        <span>Read More</span>
                      </Link>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="isotope-item">
                <div className="blog__item">
                  <div className="counter">
                    <span className="cc">
                      <span>02</span>
                    </span>
                  </div>
                  <div className="meta">
                    <p>August 09, 2022 / MetaVerse / 4 Comments</p>
                  </div>
                  <div className="title">
                    <h3>
                      <Link to="/blog-single">
                        <Link>Rewards for the Zoidster NFTs</Link>
                      </Link>
                    </h3>
                  </div>
                  <div className="image">
                    <Link to="/blog-single">
                      <Link>
                        <img src="/img/blog/2.jpg" alt="" />
                      </Link>
                    </Link>
                  </div>
                  <div className="read_more">
                    <Link to="/blog-single">
                      <Link>
                        <span>Read More</span>
                      </Link>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="isotope-item">
                <div className="blog__item">
                  <div className="counter">
                    <span className="cc">
                      <span>03</span>
                    </span>
                  </div>
                  <div className="meta">
                    <p>August 09, 2022 / MetaVerse / 4 Comments</p>
                  </div>
                  <div className="title">
                    <h3>
                      <Link to="/blog-single">
                        <Link>
                          A Behind-the-Scenes Look: How the BRAWL-O-SEUM NFT Was
                          Created
                        </Link>
                      </Link>
                    </h3>
                  </div>
                  <div className="image">
                    <Link to="/blog-single">
                      <Link>
                        <img src="/img/blog/3.jpg" alt="" />
                      </Link>
                    </Link>
                  </div>
                  <div className="read_more">
                    <Link to="/blog-single">
                      <Link>
                        <span>Read More</span>
                      </Link>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="isotope-item">
                <div className="blog__item">
                  <div className="counter">
                    <span className="cc">
                      <span>04</span>
                    </span>
                  </div>
                  <div className="meta">
                    <p>August 09, 2022 / MetaVerse / 4 Comments</p>
                  </div>
                  <div className="title">
                    <h3>
                      <Link to="/blog-single">
                        <Link>Land Redemption Day is coming!</Link>
                      </Link>
                    </h3>
                  </div>
                  <div className="image">
                    <Link to="/blog-single">
                      <Link>
                        <img src="/img/blog/4.jpg" alt="" />
                      </Link>
                    </Link>
                  </div>
                  <div className="read_more">
                    <Link to="/blog-single">
                      <Link>
                        <span>Read More</span>
                      </Link>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="metaportal_fn_pagination">
            <ul>
              <li>
                <span>1</span>
              </li>
              <li>
                <Link to="#">2</Link>
              </li>
              <li>
                <Link to="#">3</Link>
              </li>
              <li>
                <span>...</span>
              </li>
              <li>
                <Link to="#">77</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Blog;
