import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import PageBanner from "../layout/PageBanner";
import { connect } from "react-redux";
import { getCharecter } from "../redux/actions/nfts";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const ListCharecter = ({ getCharecter, charData }) => {
  useEffect(() => {
    getCharecter();
  }, [getCharecter]);

  const isDataFetched = charData && charData.length > 0;

  return (
    <div>
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
                      {isDataFetched ? (
                        charData.map((nft, i) => (
                          <li key={i}>
                            <Flippy
                              flipOnHover={true}
                              flipOnClick={true}
                              style={{ width: "100%", height: "100%" }} // Set the dimensions as needed

                              // Set the dimensions as needed
                            >
                              <FrontSide>
                                {/* Front Content */}
                                <div className="nft__item">
                                  <div className="img_holder">
                                    <img src={nft.image} alt="" />
                                    <Link>
                                      <Link  className="full_link" />
                                    </Link>
                                  </div>
                                  <div className="title_holder">
                                    <h3 className="fn_title">
                                      <Link>{nft.name}</Link>
                                    </h3>
                                  </div>
                                </div>
                              </FrontSide>
                              {/* Back Content */}
                              <BackSide>
                                <div
                                  className={`Card-Detail game-card`}
                                  style={{
                                    cursor: "pointer",
                                    zIndex: "99999",
                                    position: "relative",
                                  }}
                                >
                                  <div
                                    class="container"
                                    style={{
                                      width: "100%",
                                      height: "500px",
                                    }}
                                  >
                                    <div class="card-2">
                                      <div class="imgBx">
                                  
                                      </div>
                                      <div class="contentBx">
                                        <h2
                                          // style={{
                                          //   msFontFeatureSettings: '"normal"',
                                          //   fontFamily:
                                          //     "Sorts Mill Goudy,Georgia,游明朝体,YuMincho,游明朝,Yu Mincho,ヒラギノ明朝 ProN W3,Hiragino Mincho ProN W3,HiraMinProN-W3,ヒラギノ明朝 ProN,Hiragino Mincho ProN,ヒラギノ明朝 Pro,Hiragino Mincho Pro,HGS明朝E,ＭＳ Ｐ明朝,MS PMincho,serif",
                                          //   fontSize: "2.604166666666667vw",
                                          //   fontWeight: 400,
                                          //   letterSpacing: ".05em",
                                          //   lineHeight: 1.25,
                                          //   width: "100%",
                                          // }}
                                        >{`${nft.name}`}</h2>
                                        <div class="size">
                                          <h3>Card Name :</h3>
                                          <h3>{`${nft.card.name}`}</h3>
                                        </div>
                                        <div class="size">
                                          <h3>Dorm:</h3>
                                          <h3>{`${nft.dorm.name}`}</h3>
                                        </div>
                                    
                                        <h2
                                          style={{
                                            msFontFeatureSettings: '"normal"',
                                            fontFamily:
                                              "Sorts Mill Goudy,Georgia,游明朝体,YuMincho,游明朝,Yu Mincho,ヒラギノ明朝 ProN W3,Hiragino Mincho ProN W3,HiraMinProN-W3,ヒラギノ明朝 ProN,Hiragino Mincho ProN,ヒラギノ明朝 Pro,Hiragino Mincho Pro,HGS明朝E,ＭＳ Ｐ明朝,MS PMincho,serif",
                                            fontSize: "2.604166666666667vw",
                                            fontWeight: 400,
                                            letterSpacing: ".05em",
                                            lineHeight: 1.25,
                                            width: "100%",
                                          }}
                                        >
                                         Obtain
                                        </h2>
                                        {nft.obtain.map((obtain, index) => (
                                          <Link
                                            style={{
                                              margin: "5px 10px 10px 5px",
                                            }}
                                            to="#"
                                          >
                                            {obtain}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                          
                                </div>
                              </BackSide>
                            </Flippy>
                          </li>
                        ))
                      ) : (
                        <div>Loading data...</div>
                      )}
                    </ul>
                  </div>
                </div>
                {/* !Result List */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => ({
  charData: state.nfts.charData, // Use charData instead of data
});

export default connect(mapStateToProps, { getCharecter })(ListCharecter);
