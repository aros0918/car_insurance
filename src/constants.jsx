export const detailReviewRating = {
  wait: 0,
  friendliness: 0,
  cleanliness: 0,
  price: 0,
  quality: 0
}

export const detailReviewKey = [
  { text: "Wait Time", rkey: "wait" },
  { text: "Staff Friendliness", rkey: "friendliness" },
  { text: "Cleanliness", rkey: "cleanliness" },
  { text: "Value and Price", rkey: "price" },
  { text: "Quality of Products", rkey: "quality" },
]

export const series = [
  {
    data: [0, 0, 0, 0, 0],
    label: '🙁',
    stack: 'total',
    color: '#70AD47',
  },
  {
    data: [0, 0, 0, 0, 0],
    label: '😐',
    stack: 'total',
    color: '#FFC000',
  },
  {
    data: [0, 0, 0, 0, 0],
    label: '🙂',
    stack: 'total',
    color: '#ED7D31',
  }
];

export const title = [
  'Wait Time',
  'Staff Friendliness',
  'Cleanliness',
  'Value and Prices',
  'Quality of Products'
];