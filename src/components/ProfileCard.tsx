import userImg from "../assets/user.jpg"
const ProfileCard = () => {
  return (
    <div className="flex flex-col">
        <img src={userImg} alt="userImg" className="w-16 h-16 rounded-full"/>
        <span>Hi,Nichole</span>
    </div>
  );
};

export default ProfileCard;
