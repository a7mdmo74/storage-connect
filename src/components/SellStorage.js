import React from "react";
import Button from "./common/Button";
import ellipse from "../assets/ellipse.png";
const SellStorage = () => {
  return (
    <section id="sell-storage">
      <div className="relative w-full h-[500px] bg-[#E8EFFF] rounded-br-[12rem]">
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/3 -translate-y-1/2 max-w-xl">
          <div className="p-2">
            <h2 className="text-[#021850] font-bold text-2xl md:text-3xl">
              Do you have a Self Storage for Sale?
            </h2>
            <p className="text-[#000103B2] text-sm md:text-base my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id
              diam amet proin scelerisque nunc.
            </p>
            <Button bg="blue" text="Sell your Self Storage" />
          </div>
        </div>
        <img
          src={ellipse}
          alt="ellipse"
          className="absolute bottom-0 left-0 z-20"
        />
      </div>
      <div className="relative h-[500px] bg-[#ffffff]">
        <div className="absolute top-1/2 left-1/3 transform xl:translate-x-1/2 -translate-y-1/2 max-w-2xl md:max-w-xl">
          <div className="p-2">
            <h2 className="text-[#021850] font-bold text-2xl md:text-3xl">
              Do you have a Self Storage for Sale?
            </h2>
            <p className="text-[#000103B2] text-sm md:text-base my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id
              diam amet proin scelerisque nunc.
            </p>
            <Button bg="blue" text="Sell your Self Storage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellStorage;
