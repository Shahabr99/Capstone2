const db = require("../db");
const { NotFoundError } = require("../expressError");


class Track {
  // adds a track to a playlist 
  static async addTrack(data) {
    const result = await db.query(`INSERT INTO tracks (title, image_url, playlist_id) VALUES ($1, $2, $3) RETURNING title, image_url`, []);
    return result.rows[0];
  }

  // Getting all the tracks of a playlist from db
  static async getPlaylistTracks(id) {
    const result = await db.query(`SELECT title, image_url FROM tracks WHERE playlist_id == $1`);
    if(!result) throw new NotFoundError(`No tracks found`)
    return result.rows[0]
  }
}


module.exports = Track;