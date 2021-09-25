import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID vjmjNWUg18iOdr8h6bObFRl79OL1PmZBMfvcOGrHuic'
    }
});