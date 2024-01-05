export const baseUrl = 'http://192.168.0.49:5000/api/';

// /[:].*[_(id+name)]

export const endpoints = {
  // Artist
  getArtist: `${baseUrl}artist/`,
  getArtistDiscography: `${baseUrl}artist/discography/`,
  getArtistPlaylists: `${baseUrl}artist/playlists/`,

  // Album
  getAlbum: `${baseUrl}album/`,
  createAlbum: `${baseUrl}album/create/`,
  deleteAlbum: `${baseUrl}album/delete/`,

  // Playlist
  getPlaylist: `${baseUrl}playlist/`,
  createPlaylist: `${baseUrl}playlist/create/`,
  modifyPlaylistTitle: `${baseUrl}playlist/modify/title/`,
  modifyPlaylistCover: `${baseUrl}playlist/modify/cover/`,
  addPlaylistTrack: `${baseUrl}playlist/modify/`,
  removePlaylistTrack: `${baseUrl}playlist/modify/`,
  deletePlaylist: `${baseUrl}playlist/delete/`,

  // Track
  getTrack: `${baseUrl}track/`,
  getAlbumTracks: `${baseUrl}track/all/`,
  getTrackCredits: `${baseUrl}track/credits/`,
  getTrackLyrics: `${baseUrl}track/lyrics/`,

  // User
  getUser: `${baseUrl}user/`,
  createUser: `${baseUrl}user/create`,
  updateUser: `${baseUrl}user/update/`,
  deleteUser: `${baseUrl}user/delete/`,

  // Media
  getAudio: `${baseUrl}audio/`,
  getImage: `${baseUrl}image/`,
};
