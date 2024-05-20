import React from "react";
import Chart from "./Chart";

function Dashboard() {
  return (
    <div className="flex flex-col py-10 lg:px-16 md:px10 px-6 h-screen overflow-y-auto w-full">
      <h2 className="lg:text-3xl md:text-2xl text-xl">Dashboard</h2>

      <div className="md:flex md:space-x-8 py-6">
        <div className="flex flex-col rounded-md border md:w-[400px] w-[250px] h-[150px] md:p-8 p-4 justify-center">
          <h2 className="text-2xl">Total Sites visit</h2>
          <p className="text-white mt-3">32</p>
        </div>
        <div className="flex flex-col rounded-md border md:w-[400px] w-[250px] h-[150px] md:p-8 p-4 justify-center md:mt-0 mt-4">
          <h2 className="text-2xl">Number of hours</h2>
          <p className="text-white mt-3">3</p>
        </div>
      </div>
      <div className="flex space-x-8 py-6 w-4/5">
        <div className="flex flex-col rounded-md border w-full p-8 justify-center">
          Analysis
          <Chart />
        </div>
      </div>
      
    </div>
  );
}

export default Dashboard;
