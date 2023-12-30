import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlayButton } from '../..';

import defaultStyle from './Card.module.scss';
import compactStyle from './CardCompact.module.scss';

type CardLayout = 'default' | 'compact';

interface CardProps {
  itemUrl: string;
  imageUrl: string;
  mainTitle: string;
  description?: string;
  isArtist?: boolean;
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

const Card = ({
  itemUrl,
  imageUrl,
  mainTitle,
  description,
  isArtist,
  layout,
  className,
}: CardProps) => {
  const styles = setStyle(layout);
  const [showButton, setShowButton] = useState(false);

  const handlePlay = () => {
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
        iconStyle={styles.icon}
      />
      <Link to={itemUrl} className={styles.clickable}>
        <div
          className={styles.imgContainer}
          style={isArtist ? { borderRadius: '5rem' } : {}}
        >
          <img src={imageUrl} alt="" className={styles.image}></img>
        </div>

        <div className={styles.textContentWrapper}>
          <div className={styles.titleBox}>{mainTitle}</div>
          <div className={styles.descriptionBox}>{description}</div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
