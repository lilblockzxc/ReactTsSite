import { Link } from "react-router-dom";

import { useTheme } from "@/app/providers/ThemeProvider";
import { classNames as cn } from "@/shared";

import "./styles/index.scss";
import { AppRouter } from "./providers/router";
import { Navbar } from "@/widgets/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default App;
