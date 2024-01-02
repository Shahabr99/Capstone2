import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


class tuneflowApi {
  // static token variable to get it updated
  static token;

  static async request(endpoint, data={}, method="get") {

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${tuneflowApi.token}`};
    const params = (method === "get") ? data : {};

    try {
      // TODO
      return (await axios({url, method, data, params, headers})).data;
    }catch(err) {
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message]
    }
  }

  // Get current user info from database
  static async getCurrentUser(username) {
    const res = await this.request(`/users/${username}`);
    return res.user;
  }


  static async getPlaylists(username) {
    const res = await this.request(`/playlists/${username}`);
    return res.playlists;
  }


  static async getTracks(playlist) {
    const res = await this.request(`playlists/${playlist}/tracks`);
    return res.tracks;
  }


  static async login(data) {
    const res = await this.request("/login", data, "post");
    return res.token;
  }


  static async signup(data) {
    const res = await this.request(`/register`, data, "post");
    return res.token;
  }
}


export default tuneflowApi;