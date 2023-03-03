import { useContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx';
import styles from './OverviewCard.module.css';

export default function OverviewCard({ type, image, number, icon, percent, varianceColor }) {
  const isDarkMode = useContext(ThemeContext);

  return (
    <div className={isDarkMode ? styles.dark : styles.card}>
      <div className={styles.socialMedia}>
        <p>{type}</p>
        <img src={image} alt="" />
      </div>
      <div className={styles.amount}>
        <p>{number}</p>
        <div className={styles.variance}>
          <img src={icon} alt="" />
          <p style={{ color: varianceColor }}>{percent}%</p>
        </div>
      </div>
    </div>
  );
}