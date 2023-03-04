import { useState } from 'react';
import styles from './App.module.css';
import FollowersCard from './components/FollowersCard.jsx';
import OverviewCard from './components/OverviewCard.jsx';
import { ThemeContext } from './components/ThemeContext.jsx';
import facebook from './assets/icon-facebook.svg';
import twitter from './assets/icon-twitter.svg';
import instagram from './assets/icon-instagram.svg';
import youtube from './assets/icon-youtube.svg';
import upArrow from './assets/icon-up.svg';
import downArrow from './assets/icon-down.svg';

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
              image={facebook}
              username={'@nathanf'}
              total={'1987'}
              audience={'Followers'}
              icon={upArrow}
              variance={'12'}
              color={'#178FF5'}
              varianceColor={'#1EB589'}
            />

            <FollowersCard
              image={twitter}
              username={'@nathanf'}
              total={'1044'}
              audience={'Followers'}
              icon={upArrow}
              variance={'99'}
              color={'#1DA1F2'}
              varianceColor={'#1EB589'}
            />

            <FollowersCard
              image={instagram}
              username={'@realnathanf'}
              total={'11k'}
              audience={'Followers'}
              icon={upArrow}
              variance={'1099'}
              color={'#EE877E'}
              varianceColor={'#1EB589'}
            />

            <FollowersCard
              image={youtube}
              username={'Nathan F.'}
              total={'8239'}
              audience={'Subscribers'}
              icon={downArrow}
              variance={'144'}
              color={'#C4032B'}
              varianceColor={'#DC414C'}
            />
          </div>

          <h2>Overview - Today</h2>

          <div className={styles.overviewContainer}>
            <OverviewCard
              type={'Page Views'}
              image={facebook}
              number={'87'}
              icon={upArrow}
              percent={'3'}
              varianceColor={'#1EB589'}
            />

            <OverviewCard
              type={'Likes'}
              image={facebook}
              number={'52'}
              icon={downArrow}
              percent={'2'}
              varianceColor={'#DC414C'}
            />

            <OverviewCard
              type={'Likes'}
              image={instagram}
              number={'5462'}
              icon={upArrow}
              percent={'2257'}
              varianceColor={'#1EB589'}
            />

            <OverviewCard
              type={'Profile Views'}
              image={instagram}
              number={'52k'}
              icon={upArrow}
              percent={'1375'}
              varianceColor={'#1EB589'}
            />

            <OverviewCard
              type={'Retweets'}
              image={twitter}
              number={'117'}
              icon={upArrow}
              percent={'303'}
              varianceColor={'#1EB589'}
            />

            <OverviewCard
              type={'Likes'}
              image={twitter}
              number={'507'}
              icon={upArrow}
              percent={'553'}
              varianceColor={'#1EB589'}
            />

            <OverviewCard
              type={'Likes'}
              image={youtube}
              number={'107'}
              icon={downArrow}
              percent={'19'}
              varianceColor={'#DC414C'}
            />

            <OverviewCard
              type={'Total Views'}
              image={youtube}
              number={'1407'}
              icon={downArrow}
              percent={'12'}
              varianceColor={'#DC414C'}
            />
          </div>
        </div>
      </main>
    </ThemeContext.Provider>
  );
}