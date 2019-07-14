import axios from 'axios'
export function getbannerlist(){
    return axios.get('/api/getbannerlist')
}