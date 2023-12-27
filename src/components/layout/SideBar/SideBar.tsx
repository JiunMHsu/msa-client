import { Link } from 'react-router-dom';
// import { Button } from '. =./..';
import { Card, Scrollable } from '../..';
import { useEffect, useState } from 'react';
import { createAdaptedAlbumList } from '../../../adapters';
import { fetchAlbumList } from '../../../servicies';
import { Album } from '../../../models';

import styles from './SideBar.module.scss';

interface SideBarProps {
  menuState: boolean;
}

const menuOptions = [
  {
    icon: 'home_FILL0_wght200_GRAD0_opsz24.svg',
    text: 'Home',
    goTo: '/',
  },
  {
    icon: 'search_FILL0_wght200_GRAD0_opsz24.svg',
    text: 'Explore',
    goTo: '/explore',
  },
  {
    icon: 'library_music_FILL0_wght200_GRAD0_opsz24.svg',
    text: 'Library',
    goTo: '/library',
  },
];

const SideBar = ({ menuState }: SideBarProps) => {
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

  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.optionWrapper}>
        {menuOptions.map(({ icon, text, goTo }, index) => (
          <Link className={styles.menuOption} to={goTo} key={index}>
            {<img src={icon} className={styles.icon} />}
            {menuState && <p className={styles.textHolder}>{text}</p>}
          </Link>
        ))}
      </div>

      <Scrollable className={styles.scrollable}>
        {albums.map(({ artist, cover, title }, index) => (
          <Card
            imageUrl={cover}
            title={title}
            description={artist[0]}
            layout="compact"
            fold={!menuState}
            onClick={() => {}}
            key={index}
          />
        ))}
      </Scrollable>

      <div className={styles.resizer}></div>
    </div>
  );
};

export default SideBar;
