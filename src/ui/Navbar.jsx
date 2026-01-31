import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.webp";
import logoDark from "../assets/logoDark.webp";
import { AnimatePresence, motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../features/theme/themeSlice";

const navlinks = [
  {
    id: 1,
    label: "Home",
  },
  {
    id: 2,
    label: "Shop",
  },
  {
    id: 3,
    label: "Sale",
  },
  {
    id: 4,
    label: "Gallery",
  },
  {
    id: 5,
    label: "Cart",
  },
];

function Navbar({ bg, iconColor, modeBgColor, modeBorder }) {
  const mode = useSelector((state) => state.theme.mode);
  const isDark = mode === "dark";

  const dispatch = useDispatch();

  return (
    <header
      className={`${bg} fixed z-500 w-full backdrop-blur-xl transition-all duration-700 ease-in-out dark:bg-[#151615]`}
    >
      <nav
        className={`mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-5 lg:px-8`}
      >
        {/* Logo */}
        <div>
          <AnimatePresence mode="wait">
            <motion.img
              src={isDark ? logoDark : logo}
              alt="super sound logo"
              key={isDark}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          </AnimatePresence>
        </div>

        {/* Navlinks */}
        <ul className="flex items-center gap-15">
          {navlinks.map((link) => (
            <li
              className={`cursor-pointer text-base text-[#4a4646] transition-all duration-300 first-of-type:font-medium first-of-type:text-black hover:scale-105 dark:text-[#f5f5f5] first-of-type:dark:text-[#f5f5f5]`}
            >
              {link.label}
            </li>
          ))}

          {/* Theme */}
          <button
            title={`Toggle theme (currently ${mode} mode)`}
            onClick={() => dispatch(setTheme(isDark ? "light" : "dark"))}
            className={`relative ms-2.25 flex h-5 w-16 cursor-pointer items-center rounded-full transition-all duration-500 ease-out ${!isDark ? "justify-end bg-white pe-2" : "bg-bg-muted ps-2"}`}
          >
            <AnimatePresence mode="popLayout">
              {!isDark && (
                <motion.p
                  className="text-[8px] leading-2 uppercase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  light
                  <br />
                  mode
                </motion.p>
              )}
            </AnimatePresence>

            {/* Icon */}
            <div
              className={`absolute top-1/2 left-0 flex size-7 -translate-y-1/2 items-center justify-center rounded-full border transition-all duration-500 ${isDark ? `${modeBgColor} translate-x-9.5 border-white` : `translate-x-0 bg-white ${modeBorder}`}`}
            >
              {isDark ? (
                <MoonIcon className={`size-4 text-white`} />
              ) : (
                <SunIcon className={`size-5 ${iconColor}`} />
              )}
            </div>

            <AnimatePresence mode="popLayout">
              {isDark && (
                <motion.p
                  className="text-[8px] leading-2 uppercase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  dark
                  <br />
                  mode
                </motion.p>
              )}
            </AnimatePresence>
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
