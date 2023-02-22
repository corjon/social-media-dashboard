import styles from './App.module.css';
import FollowersCard from './components/FollowersCard.jsx';
import OverviewCard from './components/OverviewCard.jsx';

export default function App() {
  return (
    <main className={styles.main}>
      <div className={styles.top-container}>
        <div className={styles.header}>
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>

        <div className={styles.switch-container}>
          <p>Dark Mode</p>
        </div>
      </div>

      <div className={styles.followers-container}>
        <FollowersCard
          image={'./assets/icon-facebook.svg'}
          username={'@nathanf'}
          total={'1987'}
          audience={'Followers'}
          icon={'./assets/icon-up.svg'}
          variance={'12'}
        />

        <FollowersCard
          image={'./assets/icon-twitter.svg'}
          username={'@nathanf'}
          total={'1044'}
          audience={'Followers'}
          icon={'./assets/icon-up.svg'}
          variance={'99'}
        />

        <FollowersCard
          image={'./assets/icon-instagram.svg'}
          username={'@realnathanf'}
          total={'11k'}
          audience={'Followers'}
          icon={'./assets/icon-up.svg'}
          variance={'1099'}
        />

        <FollowersCard
          image={'./assets/icon-youtube.svg'}
          username={'Nathan F.'}
          total={'8239'}
          audience={'Subscribers'}
          icon={'./assets/icon-down.svg'}
          variance={'144'}
        />
      </div>

      <h2>Overview - Today</h2>

      <div className={styles.overview-container}>
        <OverviewCard
          type={'Page Views'}
          image={'./assets/icon-facebook.svg'}
          number={'87'}
          icon={'./assets/icon-up.svg'}
          percent={'3'}
        />

        <OverviewCard
          type={'Likes'}
          image={'./assets/icon-facebook.svg'}
          number={'52'}
          icon={'./assets/icon-down.svg'}
          percent={'2'}
        />

        <OverviewCard
          type={'Likes'}
          image={'./assets/icon-instagram.svg'}
          number={'5462'}
          icon={'./assets/icon-up.svg'}
          percent={'2257'}
        />

        <OverviewCard
          type={'Profile Views'}
          image={'./assets/icon-instagram.svg'}
          number={'52k'}
          icon={'./assets/icon-up.svg'}
          percent={'1375'}
        />

        <OverviewCard
          type={'Retweets'}
          image={'./assets/icon-twitter.svg'}
          number={'117'}
          icon={'./assets/icon-up.svg'}
          percent={'303'}
        />

        <OverviewCard
          type={'Likes'}
          image={'./assets/icon-twitter.svg'}
          number={'507'}
          icon={'./assets/icon-up.svg'}
          percent={'553'}
        />

        <OverviewCard
          type={'Likes'}
          image={'./assets/icon-youtube.svg'}
          number={'107'}
          icon={'./assets/icon-down.svg'}
          percent={'19'}
        />

        <OverviewCard
          type={'Total Views'}
          image={'./assets/icon-youtube.svg'}
          number={'1407'}
          icon={'./assets/icon-down.svg'}
          percent={'12'}
        />
      </div>
    </main>
  );
}