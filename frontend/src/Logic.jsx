// // import { useState } from "react";
// // import axios from "axios";
// // import Header from "./components/Header";
// // import WeatherCard from "./components/WeatherCard";
// // import Footer from "./components/Footer";

// // function Logic() {
// //   const [city, setCity] = useState("");
// //   const [weather, setWeather] = useState(null);
// //   const [error, setError] = useState(""); // Add error state
// //   const [loading, setLoading] = useState(false);

// //   const fetchWeather = async () => {
// //     if (!city.trim()) return;
// //     setError(""); // Clear previous error
// //     setWeather(null); // Optionally clear previous weather
// //     setLoading(true); // Set loading state
// //     try {
// //       const res = await axios.get(`http://localhost:5000/api/weather/${city}`);
// //       setWeather(res.data);
// //     } catch (err) {
// //       setError("City not found. Please enter a valid city name.");
// //     }
// //     setLoading(false); // Reset loading state
// //   };

// //   const handleKeyDown = (e) => {
// //     if (e.key === "Enter") {
// //       fetchWeather();
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col items-center mt-10 w-full">
// //       <div className="w-full max-w-md flex flex-col items-center">
// //         <Header />
// //         <input
// //           className="border p-2 rounded mt-4 w-full"
// //           type="text"
// //           value={city}
// //           onChange={(e) => setCity(e.target.value)}
// //           onKeyDown={handleKeyDown}
// //           placeholder="Enter city"
// //         />
// //         <button
// //           onClick={fetchWeather}
// //           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full"
// //         >
// //           Get Weather
// //         </button>
// //         {/* Popup for error */}
// //         {error && (
// //           <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 z-50">
// //             <div className="bg-white p-6 rounded shadow-lg text-center">
// //               <p className="text-red-600 font-semibold mb-4">{error}</p>
// //               <button
// //                 className="bg-blue-500 text-white px-4 py-2 rounded"
// //                 onClick={() => setError("")}
// //               >
// //                 Close
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //         {weather && <WeatherCard weather={weather} />}
// //         <Footer />
// //       </div>
// //     </div>
// //   );
// // }

// // export default Logic;

// import { useState } from "react";
// import axios from "axios";
// import Header from "./components/Header";
// import WeatherCard from "./components/WeatherCard";
// import Footer from "./components/Footer";

// function Logic() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const fetchWeather = async () => {
//     if (!city.trim()) return;
//     setError("");
//     setWeather(null);
//     setLoading(true);
//     try {
//       const res = await axios.get(`http://localhost:5000/api/weather/${city}`);
//       setWeather(res.data);
//     } catch (err) {
//       setError("City not found. Please enter a valid city name.");
//     }
//     setLoading(false);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       fetchWeather();
//     }
//   };

//   return (
//     <div className="flex flex-col items-center mt-10 w-full">
//       <div className="w-full max-w-md flex flex-col items-center">
//         <Header />
//         <input
//           className="border p-2 rounded mt-4 w-full"
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           onKeyDown={handleKeyDown}
//           placeholder="Enter city"
//         />
//         <button
//           onClick={fetchWeather}
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full"
//         >
//           Get Weather
//         </button>

//         {/* Loading indicator */}
//         {loading && (
//           <p className="mt-6 text-blue-700 font-semibold animate-pulse">
//             Fetching weather data...
//           </p>
//         )}

//         {/* Popup for error */}
//         {error && (
//           <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 z-50">
//             <div className="bg-white p-6 rounded shadow-lg text-center">
//               <p className="text-red-600 font-semibold mb-4">{error}</p>
//               <button
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//                 onClick={() => setError("")}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}

//         {!loading && weather && <WeatherCard weather={weather} />}
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default Logic;
import { useState, useRef, useEffect } from "react"; // Added useRef and useEffect
import axios from "axios";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import Footer from "./components/Footer";

function Logic() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const inputRef = useRef(null); // Create a ref for the input field

  // Focus the input field on initial render and after errors are cleared
  useEffect(() => {
    inputRef.current.focus();
  }, [error]); // Re-run when error changes

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }
    setError("");
    setWeather(null);
    try {
      const res = await axios.get(
        `https://siradden-wether-now1.onrender.com//api/weather/${city}`
      );
      setWeather(res.data);
    } catch (err) {
      setError("City not found. Please enter a valid city name.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchWeather();
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 w-full">
      <div className="w-full max-w-md flex flex-col items-center">
        <Header />
        <input
          ref={inputRef} // Attach the ref
          autoFocus // Optional: tries to focus on initial render
          className="border p-2 rounded mt-4 w-full"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter city"
        />
        <button
          onClick={fetchWeather}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Get Weather
        </button>
        {error && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white p-6 rounded shadow-lg text-center">
              <p className="text-red-600 font-semibold mb-4">{error}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  setError("");
                  inputRef.current.focus(); // Focus input when closing error
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
        {weather && <WeatherCard weather={weather} />}
        <Footer />
      </div>
    </div>
  );
}

export default Logic;
