// src/components/Activity.js

import React from "react";

const Activity = () => {
  return (
    <div className="flex flex-col py-10 lg:px-16 md:px-10 px-6 h-screen overflow-y-auto w-full bg-gray-900 text-white">
      <h2 className="lg:text-3xl md:text-2xl text-xl">Activity</h2>

      <div className="md:flex md:space-x-8 py-6 md:justify-center">
        <div className="flex flex-col rounded-md border border-gray-700 md:w-[400px] w-[250px] h-[200px] md:p-8 p-4 justify-center bg-gray-800">
          <h2 className="text-white">Recent Activities</h2>
          <ul className="text-gray-400 mt-3 space-y-2">
            <li>Sent Rs 10000 to mother</li>
            <li>Paid electricity bill: Rs 2000</li>
            <li>Bought groceries: Rs 1500</li>
          </ul>
        </div>
        <div className="flex flex-col rounded-md border border-gray-700 md:w-[400px] w-[250px] h-[200px] md:p-8 p-4 justify-center md:mt-0 mt-4 bg-gray-800">
          <h2 className="text-white">Upcoming Bills</h2>
          <ul className="text-gray-400 mt-3 space-y-2">
            <li>Broadband bill: Rs 1000</li>
            <li>Rent: Rs 15000</li>
            <li>Credit card payment: Rs 5000</li>
          </ul>
        </div>
      </div>

      <div className="md:flex md:space-x-8 py-6 md:justify-center">
        <div className="flex flex-col rounded-md border border-gray-700 md:w-[400px] w-[250px] h-[200px] md:p-8 p-4 justify-center bg-gray-800">
          <h2 className="text-white">Completed Tasks</h2>
          <ul className="text-gray-400 mt-3 space-y-2">
            <li>Finished project report</li>
            <li>Completed tax filing</li>
            <li>Paid all credit card dues</li>
          </ul>
        </div>
        <div className="flex flex-col rounded-md border border-gray-700 md:w-[400px] w-[250px] h-[200px] md:p-8 p-4 justify-center md:mt-0 mt-4 bg-gray-800">
          <h2 className="text-white">Pending Tasks</h2>
          <ul className="text-gray-400 mt-3 space-y-2">
            <li>Update website content</li>
            <li>Renew car insurance</li>
            <li>Schedule annual health checkup</li>
          </ul>
        </div>
      </div>

      <div className="md:flex md:space-x-8 py-6 md:justify-center">
        <div className="flex flex-col rounded-md border border-gray-700 md:w-[400px] w-[250px] h-[200px] md:p-8 p-4 justify-center bg-gray-800">
          <h2 className="text-white">Notifications</h2>
          <ul className="text-gray-400 mt-3 space-y-2">
            <li>Meeting with client at 3 PM</li>
            <li>Doctor's appointment tomorrow</li>
            <li>Gym membership renewal due</li>
          </ul>
        </div>
        <div className="flex flex-col rounded-md border border-gray-700 md:w-[400px] w-[250px] h-[200px] md:p-8 p-4 justify-center md:mt-0 mt-4 bg-gray-800">
          <h2 className="text-white">Messages</h2>
          <ul className="text-gray-400 mt-3 space-y-2">
            <li>Message from HR regarding appraisal</li>
            <li>Reminder: Submit project update</li>
            <li>Message from bank: New offers available</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity;
