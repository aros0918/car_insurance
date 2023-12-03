const reducer = (state = 0, action) => {
  if(action.type === "Status")
      state = action.payload;
  return state;
}

export default reducer;