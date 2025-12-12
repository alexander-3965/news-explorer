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
import { NewsArticles } from "../../utils/constants";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { apiKey } from "../../utils/constants";
import { getNews, processNewsData } from "../../utils/NewsApi";

function App() {
  const [activeModal, setActiveModal] = useState(" ");
  const [currentUser, setCurrentUser] = useState({
    email: "alex@email.com",
    name: "Alex",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [newsArr, setNewsArr] = useState([]);
  const [newsCount, setNewsCount] = useState(3);
  const [isSearching, setIsSearching] = useState(false);

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setActiveModal("register");
  };

  const handleLogInClick = () => {
    setActiveModal("signIn");
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
    // the following is for testing purposes only
    setIsLoggedIn(true);
    setCurrentUser({ email: "alex@email.com", name: "Alex" });
    navigate("/saved-news");
    setActiveModal("");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const onSearch = (keyword) => {
    setNewsArr([]);
    setIsSearching(true);

    return getNews(keyword, apiKey).then(({ articles }) => {
      const processedNews = processNewsData(articles);
      setNewsArr(processedNews);
    });
  };

  const handleShowMoreClick = () => {
    setNewsCount(newsCount + 3);
  };

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };
    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
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
                  newsArr={newsArr}
                  newsCount={newsCount}
                  onSearch={onSearch}
                  isSearching={isSearching}
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

          <RegisterModal
            onCloseModal={closeActiveModal}
            isOpen={activeModal === "register"}
            onRegister={onRegister}
            handleLogInClick={handleLogInClick}
          ></RegisterModal>

          <SignInModal
            onCloseModal={closeActiveModal}
            isOpen={activeModal === "signIn"}
            onSignIn={onSignIn}
            handleSignUpClick={handleSignUpClick}
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
