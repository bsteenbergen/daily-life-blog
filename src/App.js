import "./App.css";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import Article from "./Article";
import { fetchTitles } from "./articleService";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebaseConfig"

function SignIn() {
  return (
    <button onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}>
      Sign In
    </button>
  )
}

function SignOut() {
  return (
    <div>
      Hello, {auth.currentUser.displayName} 
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  )
}

export default function App() {
  // useEffect(() => {
  //   setTitles(
  //     fetchTitles().map((article) => ({ id: article.id, title: article.title }))
  //   );
  // }, []);

  // const [user] = useAuthState(auth);
  // const [titles, setTitles] = useState([]);
  // const [articleId, setArticleId] = useState(null);

  return (
    <div className="App">
    <header>
      Blog
      {user && <button onClick={() => setWriting(true)}>New Article</button>}
      {!user ? <SignIn /> : <SignOut />}
    </header>

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
