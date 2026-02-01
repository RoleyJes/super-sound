import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import chevronLeft from "../assets/chevron-left.webp";
import chevronRight from "../assets/chevron-right.webp";
import { useTheme } from "../features/theme/useTheme";

const carouselItems = [
  {
    title: "Long-lasting Battery life",
    description:
      "With cutting-edge technology cell engineering, you can be assured of quality performance for as long as a 5-day stretch on full charge",
  },
  {
    title: "Multiple ways to connect",
    description:
      "Multimedia connection can be made in 3 ways; wired connection using an 3.5mm jack or wireless through bluetooth or 2.4G wireless connection",
  },
  {
    title: "Game & VR enhanced performance",
    description:
      "Enhances gaming and e-sport experience with it’s virtual surround 3D architecture as well as AR,XR and MR experiences",
  },
];

function Carousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const { isDark, activeVariant } = useTheme();

  function next() {
    if (carouselIndex >= 0 && carouselIndex < carouselItems.length - 1)
      setCarouselIndex((i) => (i + 1) % carouselItems.length);
  }

  function prev() {
    if (carouselIndex > 0)
      setCarouselIndex((i) => (i - 1) % carouselItems.length);
  }

  return (
    <div className="relative">
      <div
        className={`relative max-w-96.75 rounded-[20px] ps-17.5 pt-7 pb-4 text-white transition-all duration-700 ease-in-out ${activeVariant.carouselShadow} ${isDark ? `bg-linear-to-b ${activeVariant.carouselGradientStart} ${activeVariant.carouselGradientEnd}` : activeVariant.carousel} `}
      >
        {/* Carousel content */}
        <ul className="flex w-full overflow-hidden">
          {carouselItems.map((item, i) => (
            <li
              key={i}
              className="min-w-full ps-2 transition-transform duration-700"
              style={{
                transform: `translateX(-${carouselIndex * 100}%)`,
              }}
            >
              <div className="max-w-55">
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm leading-4.25">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Carousel controls */}
        <div className="flex justify-end pe-4">
          <div className="flex h-6 w-fit items-center gap-3 rounded-[10px] bg-bg-slideControl px-1 transition-all duration-500 ease-in-out dark:bg-[#ededed]/43">
            {/* left */}
            <button
              onClick={prev}
              className="cursor-pointer disabled:cursor-not-allowed"
              disabled={carouselIndex === 0}
            >
              <img
                src={chevronLeft}
                alt="chevron left"
                className={`${carouselIndex === 0 ? "opacity-50" : "opacity-100"}`}
              />
            </button>
            <span className="inline-block h-full w-px bg-[#c6c6c6]"></span>
            {/* right */}
            <button
              onClick={next}
              className="cursor-pointer disabled:cursor-not-allowed"
              disabled={carouselIndex === carouselItems.length - 1}
            >
              <img
                src={chevronRight}
                alt="chevron right"
                className={`${carouselIndex < carouselItems.length - 1 ? "opacity-100" : "opacity-50"}`}
              />
            </button>
          </div>
        </div>

        {/* Ellipse */}
        <div
          className={`absolute top-1/2 right-[89.5%] flex size-20.25 -translate-y-1/2 items-center justify-center rounded-full shadow-ellipse ${isDark ? "bg-linear-to-tr from-white/88 to-white/9" : "bg-white"}`}
        >
          <AnimatePresence mode="popLayout">
            <motion.img
              key={activeVariant.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "linear" }}
              src={activeVariant.ellipse}
              alt="ellipse"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
