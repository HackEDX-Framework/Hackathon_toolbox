import Image from "next/image";
import styles from "./LandingPage.module.css"

const Banner = () => {
  return (
    <section className=" h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h[90vh] bg-[#d4c9ef] relative w-full box-border mx-auto shadow-md border-8 border-[#C04C12]">
      <div
        className="flex justify-center items-center h-full w-full bg-[#d4c9ef] "

      >
        <Image
          width="0"
          height="0"
          sizes="100vw"
          alt="logo"
          className="w-full xl:w-3/4 2xl:w-1/2 h-auto z-10 absolute top-0 left-0"
          src="/hack-participant-kit/CodeArcade-Banner.png"
        />
      </div>

    </section>
  );
};

export default Banner;
