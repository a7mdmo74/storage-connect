import React, { useState } from "react";
import { Link } from "react-scroll";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import Button from "./common/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <nav className="max-w-7xl px-3 container mx-auto">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center justify-center">
          <Inventory2Icon
            sx={{ fontSize: "2rem", marginRight: "0.2rem", color: "#FFCE31" }}
          />
          <span className="text-white font-semibold tracking-wider text-xl">
            StorageConnect
          </span>
        </div>
        <ul className="hidden md:flex items-center justify-center gap-2 lg:gap-4 text-white text-base">
          <li className="cursor-pointer">
            <Link
              to="active-listing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              Active Listings
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="sell-storage"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              Sell your Self Storage
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="sell-storage"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              Free Evaluation
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="learn"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              Learn
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              <Button bg="primary" text="Contact" />
            </Link>
          </li>
        </ul>
        <div
          className={
            isActive
              ? "absolute md:hidden right-0 top-10 bg-white text-quaternary p-10 rounded-xl"
              : "hidden"
          }
        >
          <ul className="flex flex-col items-center justify-center gap-6">
            <li className="cursor-pointer">
              <Link
                to="active-listing"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                Active Listings
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="sell-storage"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                Sell your Self Storage
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="sell-storage"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                Free Evaluation
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="learn"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                Learn
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                <Button bg="primary" text="Contact" />
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={handleClick}
        >
          {isActive ? (
            <CloseIcon sx={{ fontSize: "2rem" }} />
          ) : (
            <MenuIcon sx={{ fontSize: "2rem" }} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
