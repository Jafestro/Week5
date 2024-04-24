import Home from "./components/Home";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Profile from "./views/Profile.jsx";
import Upload from "./views/Upload.jsx";
import Layout from "./components/Layout.jsx";
import Single from "./views/Single.jsx";
import Login from "./components/Login.jsx";
const App = () => {
  return (
    <>
      <Router basename={import.meta.env.BASE_URL}>
        <h1>My App</h1>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/media/:id" element={<Single />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};
export default App;
