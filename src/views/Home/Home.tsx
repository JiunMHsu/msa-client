import { useState } from 'react';
import { Card, cardStyle } from '../../components';
import { fetchAlbumList } from '../../servicies';
import { createAdaptedAlbumList } from '../../adapters';
import { Album, EndpointAlbum } from '../../models';
import { useFetchAndLoad } from '../../hooks';
import { useAsync } from '../../hooks/useAsync';

const Home = () => {
  const { loading, callEndpoint } = useFetchAndLoad<EndpointAlbum[]>();

  const initialAlbums: Album[] = [];
  const [albums, setAlbums] = useState(initialAlbums);

  const getApiData = async () =>
    await callEndpoint(fetchAlbumList([23, 54, 22, 7, 1, 2, 8]));

  const updateState = (fetchedAlbums: EndpointAlbum[]) => {
    setAlbums(createAdaptedAlbumList(fetchedAlbums));
  };

  useAsync<EndpointAlbum[]>(getApiData, updateState, () => {});

  const clickHandler = () => {
    console.log('card clicked');
  };

  return (
    <div>
      Home
      {albums.map(({ artist, cover, title }, index) => (
        <Card
          styles={cardStyle}
          imageUrl={cover}
          title={title}
          description={artist[0]}
          clickHandler={clickHandler}
          key={index}
        />
      ))}
    </div>
  );
};

export default Home;
