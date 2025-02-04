// src/components/Header.tsx

const Header = () => {
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
            <i className="fas fa-exchange-alt text-gray-500"></i>
            <select className="border-none focus:ring-0 text-gray-700">
              <option>Round trip</option>
              <option>One way</option>
              <option>Multi-city</option>
            </select>
          </div>

          {/* Passengers */}
          <div className="flex items-center space-x-2">
            <i className="fas fa-user text-gray-500"></i>
            <input
              type="number"
              min="1"
              className="w-12 border-none focus:ring-0 text-gray-700"
              defaultValue="1"
            />
          </div>

          {/* Class */}
          <div className="flex items-center space-x-2">
            <select className="border-none focus:ring-0 text-gray-700">
              <option>Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
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
