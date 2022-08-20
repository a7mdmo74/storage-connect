import React from "react";
import Button from "./common/Button";
import Navbar from "./Navbar";
import ImgCard from "./Card";
import card from "../assets/card.jpg";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import LensIcon from "@mui/icons-material/Lens";
const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="bg-hero bg-fixed bg-no-repeat bg-cover w-full h-[609px] py-9 px-3">
        <Navbar />
        <div className="flex justify-center items-center flex-col h-full text-center max-w-md md:max-w-4xl mx-auto">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold md:!leading-[75px]">
              Self Storage Business Buy. Sell. Learn.
            </h1>
            <p className="text-sm md:text-lg font-medium mt-4	md:max-w-lg mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              sagittis, aliquam non tortor blandit lobortis. blandit{" "}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5 justify-center mt-6 items-center">
            <Button bg="primary" text="Sell your Self Storage" />
            <Button bg="white" text="Active Self Storage Listings" />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="text-center">
          <h2 className="text-[#021850] text-3xl md:text-4xl font-semibold !leading-[75px]">
            Featured Self Storages
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare
          </p>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row gap-6 items-center justify-center flex-1 mt-16">
          <ImgCard card={card} title="Heading of this Self Storage" />
          <ImgCard card={card} title="Heading of this Self Storage" />
          <ImgCard card={card} title="Heading of this Self Storage" />
        </div>
        <div className="my-8 flex items-center justify-center gap-5">
          <RadioButtonUncheckedIcon className="text-gray-300" />
          <RadioButtonUncheckedIcon className="text-gray-300" />
          <LensIcon className="text-quaternary" />
          <RadioButtonUncheckedIcon className="text-gray-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
