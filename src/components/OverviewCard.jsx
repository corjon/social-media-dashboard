export default function OverviewCard({ type, image, number, icon, percent }) {
  return (
    <div>
      <div>
        <p>{type}</p>
        <img src={image} alt="" />
      </div>
      <div>
        <p>{number}</p>
        <div>
          <img src={icon} alt="" />
          <p>{percent}%</p>
        </div>
      </div>
    </div>
  );
}