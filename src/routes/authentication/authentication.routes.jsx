import { Fragment, useContext } from "react";
import Button from "../../components/buttons/button.component";
import UserProfile from "../../components/user-profile/user-profile.components";
import { UserContext } from "../../contexts/user.context";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import "./auth.styles.css";

const Authentication = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    setCurrentUser(user);
  };
  return (
    <div className="auth-container">
      {currentUser ? (
        <UserProfile />
      ) : (
        <Fragment>
          <span className="alternate-message">Sign In to your account</span>
          <Button buttonType={"google"} onClick={logGoogleUser}>
            Sign In With Google
          </Button>
        </Fragment>
      )}
    </div>
  );
};

export default Authentication;
