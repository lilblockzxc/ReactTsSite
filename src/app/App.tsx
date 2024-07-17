import { Suspense } from "react";

import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";

import { classNames as cn } from "@/shared";
import { MainPage } from "@/pages/MainPage";
import { AboutPage } from "@/pages/AboutPage";

import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={cn("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPage />}></Route>
          <Route path={"/about"} element={<AboutPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
