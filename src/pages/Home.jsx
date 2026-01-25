import frame7 from "../assets/frame7.webp";
import HeadpiecePink from "../assets/HeadpiecePink.webp";
import soundPink from "../assets/soundPink.webp";
import chevronLeft from "../assets/chevron-left.webp";
import chevronRight from "../assets/chevron-right.webp";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

const socials = [
  { src: facebook, alt: "facebook logo" },
  { src: instagram, alt: "instagram logo" },
  { src: twitter, alt: "twitter logo" },
];

function Home() {
  return (
    <>
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
              <div className="relative max-w-96.75 rounded-[20px] bg-accent-bg ps-19.5 pe-4 pt-7 pb-4 text-white shadow-accent">
                <div className="max-w-55">
                  <p className="mb1.25 font-semibold">
                    Long-lasting Battery life
                  </p>
                  <p className="text-sm leading-4.25">
                    With cutting-edge technology cell engineering, you can be
                    assured of quality performance for as long as a 5-day
                    stretch on full charge
                  </p>
                </div>

                {/* Carousel controls */}
                <div className="flex justify-end">
                  <div className="flex h-6 w-fit items-center gap-3 rounded-[10px] bg-bg-slideControl px-1">
                    {/* left */}
                    <button className="cursor-pointer">
                      <img src={chevronLeft} alt="chevron left" />
                    </button>
                    <span className="inline-block h-full w-px bg-[#c6c6c6]"></span>
                    <button className="cursor-pointer">
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

          {/* Image */}
          <div className="relative lg:basis-147.5">
            <img src={HeadpiecePink} alt="pink head phone" />
            <div className="flex items-center justify-center">
              <img
                src={soundPink}
                alt="stereo"
                className="left1/2 -translatex-1/2"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mx-auto flex w-full max-w-7xl justify-between px-8">
        {/*  */}
        <p className="font-medium tracking-[5%]">
          <span className="text-5xl">01 </span>
          <span className="text-2xl text-text-secondary">/05.</span>
        </p>

        {/* carousel dots */}
        <ul className="flex items-center gap-4 pt-14">
          {Array.from({ length: 5 }).map((_, i) => (
            <button
              key={i}
              className="size-2 cursor-pointer rounded-full bg-text-muted"
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
    </>
  );
}

export default Home;
