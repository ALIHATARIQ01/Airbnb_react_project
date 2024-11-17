import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ListingDetailsPage from './pages/ListingDetailsPage';
import BookingPage from './pages/BookingPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/listings/:id" element={<ListingDetailsPage />} />
        <Route path="/book/:id" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// const App = () => {
//   return (
//     <div className="app">
//       <ListingCard 
//         image="/home/alihatariq/proph1/src/image/house1.jpg"
//         title="Cozy Beach House"
//         propertyType="Entire home"
//         guests={4}
//         bedrooms={2}
//         bathrooms={1}
//         price={120}
//         rating={4.8}
//       />
//       <ListingCard 
//         image="/home/alihatariq/proph1/src/image/house2.jpg"
//         title="Modern Apartment"
//         propertyType="Private room"
//         guests={2}
//         bedrooms={1}
//         bathrooms={1}
//         price={75}
//         rating={4.6}
//       />
//     </div>
//   );
// }

// export default App;






// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {

//   return (
//         <div className="app-container">
//             <Navbar />
//             <div className="content">
//                 {/* Other components and content of your app */}
//             </div>
//             <Footer />
//         </div>
//     );
//   // const [count, setCount] = useState(0)

//   // return (
//   //   <>
//   //     <div>
//   //       <a href="https://vitejs.dev" target="_blank">
//   //         <img src={viteLogo} className="logo" alt="Vite logo" />
//   //       </a>
//   //       <a href="https://react.dev" target="_blank">
//   //         <img src={reactLogo} className="logo react" alt="React logo" />
//   //       </a>
//   //     </div>
//   //     <h1>Vite + React</h1>
//   //     <div className="card">
//   //       <button onClick={() => setCount((count) => count + 1)}>
//   //         count is {count}
//   //       </button>
//   //       <p>
//   //         Edit <code>src/App.jsx</code> and save to test HMR
//   //       </p>
//   //     </div>
//   //     <p className="read-the-docs">
//   //       Click on the Vite and React logos to learn more
//   //     </p>
//   //   </>
//   // )
// }

// export default App
