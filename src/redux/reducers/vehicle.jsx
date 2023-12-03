const initialState = null;
const reducer = (state = initialState, action) => {
  if(action.type === "Vehicle")
      state = action.payload;
  return state;
}

export default reducer;