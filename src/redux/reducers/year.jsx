const initialState = null;
const reducer = (state = initialState, action) => {
  if(action.type === "Year")
      state = action.payload;
  return state;
}

export default reducer;