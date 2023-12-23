import { useEffect, useRef, useState } from 'react';

import styles from './TextBox.module.scss';

type TextTagProps = {
  text: string;
};

type TextBoxProps = {
  text: string;
  style?: string;
};

const TextTag = ({ text }: TextTagProps) => {
  return <>{text}</>;
};

/**
 * La idea del TextBox es hacer que el texto a manipular
 * viva dentro de un contenedor o envoltorio (como se quiera llamar),
 * por 2 propósitos:
 *
 * 1. Que se pueda definir el tamaño del wrapper y formatear la cadena.
 * Ejemplo: una cadena larga -> una caden...
 *
 * 2. Animación de carga. Al momento de carga, que se muestre un bloque gris y no el texto, de manera que todo el contenido se actualice de forma simultánea
 *
 * ! Ojo que esto no acepta cualquier nodo, sólo texto
 *
 * @returns TextBox JSX Element
 */
const TextBox = ({ text, style }: TextBoxProps) => {
  // debe aceptar un valor inicial
  const [boxWidth, setBoxWidth] = useState();

  // cuando el width cambia, triggerear el set

  const boxRef = useRef(null);

  return (
    <div className={`${styles.textBox} ${style}`} ref={boxRef}>
      <TextTag text={text} />
    </div>
  );
};

export default TextBox;
