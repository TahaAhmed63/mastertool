import {Link} from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import Layout from "../layout/Layout";
import PageBanner from "../layout/PageBanner";
import { getNfts } from "../redux/actions/nfts";
const CollectionDetail = ({ getNfts, cardData }) => {
  useEffect(() => { 
 
    window.scrollTo(0,0)

 }, []);
  useEffect(() => {
    getNfts();
  }, [getNfts]);

  // const getSplitData = (type) => {
  //   return type.split(" ").join("-");
  // };
  return (
    <Layout pageTitle={"Charecters"}>
      <PageBanner pageName={"Charecters"} />

      {/* Collection Page */}
      <div className="metaportal_fn_collectionpage">
        <div className="container">
          <div className="metaportal_fn_collection">
            {/* Filters */}

            {/* !Filters */}
            <div className="metaportal_fn_clist">
              {/* Result Box */}

              {/* !Result Box */}
              {/* Result List */}
              <div className="metaportal_fn_result_list">
                <div className="metaportal_fn_drops">
                  <ul className="grid">
                    {cardData &&
                      cardData.map((nft, i) => (
                        <li
                          // className={
                          //   getSplitData(nft.type) +
                          //   " " +
                          //   getSplitData(nft.special) +
                          //   " " +
                          //   getSplitData(nft.clothing)
                          // }
                          key={i}
                        >
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src={nft.groovy_cg_thumbnail} alt="" />
                              <Link to={`/nft/${nft.id}`}>
                                <Link to={`/nft/${nft.id}`} className="full_link" />
                              </Link>
                            </div>
                            <div className="title_holder">
                              <h3 className="fn_title">
                                <Link to={`/nft/${nft.id}`}>{nft.name}</Link>
                              </h3>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              {/* !Result List */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  cardData: state.nfts.cardData,
});

export default connect(mapStateToProps, { getNfts })(CollectionDetail);
