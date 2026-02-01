import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import chevronLeft from "../assets/chevron-left.webp";
import chevronRight from "../assets/chevron-right.webp";

import Navbar from "../ui/Navbar";
// import { useDispatch, useSelector } from "react-redux";
// import { setActiveVariant } from "../features/theme/themeSlice";
import Footer from "../ui/Footer";
import HeadphonesAndControls from "../ui/HeadphonesAndControls";
import { useTheme } from "../features/theme/useTheme";

// const variants = [
//   {
//     id: 1,
//     dot: "bg-accent-dot-pink",
//     outline: "outline-accent-dot-pink/30",
//     ring: "ring-accent-dot-pink/20",
//     img: HeadpiecePink,
//     bg: "bg-bg-pink",
//     text: "text-accent-pink",
//     modeBorder: "border-accent-pink",
//     carousel: "bg-accent-carousel-pink",
//     ellipse: frame7Pink,
//   },
//   {
//     id: 2,
//     dot: "bg-accent-dot-green",
//     outline: "outline-accent-dot-green/30",
//     ring: "ring-accent-dot-green/20",
//     img: HeadpieceGreen,
//     bg: "bg-bg-green",
//     text: "text-accent-green",
//     modeBorder: "border-accent-green",
//     carousel: "bg-accent-carousel-green",
//     ellipse: frame7Green,
//   },
//   {
//     id: 3,
//     dot: "bg-accent-dot-blue",
//     outline: "outline-accent-dot-blue/30",
//     ring: "ring-accent-dot-blue/20",
//     img: HeadpieceBlue,
//     bg: "bg-bg-blue",
//     text: "text-accent-blue",
//     modeBorder: "border-accent-blue",
//     carousel: "bg-accent-carousel-blue",
//     ellipse: frame7Blue,
//   },
//   {
//     id: 4,
//     dot: "bg-accent-dot-purple",
//     outline: "outline-accent-dot-purple/30",
//     ring: "ring-accent-dot-purple/20",
//     img: HeadpiecePurple,
//     bg: "bg-bg-purple",
//     text: "text-accent-purple",
//     modeBorder: "border-accent-purple",
//     carousel: "bg-accent-carousel-purple",
//     ellipse: frame7Purple,
//   },
//   {
//     id: 5,
//     dot: "bg-accent-dot-yellow",
//     outline: "outline-accent-dot-yellow/30",
//     ring: "ring-accent-dot-yellow/20",
//     img: HeadpieceYellow,
//     bg: "bg-bg-yellow",
//     text: "text-accent-yellow",
//     modeBorder: "border-accent-yellow",
//     carousel: "bg-accent-carousel-yellow",
//     ellipse: frame7Yellow,
//   },
// ];

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

function Home() {
  // const [activeVariant, setActiveVariant] = useState(variants[0]);

  const [carouselIndex, setCarouselIndex] = useState(0);
  // const { variants, activeVariant, mode } = useSelector((state) => state.theme);
  const { isDark, activeVariant } = useTheme();
  // const dispatch = useDispatch();

  // const mode = useSelector((state) => state.theme.mode);

  function next() {
    setCarouselIndex((i) => (i + 1) % carouselItems.length);
  }

  function prev() {
    setCarouselIndex(
      (i) => (i - 1 + carouselItems.length) % carouselItems.length,
    );
  }

  return (
    <div
      className={`pb-12 transition-all duration-700 ease-in-out dark:bg-bg-dark ${activeVariant.bg}`}
    >
      <Navbar />

      <main className="pt-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-8 lg:flex-row">
          {/* Texts and carousel*/}
          <div className="lg:basis-md">
            {/* texts */}
            <div className="mb-5.75">
              <span
                className={`mb-2 text-[17px] font-bold transition-all duration-700 ease-in-out ${activeVariant.text}`}
              >
                SUMMER COLLECTION
              </span>
              <h1 className="relative mb-4 text-[64px] font-bold transition-all duration-500 dark:text-text-dark">
                SuperSound
                <span
                  className={`absolute top-3 right-7.5 text-sm transition-all duration-700 ease-in-out ${activeVariant.text}`}
                >
                  TM
                </span>
              </h1>
              <p className="text-lg leading-5.25 text-black transition-all duration-500 dark:text-text-dark">
                Enjoy a super listening experience at maximum comfort and sound
                quality this summer. Sounds made to thrill and style made to
                please.
              </p>
            </div>

            {/* carousel */}
            <div className="relative">
              <div
                className={`relative max-w-96.75 rounded-[20px] ps-19.5 pt-7 pb-4 text-white shadow-accent transition-all duration-700 ease-in-out ${isDark ? "bg-linear-to-b from-[#464144] to-[#9a219659]" : activeVariant.carousel}`}
              >
                {/* Carousel content */}
                <ul className="flex w-full overflow-hidden">
                  {carouselItems.map((item, i) => (
                    <li
                      key={i}
                      className="min-w-full transition-all duration-700"
                      style={{
                        transform: `translateX(-${carouselIndex * 100}%)`,
                      }}
                    >
                      <div className="max-w-55">
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm leading-4.25">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Carousel controls */}
                <div className="flex justify-end pe-4">
                  <div className="flex h-6 w-fit items-center gap-3 rounded-[10px] bg-bg-slideControl px-1">
                    {/* left */}
                    <button onClick={prev} className="cursor-pointer">
                      <img src={chevronLeft} alt="chevron left" />
                    </button>
                    <span className="inline-block h-full w-px bg-[#c6c6c6]"></span>
                    <button onClick={next} className="cursor-pointer">
                      <img src={chevronRight} alt="chevron right" />
                    </button>
                  </div>
                </div>

                {/* Ellipse */}
                <div
                  className={`absolute top-1/2 right-[89.5%] flex size-20.25 -translate-y-1/2 items-center justify-center rounded-full shadow-black ${isDark ? "bg-linear-to-r from-white/88 to-white/9" : "bg-white"}`}
                >
                  <AnimatePresence mode="popLayout">
                    <motion.img
                      key={activeVariant.id}
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0.5 }}
                      transition={{ duration: 0.35, ease: "linear" }}
                      src={activeVariant.ellipse}
                      alt="ellipse"
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* images */}
          <HeadphonesAndControls />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
