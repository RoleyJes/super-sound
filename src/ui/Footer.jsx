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
    <footer className="mx-auto flex w-full max-w-7xl justify-between px-8">
      {/* variant index */}
      <p className="font-medium tracking-[5%]">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={activeVariant.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="inline-block w-18 text-5xl dark:text-text-dark-secondary"
          >
            0{activeVariant.id}
          </motion.span>
        </AnimatePresence>
        <span className="text-2xl text-text-secondary">/05.</span>
      </p>

      {/* variant dots */}
      <ul className="flex items-center gap-4 pt-14">
        {variants.map((variant) => (
          <button
            key={variant.id}
            onClick={() => selectVariant(variant)}
            className={`size-2 cursor-pointer rounded-full transition-all duration-300 ease-out ${activeVariant.id === variant.id ? `scale-150 ${variant.dot} ${variant.ring}` : "bg-bg-muted"}`}
          ></button>
        ))}
      </ul>

      {/* Socials */}
      <ul className="flex items-center gap-2.5">
        {socials.map((item, i) => (
          <div className="relative" key={i}>
            <li className="peer flex size-6 cursor-pointer items-center justify-center rounded-full border border-text-primary bg-text-primary transition-all duration-300 ease-out dark:border-white">
              <img src={item.src} alt={item.alt} />
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
