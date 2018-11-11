import axios from 'axios';

const base64 = str => new Buffer(str).toString('base64');

const clientId = base64(process.env.REACT_APP_SPOTIFY_ID);
const clientSecret = base64(process.env.REACT_APP_SPOTIFY_SECRET);

class SpotifyAPI {
  constructor() {
    this.token = null;
    this.api = axios.create({
      baseURL: `https://api.spotify.com/v1/`,
    });
  }
  async auth() {
    const token = await axios.post('https://accounts.spotify.com/api/token', {
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      params: {
        grant_type: 'client_credentials',
        Authorization: `Basic ${clientId}:${clientSecret}`,
      },
    });
    console.log(token);
    this.token = token;
  }
  async getSomething() {
    return await this.api.get('	browse/categories');
  }
}

export default new SpotifyAPI();
