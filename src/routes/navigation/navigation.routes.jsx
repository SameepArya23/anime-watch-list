import "./navigation.styles.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link, Outlet, useMatch } from "react-router-dom";
import { Fragment, useContext, useState } from "react";
import Loader from "../../components/loader/loader.component";
import { AnimeListContext } from "../../contexts/anime-list.context";
import { AddAnimeContext } from "../../contexts/add-anime-list.context";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navOpenHandler = () => setIsNavOpen(!isNavOpen);

  let exploreMatch = useMatch({ path: "explore", end: true });
  let listMatch = useMatch({ path: "my-anime-list", end: true });
  let authMatch = useMatch({ path: "auth", end: true });

  const { isLoading } = useContext(AnimeListContext);

  const { addList } = useContext(AddAnimeContext);

  const { currentUser, setCurrentUser, isSignOutOpen, setIsSignOutOpen } =
    useContext(UserContext);

  const toggleSignOut = () => setIsSignOutOpen(!isSignOutOpen);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="nav-container">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <span className="nav-links-btn" onClick={navOpenHandler}>
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </span>
        <div className={`nav-links ${isNavOpen ? "open-nav" : ""}`}>
          <Link className={`link ${exploreMatch ? "active" : ""}`} to="explore">
            Explore
          </Link>
          <Link
            className={`link ${listMatch ? "active" : ""}`}
            to="my-anime-list"
          >
            My Anime List
            {addList.length < 1 ? (
              ""
            ) : (
              <span className="badge">{addList.length}</span>
            )}
          </Link>
          {currentUser ? (
            <span className="profile-img-container">
              <span
                className={`link ${authMatch ? "active" : ""}`}
                onClick={toggleSignOut}
              >
                {currentUser.displayName.split(" ")[0].toUpperCase()} JI
              </span>
              <img className="profile-photo" src={currentUser.photoURL} />
              {isSignOutOpen && (
                <span className="sign-out-dropdown" onClick={signOutHandler}>
                  Sign-out
                </span>
              )}
            </span>
          ) : (
            <Link className={`link ${authMatch ? "active" : ""}`} to="auth">
              Sign-in
            </Link>
          )}
        </div>
        {isLoading && <Loader />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
