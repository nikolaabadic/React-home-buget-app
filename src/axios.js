import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://ebanking-fa7a9-default-rtdb.europe-west1.firebasedatabase.app/'
})

export default instance