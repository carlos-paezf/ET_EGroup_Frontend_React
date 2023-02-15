import axios from 'axios'

export const backApiClient = axios.create( {
    baseURL: `${ import.meta.env.VITE_URL_BACKEND }`,
} )