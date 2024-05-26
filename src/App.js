import "./App.css";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./components/home";
import { useState, lazy, Suspense } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const AboutUs = lazy(() => import("./components/about"));
const Users = lazy(() => import("./components/users"));
const SearchUser = lazy(() => import("./components/searchUser"));
const AuthProfile = lazy(() => import("./components/authProfile"));
const Login = lazy(() => import("./components/login"));
const NotFound = lazy(() => import("./components/notfound"));
const UserProfile = lazy(() => import("./components/userProfile"));

function App() {
  const [username, setUsername] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const location = useLocation();

  return (
    <div className="App">
      <SwitchTransition component={null}>
        <CSSTransition
          classNames="fade"
          key={location.pathname}
          timeout={300}
          unmountOnExit>
          <Suspense fallback={() => <h1>Loading...</h1>}>
            <Routes location={location}>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/users" element={<Users />} />
              <Route path="/search" element={<SearchUser />} />
              <Route
                path="/login"
                element={
                  <Login setUsername={setUsername} setIsLogged={setIsLogged} />
                }
              />
              <Route
                path="/authprofile"
                element={
                  isLogged ? (
                    <AuthProfile username={username} />
                  ) : (
                    <Navigate replace to={"/login"} />
                  )
                }
              />
              <Route element={<NotFound />} path="*" />
              <Route path="/users/user/:username" element={<UserProfile />} />
            </Routes>
          </Suspense>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
