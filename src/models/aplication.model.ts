export interface Album {
  cover: string; // image
  title: string; // name
  artist: string[]; // gender
}

export interface Artist {}

export interface Playlist {}

export interface Track {}

export interface User {
  name: string;
  profilePhoto: string;
  following: Array<string>;
  playlists: Array<string>;
  savedAlbums: Array<string>;
}
