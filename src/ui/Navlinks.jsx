import { motion } from "motion/react";

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

function Navlinks() {
  const { activeVariant } = useTheme();

  return (
    <>
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
    </>
  );
}

export default Navlinks;
