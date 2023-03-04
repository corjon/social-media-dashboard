import { useState } from 'react';
import styles from './App.module.css';
import FollowersCard from './components/FollowersCard.jsx';
import OverviewCard from './components/OverviewCard.jsx';
import { ThemeContext } from './components/ThemeContext.jsx';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleChange(e) {
    setIsDarkMode(e.target.checked);
  }

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <main className={isDarkMode ? styles.dark : styles.main}>
        <div className={styles.topContainer}>
          <div className={styles.topWrapper}>
            <div className={styles.header}>
              <h1>Social Media Dashboard</h1>
              <p>Total Followers: 23,004</p>
              <div className={styles.hr}></div>
            </div>

            <div className={styles.switchContainer}>
              <p>Dark Mode</p>
              <label>
                <input type="checkbox" title="switch" aria-label="toggle" className={styles.swtich} onChange={handleChange} />
                <span></span>
              </label>
            </div>
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.followersContainer}>
            <FollowersCard
              image={'./src/assets/icon-facebook.svg'}
              username={'@nathanf'}
              total={'1987'}
              audience={'Followers'}
              icon={'./src/assets/icon-up.svg'}
              variance={'12'}
              color={'#178FF5'}
              varianceColor={'#1EB589'}
            />

            <FollowersCard
              image={'./src/assets/icon-twitter.svg'}
              username={'@nathanf'}
              total={'1044'}
              audience={'Followers'}
              icon={'./src/assets/icon-up.svg'}
              variance={'99'}
              color={'#1DA1F2'}
              varianceColor={'#1EB589'}
            />

            <FollowersCard
              image={'./src/assets/icon-instagram.svg'}
              username={'@realnathanf'}
              total={'11k'}
              audience={'Followers'}
              icon={'./src/assets/icon-up.svg'}
              variance={'1099'}
              color={'#EE877E'}
              varianceColor={'#1EB589'}
            />

            <FollowersCard
              image={'./src/assets/icon-youtube.svg'}
              username={'Nathan F.'}
              total={'8239'}
              audience={'Subscribers'}
              icon={'./src/assets/icon-down.svg'}
              variance={'144'}
              color={'#C4032B'}
              varianceColor={'#DC414C'}
            />
          </div>

          <h2>Overview - Today</h2>

          <div className={styles.overviewContainer}>
            <OverviewCard
              type={'Page Views'}
              image={'./src/assets/icon-facebook.svg'}
              number={'87'}
              icon={'./src/assets/icon-up.svg'}
              percent={'3'}
              varianceColor={'#1EB589'}
            />

            <OverviewCard
              type={'Likes'}
              image={'./src/assets/icon-facebook.svg'}
              number={'52'}
              icon={'./src/assets/icon-down.svg'}
              percent={'2'}
              varianceColor={'#DC414C'}
            />

            <OverviewCard
              type={'Likes'}
              image={'./src/assets/icon-instagram.svg'}
              number={'5462'}
              icon={'./src/assets/icon-up.svg'}
              percent={'2257'}
              varianceColor={'#1EB589'}
            />

            <OverviewCard
              type={'Profile Views'}
              image={'./src/assets/icon-instagram.svg'}
              number={'52k'}
              icon={'./src/assets/icon-up.svg'}
              percent={'1375'}
              varianceColor={'#1EB589'}
            />

            <OverviewCard
              type={'Retweets'}
              image={'./src/assets/icon-twitter.svg'}
              number={'117'}
              icon={'./src/assets/icon-up.svg'}
              percent={'303'}
              varianceColor={'#1EB589'}
            />

            <OverviewCard
              type={'Likes'}
              image={'./src/assets/icon-twitter.svg'}
              number={'507'}
              icon={'./src/assets/icon-up.svg'}
              percent={'553'}
              varianceColor={'#1EB589'}
            />

            <OverviewCard
              type={'Likes'}
              image={'./src/assets/icon-youtube.svg'}
              number={'107'}
              icon={'./src/assets/icon-down.svg'}
              percent={'19'}
              varianceColor={'#DC414C'}
            />

            <OverviewCard
              type={'Total Views'}
              image={'./src/assets/icon-youtube.svg'}
              number={'1407'}
              icon={'./src/assets/icon-down.svg'}
              percent={'12'}
              varianceColor={'#DC414C'}
            />
          </div>
        </div>
      </main>
    </ThemeContext.Provider>
  );
}