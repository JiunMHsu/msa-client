export interface Artist {
  artistId: string;
  name: string;
  isVerified: boolean;
  followers: number;
  monthlyListeners: number;
  profilePhoto: string;
  profileBanner?: string;
  about: string;
}

export interface Track {}

export type DiskType = 'Album' | 'EP' | 'Single' | 'Mixtape';

export interface Album {
  albumId: string;
  discType: DiskType;
  title: string;
  coverArt: string;
  artists: string[]; // id
  tracks: Track[];
  label: string;
  release: Date; // XX-XX-XX
  duration: Date; // miliseconds
}

export interface Playlist {}

export interface User {
  name: string;
  profilePhoto: string;
  following: string[];
  playlists: string[];
  savedAlbums: string[];
}
