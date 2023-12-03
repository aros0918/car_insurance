const initialState = [
  {
    data: [0, 0, 0, 0, 0],
    label: '🙁',
    stack: 'total',
    color: '#70AD47'
  },
  {
    data: [0, 0, 0, 0, 0],
    label: '😐',
    stack: 'total',
    color: '#FFC000'
  },
  {
    data: [0, 0, 0, 0, 0],
    label: '🙂',
    stack: 'total',
    color: '#ED7D31'
  }
];
const color = ["#ED7D31", "#FFC000", "#70AD47"];

const reducer = (state = initialState, action) => {
  if(action.type === "ReviewDetailEdited"){
    state = action.payload.map( ( val, index ) => ({
      ...val,
      color: color[index]
    }));
  }
  return state;
}

export default reducer;