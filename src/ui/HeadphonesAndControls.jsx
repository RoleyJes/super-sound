import { useTheme } from "../features/theme/useTheme";
import { AnimatePresence, motion } from "motion/react";

import soundPink from "../assets/soundPink.webp";

function HeadphonesAndControls() {
  const { activeVariant, isDark, variants, selectVariant } = useTheme();

  return (
    <div className="relative lg:basis-147.5">
      {/* headphones */}
      <div className="mx-auto size-4/5 lg:h-143.25 lg:w-125.5">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeVariant.id}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            src={activeVariant.img}
            alt="pink head phone"
            className="w-full object-contain"
          />
        </AnimatePresence>
      </div>

      {/* sound bars img */}
      <div className="flex w-2/3 place-self-center">
        <img src={soundPink} alt="stereo" className="lg:-mt-10" />
      </div>

      {/* right dots for selecting headphones */}
      <div className="absolute right-0 bottom-1/2 flex h-2/3 w-1 translate-y-1/2 flex-col items-center justify-center gap-5 rounded-[30px] bg-[#eeeeee] transition-all duration-700 ease-in-out md:gap-7 lg:w-1.25 lg:gap-12.25 dark:bg-[#eeeeee]/60">
        {variants.map((variant) => {
          const isActive = variant.id === activeVariant.id;
          return (
            <motion.button
              key={variant.id}
              onClick={() => selectVariant(variant)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                opacity: isDark ? 1 : isActive ? 1 : 0.6,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`size-2.5 cursor-pointer rounded-full md:rounded-sm lg:size-3 ${variant.dot} ${isActive ? `${variant.outline} ${variant.ring} ring-6 outline-4` : ""}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HeadphonesAndControls;
