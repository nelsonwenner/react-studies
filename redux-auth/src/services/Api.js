import Axios from 'axios';

const ApiAuth = Axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
      'Content-Type': 'application/json',
    }
})

export default { ApiAuth };