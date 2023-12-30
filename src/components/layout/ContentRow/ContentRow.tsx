import { Link } from 'react-router-dom';

import { Card } from '../..';
import { Album, Artist, Playlist } from '../../../models';

import styles from './ContentRow.module.scss';

interface ContentRowProps {
  rowTitle: string;
  contentRoute: string;
  items: Artist | Album | Playlist;
}

interface Content {
  itemUrl: string;
  imageUrl: string;
  title: string;
  description: string;
  isArtist: boolean;
}

const adaptContent = (content: Artist | Album | Playlist) => {
  console.log(content);
  return [] as Content[];
};

const ContentRow = ({ rowTitle, contentRoute, items }: ContentRowProps) => {
  const content: Content[] = adaptContent(items);

  return (
    <div className={styles.rowWrapper}>
      <div className={styles.rowHeader}>
        <h2 className={styles.title}>{rowTitle}</h2>
        <Link className={styles.accionButton} to={`/show-all/${contentRoute}`}>
          Show All
        </Link>
      </div>

      <div className={styles.contentContainer}>
        {content.map(
          ({ itemUrl, imageUrl, title, description, isArtist }, index) => (
            <div className={styles.cardItem} key={index}>
              <Card
                itemUrl={itemUrl}
                imageUrl={imageUrl}
                mainTitle={title}
                description={description}
                isArtist={isArtist}
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default ContentRow;
