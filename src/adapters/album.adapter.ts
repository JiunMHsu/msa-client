import { Album, EndpointAlbum } from '../models';

export const createAdaptedAlbum = (fetched: EndpointAlbum) => {
  const formattedAlbum: Album = {
    title: fetched.name,
    cover: fetched.image,
    artist: [fetched.gender],
  };
  return formattedAlbum;
};

export const createAdaptedAlbumList = (fetched: Array<EndpointAlbum>) => {
  return fetched.map(album => createAdaptedAlbum(album));
};
