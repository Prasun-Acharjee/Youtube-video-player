import axios from 'axios';
const KEY = 'AIzaSyA7YwNz1cKtMPfB1drGpJILPhP_BOq889c';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})