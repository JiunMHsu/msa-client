import { useEffect, useState } from 'react';
import { Card, cardStyle } from '../../components';
import { fetchAlbumList } from '../../servicies';
import { createAdaptedAlbumList } from '../../adapters';
import { Album } from '../../models';

const Home = () => {
  // deberia ser obttenido del user
  // const recentlyPlayed = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const initialAlbums: Album[] = [];
  const [albums, setAlbums] = useState(initialAlbums);

  const fetchAlbums = async () => {
    // controlar esto con custom hook.
    // para eso esta el call y el controller

    const { data } = await fetchAlbumList([9, 3, 4, 6, 8]).call;
    setAlbums(createAdaptedAlbumList(data));
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  const clickHandler = () => {
    console.log('card clicked');
  };

  return (
    <div>
      Home
      {albums.map(({ artist, cover, title }) => (
        <Card
          styles={cardStyle}
          imageUrl={cover}
          title={title}
          description={artist[0]}
          clickHandler={clickHandler}
        />
      ))}
    </div>
  );
};

export default Home;
