const db = require("../db");
const {NotFoundError} = require("../expressError")



class Playlist {
  static async createUserPlaylist(name, username) {
      const res = await db.query('INSERT INTO playlists (name, username_playlist) VALUES ($1, $2)', [name, username]);
      if(!res) throw new NotFoundError();
      return res.rows[0]
  }

  static async getUserPlaylists(username) {
    const result = await db.query(`SELECT name FROM playlists WHERE username == $1`, [username]);
    if(!result) throw new NotFoundError("No playlist found!");
    return result.rows;
  }

  static async addTracks(data, name) {
    const result = await db.query(`INSERT INTO `)
    
  }


  // Getting all the tracks of a playlist from db
  static async getPlaylistTracks(name) {
    const result = await db.query(`SELECT title, image_url FROM tracks 
    JOIN playlist_tracks ON tracks.id = playlists_tracks.track_id 
    JOIN playlists ON playlists.name = playlists_tracks.playlist_name
    WHERE playlists.name = $1`, [name]);
    if(!result) throw new NotFoundError(`No tracks found`)
    return result.rows[0]
  }
}


module.exports = Playlist;