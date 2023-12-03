const initialState = [
];;

const getTimeAndDate = val => {
  
  const parts = val.split(',');
  const dates = parts[0];
  const times = parts[1];
  return {
    time: times,
    date: dates
  };
}
const convertLocal = val => {
  const localDate = new Date(val).toLocaleString();
  return localDate
}
const reducer = (state = initialState, action) => {
  if(action.type === "RecentReview"){

    const sortedPayload = action.payload.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA;
    });
    
    state = sortedPayload.map(val => ({
      ...val,
      createdAt: getTimeAndDate(convertLocal(val.createdAt))
    }));
  }
  return state;
}

export default reducer;