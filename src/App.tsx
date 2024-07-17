import { Suspense } from "react";

import { Link, Route, Routes } from "react-router-dom";
import { MainPageLazy } from "./pages/MainPage/MainPagelazy";
import { AboutPageLazy } from "./pages/AboutPage/AboutPageLazy";

import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageLazy />}></Route>
          <Route path={"/about"} element={<AboutPageLazy />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
