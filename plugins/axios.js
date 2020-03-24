import axios from 'axios'

export default axios.create({
    baseURL: process.env.baseUrl || 'https://mukimukiroku.herokuapp.com/'
})