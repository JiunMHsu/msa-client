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
      <audio controls autoPlay={true}>
        <source src={track.src} type="audio/flac"/>
      </audio>
    </div>
  );
};

export default PlayBar;
