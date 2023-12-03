const initialState = false;

const reducer = ( state = initialState, action ) => {
  if(action.type === "Login"){
    console.log("Company", action.payload);
    state = action.payload;
  }
  return state;
}

export default reducer;