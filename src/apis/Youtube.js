import axios from 'axios';

const KEY = 'AIzaSyAJuPOHzqqtpobosRjoiBbdX5WEg1k1P10';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxReults: 5,
        key: KEY
    }
})