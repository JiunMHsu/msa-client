import defaultStyle from './styles/Card.module.scss';
import compactStyle from './styles/CardCompact.module.scss';

type CardStyle = 'default' | 'compact';

type CardProps = {
  style?: CardStyle;
  imageUrl: string;
  title: string;
  description?: string;
  clickHandler?: () => void;
};

const setStyle = (style: CardStyle | undefined) => {
  switch (style) {
    case 'compact':
      return compactStyle;

    default:
      return defaultStyle;
  }
};

const Card = ({
  style,
  imageUrl,
  title,
  description,
  clickHandler,
}: CardProps) => {
  // setear el estilo segun el valor style
  const styles = setStyle(style);

  return (
    <div className={styles.cardContainer} onClick={clickHandler}>
      {/* nivel contenedor */}
      <div className={styles.imgContainer}>
        {/* <button>boton de accion</button> */}
        <img src={imageUrl} alt="-" className={styles.image} />
      </div>
      <div className={styles.textContentWrapper}>
        <div className={styles.titleBox}>{title}</div>
        <div className={styles.descriptionBox}>{description}</div>
      </div>
    </div>
  );
};

export default Card;
