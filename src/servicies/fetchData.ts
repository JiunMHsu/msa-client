import axios from 'axios';

import { EndpointAlbum } from '../models';
import { loadAbort } from '../utilities';

export const fetchAlbum = (albumId: number) => {
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
};

export const fetchAlbumList = (albumIdList: Array<number>) => {
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
};
