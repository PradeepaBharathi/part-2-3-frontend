import axios from "axios";

const BASE_URL = "https://op2.onrender.com";

export const fetchAppAction = () => async (dispatch) => {
  try {
      const response = await axios.get(`${BASE_URL}/app/all`);
      console.log(response)
      if (!response.data.data) {
           throw new Error("Unable to get data");
      }
      dispatch({ type: "GET_APP", payload: response.data.data })
      console.log(response.data.data)
  } catch (error) {
       dispatch({ type: "GET_ERROR", payload: error.response.data.message });
       console.log(error.message);
       throw error;
  }
};

export const addApp = (appData) => async (dispatch) => {
  try {
    const response = await axios.post(`${BASE_URL}/app/add-app`, appData);
    if (!response.data) {
      throw new Error("Unable to add app");
    }
    dispatch({ type: "ADD_APP", payload: response.data.data });
    console.log(response.data);
  } catch (error) {
    dispatch({ type: "ADD_ERROR", payload: error.message });
    console.log(error.message);
    throw error;
  }
};

export const deleteApp = (appId) => async (dispatch) => {
  try {
    const response = await axios.delete(`${BASE_URL}/app/delete/${appId}`);
    if (!response.data) {
      throw new Error("Unable to delete app");
    }
    dispatch({ type: "DELETE_APP", payload: appId });
    console.log(response.data);
  } catch (error) {
    dispatch({ type: "DELETE_ERROR", payload: error.message });
    console.log(error.message);
    throw error;
  }
};
