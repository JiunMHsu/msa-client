import axios from 'axios';

import { AxiosCall, ContentType, Album, Artist, Playlist } from '../models';
import { loadAbort } from '../utilities';
import { endpoints } from '../data';

const { getArtist, getAlbum, getPlaylist } = endpoints;

export function fetchContent(
  id: string,
  type: ContentType,
): AxiosCall<Artist | Album | Playlist> {
  const typeMatch = {
    artist: fetchArtist,
    album: fetchAlbum,
    playlist: fetchPlaylist,
  };
  return typeMatch[type](id);
}

export function fetchArtist(artistId: string): AxiosCall<Artist> {
  const controller = loadAbort();

  return {
    call: axios.get<Artist>(`${getArtist}${artistId}`, {
      signal: controller.signal,
    }),
    controller: controller,
  };
}

export function fetchAlbum(albumId: string): AxiosCall<Album> {
  const controller = loadAbort();

  return {
    call: axios.get<Album>(`${getAlbum}${albumId}`, {
      signal: controller.signal,
    }),
    controller: controller,
  };
}

export function fetchPlaylist(playlistId: string): AxiosCall<Playlist> {
  const controller = loadAbort();

  return {
    call: axios.get<Playlist>(`${getPlaylist}${playlistId}`, {
      signal: controller.signal,
    }),
    controller: controller,
  };
}
