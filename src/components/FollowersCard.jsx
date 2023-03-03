import { useContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx';
import styles from './FollowersCard.module.css';

export default function FollowersCard({ image, username, total, audience, icon, variance, color, varianceColor }) {
  const isDarkMode = useContext(ThemeContext);

  return (
    <div className={isDarkMode ? styles.dark : styles.card} style={{borderTopColor: color}}>
      <div className={styles.socialMediaHandle}>
        <img src={image} alt="" />
        <p>{username}</p>
      </div>
      <p className={styles.total}>{total}</p>
      <p className={styles.audience}>{audience}</p>
      <div className={styles.variance}>
        <img src={icon} alt="" />
        <p style={{ color: varianceColor }}>{variance} Today</p>
      </div>
    </div>
  );
}