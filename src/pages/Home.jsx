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
import { useState } from "react";

const variants = [
  {
    id: 1,
    color: "#9d166d",
    img: HeadpiecePink,
    bg: "bg-bg-pink",
  },
  {
    id: 2,
    color: "#009400",
    img: HeadpieceGreen,
    bg: "bg-bg-green",
  },
  {
    id: 3,
    color: "#002bb7",
    img: HeadpieceBlue,
    bg: "bg-bg-blue",
  },
  {
    id: 4,
    color: "#a800a3",
    img: HeadpiecePurple,
    bg: "bg-bg-purple",
  },
  {
    id: 5,
    color: "#a36f00",
    img: HeadpieceYellow,
    bg: "bg-bg-yellow",
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
  const [index, setIndex] = useState(0);

  function next() {
    setIndex((i) => (i + 1) % carouselItems.length);
  }

  function prev() {
    setIndex((i) => (i - 1 + carouselItems.length) % carouselItems.length);
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
              <span className="mb-2 text-[17px] font-bold text-accent-primary">
                SUMMER COLLECTION
              </span>
              <h1 className="relative mb-4 text-[64px] font-bold">
                SuperSound
                <span className="absolute top-3 right-7.5 text-sm text-accent-primary">
                  TM
                </span>
                {/* <sup className="text-[30px text-accent-primary">TM</sup> */}
              </h1>
              <p className="text-lg leading-5.25 text-black">
                Enjoy a super listening experience at maximum comfort and sound
                quality this summer. Sounds made to thrill and style made to
                please.
              </p>
            </div>

            {/* carousel */}
            <div className="relative">
              <div className="bg-accent-carousel-bg relative max-w-96.75 rounded-[20px] ps-19.5 pt-7 pb-4 text-white shadow-accent">
                {/* Carousel content */}
                <ul className="flex w-full overflow-hidden">
                  {carouselItems.map((item, i) => (
                    <li
                      key={i}
                      className="min-w-full transition-all duration-700"
                      style={{ transform: `translateX(-${index * 100}%)` }}
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
              <img
                src={activeVariant.img}
                alt="pink head phone"
                className="w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img src={soundPink} alt="stereo" className="-mt-10" />
            </div>

            {/* right dots for selecting headphones */}
            <div className="absolute right-0 bottom-1/2 flex h-2/3 w-1.25 translate-y-1/2 flex-col items-center justify-center gap-12.25 rounded-[30px] bg-[#eeeeee]">
              {variants.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveVariant(item)}
                  className={`size-3 cursor-pointer rounded-sm ${activeVariant.id === item.id ? "ring-offset2 ring-4 ring-accent-blue/30 outline-6 outline-offset-1 outline-accent-blue/20" : ""}`}
                  style={{ backgroundColor: item.color }}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mx-auto flex w-full max-w-7xl justify-between px-8">
        <p className="font-medium tracking-[5%]">
          <span className="text-5xl">01 </span>
          <span className="text-2xl text-text-secondary">/05.</span>
        </p>

        {/* carousel dots */}
        <ul className="flex items-center gap-4 pt-14">
          {carouselItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`size-2 cursor-pointer rounded-full transition-all duration-300 ease-out ${i === index ? "bg-accent-dots outline outline-accent-dots" : "bg-text-muted"}`}
            ></button>
          ))}
        </ul>

        {/* Socials */}
        <ul className="flex items-center gap-2.5">
          {socials.map((item, i) => (
            <li
              className="flex size-5.5 items-center justify-center rounded-full bg-text-primary"
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
