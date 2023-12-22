export interface User {
  name: string;
  profilePhoto: string;
  following: Array<string>;
  playlists: Array<string>;
  savedAlbums: Array<string>;
}
