import Axios from 'axios';

const ApiCep = Axios.create({
    baseURL: `https://ws.apicep.com/busca-cep/api`,
    headers: {
        "Content-Type": "application/json",
    }
})

export default { ApiCep };