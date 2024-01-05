import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../..';
import { Album, Artist, Content, ContentType, Playlist } from '../../../models';
import { fetchContent } from '../../../servicies';
import { endpoints } from '../../../data';
import styles from './ContentRow.module.scss';

interface ContentRowProps {
  rowTitle: string;
  contentRoute: string;
  items: {
    id: string;
    type: ContentType;
  }[];
}

const isArtist = (value: any): value is Artist => {
  return value.artistId !== undefined;
};

const isAlbum = (value: any): value is Album => {
  return value.albumId !== undefined;
};

const isPlaylist = (value: any): value is Playlist => {
  return value.playlistId !== undefined;
};

const adaptContent = (content: Artist | Album | Playlist) => {
  const c = {
    id: '',
    title: '',
    description: '',
    imageUrl: `${endpoints.getImage}`,
    type: 'album',
  } as Content;

  if (isArtist(content)) {
    c.id = content.artistId;
    c.title = content.artistName;
    c.description = 'Artist';
    c.imageUrl += content.profilePhoto;
    c.type = 'artist';
  }

  if (isAlbum(content)) {
    c.id = content.albumId;
    c.title = content.title;
    c.description = content.artist;
    c.imageUrl += content.coverArt;
    c.type = 'album';
  }

  if (isPlaylist(content)) {
    c.id = content.playlistId;
    c.title = content.title;
    c.description = content.createdBy;
    c.imageUrl += content.coverArt;
    c.type = 'playlist';
  }
  return c;
};

const ContentRow = ({ rowTitle, contentRoute, items }: ContentRowProps) => {
  const [content, setContent] = useState<Content[]>([]);

  const getContent = async () => {
    const calls = items.map(({ id, type }) => fetchContent(id, type));

    const contentPromises = calls.map(async ({ call }) => {
      const { data } = await call;
      return adaptContent(data);
    });

    const contentList = await Promise.all(contentPromises);
    setContent(contentList)
  };

  useEffect(() => {
    getContent();
    return () => {
      setContent([]);
    };
  }, []); // se podria poner alguna dependencia (por ejemplo los recien escuchados)

  return (
    <div className={styles.rowWrapper}>
      <div className={styles.rowHeader}>
        <h2 className={styles.title}>{rowTitle}</h2>
        <Link className={styles.accionButton} to={`/show-all/${contentRoute}`}>
          Show All
        </Link>
      </div>

      <div className={styles.contentContainer}>
        {content.map(item => (
          <Card key={item.id} content={item} />
        ))}
      </div>
    </div>
  );
};

export default ContentRow;
