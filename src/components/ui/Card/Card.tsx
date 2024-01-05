import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlayButton } from '../..';
import { Content } from '../../../models';

import defaultStyle from './Card.module.scss';
import compactStyle from './CardCompact.module.scss';

type CardLayout = 'default' | 'compact';

interface CardProps {
  content: Content;
  layout?: CardLayout;
  className?: string;
  //   fold?: boolean;
}

const setStyle = (layout: CardLayout = 'default') => {
  const layoutStyleSheetMatch = {
    compact: compactStyle,
    default: defaultStyle,
  };
  return layoutStyleSheetMatch[layout];
};

const Card = ({ content, layout, className }: CardProps) => {
  const styles = setStyle(layout);
  const { id, title, description, imageUrl, type } = content;

  const [showButton, setShowButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(previous => !previous);
    console.log('playing');
  };

  return (
    <div
      className={`${styles.cardContainer} ${className} `}
      onMouseEnter={() => {
        setShowButton(true);
      }}
      onMouseLeave={() => {
        setShowButton(false);
      }}
    >
      <PlayButton
        show={showButton}
        onClick={handlePlay}
        buttonStyle={styles.playButton}
        isPlaying={isPlaying}
        iconStyle={styles.icon}
      />
      <Link to={`/${type}/${id}`} className={styles.clickable}>
        <div
          className={styles.imgContainer}
          style={type == 'artist' ? { borderRadius: '5rem' } : {}}
        >
          <img src={`${imageUrl}`} alt="" className={styles.image}></img>
        </div>

        <div className={styles.textContentWrapper}>
          <div className={styles.titleBox}>{title}</div>
          <div className={styles.descriptionBox}>{description}</div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
