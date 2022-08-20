import React from "react";
import ImgCard from "./Card";
import card from "../assets/card.jpg";
import Button from "./common/Button";

const Learn = () => {
  return (
    <section id="learn">
      <div className="bg-hero bg-no-repeat bg-cover w-full py-9 rounded-tl-[12rem] text-center text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="container mx-auto max-w-4xl py-10 px-10 ">
            <h2 className="mt-10 text2xl md:text-4xl font-semibold !leading-[50px]">
              Learn Everything About Buying, Selling, and Operating a Self
              Storage
            </h2>
            <p className="mt-6">
              Learn about literally anything to know about Selling or Buying a
              Self Storage
            </p>
          </div>
          <div className="flex justify-center mt-6 mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 mt-6">
              <ImgCard
                card={card}
                title="Learn Everything about managing and operating a Self Storage"
                state={true}
              />
              <ImgCard
                card={card}
                title="Learn Everything about managing and operating a Self Storage"
                state={true}
              />
              <ImgCard
                card={card}
                title="Learn Everything about managing and operating a Self Storage"
                state={true}
              />
              <ImgCard
                card={card}
                title="Learn Everything about managing and operating a Self Storage"
                state={true}
              />
            </div>
          </div>
        </div>
        <Button bg="yellow" text="Explore the Learning Section" />
      </div>
    </section>
  );
};

export default Learn;
