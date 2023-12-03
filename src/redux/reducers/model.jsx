const initialState = null;
const reducer = (state = initialState, action) => {
  if(action.type === "Model")
      state = action.payload;
  return state;
}

export default reducer;