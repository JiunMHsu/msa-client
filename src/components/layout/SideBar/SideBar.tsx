import { Link } from 'react-router-dom';
import { Card_, Scrollable } from '../..';
import styles from './SideBar.module.scss';

interface SideBarProps {
  openMenu: boolean;
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

const SideBar = ({ openMenu }: SideBarProps) => {
  // const initialAlbums: Album[] = [];
  // const [albums, setAlbums] = useState(initialAlbums);

  //----------------------------------------------------------------------------------
  // const fetchAlbums = async () => {
  //   const { data } = await fetchAlbumList([
  //     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  //   ]).call;
  //   setAlbums(createAdaptedAlbumList(data));
  // };

  // useEffect(() => {
  //   fetchAlbums();
  // }, []);
  //----------------------------------------------------------------------------------

  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.optionWrapper}>
        {menuOptions.map(({ icon, text, goTo }, index) => (
          <Link className={styles.menuOption} to={goTo} key={index}>
            {<img src={`icons/${icon}`} className={styles.icon} />}
            {openMenu && <p className={styles.textHolder}>{text}</p>}
          </Link>
        ))}
      </div>

      <div className={styles.divider} />

      <Scrollable className={styles.scrollable}>
        {[].map(({ title, coverArt, artists }, index) => (
          <Card_
            imageUrl={coverArt}
            title={title}
            description={artists[0]}
            layout="compact"
            fold={!openMenu}
            onClick={() => {}}
            key={index}
          />
        ))}
      </Scrollable>

      {/* <div className={styles.resizer}></div> */}
    </div>
  );
};

export default SideBar;
