import Button from './Button';
import styles from './PlayButton.module.scss';

interface PlayButtonProps {
  show: boolean;
  buttonStyle?: string;
  iconStyle?: string;
  isPlaying?: boolean;
  onClick: () => void;
}

const PlayButton = ({
  show,
  buttonStyle,
  iconStyle,
  isPlaying,
  onClick,
}: PlayButtonProps) => {
  return (
    <>
      {show && (
        <Button
          className={`${styles.playButton} ${buttonStyle}`}
          onClick={onClick}
        >
          <img
            src={
              isPlaying
                ? 'icons/pause_FILL0_wght200_GRAD0_opsz24.svg'
                : 'icons/play_arrow_FILL0_wght200_GRAD0_opsz24.svg'
            }
            alt=""
            className={`${styles.icon} ${iconStyle}`}
          />
        </Button>
      )}
    </>
  );
};

export default PlayButton;
