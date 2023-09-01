import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import HeroSlider from "../Components/HeroSlider";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { getCharecter } from "../redux/actions/nfts";

import { connect } from "react-redux";
const Collection = ({ getCharecter, charData }) => {
  // const flippyRef = useRef(null);

  // const ref = useRef();

  useEffect(() => {
    getCharecter();
  }, [getCharecter]);
  console.log("charData", charData);
  const isDataFetched = charData && charData.length > 0;

  const characterImages = charData?.map((item) => item.image);
  const characterName = charData?.map((item) => item.name);
  const charecterDom = charData?.map((item) => item.dorm.name);
  const charecterobtain = charData?.map((item) => item.obtain);
  const charecterCard = charData?.map((item) => item.card.name);

  // const characterDorms = nftsData.map(item => item.dorm);
  // const characterObtainMethods = nftsData.map(item => item.obtain);

  // const [flippedImageId, setFlippedImageId] = useState(null);
  // const [imageActiveStates, setImageActiveStates] = useState({ 2: false }); // Initialize with default values
  // const [shouldFlipBack, setShouldFlipBack] = useState(false);

  // const handleCardDetailClick = (id) => {
  //   setFlippedImageId(id);
  //   setShouldFlipBack(true);
  //   setImageActiveStates((prevImageActiveStates) => ({
  //     ...prevImageActiveStates,
  //     [id]: false,
  //   }));
  // };

  // useEffect(() => {
  //   if (shouldFlipBack) {
  //     const timeout = setTimeout(() => {
  //       setShouldFlipBack(false);
  //     }, 500);
  //     return () => clearTimeout(timeout);
  //   }
  // }, [shouldFlipBack]);

  // const handleLinkClick = (id) => {
  //   setFlippedImageId(id); // Set the flippedImageId based on the clicked link
  //   setImageActiveStates((prevImageActiveStates) => ({
  //     ...prevImageActiveStates,
  //     [id]: true,
  //   }));  };

  const cards = [
    {
      frontContent: (
        <div
          style={{
            cursor: "pointer",
          }}
          className={`img`}
        >
          {isDataFetched ? (
            <div
              className={`abs_img`}
              data-bg-img={characterImages[0]}
              style={{ backgroundImage: `url(${characterImages[0]})` }}
            />
          ) : (
            <div>Loading data...</div>
          )}
          <img src="/img/1x1.jpg" alt="" />
        </div>
      ),
      backContent: (
        <div
          className={`Card-Detail game-card`}
          style={{
            cursor: "pointer",
            zIndex: "99999",
            position: "relative",
          }}
        >
          {isDataFetched ? (
             
           
                   <div class="card-2">
                     <div class="imgBx">
                 
                     </div>
                     <div class="contentBx ch" >
                       <h2
                       
                       >{`${characterName[0]}`}</h2>
                       <div class="size">
                         <h3>Card Name :</h3>
                         <h3>{`${charecterCard[0]}`}</h3>
                       </div>
                       <div class="size">
                         <h3>Dorm:</h3>
                         <h3>{`${charecterDom[0]}`}</h3>
                       </div>
                   
                       <h2
                       
                       >
                        Obtain
                       </h2>
                       {charecterobtain[0].map((obtain, index) => (
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
            
         
            // <div className="game-card-content">
            //   <ul>
            //     <span style={{ color: "red" }}>
            //       {" "}
            //       <li>Character Name : &nbsp;{`${characterName[0]}`}</li>
            //     </span>
            //     <li>Card Name : &nbsp;{`${charecterCard[0]}`}</li>
            //     <li>DOM : &nbsp;{`${charecterDom[0]}`}</li>
            //     <li>
            //       {" "}
            //       {charecterobtain[0].map((obtain) => {
            //         return (
            //           <button
            //             className="know-more-button"
            //             style={{ margin: "5px 10px 10px 5px" }}
            //           >
            //             {obtain}
            //           </button>
            //         );
            //       })}{" "}
            //     </li>
            //   </ul>
            // </div>
          ) : (
            <div>Loading data...</div>
          )}
          {isDataFetched ? (
            <input type="hidden" defaultValue={characterImages[0]} />
          ) : (
            <div>Loading data...</div>
          )}
        </div>
      ),
    },
    {
      frontContent: (
        <div
          style={{
            cursor: "pointer",
          }}
          className={`img`}
        >
          {isDataFetched ? (
            <div
              className={`abs_img`}
              data-bg-img={characterImages[1]}
              style={{ backgroundImage: `url(${characterImages[1]})` }}
            />
          ) : (
            <div>Loading data...</div>
          )}
          <img src="/img/1x1.jpg" alt="" />
        </div>
      ),
      backContent: (
        <div
        className={`Card-Detail game-card`}
        style={{
          cursor: "pointer",
          zIndex: "99999",
          position: "relative",
        }}
      >
        {isDataFetched ? (
           
         
                 <div class="card-2">
                   <div class="imgBx">
               
                   </div>
                   <div class="contentBx ch" >
                     <h2
                      
                     >{`${characterName[1]}`}</h2>
                     <div class="size">
                       <h3>Card Name :</h3>
                       <h3>{`${charecterCard[1]}`}</h3>
                     </div>
                     <div class="size">
                       <h3>Dorm:</h3>
                       <h3>{`${charecterDom[1]}`}</h3>
                     </div>
                 
                     <h2
                      
                     >
                      Obtain
                     </h2>
                     {charecterobtain[1].map((obtain, index) => (
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
          
       
          // <div className="game-card-content">
          //   <ul>
          //     <span style={{ color: "red" }}>
          //       {" "}
          //       <li>Character Name : &nbsp;{`${characterName[0]}`}</li>
          //     </span>
          //     <li>Card Name : &nbsp;{`${charecterCard[0]}`}</li>
          //     <li>DOM : &nbsp;{`${charecterDom[0]}`}</li>
          //     <li>
          //       {" "}
          //       {charecterobtain[0].map((obtain) => {
          //         return (
          //           <button
          //             className="know-more-button"
          //             style={{ margin: "5px 10px 10px 5px" }}
          //           >
          //             {obtain}
          //           </button>
          //         );
          //       })}{" "}
          //     </li>
          //   </ul>
          // </div>
        ) : (
          <div>Loading data...</div>
        )}
        {isDataFetched ? (
          <input type="hidden" defaultValue={characterImages[1]} />
        ) : (
          <div>Loading data...</div>
        )}
      </div>
      ),
    },
    {
      frontContent: (
        <div className="img">
          {isDataFetched ? (
            <div
              className={`abs_img`}
              data-bg-img={characterImages[2]}
              style={{ backgroundImage: `url(${characterImages[2]})` }}
            />
          ) : (
            <div>Loading data...</div>
          )}
          <img src="/img/1x1.jpg" alt="" />
        </div>
      ),
      backContent: (
        <div
        className={`Card-Detail game-card`}
        style={{
          cursor: "pointer",
          zIndex: "99999",
          position: "relative",
        }}
      >
        {isDataFetched ? (
           
         
                 <div class="card-2">
                   <div class="imgBx">
               
                   </div>
                   <div class="contentBx ch" >
                     <h2
                      
                     >{`${characterName[2]}`}</h2>
                     <div class="size">
                       <h3>Card Name :</h3>
                       <h3>{`${charecterCard[2]}`}</h3>
                     </div>
                     <div class="size">
                       <h3>Dorm:</h3>
                       <h3>{`${charecterDom[2]}`}</h3>
                     </div>
                 
                     <h2
                      
                     >
                      Obtain
                     </h2>
                     {charecterobtain[2].map((obtain, index) => (
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
          
       
          // <div className="game-card-content">
          //   <ul>
          //     <span style={{ color: "red" }}>
          //       {" "}
          //       <li>Character Name : &nbsp;{`${characterName[0]}`}</li>
          //     </span>
          //     <li>Card Name : &nbsp;{`${charecterCard[0]}`}</li>
          //     <li>DOM : &nbsp;{`${charecterDom[0]}`}</li>
          //     <li>
          //       {" "}
          //       {charecterobtain[0].map((obtain) => {
          //         return (
          //           <button
          //             className="know-more-button"
          //             style={{ margin: "5px 10px 10px 5px" }}
          //           >
          //             {obtain}
          //           </button>
          //         );
          //       })}{" "}
          //     </li>
          //   </ul>
          // </div>
        ) : (
          <div>Loading data...</div>
        )}
        {isDataFetched ? (
          <input type="hidden" defaultValue={characterImages[0]} />
        ) : (
          <div>Loading data...</div>
        )}
      </div>
      ),
    },
  
  ];
  const cards2 = [
    {
      frontContent: (
        <div
          style={{
            cursor: "pointer",
          }}
          className={`img`}
        >
          {isDataFetched ? (
            <div
              className={`abs_img`}
              data-bg-img={characterImages[3]}
              style={{ backgroundImage: `url(${characterImages[3]})` }}
            />
          ) : (
            <div>Loading data...</div>
          )}{" "}
          <img src="/img/1x1.jpg" alt="" />
        </div>
      ),
      backContent: (
        <div
        className={`Card-Detail game-card`}
        style={{
          cursor: "pointer",
          zIndex: "99999",
          position: "relative",
        }}
      >
        {isDataFetched ? (
           
         
                 <div class="card-2">
                   <div class="imgBx">
               
                   </div>
                   <div class="contentBx ch" >
                     <h2
                      
                     >{`${characterName[3]}`}</h2>
                     <div class="size">
                       <h3>Card Name :</h3>
                       <h3>{`${charecterCard[3]}`}</h3>
                     </div>
                     <div class="size">
                       <h3>Dorm:</h3>
                       <h3>{`${charecterDom[3]}`}</h3>
                     </div>
                 
                     <h2
                      
                     >
                      Obtain
                     </h2>
                     {charecterobtain[3].map((obtain, index) => (
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
          
       
          // <div className="game-card-content">
          //   <ul>
          //     <span style={{ color: "red" }}>
          //       {" "}
          //       <li>Character Name : &nbsp;{`${characterName[0]}`}</li>
          //     </span>
          //     <li>Card Name : &nbsp;{`${charecterCard[0]}`}</li>
          //     <li>DOM : &nbsp;{`${charecterDom[0]}`}</li>
          //     <li>
          //       {" "}
          //       {charecterobtain[0].map((obtain) => {
          //         return (
          //           <button
          //             className="know-more-button"
          //             style={{ margin: "5px 10px 10px 5px" }}
          //           >
          //             {obtain}
          //           </button>
          //         );
          //       })}{" "}
          //     </li>
          //   </ul>
          // </div>
        ) : (
          <div>Loading data...</div>
        )}
        {isDataFetched ? (
          <input type="hidden" defaultValue={characterImages[3]} />
        ) : (
          <div>Loading data...</div>
        )}
      </div>
      ),
    },
    {
      frontContent: (
        <div
          style={{
            cursor: "pointer",
          }}
          className={`img`}
        >
          {isDataFetched ? (
            <div
              className={`abs_img`}
              data-bg-img={characterImages[4]}
              style={{ backgroundImage: `url(${characterImages[4]})` }}
            />
          ) : (
            <div>Loading data...</div>
          )}{" "}
          <img src="/img/1x1.jpg" alt="" />
        </div>
      ),
      backContent: (
        <div
        className={`Card-Detail game-card`}
        style={{
          cursor: "pointer",
          zIndex: "99999",
          position: "relative",
        }}
      >
        {isDataFetched ? (
           
         
                 <div class="card-2">
                   <div class="imgBx">
               
                   </div>
                   <div class="contentBx ch" >
                     <h2
                      
                     >{`${characterName[4]}`}</h2>
                     <div class="size">
                       <h3>Card Name :</h3>
                       <h3>{`${charecterCard[4]}`}</h3>
                     </div>
                     <div class="size">
                       <h3>Dorm:</h3>
                       <h3>{`${charecterDom[4]}`}</h3>
                     </div>
                 
                     <h2
                      
                     >
                      Obtain
                     </h2>
                     {charecterobtain[4].map((obtain, index) => (
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
          
       
          // <div className="game-card-content">
          //   <ul>
          //     <span style={{ color: "red" }}>
          //       {" "}
          //       <li>Character Name : &nbsp;{`${characterName[4]}`}</li>
          //     </span>
          //     <li>Card Name : &nbsp;{`${charecterCard[4]}`}</li>
          //     <li>DOM : &nbsp;{`${charecterDom[4]}`}</li>
          //     <li>
          //       {" "}
          //       {charecterobtain[4].map((obtain) => {
          //         return (
          //           <button
          //             className="know-more-button"
          //             style={{ margin: "5px 10px 10px 5px" }}
          //           >
          //             {obtain}
          //           </button>
          //         );
          //       })}{" "}
          //     </li>
          //   </ul>
          // </div>
        ) : (
          <div>Loading data...</div>
        )}
        {isDataFetched ? (
          <input type="hidden" defaultValue={characterImages[4]} />
        ) : (
          <div>Loading data...</div>
        )}
      </div>
      ),
    },
    {
      frontContent: (
        <div className="img">
          {isDataFetched ? (
            <div
              className={`abs_img`}
              data-bg-img={characterImages[6]}
              style={{ backgroundImage: `url(${characterImages[5]})` }}
            />
          ) : (
            <div>Loading data...</div>
          )}{" "}
          <img src="/img/1x1.jpg" alt="" />
        </div>
      ),
      backContent: (
        <div
        className={`Card-Detail game-card`}
        style={{
          cursor: "pointer",
          zIndex: "99999",
          position: "relative",
        }}
      >
        {isDataFetched ? (
           
         
                 <div class="card-2">
                   <div class="imgBx">
               
                   </div>
                   <div class="contentBx ch" >
                     <h2
                      
                     >{`${characterName[5]}`}</h2>
                     <div class="size">
                       <h3>Card Name :</h3>
                       <h3>{`${charecterCard[5]}`}</h3>
                     </div>
                     <div class="size">
                       <h3>Dorm:</h3>
                       <h3>{`${charecterDom[5]}`}</h3>
                     </div>
                 
                     <h2
                      
                     >
                      Obtain
                     </h2>
                     {charecterobtain[5].map((obtain, index) => (
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
          
       
          // <div className="game-card-content">
          //   <ul>
          //     <span style={{ color: "red" }}>
          //       {" "}
          //       <li>Character Name : &nbsp;{`${characterName[5]}`}</li>
          //     </span>
          //     <li>Card Name : &nbsp;{`${charecterCard[5]}`}</li>
          //     <li>DOM : &nbsp;{`${charecterDom[5]}`}</li>
          //     <li>
          //       {" "}
          //       {charecterobtain[5].map((obtain) => {
          //         return (
          //           <button
          //             className="know-more-button"
          //             style={{ margin: "5px 10px 10px 5px" }}
          //           >
          //             {obtain}
          //           </button>
          //         );
          //       })}{" "}
          //     </li>
          //   </ul>
          // </div>
        ) : (
          <div>Loading data...</div>
        )}
        {isDataFetched ? (
          <input type="hidden" defaultValue={characterImages[5]} />
        ) : (
          <div>Loading data...</div>
        )}
      </div>
      ),
    },
    // {
    //   frontContent: (
    //     <div className="img">
    //       {isDataFetched ? (
    //         <div
    //           className={`abs_img`}
    //           data-bg-img={characterImages[7]}
    //           style={{ backgroundImage: `url(${characterImages[7]})` }}
    //         />
    //       ) : (
    //         <div>Loading data...</div>
    //       )}
    //       <img src="/img/1x1.jpg" alt="" />
    //     </div>
    //   ),
    //   backContent: (
    //     <div
    //       className={`Card-Detail game-card`}
    //       style={{
    //         cursor: "pointer",
    //         zIndex: "99999",
    //         position: "relative",
    //       }}
    //     >
    //       {isDataFetched ? (
    //         <div className="game-card-content">
    //           <ul>
    //             <span style={{ color: "red" }}>
    //               {" "}
    //               <li>Character Name : &nbsp;{`${characterName[7]}`}</li>
    //             </span>
    //             <span style={{ color: "red" }}>
    //               {" "}
    //               <li>Card Name : &nbsp;{`${charecterCard[7]}`}</li>
    //             </span>
    //             <span style={{ color: "red" }}>
    //               {" "}
    //               <li>DOM : &nbsp;{`${charecterDom[7]}`}</li>
    //             </span>
    //             <li>
    //               {" "}
    //               {charecterobtain[7].map((obtain) => {
    //                 return (
    //                   <button
    //                     className="know-more-button"
    //                     style={{ margin: "5px 10px 10px 5px" }}
    //                   >
    //                     {obtain}
    //                   </button>
    //                 );
    //               })}{" "}
    //             </li>
    //           </ul>
    //         </div>
    //       ) : (
    //         <div>Loading data...</div>
    //       )}

    //       <input type="hidden" defaultValue="img/collection/8.jpg" />
    //     </div>
    //   ),
    // },
  ];
  const collectionRef = useRef(null); // Create a ref for the collection element

  useEffect(() => {
    if (collectionRef.current) {
      const items = collectionRef.current.querySelectorAll(".item");
      const itemsLength = items.length;

      setInterval(function () {
        var numberOne = Math.floor(Math.random() * itemsLength);
        var numberTwo = Math.floor(Math.random() * itemsLength);

        while (numberTwo === numberOne) {
          numberTwo = Math.floor(Math.random() * itemsLength);
        }
        var firstDiv = items[numberOne];
        var secondDiv = items[numberTwo];
        // var firstImage = firstDiv.querySelector("input").value;
        // var secondImage = secondDiv.querySelector("input").value;
        firstDiv.classList.add("ready");
        secondDiv.classList.add("ready");
        // console.log(firstDiv.querySelector("input").value == firstDiv);
        setTimeout(function () {
          // console.log(secondDiv.querySelector("input").value == firstDiv);
          // firstDiv.querySelector("input").value == secondImage;
          // firstDiv.querySelector(".abs_img").style.backgroundImage =
          //   "url(" + secondImage + ")";
          // // secondDiv.querySelector("input").val(firstImage);
          // secondDiv.querySelector("input").value == firstDiv;
          // console.log(secondDiv.querySelector("input").value);
          // secondDiv.querySelector(".abs_img").style.backgroundImage =
          //   "url(" + firstImage + ")";

          firstDiv.classList.remove("ready");
          secondDiv.classList.remove("ready");
        }, 500);
      }, 2000);
    }
  }, [collectionRef]);
  const flippyRefs = useRef([]);

  const handleCardToggle = (index) => {
    if (flippyRefs.current[index]) {
      flippyRefs.current[index].toggle();
    }
  };
  return (
    <>
      <HeroSlider />
      <section id="collection">
        <div className="container">
          <h3
            className="fn__maintitle big"
            data-text=" Our Charecter"
            data-align="center"
          >
            Our Charecter
          </h3>
          {isDataFetched ? (
            <div className="fn_cs_collection" ref={collectionRef}>
              <div className="collection_top">
                {cards.map((card, index) => (
                  <Flippy
                    flipOnHover={true}
                    flipOnClick={true}
                    flipDirection="horizontal"
                    style={{ width: "31.2%%", height: "31.2%%" }}
                    ref={(ref) => (flippyRefs.current[index] = ref)}
                  >
                    <div className="item">
                      <div className="item_in">
                        <FrontSide onClick={() => handleCardToggle(index)}>
                          {card.frontContent}
                        </FrontSide>
                        <BackSide onClick={() => handleCardToggle(index)}>
                          {card.backContent}
                        </BackSide>
                      </div>
                    </div>
                  </Flippy>
                ))}
              </div>

              <div className="collection_bottom">
                {cards2.map((card, index) => (
                  <Flippy
                    flipOnHover={true}
                    flipOnClick={true}
                    flipDirection="horizontal"
                    style={{ width: "31.2%%", height: "31.2%%" }}
                    ref={(ref) => (flippyRefs.current[index] = ref)}
                  >
                    <div className="item">
                      <div className="item_in">
                        <FrontSide onClick={() => handleCardToggle(index)}>
                          {card.frontContent}
                        </FrontSide>
                        <BackSide onClick={() => handleCardToggle(index)}>
                          {card.backContent}
                        </BackSide>
                      </div>
                    </div>
                  </Flippy>
                ))}
              </div>
            </div>
          ) : (
            <p>Loading data...</p>
          )}
          <div className="fn_cs_desc">
            <p></p>
            <Link to="/charector-detail">
              <Link to="/charector-detail" className="metaportal_fn_button">
                <span>See All Charecter</span>
              </Link>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
const mapStateToProps = (state) => ({
  charData: state.nfts.charData, // Use charData instead of data
});
export default connect(mapStateToProps, { getCharecter })(Collection);
