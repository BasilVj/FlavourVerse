import BannerText from "./BannerText";
import Image from "next/image";
import BannerImg from "@/images";

const Banner = () => {
  function generateRandomNumber() {
    return Math.floor(Math.random() * 5);
  }

  return (
    <div>
      <Image
        src={BannerImg[generateRandomNumber()]}
        alt="banner"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute w-full h-full bg-gradient-to-t from-black"></div>
      <div className="relative h-screen flex flex-col justify-center items-center pt-40 zxl:pt-20">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-5 px-5 md:px-0">
          Taste the World with <br /> FlavorVerse!
        </h1>
        <div className="mx-5">
          <BannerText />
        </div>
      </div>
    </div>
  );
};

export default Banner;
