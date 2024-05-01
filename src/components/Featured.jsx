import React from "react";

function Featured() {
  return (
    <div className="w-full py-10">
      <div className="w-full  border-b-2  border-zinc-300 p-11">
        <h1 className="text-3xl capitalize">Featured projects</h1>
      </div>
      <div className="cards w-full p-10 flex  items-center gap-20">
        <div className="cardcontainer w-1/2 h-[70vh] relative ">
          <h1 className=" absolute z-[9] text-7xl  left-full text-[#b1df28] -translate-x-1/2 top-1/2 -translate-y-1/2 font-bold ">
            FYDE
          </h1>
          <div className="card w-full h-full rounded-xl overflow-hidden  ">
            <img
              className=" w-full h-full bg-cover rounded-lg"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </div>
        </div>
        <div className="cardcontainer w-1/2 h-[70vh] relative">
          <h1 className=" absolute z-[9] text-7xl  right-full text-[#b1df28] translate-x-1/2 top-1/2 -translate-y-1/2 font-bold ">
            {"VISE".split("").map((item, index) => {
              <span>{item}</span>;
            })}
          </h1>
          <div className="card w-full h-full rounded-xl  overflow-hidden ">
            <img
              className=" w-full h-full bg-cover rounded-lg"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
