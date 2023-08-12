import React from "react";

const BannerText = () => {
  return (
    <div className="rounded-full md:py-4 md:px-6 py-3 px-3 bg-black bg-opacity-50">
      <p className="text-sm text-center text-green-500 px-3">
        Welcome to FlavorVerse, your passport to culinary adventures!{" "}
        <br className="  hidden md:block" /> Discover a treasure trove of
        delectable recipes from around the globe.
      </p>
    </div>
  );
};

export default BannerText;
