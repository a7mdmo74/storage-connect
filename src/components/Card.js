import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CropFreeIcon from "@mui/icons-material/CropFree";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SellIcon from "@mui/icons-material/Sell";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
export default function ImgCard({ card, title, state }) {
  return (
    <Card
      className={`${
        state
          ? "max-w-[350px] sm:max-w-[400px] md:max-w-[300px]"
          : "max-w-[350px] sm:max-w-[400px] md:max-w-[400px]"
      }`}
    >
      <CardMedia component="img" alt="garage" height="50" image={card} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          className={`${state ? "!text-lg" : "!text-2xl"}`}
          component="div"
        >
          {title}
        </Typography>
        {state ? (
          <div className="grid grid-cols-3">
            <div className="flex justify-start items-center mt-2 text-xs">
              <span className="mr-2">
                <AccessTimeIcon />
                <span> 5hrs ago</span>
              </span>
            </div>
            <div className="flex justify-start items-center mt-2 text-xs">
              <span className="mr-2">
                <SellIcon />
                <span> sell</span>
              </span>
            </div>
            <div className="flex justify-start items-center mt-2 text-xs">
              <span className="mr-2">
                <RadioButtonUncheckedIcon />
                <span> Raza</span>
              </span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2">
            <div className="flex justify-start items-center mt-2 text-xs md:text-base">
              <span className="mr-2">
                <LocationOnIcon sx={{ fontSize: "16px" }} />
                <span className="text-xs md:text-base"> Jersey City, NJ</span>
              </span>
            </div>
            <div className="flex justify-start items-center mt-2 text-xs md:text-base">
              <span className="mr-2">
                <HomeWorkIcon sx={{ fontSize: "16px" }} />
              </span>
              <span className="font-semibold text-xs md:text-base">
                {" "}
                Total Units:{" "}
              </span>{" "}
              89
            </div>
            <div className="flex justify-start items-center mt-2 text-xs md:text-base">
              <span className="mr-2">
                <CropFreeIcon sx={{ fontSize: "16px" }} />
              </span>
              <span className="font-semibold text-xs md:text-base"> Size:</span>
              40,233 Sq Ft
            </div>
            <div className="flex justify-start items-center mt-2 text-xs md:text-base">
              <span className="mr-2">
                <PeopleOutlineIcon sx={{ fontSize: "16px" }} />
              </span>
              <span className="font-semibold text-xs md:text-base">
                {" "}
                Occupancy:{" "}
              </span>{" "}
              50%
            </div>
          </div>
        )}
      </CardContent>
      <CardActions>
        <div className="w-10/12 mx-auto">
          <Button variant="contained" fullWidth>
            {state ? "View More" : "View More Detail"}
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
