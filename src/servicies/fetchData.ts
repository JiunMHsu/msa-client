import axios from 'axios';

import { AxiosCall } from '../models';
import { EndpointAlbum } from '../models';
import { loadAbort } from '../utilities';

export function fetchAlbum(albumId: number): AxiosCall<EndpointAlbum> {
  const controller = loadAbort();

  return {
    call: axios.get<EndpointAlbum>(
      `https://rickandmortyapi.com/api/character/${albumId}`,
      {
        signal: controller.signal,
      },
    ),
    controller: controller,
  };
}

export function fetchAlbumList(
  albumIdList: Array<number>,
): AxiosCall<EndpointAlbum[]> {
  const controller = loadAbort();

  let stringifiedList = '';
  albumIdList.forEach(id => {
    stringifiedList = stringifiedList.concat(id.toString() + ',');
  });

  const endpoint = `https://rickandmortyapi.com/api/character/${stringifiedList.slice(
    0,
    stringifiedList.length - 1,
  )}`;

  return {
    call: axios.get<EndpointAlbum[]>(endpoint, {
      signal: controller.signal,
    }),
    controller: controller,
  };
}
