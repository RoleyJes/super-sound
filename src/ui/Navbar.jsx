import {
  Bars3BottomLeftIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.webp";
import logoDark from "../assets/logoDark.webp";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "../features/theme/useTheme";
import { useState } from "react";
import Navlinks from "./Navlinks";

function Navbar() {
  const { mode, activeVariant, isDark, changeTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <header
        className={`fixed z-500 w-full backdrop-blur-xl transition-all duration-700 ease-in-out ${isDark ? "bg-border-soft/5" : activeVariant.navbarBg}`}
      >
        <nav
          className={`mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-5`}
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

          <div className="flex items-center gap-3 lg:gap-17.5">
            {/* Desktop Navlinks */}
            <ul className="hidden items-center gap-15 lg:flex">
              <Navlinks />
            </ul>

            {/* Theme */}
            <button
              title={`Toggle theme (currently ${mode} mode)`}
              onClick={() => changeTheme(isDark ? "light" : "dark")}
              className={`relative flex h-5 w-16 cursor-pointer items-center rounded-full transition-all duration-500 ease-out ${!isDark ? "justify-end bg-white pe-2" : "bg-bg-muted ps-2"}`}
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

            {/* Hamburger */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: 1,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setIsMobile((prev) => !prev)}
              className="lg:hidden"
            >
              <Bars3BottomLeftIcon
                className={`size-8 transition-colors duration-300 ease-out ${isDark ? "text-bg-slideControl" : "text-text-primary"}`}
              />
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Mobile Navlinks */}
      <AnimatePresence>
        {isMobile && (
          // Backdrop
          <motion.div
            key={isMobile}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`fixed inset-0 z-1000 h-screen ${isDark ? "bg-bg-dark/50" : "bg-black/30"}`}
          >
            {/*Main Content*/}
            <motion.div
              key={isMobile}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              exit={{ x: 100 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`ms-auto me-0 flex h-full w-62.5 flex-col px-6 pt-12 lg:hidden ${isDark ? activeVariant.dot : activeVariant.bg}`}
            >
              {/* Close button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: 1,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setIsMobile(false)}
                className="self-end"
              >
                <XMarkIcon className="size-8 text-[#4a4646] dark:text-text-dark" />
              </motion.button>

              {/* Links */}
              <ul className="mt-12 flex flex-col gap-6">
                <Navlinks />
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
