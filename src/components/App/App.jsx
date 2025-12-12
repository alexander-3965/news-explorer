import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import ProtectedRoute from "../ProtectedRoute";
import RegisterModal from "../Modals/RegisterModal";
import SignInModal from "../Modals/SigninModal";
import SuccessfulRegistrationModal from "../Modals/SuccesfulRegistrationModal";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import About from "../About/About";

function App() {
  const [activeModal, setActiveModal] = useState(" ");
  const [currentUser, setCurrentUser] = useState({
    email: "alex@email.com",
    name: "Alex",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [newsCount, setNewsCount] = useState(3);

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setActiveModal("register");
  };

  const handleLogInClick = () => {
    // setActiveModal("signIn");
    // the following is for testing purposes only
    setIsLoggedIn(true);
    setCurrentUser({ email: "alex@email.com", name: "Alex" });
    navigate("/saved-news");
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    // setCurrentUser({ email: "", name: "" });
    // setToken("");
    navigate("/");
  };

  const onRegister = (user) => {
    // return signUp(user)
    //   .then((data) => {
    //     return signIn({ email: user.email, password: user.password });
    //   })
    //   .then((loginData) => {
    //     localStorage.setItem("jwt", loginData.token);
    //     setIsLoggedIn(true);
    //     return getUserInfo(loginData.token);
    //   })
    //   .then((userInfo) => {
    //     setCurrentUser(userInfo);
    //     closeActiveModal();
    //     navigate("/");
    //   })
    //   .catch(console.error);
  };

  const onSignIn = (user) => {
    // return signIn(user)
    //   .then((data) => {
    //     getUserInfo(data.token).then(({ name, avatar, _id }) => {
    //       setCurrentUser({
    //         name: name,
    //         avatar: avatar,
    //         _id: _id,
    //       });
    //     });
    //     setIsLoggedIn(true);
    //     closeActiveModal();
    //     if (data.token) {
    //       setToken(data.token);
    //       setTimeout(() => {
    //         return navigate("/");
    //       }, 0);
    //     }
    //   })
    //   .catch(console.error);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleShowMoreClick = () => {
    setNewsCount(newsCount + 3);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          {/* <div className="page__top-section"> */}
          <Header
            isLoggedIn={isLoggedIn}
            handleSignUpClick={handleSignUpClick}
            handleLogInClick={handleLogInClick}
            handleLogoutClick={handleLogoutClick}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  isLoggedIn={isLoggedIn}
                  handleShowMoreClick={handleShowMoreClick}
                  newsCount={newsCount}
                />
              }
            />
            <Route
              path="/saved-news"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedNews
                    isLoggedIn={isLoggedIn}
                    handleLogoutClick={handleLogoutClick}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="*"
              element={
                isLoggedIn ? (
                  <Navigate to="/saved-news" replace />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
          </Routes>
          {/* </div> */}

          <RegisterModal
            onCloseModal={closeActiveModal}
            isOpen={activeModal === "register"}
            onRegister={onRegister}
          ></RegisterModal>

          <SignInModal
            onCloseModal={closeActiveModal}
            isOpen={activeModal === "signIn"}
            onSignIn={onSignIn}
          ></SignInModal>

          <SuccessfulRegistrationModal
            isOpen={activeModal === "preview"}
            handleCloseClick={closeActiveModal}
          />

          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
