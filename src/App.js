import { useEffect, useState } from "react";
import Nav from "./Nav";
import Article from "./Article";
import ArticleEntry from "./ArticleEntry";
import { fetchArticles, createArticle } from "./articleService";
import { thisUser, login, logout } from "./authService";
import "./App.css";
import lmu from "./lmu.jpeg";
import github from "./icons8-github-48.png";
import linkedin from "./icons8-linkedin-circled-48.png";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";

function SignIn() {
  return (
    <button id="signIn" onClick={() => login()}>
      Sign In
    </button>
  );
}

function SignOut() {
  return (
    <div id="signOut">
      Hello, {thisUser()}
      <button id="signOutButton" onClick={() => logout()}>
        Sign Out
      </button>
    </div>
  );
}

export function useAuthentication() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      user ? setUser(user) : setUser(null);
    });
  }, []);
  return user;
}

export default function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);
  const [writing, setWriting] = useState(null);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetchArticles().then(setArticles);
  }, []);

  function addArticle({ title, body }) {
    createArticle({ title, body }).then(article => {
      setArticle(article);
      setArticles([article, ...articles]);
      setWriting(false);
    });
  }

  return (
    <div className="App">
      <header>
        <h1>College Life Blog</h1>
        <img id="lmu" src={lmu} alt="LMU" />
        {user && (
          <button id="newArticle" onClick={() => setWriting(true)}>
            New Article
          </button>
        )}
        {!user ? <SignIn /> : <SignOut />}
      </header>

      <footer>
        <a href="https://github.com/bsteenbergen" target="_blank">
          <img id="github" src={github} alt="github logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/brittany-steenbergen/"
          target="_blank"
        >
          <img id="linkedin" src={linkedin} alt="linkedin logo" />
        </a>
      </footer>

      {!user ? "" : <Nav articles={articles} setArticle={setArticle} />}

      {!user ? (
        <div></div>
      ) : writing ? (
        <ArticleEntry addArticle={addArticle} />
      ) : (
        <Article article={article} />
      )}
    </div>
  );
}
