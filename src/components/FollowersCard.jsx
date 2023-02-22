export default function FollowersCard({ image, username, total, audience, icon, variance }) {
  return (
    <div>
        <div>
          <img src={image} alt="" />
          <p>{username}</p>
        </div>
        <p>{total}</p>
        <p>{audience}</p>
        <div>
          <img src={icon} alt="" />
          <p>{variance} Today</p>
        </div>
    </div>
  );
}