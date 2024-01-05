export interface EndpointArtist {
  artistId: string;
  artistName: string;
  verified: boolean;
  followers: number;
  monthlyListeners: number;
  profilePhoto: string;
}
export interface EndpointAlbum {
  albumId: string;
  title: string;
  discType: string;
  coverArt: string;
  label: string;
  releaseDate: string;
  duration: string;
}

export interface EndpointPlaylist {}

export interface EndpointTrack {
  trackId: string;
  albumId: string;
  title: string;
  discNumber: number;
  trackNumber: number;
  duration: string;
  isExplicit: boolean;
  plays: number;
  sourceFile: string;
}

export interface EndpointUser {
  userId: string;
  name: string;
  email: string;
  password: string;
  profilePhoto: string;
}
