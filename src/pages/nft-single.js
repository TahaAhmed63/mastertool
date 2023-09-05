import { Link, useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../../src/layout/Layout";
// import { getNfts, getSingleCard } from "../../src/redux/actions/nfts";
import { BackSide, Flippy, FrontSide } from "react-flippy";
// import { SwiperSlide } from "swiper/react";
// import {Swiper} from "swiper/react";
const Nft = ({ nft, nfts }) => {
  useEffect(() => { 
 
    window.scrollTo(0,0)

 }, []);
  const { cardData } = useSelector((state) => state.nfts);
  console.log(cardData, "->>>>>>>>>>>>>>>>>>>>>>>>>");
  const { id } = useParams();
  // const [similarItem, setSimilarItem] = useState([]);
  // const [image, setImage] = useState([]);

  // Now you can use the vdata in your component
  console.log(cardData, "cardData");
  const selectedCard = cardData.find((nft) => nft.id === parseInt(id));
  console.log(selectedCard);
  // useEffect(() => {
  //   if (nfts && nft) {
  //     setSimilarItem(
  //       nfts.filter(
  //         (nft_) =>
  //           nft_.type === nft.type ||
  //           nft.special === nft_.special ||
  //           nft.clothing == nft_.clothing
  //       )
  //     );
  //   }
  // }, [nfts]);
  console.log("nft:", nfts); // Single nft data

  // const nft2 = useSelector(state => state.nfts.data); // Assuming 'singleNft' is the reducer key
  // console.log(nft2)

  // const [quantity, setQuantity] = useState(nft ? nft.quantity : 0);

  // const updateQuantity = (type) => {
  //   if (type == "+") {
  //     setQuantity((nft.quantity = nft.quantity + 1));
  //   } else {
  //     setQuantity((nft.quantity = nft.quantity == 1 ? 1 : nft.quantity - 1));
  //   }
  // };
  const img1 = selectedCard?.cg_thumbnail;
  const img2 = selectedCard?.groovy_cg_thumbnail;
  const images = [img1, img2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <Layout pageTitle={"Minting"}>
      <div className="metaportal_fn_mintpage">
        <div className="container small">
          {/* Card INTRO */}
          <div className="metaportal_fn_mint_top">
            <div className="mint_left">
              <div
                className="img"
                style={{
                  position: "initial",
                  overflow: "hidden",
                }}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`img_in ${
                      index === currentIndex ? "fadeIn" : "fadeOut"
                    }`}
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                  />
                ))}

                <img src="/img/1x1.jpg" alt="" />
              </div>
            </div>
            <div className="mint_right">
              {/* <div className="metaportal_fn_share">
                    <h5 className="label">Share:</h5>
                    <ul>
                      <li>
                        <Link to="#">
                          <img
                            src="/svg/social/twitter-1.svg"
                            alt=""
                            className="fn__svg"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img
                            src="/svg/social/facebook-1.svg"
                            alt=""
                            className="fn__svg"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img
                            src="/svg/social/instagram-1.svg"
                            alt=""
                            className="fn__svg"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img
                            src="/svg/social/pinterest-1.svg"
                            alt=""
                            className="fn__svg"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img
                            src="/svg/social/behance-1.svg"
                            alt=""
                            className="fn__svg"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div> */}
              <div className="metaportal_fn_breadcrumbs">
                <p>
                  <Link to="/">
                    <Link>Home</Link>
                  </Link>
                  <span className="separator">/</span>
                  <Link to="/collection">
                    <Link>Cards</Link>
                  </Link>
                  <span className="separator">/</span>
                  <span className="current" style={{

                  }}>{nft && nft.title}</span>
                </p>
              </div>
              <h3
                className="fn__maintitle"
                style={{
                  textAlign:"center"
                }}
                data-text={selectedCard.name}
                data-align="left"
              >
                {selectedCard.name}
              </h3>
              <div className="desc">
                <h3
                  style={{
                    fontSize: "26px",
                    fontWeight: 300,
                    letterSpacing: ".05em",
                    lineHeight: 1.25,
                    textAlign:"center",

                    width: "100%",
                  }}
                >
                  HP FORMULA: <span>{selectedCard.atk_formula}</span>
                </h3>
                <h3
                  style={{
                    fontSize: "26px",
                    fontWeight: 300,
                    letterSpacing: ".05em",
                    lineHeight: 1.25,
                    textAlign:"center",

                    width: "100%",
                  }}
                >
                  ATTACK FORMULA: <span>{selectedCard.hp_formula}</span>
                </h3>
                <h3
                  style={{
                    fontSize: "26px",
                    fontWeight: 300,
                    letterSpacing: ".05em",
                    lineHeight: 1.25,
                    textAlign:"center",

                    width: "100%",
                  }}
                >
                  ATTACK MODIFIER: <span>{selectedCard.g_atk_modifier}</span>
                </h3>
                <h3
                  style={{
                    fontSize: "26px",
                    fontWeight: 300,
                    letterSpacing: ".05em",
                    lineHeight: 1.25,
                    textAlign:"center",

                    width: "100%",
                  }}
                >
                  HP MODIFIER: <span>{selectedCard.g_hp_modifier}</span>
                </h3>
                <h3
                  style={{
                    fontSize: "26px",
                    fontWeight: 300,
                    letterSpacing: ".05em",
                    lineHeight: 1.25,
                    textAlign:"center",

                    width: "100%",
                  }}
                >
                  MAGIC TYPE: <span>{selectedCard.magic_type.name}</span>
                </h3>
                <h3
                  style={{
                    fontSize: "26px",
                    fontWeight: 300,
                    letterSpacing: ".05em",
                    lineHeight: 1.25,
                    textAlign:"center",

                    width: "100%",
                  }}
                >
                  RARITY: <span>{selectedCard.rarity.name}</span>
                </h3>

                {/* <p>
                        Suspendisse eu velit est. Cras nec vestibulum quam. Donec
                        tincidunt purus nec enim tincidunt, sit amet facilisis massa
                        laoreet. Integer mollis nec sapien eu lacinia. Nunc eu massa
                        dictum, vulputate neque ac, porta mauris. Sed sollicitudin
                        nisi augue, a gravida turpis elementum vel. Curabitur sagittis
                        quis diam et rhoncus. Nam pellentesque imperdiet aliquet. Sed
                        non ante malesuada, ultrices sem at, tempus libero.
                      </p>
                      <p>
                        Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus
                        orci, eleifend euismod justo. Quisque luctus turpis eu
                        tristique feugiat. Praesent ac magna feugiat, interdum lacus
                        ac, interdum dui. Pellentesque id quam quis enim malesuada
                        rutrum. Orci varius natoque penatibus et magnis dis
                        parturient.
                      </p> */}
              </div>

              <div className="view_on">
           
                    <h3 style={{
                      textAlign:"center"
                    }}>Tags:</h3>
                
              
                 
                
                <div
                  className="tag"
                  style={{
                    width: "auto",
                    gap: "10px",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent:"center"
                  }}
                >
                  {selectedCard?.card_tag.map((e, i) => (
                    <span
                      style={{
                        width: "auto",
                        fontSize: "10px",
                      }}
                      to="#"
                      target="_blank"
                      rel="noreferrer"
                      className="tags"
                    >
                      {e.tag.desc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
    

    
          {/* BUDDY CARD */}

          <h3
            className="fn__maintitle big"
            data-text=" Buddies"
            data-align="center"
            style={{
              paddingBottom: "4rem",
            }}
          >
            Buddies
          </h3>
          {/* -----------buddyyy------ */}
          <div
            className="fn_cs_collection "
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              className=" card-top"
              style={{
                display: "flex",
                width: "100%",
              }}
            >
              {selectedCard?.buddy_one && (
                <Flippy
                  flipOnHover={true}
                  flipOnClick={true}
                  style={{ width: "33%", height: "100%" }} // Set the dimensions as needed

                  // Set the dimensions as needed
                >
                  <FrontSide>
                    <div
                      className="item card-main"
                      style={{ width: "33% !important", important: "width" }}
                    >
                      <div className="item_in">
                        <div className="img">
                          <div
                            className="abs_img"
                            data-bg-img={selectedCard?.buddy_one?.image}
                          />
                          <img src="/img/1x1.jpg" alt="" />
                        </div>
                      </div>
                      <input
                        type="hidden"
                        defaultValue="img/collection/1.jpg"
                      />
                    </div>
                  </FrontSide>
                  <BackSide>
                    <div
                      className={`Card-Detail game-card`}
                      style={{
                        cursor: "pointer",
                        zIndex: "99999",
                        position: "relative",
                        padding: "0px",
                      }}
                    >
                      <div
                        class="card-2"
                        style={{
                          height: "330px",
                        }}
                      >
                        <div class="imgBx">
                          {/* <img id="vegeta" src="https://iili.io/Jf78JI.png"/> */}
                        </div>
                        <div
                          class="contentBx"
                          style={{
                            padding: "0px",
                          }}
                        >
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
                              paddingTop: "2rem",
                            }}
                          >{`${selectedCard?.buddy_one?.name}`}</h2>
                          <div class="size">
                            <h3>SLUG:</h3>
                            <h3>{`${selectedCard?.buddy_one?.slug}`}</h3>
                          </div>
                          {/* <div class="size">
                                              <h3>Dorm:</h3>
                                              <h3>{`${"asda"}`}</h3>
                                            </div> */}
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
                          {selectedCard?.buddy_one.obtain.map(
                            (obtain, index) => (
                              <Link
                                style={{
                                  margin: "5px 10px 10px 5px",
                                }}
                                to="#"
                              >
                                {obtain}
                              </Link>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </BackSide>
                </Flippy>
              )}
              {selectedCard?.buddy_two && (
                <Flippy
                  flipOnHover={true}
                  flipOnClick={true}
                  style={{ width: "33%", height: "100%" }} // Set the dimensions as needed

                  // Set the dimensions as needed
                >
                  <FrontSide>
                    <div
                      className="item card-main"
                      style={{ width: "33%", important: "width" }}
                    >
                      <div className="item_in">
                        <div className="img">
                          <div
                            className="abs_img"
                            data-bg-img={selectedCard?.buddy_two?.image}
                          />
                          <img src="/img/1x1.jpg" alt="" />
                        </div>
                      </div>
                      <input
                        type="hidden"
                        defaultValue="img/collection/1.jpg"
                      />
                    </div>
                  </FrontSide>
                  <BackSide>
                    <div
                      className={`Card-Detail game-card`}
                      style={{
                        cursor: "pointer",
                        zIndex: "99999",
                        position: "relative",
                        padding: "0px",
                      }}
                    >
                      <div class="card-2">
                        <div class="imgBx">
                          {/* <img id="vegeta" src="https://iili.io/Jf78JI.png"/> */}
                        </div>
                        <div
                          class="contentBx"
                          style={{
                            padding: "0px",
                          }}
                        >
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
                              paddingTop: "2rem",
                            }}
                          >{`${selectedCard?.buddy_two?.name}`}</h2>
                          <div class="size">
                            <h3>SLUG: </h3>
                            <h3>{`${selectedCard?.buddy_two?.slug}`}</h3>
                          </div>
                          {/* <div class="size">
                                              <h3>Dorm:</h3>
                                              <h3>{`${"asda"}`}</h3>
                                            </div> */}
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
                          {selectedCard?.buddy_two.obtain.map(
                            (obtain, index) => (
                              <Link
                                style={{
                                  margin: "5px 10px 10px 5px",
                                }}
                                to="#"
                              >
                                {obtain}
                              </Link>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </BackSide>
                </Flippy>
              )}
              {selectedCard?.buddy_three && (
                <Flippy
                  flipOnHover={true}
                  flipOnClick={true}
                  style={{ width: "33%", height: "100%" }} // Set the dimensions as needed

                  // Set the dimensions as needed
                >
                  <FrontSide>
                    <div
                      className="item card-main"
                      style={{ width: "33%", important: "width" }}
                    >
                      <div className="item_in">
                        <div className="img">
                          <div
                            className="abs_img"
                            data-bg-img={selectedCard?.buddy_three?.image}
                          />
                          <img src="/img/1x1.jpg" alt="" />
                        </div>
                      </div>
                      <input
                        type="hidden"
                        defaultValue="img/collection/1.jpg"
                      />
                    </div>
                  </FrontSide>
                  <BackSide>
                    <div
                      className={`Card-Detail game-card`}
                      style={{
                        cursor: "pointer",
                        zIndex: "99999",
                        position: "relative",
                        padding: "0px",
                      }}
                    >
                      <div
                        class="card-2"
                        style={{
                          height: "330px",
                        }}
                      >
                        <div class="imgBx">
                          {/* <img id="vegeta" src="https://iili.io/Jf78JI.png"/> */}
                        </div>
                        <div
                          class="contentBx"
                          style={{
                            padding: "0px",
                          }}
                        >
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
                              paddingTop: "2rem",
                            }}
                          >{`${selectedCard?.buddy_three?.name}`}</h2>
                          <div class="size">
                            <h3>SLUG:</h3>
                            <h3>{`${selectedCard?.buddy_three?.slug}`}</h3>
                          </div>
                          {/* <div class="size">
                                              <h3>Dorm:</h3>
                                              <h3>{`${"asda"}`}</h3>
                                            </div> */}
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
                          {selectedCard?.buddy_three?.obtain.map(
                            (obtain, index) => (
                              <Link
                                style={{
                                  margin: "5px 10px 10px 5px",
                                }}
                                to="#"
                              >
                                {obtain}
                              </Link>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </BackSide>
                </Flippy>
              )}
            </div>
          </div>
      {/* -----------buddyyy------ */}
          {/* spellOne */}

          {selectedCard?.spell_one && (
            <div className="metaportal_fn_mintbox">
              <div className="mint_left">
                <div className="mint_title">
                  <span>Spell One Information</span>
                </div>
                <div className="mint_list">
                  <ul>
                    <li className="spell-imp">
                      <div className="item">
                        <h4>spell Name</h4>
                        <h3>
                          {selectedCard?.spell_one?.name}{" "}
                          {selectedCard?.spell_one?.slug}{" "}
                        </h3>
                      </div>
                    </li>
                    <li className="spell-imp">
                      <div className="item">
                        <h4>ELEMENT NAME</h4>
                        <h3>{selectedCard?.spell_one?.element?.name}</h3>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mint_list">
                  <ul>
                    {selectedCard?.spell_one?.effect.map((effect, i) => {
                      return (
                        <>
                          <li>
                            <div className="item">
                              <h4>Effect Level</h4>
                              <h3>{effect?.level}</h3>
                            </div>
                          </li>
                          <li className="effect-tag">
                            <div className="item">
                              <h4>Effect Tag</h4>
                              <div
                                className="tag"
                                style={{
                                  width: "auto",
                                  gap: "10px",
                                  display: "flex",
                                  flexWrap: "wrap",
                                }}
                              >
                                {effect?.effect?.map((e) => (
                                  <span
                                    style={
                                      {
                                        // margin: "5px",
                                        // padding:'5px',
                                        // background: "purple",
                                        // color: "white",
                                        // fontSize: "10px",
                                      }
                                    }
                                    key={i}
                                  >
                                    <Link
                                      style={{
                                        width: "100%",
                                      }}
                                      to="#"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="metaportal_fn_button"
                                    >
                                      <span>{e}</span>
                                    </Link>
                                  </span>
                                ))}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="item">
                              <img
                                src={effect?.thumbnail}
                                style={{
                                  borderRadius: "10px",
                                }}
                                alt="thumbnail"
                                width="150"
                                heighth="150"
                              />
                            </div>
                          </li>
                        </>
                        // <li key={i}>
                        //   <div className="item" key={i}>
                        //     <h4>effect LEVEL {i + 1}</h4>
                        //     <h3>{effect.level}</h3>
                        //     <h4>effect Tag</h4>
                        //     {effect?.effect?.map((e)=>(<span
                        //       style={{
                        //         margin: "5px",
                        //         background: "purple",
                        //         color: "white",
                        //         fontSize: "10px",
                        //       }}
                        //       key={i}
                        //     >
                        //       {e}
                        //     </span>))}

                        //     {/* <div className="qnt">
                        //     <span
                        //       className="decrease"
                        //       onClick={() => updateQuantity("-")}
                        //     >
                        //       -
                        //     </span>
                        //     <span className="summ" data-price={nft && nft.quantity}>
                        //       {nft && nft.quantity}
                        //     </span>
                        //     <span
                        //       className="increase"
                        //       onClick={() => updateQuantity("+")}
                        //     >
                        //       +
                        //     </span>
                        //   </div> */}
                        //   </div>
                        // </li>
                      );
                    })}
                  </ul>
                </div>

                {/* <div className="mint_desc">
                <Link
                  to="#"
                  target="_blank"
                  rel="noreferrer"
                  className="metaportal_fn_button"
                >
                  <span>Mint Now</span>
                </Link>
                <p>
                  By clicking “MINT NOW” button, you agree to our{" "}
                  <Link to="#">Terms of Service</Link> and our{" "}
                  <Link to="#">Privacy Policy</Link>.
                </p>
              </div> */}
              </div>
            </div>
          )}
          {/* spelltwo */}
          {selectedCard?.spell_two && (
            <div className="metaportal_fn_mintbox">
              <div className="mint_left">
                <div className="mint_title">
                  <span>Spell two Information</span>
                </div>
                <div className="mint_list">
                  <ul>
                    <li className="spell-imp">
                      <div className="item">
                        <h4>spell Name</h4>
                        <h3>
                          {selectedCard?.spell_two?.name}{" "}
                          {selectedCard?.spell_two?.slug}{" "}
                        </h3>
                      </div>
                    </li>
                    <li className="spell-imp">
                      <div className="item">
                        <h4>ELEMENT NAME</h4>
                        <h3>{selectedCard?.spell_two?.element?.name}</h3>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mint_list">
                  <ul>
                    {selectedCard?.spell_two?.effect.map((effect, i) => {
                      return (
                        <>
                          <li>
                            <div className="item">
                              <h4>Effect Level</h4>
                              <h3>{effect?.level}</h3>
                            </div>
                          </li>
                          <li className="effect-tag">
                            <div className="item">
                              <h4>Effect Tag</h4>
                              <div
                                className="tag"
                                style={{
                                  display: "flex",
                                  gap: "10px",
                                  justifyContent: "center",
                                  flexWrap: "wrap",
                                  paddingTop: "10px",
                                }}
                              >
                                {effect?.effect?.map((e) => (
                                  <span
                                    style={
                                      {
                                        // margin: "5px",
                                        // padding:'5px',
                                        // background: "purple",
                                        // color: "white",
                                        // fontSize: "10px",
                                      }
                                    }
                                    key={i}
                                  >
                                    <Link
                                      style={{
                                        width: "100%",
                                      }}
                                      to="#"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="metaportal_fn_button"
                                    >
                                      <span>{e}</span>
                                    </Link>
                                  </span>
                                ))}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="item">
                              <img
                                src={effect?.thumbnail}
                                style={{
                                  borderRadius: "10px",
                                }}
                                alt="thumbnail"
                                width="150"
                                heighth="150"
                              />
                            </div>
                          </li>
                        </>
                        // <li key={i}>
                        //   <div className="item" key={i}>
                        //     <h4>effect LEVEL {i + 1}</h4>
                        //     <h3>{effect.level}</h3>
                        //     <h4>effect Tag</h4>
                        //     {effect?.effect?.map((e)=>(<span
                        //       style={{
                        //         margin: "5px",
                        //         background: "purple",
                        //         color: "white",
                        //         fontSize: "10px",
                        //       }}
                        //       key={i}
                        //     >
                        //       {e}
                        //     </span>))}

                        //     {/* <div className="qnt">
                        //     <span
                        //       className="decrease"
                        //       onClick={() => updateQuantity("-")}
                        //     >
                        //       -
                        //     </span>
                        //     <span className="summ" data-price={nft && nft.quantity}>
                        //       {nft && nft.quantity}
                        //     </span>
                        //     <span
                        //       className="increase"
                        //       onClick={() => updateQuantity("+")}
                        //     >
                        //       +
                        //     </span>
                        //   </div> */}
                        //   </div>
                        // </li>
                      );
                    })}
                  </ul>
                </div>

                {/* <div className="mint_desc">
                <Link
                  to="#"
                  target="_blank"
                  rel="noreferrer"
                  className="metaportal_fn_button"
                >
                  <span>Mint Now</span>
                </Link>
                <p>
                  By clicking “MINT NOW” button, you agree to our{" "}
                  <Link to="#">Terms of Service</Link> and our{" "}
                  <Link to="#">Privacy Policy</Link>.
                </p>
              </div> */}
              </div>
            </div>
          )}
          {/* spelthree */}
          {selectedCard?.spell_three && (
            <div className="metaportal_fn_mintbox">
              <div className="mint_left">
                <div className="mint_title">
                  <span>Spell three Information</span>
                </div>
                <div className="mint_list">
                  <ul>
                    <li className="spell-imp">
                      <div className="item">
                        <h4>spell Name</h4>
                        <h3>
                          {selectedCard?.spell_three?.name}{" "}
                          {selectedCard?.spell_three?.slug}{" "}
                        </h3>
                      </div>
                    </li>
                    <li className="spell-imp">
                      <div className="item">
                        <h4>ELEMENT NAME</h4>
                        <h3>{selectedCard?.spell_three?.element?.name}</h3>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mint_list">
                  <ul>
                    {selectedCard?.spell_three?.effect.map((effect, i) => {
                      return (
                        <>
                          <li>
                            <div className="item">
                              <h4>Effect Level</h4>
                              <h3>{effect?.level}</h3>
                            </div>
                          </li>
                          <li className="effect-tag">
                            <div className="item">
                              <h4>Effect Tag</h4>
                              <div
                                className="tag"
                                style={{
                                  display: "flex",
                                  gap: "10px",
                                  justifyContent: "center",
                                  flexWrap: "wrap",
                                  paddingTop: "10px",
                                }}
                              >
                                {effect?.effect?.map((e) => (
                                  <span
                                    style={
                                      {
                                        // margin: "5px",
                                        // padding:'5px',
                                        // background: "purple",
                                        // color: "white",
                                        // fontSize: "10px",
                                      }
                                    }
                                    key={i}
                                  >
                                    <Link
                                      style={{
                                        width: "100%",
                                      }}
                                      to="#"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="metaportal_fn_button"
                                    >
                                      <span>{e}</span>
                                    </Link>
                                  </span>
                                ))}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="item">
                              <img
                                src={effect?.thumbnail}
                                style={{
                                  borderRadius: "10px",
                                }}
                                alt="thumbnail"
                                width="150"
                                heighth="150"
                              />
                            </div>
                          </li>
                        </>
                        // <li key={i}>
                        //   <div className="item" key={i}>
                        //     <h4>effect LEVEL {i + 1}</h4>
                        //     <h3>{effect.level}</h3>
                        //     <h4>effect Tag</h4>
                        //     {effect?.effect?.map((e)=>(<span
                        //       style={{
                        //         margin: "5px",
                        //         background: "purple",
                        //         color: "white",
                        //         fontSize: "10px",
                        //       }}
                        //       key={i}
                        //     >
                        //       {e}
                        //     </span>))}

                        //     {/* <div className="qnt">
                        //     <span
                        //       className="decrease"
                        //       onClick={() => updateQuantity("-")}
                        //     >
                        //       -
                        //     </span>
                        //     <span className="summ" data-price={nft && nft.quantity}>
                        //       {nft && nft.quantity}
                        //     </span>
                        //     <span
                        //       className="increase"
                        //       onClick={() => updateQuantity("+")}
                        //     >
                        //       +
                        //     </span>
                        //   </div> */}
                        //   </div>
                        // </li>
                      );
                    })}
                  </ul>
                </div>

                {/* <div className="mint_desc">
                <Link
                  to="#"
                  target="_blank"
                  rel="noreferrer"
                  className="metaportal_fn_button"
                >
                  <span>Mint Now</span>
                </Link>
                <p>
                  By clicking “MINT NOW” button, you agree to our{" "}
                  <Link to="#">Terms of Service</Link> and our{" "}
                  <Link to="#">Privacy Policy</Link>.
                </p>
              </div> */}
              </div>
            </div>
          )}
    {/* stateformulaa */}
          <div className="metaportal_fn_nft_cats ">
       
            <div className="mint_left">
              <div className="mint_title">
         <span style={{
          marginBottom:"27px"
         }}> Stat Formulas</span> 
           
            </div>
    
            </div>

             { selectedCard?.stat_formula?.map((e,i)=>(
              <>
              <h4 style={{marginBottom:"2rem"}}>Stat Formula {i+1}</h4>
                <ul key={i}>
    <li >
    <div className="item">
      <h4 className="parent_category">atk_g</h4>
      <h3 className="child_category" title="Black Yukata">
       {e?.atk_g}
      </h3>
    </div>
    </li>
    <li >
    <div className="item">
      <h4 className="parent_category">hp_g</h4>
      <h3 className="child_category" title="Black Yukata">
       {e?.hp_g}
      </h3>
    </div>
    </li>
    <li>
    <div className="item">
      <h4 className="parent_category">level</h4>
      <h3 className="child_category" title="Black Yukata">
       {e?.level}
      </h3>
    </div>
    </li>
 
  </ul>
  </>
             ))
        }
{/* 
              <li>
                <div className="item">
                  <h4 className="parent_category">Eyes</h4>
                  <h3 className="child_category" title="Daydreaming">
                    Daydreaming
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Special</h4>
                  <h3 className="child_category" title="Fireflies, Smoke">
                    Fireflies, Smoke
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Type</h4>
                  <h3 className="child_category" title="Human, Sand">
                    Human, Sand
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Mouth</h4>
                  <h3 className="child_category" title="Not Bad">
                    Not Bad
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Neck</h4>
                  <h3 className="child_category" title="Zen Headphones">
                    Zen Headphones
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Eyes</h4>
                  <h3 className="child_category" title="Striking">
                    Striking
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Neck</h4>
                  <h3 className="child_category" title="Zen Headphones">
                    Zen Headphones
                  </h3>
                </div>
              </li> */}
       
          </div>
           {/* stateformulaa */}
        </div>
      </div>
    </Layout>
  );
};

// const mapStateToProps = (state) => ({
//   cardData: state.nfts.cardData,
// });

// export default connect(mapStateToProps, { getSingleCard, getNfts })(Nft);
export default Nft;
