import axios from 'axios'

const API_ROOT = process.env.REACT_APP_SERVER_ENDPOINT || 'https://api.coinmarketcap.com'

axios.defaults.baseURL = API_ROOT
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default axios
