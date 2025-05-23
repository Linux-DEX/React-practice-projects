import React from "react";

const Dashboard2 = () => {
  return (
    <>
      <nav className="flex justify-around items-center p-4">
        <h1 className="text-2xl">Dashboard 2</h1>
        <div className="flex justify-between items-center gap-5">
          <button className="flex items-center gap-2 bg-gray-500 py-1 px-2 rounded-[5px]">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            Category 1
          </button>
          <button className="flex items-center gap-2 bg-gray-500 py-1 px-2 rounded-[5px]">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            Category 2
          </button>
        </div>
      </nav>

      <div className="grid grid-cols-4 grid-rows-3 gap-3 px-4">
        <div className="relative h-70 bg-purple-300 rounded-xl">
          <span className="absolute top-2 left-2 w-2 h-2 rounded-full bg-red-600" />
        </div>
        <div className="relative h-70 bg-purple-300 rounded-xl">
          <span className="absolute top-2 left-2 w-2 h-2 rounded-full bg-blue-600" />
        </div>
        <div className="relative h-70 bg-purple-300 rounded-xl">
          <span className="absolute top-2 left-2 w-2 h-2 rounded-full bg-red-600" />
        </div>
        <div className="relative bg-purple-300 row-span-2 rounded-xl">
          <span className="absolute top-2 left-2 w-2 h-2 rounded-full bg-blue-600" />
        </div>
        <div className="relative bg-purple-300 col-span-2 rounded-xl">
          <span className="absolute top-2 left-2 w-2 h-2 rounded-full bg-red-600" />
        </div>
        <div className="relative h-70 bg-purple-300 rounded-xl">
          <span className="absolute top-2 left-2 w-2 h-2 rounded-full bg-blue-600" />
        </div>
        <div className="relative h-70 bg-purple-300 rounded-xl">
          <span className="absolute top-2 left-2 w-2 h-2 rounded-full bg-red-600" />
        </div>
        <div className="relative h-70 bg-purple-300 rounded-xl">
          <span className="absolute top-2 left-2 w-2 h-2 rounded-full bg-blue-600" />
        </div>
        <div className="relative h-70 bg-purple-300 col-span-2 rounded-xl">
          <span className="absolute top-2 left-2 w-2 h-2 rounded-full bg-red-600" />
        </div>
      </div>
    </>
  );
};

export default Dashboard2;
