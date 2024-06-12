export default function UserBadge(props) {
  const { profile_picture, name } = props;
  return (
    <div className="UserBadge">
      <img src={profile_picture} alt="profile picture of user" />
      <span>{name}</span>
    </div>
  );
}
