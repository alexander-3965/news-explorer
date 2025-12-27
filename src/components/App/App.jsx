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
import { apiKey, NewsArticles } from "../../utils/constants";
import { getNews, processNewsData } from "../../utils/NewsApi";
import {
  getItems,
  saveArticle,
  savedItems,
  removeArticle,
} from "../../utils/api";
import { authorize, checkToken, setToken, signUp } from "../../utils/auth";

function App() {
  const [activeModal, setActiveModal] = useState(" ");
  const [currentUser, setCurrentUser] = useState({
    email: "",
    name: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [newsArr, setNewsArr] = useState([]);
  const [newsCount, setNewsCount] = useState(3);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [bookmarkedNews, setBookmarkedNews] = useState(NewsArticles);
  // to simulate saved back end

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setActiveModal("register");
  };

  const handleLogInClick = () => {
    setActiveModal("signIn");
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setCurrentUser({ email: "", name: "" });
    setToken("");
    navigate("/");
  };

  const onRegister = (user) => {
    return (
      signUp(user)
        //   .then((data) => {
        //     return signIn({ email: user.email, password: user.password });
        //   })
        //   .then((loginData) => {
        //     localStorage.setItem("jwt", loginData.token);
        //     setIsLoggedIn(true);
        //     return getUserInfo(loginData.token);
        //   })
        .then((userInfo) => {
          console.log("user info", userInfo);
          setCurrentUser(userInfo);
          setIsLoggedIn(true);
          closeActiveModal();
          navigate("/saved-news");
        })
        .catch(console.error)
    );
  };

  const onSignIn = (user) => {
    return authorize(user)
      .then((data) => {
        checkToken(data.token).then(({ name, email, _id }) => {
          console.log("info", name, email, _id);
          setCurrentUser({
            name: name,
            email: email,
            _id: _id,
          });
        });
        setIsLoggedIn(true);
        closeActiveModal();
        if (data.token) {
          setToken(data.token);
          setTimeout(() => {
            return navigate("/saved-news");
          }, 0);
        }
      })
      .catch(console.error);
    // the following is for testing purposes only
    // setIsLoggedIn(true);
    // setCurrentUser({ email: "alex@email.com", name: "Alex" });
    // navigate("/saved-news");
    // setActiveModal("");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const onSearch = async (keyword) => {
    setIsLoading(true);
    setIsSearching(false);
    setNotFound(false);

    const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 3000));
    const emptyNewsArrPromise = new Promise((resolve) =>
      resolve(setNewsArr([]))
    );

    Promise.all([getNews(keyword, apiKey), timeoutPromise, emptyNewsArrPromise])
      .then((response) => {
        console.log("on Search res", response);
        const processedNews = processNewsData(response[0].articles);
        setNewsArr(processedNews);
        setNewsCount(3);
        if (processedNews.length === 0) {
          setNotFound(true);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
        if (!notFound) {
          setIsSearching(true);
        }
      });
  };

  const handleShowMoreClick = () => {
    setNewsCount(newsCount + 3);
  };

  const onSaveItem = (article, key) => {
    console.log("onSaveItem", article);
    saveArticle(article)
      .then((res) => {
        setNewsArr((news) =>
          news.map((item) => (item.url === key ? savedItems[res - 1] : item))
        );
        console.log("res", savedItems[res - 1]);
      })
      .catch((err) => console.error(err));
  };

  const onDeleteItem = (article) => {
    console.log("item to be deleted", article);
    removeArticle(article);
  };

  useEffect(() => {
    getItems()
      .then((data) => {
        setBookmarkedNews(data);
      })
      .catch((err) => console.error(err));
  }, []);

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
                  isLoading={isLoading}
                  notFound={notFound}
                  handleLogInClick={handleLogInClick}
                  onSaveItem={onSaveItem}
                />
              }
            />
            <Route
              path="/saved-news"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedNews
                    isLoggedIn={isLoggedIn}
                    bookmarkedNews={bookmarkedNews}
                    onDeleteItem={onDeleteItem}
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
