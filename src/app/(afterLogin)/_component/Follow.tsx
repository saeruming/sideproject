import Link from "next/link";
import style from "./follow.module.css";

export default function Follow() {
  const you = {
    id: "saeruming",
    nickname: "로미",
    image: "/짤랑이.jpg",
  };

  return (
    <div className={style.container}>
      <button className={style.userButton}>
        <div className={style.userImage}>
          <img src={you.image} alt={you.id} />
        </div>
        <div className={style.userName}>
          <div>{you.nickname}</div>
          <div>@{you.id}</div>
        </div>
      </button>
      <div>
        <button className={style.followButton}>
          팔로우
        </button>
      </div>
    </div>
  );
}
