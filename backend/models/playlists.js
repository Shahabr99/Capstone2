const db = require("../db");
const {NotFoundError} = require("../expressError")



class Playlist {
  static async create(name) {
      const res = await db.query('INSERT INTO playlists (name) VALUES ($1)', [name]);
      if(!res) throw new NotFoundError();
      return res.rows[0]
  }

  
}


module.exports = Playlist;