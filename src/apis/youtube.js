import axios from 'axios';

const KEY = 'AIzaSyDMxZxusWguRIOT0mxcxZxYPVAlRylZros';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResult: 20,
    key: KEY,
  },
});
