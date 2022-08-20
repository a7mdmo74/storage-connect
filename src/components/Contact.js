import { Button } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
const Contact = () => {
  return (
    <section id="contact" className="relative">
      <div className="w-full bg-[#E8EFFF] flex justify-center items-center py-20 md:py-28 lg:py-36 px-5 md:px-20 lg:px-52">
        <div className="w-full opacity-75 bg-white flex justify-between items-center py-10 lg:py-24 px-5 lg:px-20 rounded-2xl z-50">
          <div>
            <h1 className="text-lg md:text-4xl text-[#021850] font-semibold !leading-8">
              Any Queries? Reach Out to Us
            </h1>
            <p className="mt-5 text-xs md:text-base">
              Feel free to write to us, we are happy to help you
            </p>
          </div>
          <div>
            <Button sx={{ fontSize: "12px" }} variant="contained">
              Write to Us <PlayArrowIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute top-72 left-32 w-[200px] h-[200px] rounded-full border-[3rem] border-[#FFCE31]"></div>
      <div className="hidden lg:block absolute top-14 right-72 transform rotate-[15deg] text-white">
        <MailOutlineIcon sx={{ fontSize: "10rem" }} />
      </div>
    </section>
  );
};

export default Contact;
