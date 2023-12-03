import axios from "../axiosConfig";

export const send = (review, callback) => {
  axios
    .post("/review/add", review)
    .then((response) => {
      console.log(response.data.result ? "Successed!" : "Failed.");
      if (response.data.result) {
        callback(response.data.data);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export const modify = (review, callback) => {
  console.log(review);
  axios
    .post("/review/modify", review)
    .then((response) => {
      console.log(response.data.result ? "Successed!" : "Failed.");
      if (response.data.result) {
        callback();
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
