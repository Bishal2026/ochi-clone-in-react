import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-lg">
      <h1 className="text-black font-semibold text-3xl capitalize">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full border-t-2 flex border-[#bdd962] mt-32">
        <div className="w-1/2">
          <h1 className="text-5xl my-4">Our Apporch :</h1>
          <button className="uppercase text-white bg-zinc-900 px-6 py-5 rounded-full mt-8 flex gap-4 items-center">
            read More
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
          </button>
        </div>

        <div className="w-1/2 h-[70vh] bg-[#7c9235] rounded-lg my-4"></div>
      </div>
    </div>
  );
}

export default About;
