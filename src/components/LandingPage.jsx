import { motion } from "framer-motion";
import React from "react";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.5"
      className="w-full h-screen pt-2"
    >
      <div className="textstructure mt-40 mx-14          ">
        {["we create", "Eye opening", "presentations"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className=" mr-[1vw] w-[8vw] rounded-md bg-green-500 h-[5.7vw]    relative mt-1.5"
                  ></motion.div>
                )}
                <h1 className="uppercase text-[7.5vw]  leading-[6vw]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" border-t-[1px] bg-white mt-16"></div>
      <div className="flex items-center justify-between p-6 mx-10">
        {[
          "For public and private companies",
          "from the pitch to IPO",
          "start the project",
        ].map((item, index) => {
          return (
            <h4
              className={`font-semibold uppercase ${
                index === 2 &&
                "border rounded-full p-2 hover:bg-white hover:text-black hover:cursor-pointer"
              }`}
            >
              {item}
            </h4>
          );
        })}
      </div>
    </div>
  );
}

export default LandingPage;
