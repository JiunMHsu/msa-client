import { useState } from 'react';
import { PlayButton } from '../..';

import defaultStyle from './styles/Card.module.scss';
import compactStyle from './styles/CardCompact.module.scss';

type CardLayout = 'default' | 'compact';

interface CardProps {
  imageUrl: string;
  title: string;
  description?: string;
  isArtist?: boolean;
  layout?: CardLayout;
  fold?: boolean;
  onClick?: () => void;
}

const setStyle = (layout: CardLayout | undefined) => {
  switch (layout) {
    case 'compact':
      return compactStyle;

    default:
      return defaultStyle;
  }
};

/**
 * En cuanto a layout de la carta, deberian haber:
 *
 * * Por defecto:
 *   Carta foto cuadrada, titulo principal, autores en descripción
 *   boton de play flotante sobre la img
 *
 * * Compacto (lo mismo que las dos anteriores)
 *   Varía únicamente en la animación del hover (véase spotify en la sección de librería),
 *   y en la descripción (va el tipo de album o playlist y el artista o creador)
 *
 * * Sencillo
 *   Layout alargado sin descripción,
 */
const Card_ = ({
  imageUrl,
  title,
  description,
  isArtist = false,
  layout,
  fold,
  onClick,
}: CardProps) => {
  // setear el estilo segun el valor style
  const styles = setStyle(layout);
  const [showButton, setShowButton] = useState(false);

  const playButtonHandler = () => {
    // deberia hacer lanzar el evento de encolar el tema, reproducir ...
    console.log('playing');
  };

  return (
    <div
      className={styles.cardContainer}
      onClick={onClick}
      onMouseEnter={() => {
        setShowButton(true);
      }}
      onMouseLeave={() => {
        setShowButton(false);
      }}
    >
      {/* nivel contenedor */}
      <PlayButton
        // condicion: el mostrado es true y que no este doblado
        show={showButton && !fold}
        onClick={playButtonHandler}
        buttonStyle={styles.playButton}
        iconStyle={styles.icon}
      />

      <div
        className={styles.imgContainer}
        style={isArtist ? { borderRadius: '5rem' } : {}}
      >
        {/* imagen */}
        <img src={imageUrl} alt="" className={styles.image}></img>
      </div>

      {!fold && (
        <div className={styles.textContentWrapper}>
          {/* nivel texto */}
          <div className={styles.titleBox}>{title}</div>
          <div className={styles.descriptionBox}>{description}</div>
        </div>
      )}
    </div>
  );
};

export default Card_;
