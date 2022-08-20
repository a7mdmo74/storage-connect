import React from "react";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import { Link } from "react-scroll";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PublicIcon from "@mui/icons-material/Public";

const Footer = () => {
  const [lang, setLang] = React.useState("");

  const handleChange = (event) => {
    setLang(event.target.value);
  };
  return (
    <div className="container mx-auto max-w-7xl px-4 my-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center mb-4">
            <Inventory2Icon
              sx={{ fontSize: "2rem", marginRight: "0.3rem", color: "#1849c6" }}
            />
            <h2>StorageConnect</h2>
          </div>
          <p className="text-[#4A4A4A] text-xs md:text-sm mb-4">
            Nam posuere accumsan porta. Integer id orci sed ante tincidunt
            tincidunt sit amet sed libero.
          </p>
          <p className="text-[#4A4A4A] text-xs">
            © StorageConnect 2022, All Rights Reserved
          </p>
        </div>
        <div>
          <h2 className="uppercase mb-5">Quick Links</h2>
          <ul>
            <li className="cursor-pointer text-sm md:text-sm mt-2">
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
            <li className="cursor-pointer text-sm md:text-sm mt-2">
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
            <li className="cursor-pointer text-sm md:text-sm mt-2">
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
            <li className="cursor-pointer text-sm md:text-sm mt-2">
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
          </ul>
        </div>
        <div>
          <h2 className="uppercase mb-5">Newsleter</h2>
          <p className="text-xs md:text-sm">
            Get latest updates right in your inbox
          </p>
          <TextField
            id="outlined-basic"
            label="Enter your email"
            variant="outlined"
            sx={{ my: 2 }}
            fullWidth
          />
          <div className="flex items-start">
            <Button variant="contained">Subscribe Now</Button>
          </div>
        </div>
        <div className="mb-5">
          <h2 className="uppercase mb-5">Let’s get social</h2>
          <div className="flex items-center mb-5">
            <span className="flex justify-center items-center w-[30px] h-[30px] bg-quaternary mx-1 text-white rounded-full text-2xl font-bold">
              f
            </span>
            <span className="flex items-center justify-center w-[30px] h-[30px] bg-quaternary mx-1 text-white rounded-full">
              <LinkedInIcon />
            </span>
            <span className="flex items-center justify-center w-[30px] h-[30px] bg-quaternary mx-1 text-white rounded-full">
              <TwitterIcon />
            </span>
            <span className="flex items-center justify-center w-[30px] h-[30px] bg-quaternary mx-1 text-white rounded-full">
              <CameraAltIcon />
            </span>
          </div>
          <Box sx={{ maxWidth: 200, marginTop: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                <PublicIcon /> Language
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={lang}
                label="Language"
                onChange={handleChange}
              >
                <MenuItem value={"en"}>English - En</MenuItem>
                <MenuItem value={"ar"}>Arabic - Ar</MenuItem>
                <MenuItem value={"fr"}>French - Fr</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Footer;
