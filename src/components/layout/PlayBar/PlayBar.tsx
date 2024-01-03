// import { useRef, useState } from 'react';
// import { PlayButton } from '../..';
// import styles from './PlayBar.module.scss';

export interface _Track {
  title: string;
  src: string; // endpoint
}

interface PlayBarProps {
  playBarStyles: string;
  track: _Track;
}

const PlayBar = ({ playBarStyles, track }: PlayBarProps) => {
  return (
    <div className={`${playBarStyles}`}>
      <video controls autoPlay={true}>
        <source src={track.src} />
      </video>
    </div>
  );
};

export default PlayBar;
