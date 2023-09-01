import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getNfts } from "../redux/actions/nfts";
import { connect } from "react-redux";
const AllCharecter = ({ getNfts, cardData }) => {

useEffect(()=>{
  getNfts()

},[getNfts])
console.log(cardData)
    // useEffect(() => {
    //     const collection = document.querySelector(".fn_cs_collection");
    //     var items = collection.querySelectorAll(".item");
    //     var itemsLength = items.length;
    //     setInterval(function () {
    //       var numberOne = Math.floor(Math.random() * itemsLength);
    //       var numberTwo = Math.floor(Math.random() * itemsLength);
    
    //       while (numberTwo === numberOne) {
    //         numberTwo = Math.floor(Math.random() * itemsLength);
    //       }
    //       var firstDiv = items[numberOne];
    //       var secondDiv = items[numberTwo];
    //       var firstImage = firstDiv.querySelector("input").value;
    //       var secondImage = secondDiv.querySelector("input").value;
    //       firstDiv.classList.add("ready");
    //       secondDiv.classList.add("ready");
    //       // console.log(firstDiv.querySelector("input").value == firstDiv);
    //       setTimeout(function () {
    //         // console.log(secondDiv.querySelector("input").value == firstDiv);
    //         // firstDiv.querySelector("input").value == secondImage;
    //         // firstDiv.querySelector(".abs_img").style.backgroundImage =
    //         //   "url(" + secondImage + ")";
    //         // // secondDiv.querySelector("input").val(firstImage);
    //         // secondDiv.querySelector("input").value == firstDiv;
    //         // console.log(secondDiv.querySelector("input").value);
    //         // secondDiv.querySelector(".abs_img").style.backgroundImage =
    //         //   "url(" + firstImage + ")";
    
    //         firstDiv.classList.remove("ready");
    //         secondDiv.classList.remove("ready");
    //       }, 500);
    //     }, 2000);
    //   }, []);
 
      return (
        <section id="collection">
          <div className="container">
            <h3
              className="fn__maintitle big"
              data-text="Our Cards"
              data-align="center"
            >
              Our Cards
            </h3>
            <div className="fn_cs_collection">
              <div className="collection_top card">

              {cardData.slice(0, 6).map((card, index) => {
  return (
    <div className="item charecter" key={index} style={{ width: "33% !important" }}>
      <Link to={`/nft/${card.id}`}>
        <div className="item_in" style={{ cursor: "pointer", position: "relative" }}>
          <div className="img" style={{ cursor: "pointer", position: "relative" }}>
            <div className="abs_img" data-bg-img={card?.cg_thumbnail} style={{ cursor: "pointer" }} />
            <img src="/img/1x1.jpg" alt="" />
          </div>
        </div>
      </Link>
      <input type="hidden" defaultValue="img/collection/1.jpg" />
    </div>
  );
})}
          
                {/* <div className="item charecter">
                  <div className="item_in">
                    <div className="img">
                      <div
                        className="abs_img"
                        data-bg-img="/img/collection/2.jpg"
                      />
                      <img src="/img/1x1.jpg" alt="" />
                    </div>
                  </div>
                  <input type="hidden" defaultValue="img/collection/2.jpg" />
                </div>
                <div className="item charecter">
                  <div className="item_in">
                    <div className="img">
                      <div
                        className="abs_img"
                        data-bg-img="/img/collection/3.jpg"
                      />
                      <img src="/img/1x1.jpg" alt="" />
                    </div>
                  </div>
                  <input type="hidden" defaultValue="img/collection/3.jpg" />
                </div>
                <div className="item charecter">
                  <div className="item_in">
                    <div className="img">
                      <div
                        className="abs_img"
                        data-bg-img="/img/collection/4.jpg"
                      />
                      <img src="/img/1x1.jpg" alt="" />
                    </div>
                  </div>
                  <input type="hidden" defaultValue="img/collection/4.jpg" />
                </div> */}
              </div>
              {/* <div className="collection_bottom card">
              {cardData.map((card,i)=>{
                return(
    <div className="item charecter" key={i} style={{
      width: "33% !important"
    }}>
      
                      <div className="item_in">
                        <div className="img">
                          <div
                            className="abs_img"
                            data-bg-img={card?.cg_thumbnail}
                          />
                          <img src="/img/1x1.jpg" alt="" />
                        </div>
                      </div>
                      <input type="hidden" defaultValue="img/collection/1.jpg" />
                    </div>
         )  })}  
                {/* <div className="item charecter">
                  <div className="item_in">
                    <div className="img">
                      <div
                        className="abs_img"
                        data-bg-img="/img/collection/5.jpg"
                      />
                      <img src="/img/1x1.jpg" alt="" />
                    </div>
                  </div>
                  <input type="hidden" defaultValue="img/collection/5.jpg" />
                </div>
                <div className="item charecter">
                  <div className="item_in">
                    <div className="img">
                      <div
                        className="abs_img"
                        data-bg-img="/img/collection/6.jpg"
                      />
                      <img src="/img/1x1.jpg" alt="" />
                    </div>
                  </div>
                  <input type="hidden" defaultValue="img/collection/6.jpg" />
                </div>
                <div className="item charecter">
                  <div className="item_in">
                    <div className="img">
                      <div
                        className="abs_img"
                        data-bg-img="/img/collection/7.jpg"
                      />
                      <img src="/img/1x1.jpg" alt="" />
                    </div>
                  </div>
                  <input type="hidden" defaultValue="img/collection/7.jpg" />
                </div>
                <div className="item charecter">
                  <div className="item_in">
                    <div className="img">
                      <div
                        className="abs_img"
                        data-bg-img="/img/collection/8.jpg"
                      />
                      <img src="/img/1x1.jpg" alt="" />
                    </div>
                  </div>
                  <input type="hidden" defaultValue="img/collection/8.jpg" />
                </div> 
              </div> */}
            </div>
            <div className="fn_cs_desc">
              <p>
            
              </p>
              <Link to="/collection-detail">
                <Link to='/collection-detail' className="metaportal_fn_button">
                  <span>See All Cards</span>
                </Link>
              </Link>
            </div>
          </div>
        </section>
      )
};
const mapStateToProps = (state) => ({
  cardData: state.nfts.cardData,
});
export default connect(mapStateToProps, { getNfts })(AllCharecter);
