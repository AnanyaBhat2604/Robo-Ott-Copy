"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import search from "../../assets/icons/search.svg";
import profile from "../../assets/icons/profile.svg";
import { profileOptions } from "@/assets/constants/constants";
import Logo from "../Logo/Logo";
import MenuItems from "../MenuItems/MenuItems";
import List from "../List/List";
import { request } from "@/services/fetchData";
import { URL } from "@/assets/constants/api-requests";
import { ErrorLogger } from "@/services/ErrorLogger";
import { useAuth } from "@/contexts/auth-context/authContext";
import { frontendRoutes } from "@/assets/constants/frontend-routes";
import strings from "@/assets/strings/strings.json";
import useBreakpoint from "@/hooks/useBreakpoint";
import SideMenu from "../SideMenu/SideMenu";
import { METHODS } from "@/assets/constants/api-requests";

const Header = () => {
  const logger = new ErrorLogger();
  const [menuData, setMenuData] = useState<any>([]);
  const { isLoggedIn, logout } = useAuth();
  const breakpoint = useBreakpoint();

  const fetchMenuData = async () => {
    try {
      const data = await request(URL.GET_MENU, METHODS.GET);
      setMenuData(data?.data);
    } catch (error) {
      logger.logError("Menu", error, new Date().toISOString());
    }
  };

  useEffect(() => {
    fetchMenuData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const option = isLoggedIn ? strings.signOut : strings.signIn;
    const url = isLoggedIn ? "" : frontendRoutes.LOGIN;
    const func = isLoggedIn ? logout : undefined;

    addSignInOption(option, url, func);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const addSignInOption = (option: string, url: string, func?: () => void) => {
    const signInOutIndex = profileOptions.children.findIndex(
      (item) => item.title === strings.signIn || item.title === strings.signOut
    );

    if (signInOutIndex !== -1) {
      profileOptions.children[signInOutIndex] = {
        title: option,
        url: url,
        function: func,
      };
    } else {
      profileOptions.children.unshift({
        title: option,
        url: url,
        function: func,
      });
    }
  };

  const logo = menuData && menuData[0]?.logo?.formats?.large?.url;

  return (
    <div>
      <div className="container mx-auto flex gap-[50px] items-center relative max-sm:gap-[3px]">
        {breakpoint === "sm" ||
        breakpoint === "md" ||
        breakpoint === "default" ? (
          <SideMenu menuData={menuData} />
        ) : (
          <Logo logo={logo} />
        )}
        {breakpoint === "sm" ||
        breakpoint === "md" ||
        breakpoint === "default" ? (
          <Logo logo={logo} />
        ) : (
          menuData && <MenuItems menuData={menuData} />
        )}

        <div className=" font-sans font-semibold text-20 leading-26.4px justify-end text-light-grey-1 flex gap-[20px] flex-1 items-center max-sm:gap-[3px]">
          {/* add the design as per requirement */}
   
        </div>
      </div>
    </div>
  );
};

export default Header;
