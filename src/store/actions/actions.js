import axios from "axios";

export const FETCHING_FACT_START = "FETCHING_FACT_START";
export const FETCHING_FACT_SUCCESS = "FETCHING_FACT_SUCCESS";

export const getFact = () => (dispatch) => {
  dispatch({ type: FETCHING_FACT_START });
  axios
    .get("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1")
    .then((res) => {
      dispatch({ type: FETCHING_FACT_SUCCESS, payload: res.data.text });
      console.log(res);
    })
    .catch((err) => console.log(err));
};
