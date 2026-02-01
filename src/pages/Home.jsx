import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import HeadphonesAndControls from "../ui/HeadphonesAndControls";
import { useTheme } from "../features/theme/useTheme";
import Carousel from "../ui/Carousel";

function Home() {
  const { activeVariant } = useTheme();

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
