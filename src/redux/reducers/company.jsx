const initialState = "";

const reducer = ( state = initialState, action ) => {
  if(action.type === "Company"){
    console.log("Company", action.payload.name);
    state = action.payload;
  }
  return state;
}

export default reducer;