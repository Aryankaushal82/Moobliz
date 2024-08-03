
// //   import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Hero from './components/Hero';
// // import Features from './components/Features';
// // import Pricing from './components/Pricing';
// // import Contact from './components/Contact';
// // import Footer from './components/Footer';
// // import Cta from './components/Cta';
// // import LogIn from './components/LogIn'; // Create this component
// // import SignUp from './components/SignUp'; // Create this component
// // import Navbarr from './components/Navbarr'; // Import Navbar component
// // import Dashboard from './components/Dashboard'; // Import Dashboard component

// // const App = () => {
// //   return (
// //     <Router>
// //       <div className="App">
// //         <Routes>
// //           <Route path="/" element={<Hero />} />
// //           <Route path="/login" element={<LogIn />} />
// //           <Route path="/signup" element={<SignUp />} />
// //           <Route
// //             path="/dashboard"
// //             element={
// //               <div className="flex">
// //                 {/* Side Navigation Bar */}
// //                 <Navbarr />
// //                 {/* Main component on basis of selected navigation from nav bar */}
// //                 <main className="grow">
// //                   <Dashboard />
// //                 </main>
// //               </div>
// //             }
// //           />
// //         </Routes>
// //         <Cta />
// //         <Features />
// //         <Pricing />
// //         <Contact />
// //         <Footer />
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Hero from './components/Hero';
// import Features from './components/Features';
// import Pricing from './components/Pricing';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Cta from './components/Cta';
// import LogIn from './components/LogIn'; // Create this component
// import SignUp from './components/SignUp'; // Create this component
// import Dashboard from './components/Dashboard'; // Make sure to import the Dashboard component
// import Navbarr from './components/Navbarr'; // Adjust the import path as necessary

// const App = () => {
//   const location = useLocation();
//   const showMainComponents = location.pathname === '/';

//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/login" element={<LogIn />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route
//           path="/dashboard"
//           element={
//             <div className="flex">
//               {/* Side Navigation Bar */}
//               <Navbarr />
//               {/* Main component on basis of selected navigation from nav bar */}
//               <main className="grow">
//                 <Dashboard />
//               </main>
//             </div>
//           }
//         />
//       </Routes>
//       {showMainComponents && (
//         <>
//           <Cta />
//           <Features />
//           <Pricing />
//           <Contact />
//           <Footer />
//         </>
//       )}
//     </div>
//   );
// };

// export default function AppWrapper() {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// }

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cta from './components/Cta';
import LogIn from './components/LogIn'; // Create this component
import SignUp from './components/SignUp'; // Create this component
import Dashboard from './components/Dashboard'; // Make sure to import the Dashboard component
import Activity from './components/Activity'; // Import Activity component
import Navbarr from './components/Navbarr'; // Adjust the import path as necessary

const App = () => {
  const location = useLocation();
  const showMainComponents = location.pathname === '/';

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <div className="flex">
              {/* Side Navigation Bar */}
              <Navbarr />
              {/* Main component on basis of selected navigation from nav bar */}
              <main className="grow">
                <Dashboard />
              </main>
            </div>
          }
        />
        <Route
          path="/activity"
          element={
            <div className="flex">
              {/* Side Navigation Bar */}
              <Navbarr />
              {/* Main component on basis of selected navigation from nav bar */}
              <main className="grow">
                <Activity />
              </main>
            </div>
          }
        />
      </Routes>
      {showMainComponents && (
        <>
          <Cta />
          <Features />
          <Pricing />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;

