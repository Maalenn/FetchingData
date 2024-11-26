import axios from "axios";
import { useEffect, useReducer } from "react";

const defaultState = {
  users: [],
  isLoading: true,
  isError: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        users: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "FETCH_START":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    default:
      return state;
  }
};

const useFetchData = (link) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const { data } = await axios(link);
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR" });
        console.error(error.response?.status || error.message);
      }
    };
    fetchData();
  }, [link]);

  return state;
};

export default useFetchData;
