import { GET_DATA, GET_SINGLE_CARD,GET_CHAR_CARD } from "./type";
import axios from "axios";
import config from '../../config'; // Adjust the path accordingly

// const fatahData = async (url) => {
//   const res = await fetch(`${url}`);
//   const data = await res.json();
//   return data;
// };

// export const getNfts = () => async (dispatch) => {
//   dispatch({
//     type: GET_DATA,
//     payload: await fatahData("/static/nft.json"),
//   });
// };

export const getNfts = () => async (dispatch) => {

  try {
    const response = await axios.get(`${config.baseUrl}card`, {
      headers: {
        Authorization: `Bearer ${config.token}`, // Replace with your actual token
      },
    });

    dispatch({
      type: GET_DATA,
      payload: response.data?.data,
    });
  } catch (error) {
    console.error("Error fetching nfts:", error);
  }

};
export const getCharecter = () => async (dispatch) => {

  try {
    const response = await axios.get(`${config.baseUrl}character`, {
      headers: {
        Authorization: `Bearer ${config.token}`, // Replace with your actual token
      },
    });

    dispatch({
      type: GET_CHAR_CARD,
      payload: response.data?.data,
    });
  } catch (error) {
    console.error("Error fetching nfts:", error);
  }

};
export const getSingleCard = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${config.baseUrl}card/${id}`, {
      headers: {
        Authorization: `Bearer ${config.token}`, // Replace with your actual token
      },
    });

  
    dispatch({
      type: GET_SINGLE_CARD,
      payload: response?.data.data,
    });
  } catch (error) {
    console.error("Error fetching nfts:", error);
  }

;
};
