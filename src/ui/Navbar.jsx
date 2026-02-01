import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.webp";
import logoDark from "../assets/logoDark.webp";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "../features/theme/useTheme";

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

function Navbar() {
  const { mode, activeVariant, isDark, changeTheme } = useTheme();

  return (
    <header
      className={`fixed z-500 w-full backdrop-blur-xl transition-all duration-700 ease-in-out ${isDark ? "bg-border-soft/5" : activeVariant.navbarBg}`}
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
            <motion.li
              key={link.id}
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: 1,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`group relative cursor-pointer text-base text-[#4a4646] transition-colors duration-300 first-of-type:font-medium first-of-type:text-black dark:text-text-dark first-of-type:dark:text-text-dark`}
            >
              <span>{link.label}</span>
              <span
                className={`absolute bottom-0 left-0 inline-block h-px w-0 transition-all duration-500 group-hover:w-full ${activeVariant.carousel}`}
              ></span>
            </motion.li>
          ))}

          {/* Theme */}
          <button
            title={`Toggle theme (currently ${mode} mode)`}
            onClick={() => changeTheme(isDark ? "light" : "dark")}
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
              className={`absolute top-1/2 left-0 flex size-7 -translate-y-1/2 items-center justify-center rounded-full border transition-all duration-500 ${isDark ? `${activeVariant.carousel} translate-x-9.5 border-white` : `translate-x-0 bg-white ${activeVariant.modeBorder}`}`}
            >
              {isDark ? (
                <MoonIcon className={`size-4 text-white`} />
              ) : (
                <SunIcon className={`size-5 ${activeVariant.text}`} />
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
