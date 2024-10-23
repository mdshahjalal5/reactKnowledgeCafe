import profileImage from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex">
      <h2>hellow world how are you </h2>
      <img src={profileImage} className="w-19" alt="profile"></img>
    </div>
  );
};

export default Header;
