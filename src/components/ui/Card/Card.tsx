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
  let styleToApply: CSSModuleClasses;

  switch (style) {
    case 'compact':
      styleToApply = compactStyle;
      break;

    default:
      styleToApply = defaultStyle;
      break;
  }

  return styleToApply;
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
        <img src={imageUrl} alt="-" className={styles.image} />
      </div>
      <div className={styles.textContentWrapper}>
        <div className={styles.titleBox}>{title}</div>
        <div className={styles.descriptionBox}>{description}</div>
      </div>
      {/* <button>boton de accion</button> */}
    </div>
  );
};

export default Card;
