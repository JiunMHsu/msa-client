import { useEffect, useState } from 'react';

import { ContentRow, Card, NewCard } from '../../components';
import { createAdaptedAlbumList } from '../../adapters';
import { fetchAlbumList } from '../../servicies';
import { Album } from '../../models';

import styles from './Home.module.scss';

const Home = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  const fetchAlbums = async () => {
    const { data } = await fetchAlbumList([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ]).call;
    setAlbums(createAdaptedAlbumList(data));
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div className={styles.home}>
      <h2>Good Morning</h2>
      <NewCard
        itemUrl={'/library'}
        imageUrl={'album-cover/iu-lilac.jpg'}
        mainTitle={`IU 5th Album 'LILAC'`}
        description={'IU'}
      />
      <ContentRow />
      {albums.map(({ albumId, title, coverArt, artists }, index) => (
        <NewCard
          itemUrl={`/${albumId}`}
          imageUrl={coverArt}
          mainTitle={title}
          description={artists[0]}
          isArtist={artists[0] === 'Female'}
          key={index}
        />
      ))}
    </div>
  );
};

export default Home;
