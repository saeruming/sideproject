import Follow from "./Follow";
import style from "./followReco.module.css";
export default function FollowReco() {
  return (
    <div className={style.container}>
      <div className={style.follow}>
        <h3>팔로우 추천</h3>
        <Follow />
        <Follow />
        <Follow />
        <Follow />
      </div>
    </div>
  );
}
