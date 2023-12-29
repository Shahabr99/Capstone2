CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY NOT NULL UNIQUE, 
  name VARCHAR(25) NOT NULL,
  lastname VARCHAR(25) NOT NULL,
  email TEXT NOT NULL CHECK (position('@' IN email) > 1),
  password TEXT NOT NULL
);

CREATE TABLE playlists (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  user_id VARCHAR(25) REFERENCES users(username) ON DELETE CASCADE
); 


CREATE TABLE artists (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  image_url TEXT
);


CREATE TABLE tracks (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  image_url TEXT,
  length int,
  playlist_id INTEGER NOT NULL REFERENCES playlists(id) ON DELETE CASCADE,
  artist_id INTEGER REFERENCES artists(id) ON DELETE CASCADE
);


CREATE TABLE playlists_tracks (
  id INTEGER PRIMARY KEY,
  playlist_id INTEGER REFERENCES playlists(id) ON DELETE CASCADE,
  track_id INTEGER REFERENCES tracks(id) ON DELETE CASCADE
);
