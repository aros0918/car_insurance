import axios from "../axiosConfig"

export const receiveDetailReview = company => dispatch => {
  axios.post("/review/detail", {company: company})
  .then(response => {
    if(response.data.result){
      dispatch({
        type: "ReviewDetailEdited",
        payload: response.data.data
      });
    }
  })
}

export const receive = company => dispatch => {
  axios.post("/review/normal", {company: company})
  .then(response => {
    if(response.data.result){
      dispatch({
        type: "Review",
        payload: response.data.data
      });
    }
  })
}

export const receiveRecent = (company, count) => dispatch => {
  axios.post("/review/recent", {company: company, count: count})
  .then(response => {
    if(response.data.result){
      dispatch({
        type: "RecentReview",
        payload: response.data.data
      });
    }
  })
}

export const companyDetail = (detail) => {
  console.log(detail);
  axios
    .post("/company/detail", detail)
    .then((response) => {
      console.log(response.data.result ? "Successed!" : "Failed.");
      if (response.data.result) {

      }
    })
    .catch((error) => {
      console.error(error);
    });
};
