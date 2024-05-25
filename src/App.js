import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import AboutUs from "./components/about";
import Users from "./components/users";
import Navbar from "./components/navbar";
import NotFound from "./components/notfound";
import UserProfile from "./components/userProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Navbar />} path="/">
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/users" element={<Users />} />
        </Route>
        <Route element={<NotFound />} path="*" />
        <Route path="/users/user/:username" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
