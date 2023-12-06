const initialState = null;
const reducer = (state = initialState, action) => {
  if(action.type === "Birthday")
      state = action.payload;
  return state;
}

export default reducer;