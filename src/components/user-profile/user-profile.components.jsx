import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import "./user-profile.styles.css";

const UserProfile = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="profile-container">
      <div className="txt">WELCOME {currentUser.displayName.toUpperCase()}</div>
      <div className="txt">You have successfully signed in your account.</div>
    </div>
  );
};

export default UserProfile;
