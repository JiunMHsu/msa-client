export interface Artist {
  artistId: string;
  artistName: string;
  verified: boolean;
  followers: number;
  monthlyListeners: number;
  profilePhoto: string;
}

export interface Track {
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

export type DiskType = 'Album' | 'EP' | 'Single' | 'Mixtape';

export interface Album {
  albumId: string;
  title: string;
  discType: DiskType;
  artist: string;
  coverArt: string;
  label: string;
  releaseDate: string;
  duration: string;
}

export interface Playlist {
  playlistId: string;
  title: string;
  coverArt: string;
  createdBy: string; // id o nombre?
}

export interface User {
  userId: string;
  name: string;
  email: string;
  password: string;
  profilePhoto: string;
}

export type ContentType = 'artist' | 'album' | 'playlist';

export interface Content {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  type: ContentType;
}
