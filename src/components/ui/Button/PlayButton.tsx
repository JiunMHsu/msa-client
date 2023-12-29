import Button from './Button';
import styles from './PlayButton.module.scss';

interface PlayButtonProps {
  show: boolean;
  buttonStyle?: string;
  iconStyle?: string;
  onClick: () => void;
}

const PlayButton = ({
  show,
  buttonStyle,
  iconStyle,
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
            src="icons/play_arrow_FILL0_wght200_GRAD0_opsz24.svg"
            alt=""
            className={`${styles.icon} ${iconStyle}`}
          />
        </Button>
      )}
    </>
  );
};

export default PlayButton;
