import { Card } from '../..';
import styles from './ContentRow.module.scss';

/**
 * El Content Row recide un array de elementos a
 *
 */
const ContentRow = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <div className={styles.rowHeader}>
        <h2 className={styles.title}>Recent Play</h2>
        <a className={styles.accionButton} href='/library'>Show All</a>
      </div>
      <div className={styles.contentContainer}>
        {array.map((number, index) => (
          <Card
            imageUrl={''}
            title={number.toString()}
            description={'una descripcion'}
            clickHandler={() => {}}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default ContentRow;
