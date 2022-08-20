import React from "react";
import ImgCard from "./Card";
import card from "../assets/card.jpg";
import Button from "./common/Button";
const ActiveListing = () => {
  return (
    <section id="active-listing">
      <div className="bg-active-listing bg-no-repeat bg-cover w-full min-h-screen text-center text-white py-6">
        <h3 className="text-2xl md:text-3xl font-bold leading-10">
          Active Listing Self Storages
        </h3>
        <p className="text-xs md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
          sapien sagittis maecenas tincidunt. Quis pretium ornare
        </p>
        <div className="flex justify-center my-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 px-4">
            <ImgCard
              card={card}
              title="Heading of this Self Storage"
              state={false}
            />
            <ImgCard
              card={card}
              title="Heading of this Self Storage"
              state={false}
            />
            <ImgCard
              card={card}
              title="Heading of this Self Storage"
              state={false}
            />
            <ImgCard
              card={card}
              title="Heading of this Self Storage"
              state={false}
            />
            <ImgCard
              card={card}
              title="Heading of this Self Storage"
              state={false}
            />
            <ImgCard
              card={card}
              title="Heading of this Self Storage"
              state={false}
            />
          </div>
        </div>
        <Button bg="yellow" text="View More Details" />
      </div>
    </section>
  );
};

export default ActiveListing;
