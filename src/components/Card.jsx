// import React from 'react';

// const Card = ({ title, description }) => {
//   return (
//     <div className="w-72 h-48 bg-gradient-to-r from-[#9539af] via-[#8503dc] to-[#8f4fe9] rounded-lg text-white overflow-hidden relative transform-gpu perspective-1000 transition-transform duration-500 ease-in-out cursor-pointer hover:rotate-y-10 hover:rotate-x-10 hover:scale-105 hover:shadow-lg">
//       <div className="p-5 flex flex-col gap-2 items-center justify-center text-center h-full relative z-10">
//         <h2 className="text-2xl font-bold uppercase">{title}</h2>
//         <p className="opacity-80 text-sm">{description}</p>
//       </div>
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent via-black/10 to-transparent transition-transform duration-500 ease-in-out z-1"></div>
//       <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-t from-transparent via-black/10 to-transparent transition-transform duration-500 ease-in-out z-1"></div>
//     </div>
//   );
// };

// export default Card;

import React from 'react';

const Card = ({ imageSrc, title, subtitle }) => {
  return (
    <div className="w-64 h-40 bg-gray-800 rounded-lg text-white overflow-hidden shadow-lg transition-transform duration-300 transform-gpu hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center p-4 space-x-4">
        <img
          src={imageSrc}
          alt="Card Image"
          className="w-10 h-10 object-cover rounded-full border border-gray-700"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </div>
      <div className="flex flex-col justify-center px-auto">
            <p className="text-md text-center text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
