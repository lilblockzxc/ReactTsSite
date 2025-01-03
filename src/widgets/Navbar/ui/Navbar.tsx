import { AppLink, classNames } from "@/shared";
import { FC } from "react";

import cls from "./Navbar.module.scss";
import { AppLinkTheme } from "@/shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className!])}>
      <div className={cls.links}>
        <AppLink
          to={"/"}
          className={cls.mainLink}
          theme={AppLinkTheme.SECONDARY}
        >
          Главная
        </AppLink>
        <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
