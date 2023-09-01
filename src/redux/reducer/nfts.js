import { GET_DATA, GET_SINGLE_CARD,GET_CHAR_CARD } from "../actions/type";
const initialState = {
  cardData: [],
  charData: [], // Separate property for character card data
  nft: [],
};
const nfts = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        cardData: payload, // Update cardData property with payload

      };
    case GET_CHAR_CARD:
      return {
        ...state,
        charData: payload, 
      };
    case GET_SINGLE_CARD:
      return {
        ...state,
        nft: payload,
      };

    default:
      return state;
  }
};
export default nfts;
