import { Outlet } from "react-router-dom";
import SiteNavigation from "./UI/SiteNavigation.jsx";
import { useUserContext } from "../contexts/UserContext.jsx";
import { useEffect } from "react";

const Layout = () => {
  const { handleAutoLogin } = useUserContext();

  useEffect(() => {
    handleAutoLogin();
    console.log("hello there");
  }, []);
  return (
    <div>
      <br />
      <br />
      <header className={"bg-amber-500"}>
        <p className={"text-5xl p-10 "}>☆*: .｡. o(≧▽≦)o .｡.:*☆</p>
        <SiteNavigation />
      </header>
      <br />
      <br />
      <main className={"bg-amber-300"}>
        <Outlet />
      </main>
      <footer>Copyright 2024</footer>
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
