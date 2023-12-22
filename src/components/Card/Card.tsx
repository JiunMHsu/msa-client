type CardProps = {
  styles: {
    cardContainer?: string;
    imgContainer?: string;
    image?: string;
    textContentWrapper?: string;
    titleBox?: string;
    descriptionBox?: string;
  };
  imageUrl: string;
  title: string;
  description?: string;
  clickHandler?: () => void;
};

const Card = ({
  styles,
  imageUrl,
  title,
  description,
  clickHandler,
}: CardProps) => {
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
