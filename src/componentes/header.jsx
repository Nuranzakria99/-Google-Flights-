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

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
;

  // Calculate sum dynamically
  const totalPassengers = Object.values(options).reduce((sum, value) => sum + value, 0);
  
  return (
    <header>
    <div className="bg-[url('/header.svg')] h-[50vh]"></div>

    <div className="flex flex-col items-center justify-center mt-[-5rem]">
    <h1 className="text-6xl font-normal text-gray-800 mt-8">Flights</h1>

      <div className="bg-white shadow-lg shadow-gray-400 border-gray-500 rounded-xl p-4 w-full max-w-5xl h-full">

      <div className="flex flex-wrap items-center space-y-4 md:space-y-0 md:flex-nowrap">  
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
            <PersonOutlinedIcon className="mr-2" />{totalPassengers}
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Age"
          >
            <ListItem className="text-xl mx-2">
              <ListItemText primary="Adult" />
              <div className="flex items-center gap-3">
                <button className="disabled:cursor-not-allowed w-[35px] h-[35px] bg-[#E7E8E8] text-[#586371]  rounded text-2xl font-light cursor-pointer" onClick={()=>handleOption('adult','d')} disabled={options.adult<=1}>
                  -
                </button>
                <span className="mx-2">{options.adult}</span>
                <button className="disabled:cursor-not-allowed w-[35px] h-[35px] bg-[#E8F0FE] text-[#4B91ED]  rounded text-2xl font-light cursor-pointer hover:bg[#E8F0FE] hover:bg-[#bbd2f8]"onClick={()=>handleOption('adult','i')}>
                  +
                </button>
              </div>
            </ListItem>

           

            <ListItem className="text-xl mx-2 flex justify-between items-center m-5">
            <ListItemText primary="Children" />
          
            <div className="flex items-center gap-3">
              <button className="disabled:cursor-not-allowed w-[35px] h-[35px] bg-[#E7E8E8] text-[#586371] rounded text-2xl font-light  cursor-pointer hover:bg[#E8F0FE]" onClick={()=>handleOption('children','d')} disabled={options.children<=0}>
                -
              </button>
              <span className="mx-2">{options.children}</span>
              <button className="disabled:cursor-not-allowed w-[35px] h-[35px] bg-[#E8F0FE] text-[#4B91ED] rounded text-2xl font-light cursor-pointer hover:bg-[#bbd2f8]" onClick={()=>handleOption('children','i')}>
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
    </header>
  );
};

export default Header;
