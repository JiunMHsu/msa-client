import { ContentRow } from '../../components';
import { ContentType } from '../../models';

import styles from './Home.module.scss';

const Home = () => {
  const initial: { id: string; type: ContentType }[] = [
    {
      id: '9d220c9b-d1b8-41a7-8286-8a1c5b0936f5',
      type: 'artist',
    },
    {
      id: '5d66351d-addd-49ac-84a9-dbde46ab5384',
      type: 'album',
    },
    {
      id: '8b65089c-2a07-47ad-a5e3-9bf8bd612a4e',
      type: 'artist',
    },
    {
      id: '07f261b7-8c5f-4a53-aaed-b269e64f03c1',
      type: 'album',
    },
    {
      id: 'e774ebae-f170-4e55-9d06-8269d4b6d1a4',
      type: 'album',
    },
    {
      id: '88e0b6ea-6203-4efd-a4ce-7900819b7044',
      type: 'album',
    },
  ];

  return (
    <div className={styles.home}>
      <ContentRow
        rowTitle="Good Morning"
        contentRoute="/ecommended"
        items={initial}
      />
      <div className={styles.fill}></div>
    </div>
  );
};

export default Home;
