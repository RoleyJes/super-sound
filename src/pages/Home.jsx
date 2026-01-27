import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import frame7 from "../assets/frame7.webp";
import HeadpiecePink from "../assets/HeadpiecePink.webp";
import HeadpieceGreen from "../assets/HeadpieceGreen.webp";
import HeadpieceBlue from "../assets/HeadpieceBlue.webp";
import HeadpieceYellow from "../assets/HeadpieceYellow.webp";
import HeadpiecePurple from "../assets/HeadpiecePurple.webp";
import soundPink from "../assets/soundPink.webp";
import chevronLeft from "../assets/chevron-left.webp";
import chevronRight from "../assets/chevron-right.webp";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

const variants = [
  {
    id: 1,
    dot: "bg-accent-dot-pink",
    outline: "outline-accent-dot-pink/30",
    ring: "ring-accent-dot-pink/20",
    img: HeadpiecePink,
    bg: "bg-bg-pink",
    text: "text-accent-pink",
    carousel: "bg-accent-carousel-pink",
  },
  {
    id: 2,
    dot: "bg-accent-dot-green",
    outline: "outline-accent-dot-green/30",
    ring: "ring-accent-dot-green/20",
    img: HeadpieceGreen,
    bg: "bg-bg-green",
    text: "text-accent-green",
    carousel: "bg-accent-carousel-green",
  },
  {
    id: 3,
    dot: "bg-accent-dot-blue",
    outline: "outline-accent-dot-blue/30",
    ring: "ring-accent-dot-blue/20",
    img: HeadpieceBlue,
    bg: "bg-bg-blue",
    text: "text-accent-blue",
    carousel: "bg-accent-carousel-blue",
  },
  {
    id: 4,
    dot: "bg-accent-dot-purple",
    outline: "outline-accent-dot-purple/30",
    ring: "ring-accent-dot-purple/20",
    img: HeadpiecePurple,
    bg: "bg-bg-purple",
    text: "text-accent-purple",
    carousel: "bg-accent-carousel-purple",
  },
  {
    id: 5,
    dot: "bg-accent-dot-yellow",
    outline: "outline-accent-dot-yellow/30",
    ring: "ring-accent-dot-yellow/20",
    img: HeadpieceYellow,
    bg: "bg-bg-yellow",
    text: "text-accent-yellow",
    carousel: "bg-accent-carousel-yellow",
  },
];

const socials = [
  { src: facebook, alt: "facebook logo" },
  { src: instagram, alt: "instagram logo" },
  { src: twitter, alt: "twitter logo" },
];

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
  const [activeVariant, setActiveVariant] = useState(variants[0]);
  const [carouselIndex, setCarouselIndex] = useState(0);
  // const [variantIndex, setVariantIndex] = useState(0);

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
      className={`pb-12 transition-all duration-700 ease-in-out ${activeVariant.bg}`}
    >
      <nav></nav>

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
              <h1 className="relative mb-4 text-[64px] font-bold">
                SuperSound
                <span
                  className={`absolute top-3 right-7.5 text-sm transition-all duration-700 ease-in-out ${activeVariant.text}`}
                >
                  TM
                </span>
              </h1>
              <p className="text-lg leading-5.25 text-black">
                Enjoy a super listening experience at maximum comfort and sound
                quality this summer. Sounds made to thrill and style made to
                please.
              </p>
            </div>

            {/* carousel */}
            <div className="relative">
              <div
                className={`relative max-w-96.75 rounded-[20px] ps-19.5 pt-7 pb-4 text-white shadow-accent transition-all duration-700 ease-in-out ${activeVariant.carousel}`}
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
                <div className="absolute top-1/2 right-[89.5%] flex size-20.25 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-black">
                  <img src={frame7} alt="ellipse" />
                </div>
              </div>
            </div>
          </div>

          {/* images */}
          <div className="relative lg:basis-147.5">
            <div className="mx-auto h-143.25 w-125.5">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeVariant.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  src={activeVariant.img}
                  alt="pink head phone"
                  className="w-full object-contain"
                />
              </AnimatePresence>
            </div>
            <div className="flex items-center justify-center">
              <img src={soundPink} alt="stereo" className="-mt-10" />
            </div>

            {/* right dots for selecting headphones */}
            <div className="absolute right-0 bottom-1/2 flex h-2/3 w-1.25 translate-y-1/2 flex-col items-center justify-center gap-12.25 rounded-[30px] bg-[#eeeeee]">
              {variants.map((variant) => {
                const isActive = variant.id === activeVariant.id;
                return (
                  <motion.button
                    key={variant.id}
                    onClick={() => setActiveVariant(variant)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      opacity: isActive ? 1 : 0.6,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`size-3 cursor-pointer rounded-sm ${variant.dot} ${isActive ? `${variant.outline} ${variant.ring} ring-6 outline-4` : ""}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
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
              className="inline-block w-18 text-5xl"
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
              onClick={() => setActiveVariant(variant)}
              className={`size-2 cursor-pointer rounded-full transition-all duration-300 ease-out ${activeVariant.id === variant.id ? `scale-150 ${variant.dot} ${variant.ring}` : "bg-text-muted"}`}
            ></button>
          ))}
        </ul>

        {/* Socials */}
        <ul className="flex items-center gap-2.5">
          {socials.map((item, i) => (
            <li
              className="flex size-5.5 cursor-pointer items-center justify-center rounded-full bg-text-primary transition-all duration-300 ease-out hover:scale-90"
              key={i}
            >
              <img src={item.src} alt={item.alt} />
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}

export default Home;
