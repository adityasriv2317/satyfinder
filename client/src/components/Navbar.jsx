import React, { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { ThemeContext } from "../contexts/themeContext";
import DarkModeToggle from "./DarkModeToggle";
import { cn } from "../utils/cn";
import { colorClasses } from "../utils/colorClasses";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);

  return (
    <nav
      className={cn(
        "w-full flex items-center justify-between px-6 py-4 border-b",
        darkMode ? colorClasses.navbar.dark : colorClasses.navbar.light
      )}
    >
      <a href="/" className="text-2xl font-bold text-blue-600">
        StayFinder
      </a>
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        {user ? (
          <a
            href="/profile"
            className="font-medium text-slate-700 dark:text-slate-100"
          >
            Profile
          </a>
        ) : (
          <>
            <a
              href="/login"
              className="font-medium text-slate-700 dark:text-slate-100"
            >
              Sign In
            </a>
            <a href="/register" className="ml-2 font-medium text-blue-600">
              Register
            </a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
