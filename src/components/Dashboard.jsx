// import React from "react";
// import Chart from "./Chart";

// function Dashboard() {
//   return (
//     <div className="flex flex-col py-10 lg:px-16 md:px-10 px-6 h-screen overflow-y-auto w-full bg-gray-900 text-white">
//       <h2 className="lg:text-3xl md:text-2xl text-xl">Dashboard</h2>

//       <div className="md:flex md:space-x-8 py-6 justify-center flex-wrap ">
//         <div className="flex flex-col rounded-md border border-gray-700 md:w-[400px] w-[250px] h-[150px] md:p-8 p-4 justify-center bg-gray-800 card">
//           <h2 className="text-white">Aryan Kaushal</h2>
//           <p className="text-gray-400 mt-3">Your Expenses: Rs10000</p>
//         </div>
//         <div className="flex flex-col rounded-md border border-gray-700 md:w-[400px] w-[250px] h-[150px] md:p-8 p-4 justify-center md:mt-0 mt-4 bg-gray-800 card">
//           <h2 className="text-white">Aryan Pathania</h2>
//           <p className="text-gray-400 mt-3">Your Savings: Rs10000</p>
//         </div>
//       </div>
//       <div className="md:flex space-x-8 py-6 h-[80%] md:justify-center">
//         <div className="flex flex-col rounded-md border border-gray-700 md:w-full w-auto p-8 justify-center bg-gray-800 card">
//           Expenses Graph
//           <Chart />
//         </div>
//       </div>
      

//       <div className="md:flex md:space-x-8 py-6 md:justify-center">
//         <div className="flex flex-col rounded-md border border-gray-700 md:w-[400px] w-[250px] h-[200px] md:p-8 p-4 justify-center bg-gray-800 card">
//           <h2 className="text-white">Your Activity</h2>
//           <li className="text-gray-400 mt-3">Sent Rs 10000 to mother</li>
//         </div>
//         <div className="flex flex-col rounded-md border border-gray-700 md:w-[400px] w-[250px] h-[200px] md:p-8 p-4 justify-center md:mt-0 mt-4 bg-gray-800 card">
//           <h2 className="text-white">Pending Bills</h2>
//           <li className="text-gray-400 mt-3">Broadband bill: Rs 1000</li>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


import React from "react";
import Chart from "./Chart";
import Card from "./Card"; // Import the Card component

function Dashboard() {
  return (
    <div className="flex flex-col py-10 lg:px-16 md:px-10 px-6 h-screen overflow-y-auto w-full bg-gray-900 text-white">
      <h2 className="lg:text-3xl md:text-2xl text-xl">Dashboard</h2>

      <div className="md:flex md:space-x-8 py-6 justify-center flex-wrap">
        <Card
          imageSrc={'https://res.cloudinary.com/dicnuc6ox/image/upload/v1722683554/logo_llqzae.png'}
          title="Aryan Pathania"
          subtitle="riam perspiciatis a itaque beatae. Vitae impedit temporibus beatae eligendi pariatur sequi inventore laboriosam veniam?"
          className="md:w-[400px] w-[250px] h-[150px] md:mt-0 mt-4"
        />
        <Card
            imageSrc={'https://res.cloudinary.com/dicnuc6ox/image/upload/v1722683554/logo_llqzae.png'}
          title="Aryan Pathania"
          subtitle="Lorem aperiam perspiciatis a itaque beatae. Vitae impedit temporibus beatae eligendi pariatur sequi inventore laboriosam veniam?"
          className="md:w-[400px] w-[250px] h-[150px] md:mt-0 mt-4"
        />
        <Card
          imageSrc={'https://res.cloudinary.com/dicnuc6ox/image/upload/v1722683554/logo_llqzae.png'}
          title="Aryan Pathania"
          subtitle="Lorem ipsum dm perspiciatis a itaque beatae. Vitae impedit temporibus beatae eligendi pariatur sequi inventore laboriosam veniam?"
          className="md:w-[400px] w-[250px] h-[150px] md:mt-0 mt-4"
        />
      </div>

      <div className="md:flex space-x-8 py-6 h-[80%] md:justify-center">
         <div className="flex flex-col rounded-md border border-gray-700 md:w-full w-auto p-8 justify-center bg-gray-800 card text-center text-lg font-semibold" >
           Expenses Graph
           <Chart />
         </div>
       </div>
      

      <div className="md:flex md:space-x-8 py-6 md:justify-center">
        <Card
          imageSrc={'https://res.cloudinary.com/dicnuc6ox/image/upload/v1722683554/logo_llqzae.png'}
          title="Aryan Pathania"
          subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum consequatur ut quisquam eos sapiente minus aperiam perspiciatis a itaque beatae. Vitae impedit temporibus beatae eligendi pariatur sequi inventore laboriosam veniam?"
          className="md:w-[400px] w-[250px] h-[150px] md:mt-0 mt-4"
        />
        <Card
          imageSrc={'https://res.cloudinary.com/dicnuc6ox/image/upload/v1722683554/logo_llqzae.png'}
          title="Aryan Pathania"
          subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum consequatur ut quisquam eos sapiente minus aperiam perspiciatis a itaque beatae. Vitae impedit temporibus beatae eligendi pariatur sequi inventore laboriosam veniam?"
          className="md:w-[400px] w-[250px] h-[150px] md:mt-0 mt-4"
        />
        <Card
          imageSrc={'https://res.cloudinary.com/dicnuc6ox/image/upload/v1722683554/logo_llqzae.png'}
          title="Aryan Pathania"
          subtitle="Your SLorem ipsum dolor, sit amet consectetur adipisicing elit. Harum consequatur ut quisquam eos sapiente minus aperiam perspiciatis a itaque beatae. Vitae impedit temporibus beatae eligendi pariatur sequi inventore laboriosam veniam?avings: Rs10000"
          className="md:w-[400px] w-[250px] h-[150px] md:mt-0 mt-4"
        />
      </div>
      
    </div>
  );
}

export default Dashboard;

