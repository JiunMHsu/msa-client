type TextBoxProps = {
  text: string;
  style: string; // no tendria que ser string, ver esto
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
  return <div className={style}>{text}</div>;
};

export default TextBox;
