import { Album, Artist, Explore, Home, Library, Playlist } from '../views';

export const routes = [
  { path: '/', Element: Home },
  { path: '/explore', Element: Explore },
  { path: '/library', Element: Library },
  { path: '/artist/:artistId', Element: Artist },
  { path: '/album/:albumId', Element: Album },
  { path: '/playlist/:playlistId', Element: Playlist },
];
