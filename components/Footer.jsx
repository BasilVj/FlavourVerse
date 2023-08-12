import { footerLinks } from "@/constants";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="h-full lg:h-screen border-t border-slate-800 bg-black bg_gradient px-10 md:px-13 lg:px-[6rem] flex flex-col justify-center py-20">
      <div className="flex justify-between  flex-col md:flex-row md:py-10">
        <div className="pb-10 md:pb-0">
          <span className="text-lg text-white">Flavor</span>
          <span className="text-green-600 text-xl">Verse</span>
        </div>
        {footerLinks.map((footer, index) => (
          <div key={index} className="mb-10 md:mb-0">
            <h1 className="text-white pb-2">{footer.title}</h1>
            <ul className="flex flex-col text-white">
              {footer.links.map((link, index) => (
                <li key={index} className="py-2">
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h1 className="text-white">SOCIAL MEDIA</h1>
          <ul className="text-white flex pt-3 pb-8">
            <li className="mr-3">
              <a href="#">
                <Image src="/twitter.png" width={27} height={27} alt="twitter-logo"/>
              </a>
            </li>
            <li className="mr-3">
              <a href="#">
                <Image src="/instagram.svg" width={27} height={27} alt="instagram-logo"/>
              </a>
            </li>
            <li className="mr-3">
              <a href="#">
                <Image src="/facebook.svg" width={27} height={27} alt="facebook-logo"/>
              </a>
            </li>
            <li>
              <a href="#">
                <Image src="/youtube.png" width={26} height={26} alt="youtube-logo"/>
              </a>
            </li>
          </ul>
          <div className="hover:cursor-pointer group mb-20 md:mb-0">
            <button className="border rounded w-full md:w-[150px] py-2 group-hover:bg-white  ">
              <h1 className="text-white group-hover:text-black">Sign up</h1>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-10">
        <span className="text-gray-400 leading-10">Foodverse © 2023</span>
      </div>
    </div>
  );
};

export default Footer;
