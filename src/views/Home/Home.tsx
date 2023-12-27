import { useEffect, useState } from 'react';
import { Card, ContentRow } from '../../components';
import { fetchAlbumList } from '../../servicies';
import { createAdaptedAlbumList } from '../../adapters';
import { Album } from '../../models';

const Home = () => {
  const initialAlbums: Album[] = [];
  const [albums, setAlbums] = useState(initialAlbums);

  const fetchAlbums = async () => {
    const { data } = await fetchAlbumList([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ]).call;
    setAlbums(createAdaptedAlbumList(data));
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  const clickHandler = () => {
    console.log('card clicked');
  };

  return (
    <>
      <ContentRow />
      <h2>Good Morning</h2>
      {albums.map(({ artist, cover, title }, index) => (
        <Card
          imageUrl={cover}
          title={title}
          description={artist[0]}
          onClick={clickHandler}
          key={index}
        />
      ))}
    </>
  );
};

export default Home;
