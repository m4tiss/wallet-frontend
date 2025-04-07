import userImg from "../assets/user.jpg"
const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-2">
        <img src={userImg} alt="userImg" className="w-16 h-16 rounded-full"/>
        <span className="text-2xl">Cześć, Mateusz! 👋</span>
    </div>
  );
};

export default ProfileCard;
