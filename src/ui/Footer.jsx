import { AnimatePresence, motion } from "motion/react";

import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import { useTheme } from "../features/theme/useTheme";

const socials = [
  { src: facebook, alt: "facebook logo", label: "Facebook" },
  { src: instagram, alt: "instagram logo", label: "Instagram" },
  { src: twitter, alt: "X logo", label: "X" },
];

function Footer() {
  const { activeVariant, variants, selectVariant } = useTheme();

  return (
    <footer className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 md:px-8">
      {/* variant index */}
      <p className="font-medium tracking-[5%]">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={activeVariant.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="inline-block w-9 text-3xl lg:w-18 lg:text-5xl dark:text-text-dark-secondary"
          >
            0{activeVariant.id}
          </motion.span>
        </AnimatePresence>
        <span className="text-lg text-text-secondary lg:text-2xl">/05.</span>
      </p>

      {/* variant dots */}
      <ul className="flex items-center gap-2.5 pt-14 lg:gap-4">
        {variants.map((variant) => (
          <button
            key={variant.id}
            onClick={() => selectVariant(variant)}
            className={`size-1.5 cursor-pointer rounded-full transition-all duration-300 ease-out lg:size-2 ${activeVariant.id === variant.id ? `scale-150 ${variant.dot} ${variant.ring}` : "bg-bg-muted"}`}
          ></button>
        ))}
      </ul>

      {/* Socials */}
      <ul className="flex items-center gap-1.5 lg:gap-2.5">
        {socials.map((item, i) => (
          <div className="relative" key={i}>
            <li className="peer flex size-4 cursor-pointer items-center justify-center rounded-full border border-text-primary bg-text-primary transition-all duration-300 ease-out lg:size-6 dark:border-white">
              <img src={item.src} alt={item.alt} className="w-1/2" />
            </li>
            <p className="absolute -top-7 left-1/2 -translate-x-1/2 -translate-y-3 text-sm opacity-0 transition-all duration-300 peer-hover:translate-y-0 peer-hover:opacity-100 dark:text-text-dark/60">
              {item.label}
            </p>
          </div>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
