import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import HeadphonesAndControls from "../ui/HeadphonesAndControls";
import { useTheme } from "../features/theme/useTheme";
import Carousel from "../ui/Carousel";

function Home() {
  const { activeVariant } = useTheme();

  return (
    <div
      className={`min-h-screen pb-12 transition-all duration-700 ease-in-out dark:bg-bg-dark ${activeVariant.bg}`}
    >
      <Navbar />

      <main className="pt-24 md:pt-32 lg:pt-24">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 justify-between gap-y-8 px-4 md:grid-cols-2 md:items-center md:px-6 lg:flex lg:px-8">
          {/* Texts and carousel*/}
          <div className="lg:basis-md">
            {/* texts */}
            <div className="max-w-[288px mb-5.75 w-full">
              <span
                className={`text-xs font-bold transition-all duration-700 ease-in-out lg:mb-2 lg:text-[17px] ${activeVariant.text}`}
              >
                SUMMER COLLECTION
              </span>
              <h1 className="relative -mt-1.5 mb-2.5 w-fit text-[42px] font-bold transition-all duration-500 lg:mt-0 lg:mb-4 lg:text-[64px] dark:text-text-dark">
                SuperSound
                <span
                  className={`absolute top-1 -right-4.5 text-xs transition-all duration-700 ease-in-out lg:top-3 lg:-right-6 lg:text-sm ${activeVariant.text}`}
                >
                  TM
                </span>
              </h1>
              <p className="text-base text-black transition-all duration-500 lg:text-lg lg:leading-5.25 dark:text-text-dark">
                Enjoy a super listening experience at maximum comfort and sound
                quality this summer. Sounds made to thrill and style made to
                please.
              </p>
            </div>

            {/* carousel */}
            <Carousel />
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
