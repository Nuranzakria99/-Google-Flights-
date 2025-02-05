// src/components/Header.tsx
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  ListItem,
  ListItemText,
} from "@mui/material";
import SwapHorizTwoToneIcon from "@mui/icons-material/SwapHorizTwoTone";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useState } from "react";

const Header = () => {
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
  });

  return (
    <div>
      {/* Background Image Section */}
      <div className="bg-[url('/header.svg')] h-[50vh]"></div>

      {/* Title and Search Form Section */}
      <div className="flex flex-col items-center justify-center mt-[-5rem]">
        {/* Flights Title */}
        <h1 className="text-6xl font-normal text-gray-800 mb-8">Flights</h1>

        {/* Search Form */}
       
        <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-4xl flex flex-wrap justify-between items-center space-y-4 md:space-y-0 md:flex-nowrap">
          {/* Trip Type */}
          <div className="flex flex-col items-center space-x-2">
            <FormControl
              color="blue"
              variant="standard"
              sx={{ m: 2, minWidth: 180 }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                {" "}
                <SwapHorizTwoToneIcon className="mr-2" />
                Round Trips
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Age"
              >
                <MenuItem value={10} className="text-xl">
                  Round Trips
                </MenuItem>
                <MenuItem value={20}>One Way</MenuItem>
                <MenuItem value={30}>Multi-City</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* Passengers */}
          <div className="flex flex-col items-center space-x-2">
            <FormControl
              color="blue"
              variant="standard"
              sx={{ m: 1, minWidth: 80 }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                {" "}
                <PersonOutlinedIcon className="mr-2" />1
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Age"
              >
                <ListItem className="text-xl mx-2">
                  <ListItemText primary="Adult" />
                  <div className="flex items-center gap-3">
                    <button className="w-[35px] h-[35px] bg-[#248ad3] text-[#092233] rounded text-2xl font-light hover:">
                      -
                    </button>
                    <span className="mx-2">1</span>
                    <button className="w-[35px] h-[35px] bg-[#0071c23c] text-[#0071c2] rounded text-2xl font-light hover:">
                      +
                    </button>
                  </div>
                </ListItem>

                <ListItem className="text-xl mx-2">
                  <ListItemText primary="children" />
                  <div className="flex items-center gap-3">
                    <button className="w-[35px] h-[35px] bg-[#0071c23c] text-[#0071c2] rounded text-2xl font-light hover:">
                      -
                    </button>
                    <span className="mx-2 ">1</span>
                    <button className="w-[35px] h-[35px] bg-[#0071c23c] text-[#0071c2] rounded text-2xl font-light">
                      +
                    </button>
                  </div>
                </ListItem>
              </Select>
            </FormControl>
          </div>

          {/* Class */}
          <div className="flex items-center space-x-2">
            <FormControl
              color="blue"
              variant="standard"
              sx={{ m: 2, minWidth: 180 }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Economy
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Age"
              >
                <MenuItem value={10}>Economy</MenuItem>
                <MenuItem value={20}>Premium Economy</MenuItem>
                <MenuItem value={30}>Business</MenuItem>
                <MenuItem value={40}>First</MenuItem>
              </Select>
            </FormControl>
          </div>
          </div>

          {/* Search Fields */}
          <div className="flex flex-col md:flex-row w-full md:w-auto space-y-2 md:space-y-0 md:space-x-2 mt-4 md:mt-0">
            <input
              type="text"
              placeholder="From"
              className="p-2 border rounded-lg w-full"
            />
            <input
              type="text"
              placeholder="Where to?"
              className="p-2 border rounded-lg w-full"
            />
            <input
              type="date"
              placeholder="Departure"
              className="p-2 border rounded-lg w-full"
            />
            <input
              type="date"
              placeholder="Return"
              className="p-2 border rounded-lg w-full"
            />
          </div>

          {/* Explore Button */}
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full mt-4 md:mt-0">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
