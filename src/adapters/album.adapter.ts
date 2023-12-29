import { Album, EndpointAlbum } from '../models';

export const createAdaptedAlbum = ({
  id,
  name,
  image,
  gender,
}: EndpointAlbum) => {
  const formattedAlbum: Album = {
    albumId: `${id}`,
    discType: 'Album',
    title: name,
    coverArt: image,
    artists: [gender], // ids
    tracks: [],
    label: 'Ou Violette',
    release: new Date(), // XX-XX-XX
    duration: new Date(), // miliseconds
  };
  return formattedAlbum;
};

export const createAdaptedAlbumList = (fetched: EndpointAlbum[]) => {
  return fetched.map(album => createAdaptedAlbum(album));
};
