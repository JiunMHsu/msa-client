import { useState } from 'react';
import { Button } from '../..';
import defaultStyle from './styles/Card.module.scss';
import compactStyle from './styles/CardCompact.module.scss';

type CardStyle = 'default' | 'compact';

interface CardProps {
  style?: CardStyle;
  imageUrl: string;
  title: string;
  description?: string;
  clickHandler?: () => void;
}

const setStyle = (style: CardStyle | undefined) => {
  switch (style) {
    case 'compact':
      return compactStyle;

    default:
      return defaultStyle;
  }
};

/**
 * En cuanto a estilos de la carta, deberian haber:
 *
 * * Por defecto:
 *   Carta foto cuadrada, titulo principal, autores en descripción
 *   boton de play flotante sobre la img
 *
 * * Artista (es el por defecto con modificaciones)
 *   Carta foto redonda, nombre de artista como titulo principal
 *   texto "artista" como descripción
 *
 * * Compacto (lo mismo que las dos anteriores)
 *   Varía únicamente en la animación del hover (véase spotify en la sección de librería),
 *   y en la descripción (va el tipo de album o playlist y el artista o creador)
 *
 * * Sencillo
 *   Layout alargado sin descripción,
 */
const Card = ({
  style,
  imageUrl,
  title,
  description,
  clickHandler,
}: CardProps) => {
  // setear el estilo segun el valor style
  const styles = setStyle(style);
  const [playButton, setPlayButton] = useState(false);

  const playButtonHandler = () => {
    // deberia hacer lanzar el evento de encolar el tema, reproducir ...
    console.log('playing');
  };

  return (
    <div
      className={styles.cardContainer}
      onClick={clickHandler}
      onMouseEnter={() => {
        setPlayButton(true);
      }}
      onMouseLeave={() => {
        setPlayButton(false);
      }}
    >
      {/* nivel contenedor */}
      {playButton && (
        <Button className={styles.playButton} onClick={playButtonHandler}>
          <img src="play_arrow_FILL0_wght200_GRAD0_opsz24.svg" alt="" className={styles.icon}/>
        </Button>
      )}
      <div className={styles.imgContainer}>
        {/* imagen */}
        <img src={imageUrl} alt="" className={styles.image}></img>
      </div>
      <div className={styles.textContentWrapper}>
        {/* nivel texto */}
        <div className={styles.titleBox}>{title}</div>
        <div className={styles.descriptionBox}>{description}</div>
      </div>
    </div>
  );
};

export default Card;
