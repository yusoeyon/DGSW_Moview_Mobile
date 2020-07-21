import axios from 'axios';
import { APIBASE } from '../../config/config.json';

const defaultAPI = axios.create({
    baseURL : APIBASE,
});

export default defaultAPI;