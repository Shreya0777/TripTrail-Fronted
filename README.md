# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


src/
 ├── api/
 │     └── axios.js
 ├── pages/
 │     ├── Login.jsx
 │     ├── Signup.jsx
 │     ├── Feed.jsx
 │     ├── TripDetail.jsx
 │     ├── CreateTrip.jsx
 |     |__Profile.jsx
 ├── components/
 │     ├── Navbar.jsx
 │     ├── TripCard.jsx
 ├── context/
 │     └── AuthContext.jsx
 ├── App.jsx
 └── main.jsx



 // import { useEffect, useState } from "react";
// import axios from "../api/axios";

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [trips, setTrips] = useState([]);
//   const [activeTab, setActiveTab] = useState("trips");

//   useEffect(() => {
//     axios.get("/users/profile/view").then((res) => setUser(res.data));
//     axios.get("/trips/my-trips").then((res) => setTrips(res.data));
//   }, []);

//   if (!user)
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <span className="loading loading-spinner loading-lg"></span>
//       </div>
//     );

//   return (
//     <div className="w-screen mx-auto px-4 py-8">
//       {/* Cover Photo */}
//       <div className="h-48 bg-gradient-to-r from-slate-800 to-blue-900 rounded-2xl relative">
//         <div className="absolute bottom-3 right-4 badge badge-ghost text-xs opacity-60">
//           ✈ {user.countries || 0} countries explored
//         </div>
//       </div>

//       {/* Avatar + Edit Button */}
//       <div className="flex justify-between items-end -mt-10 px-4">
//         <div className="avatar">
//           <div className="w-20 rounded-full ring ring-base-100 ring-offset-base-100 ring-offset-2">
//             {user.photoURL ? (
//               <img src={user.photoURL} alt="avatar" />
//             ) : (
//               <img
//                 src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//                 alt="avatar"
//               />
//             )}
//           </div>
//         </div>
//         <button className="btn btn-sm btn-outline mb-1">Edit Profile</button>
//       </div>

//       {/* User Info */}
//       <div className="px-4 mt-4">
//         <h2 className="text-xl font-bold">{user.name}</h2>
//         <p className="text-sm text-base-content/50">@{user.username}</p>
//         {user.About && (
//           <p className="text-sm text-base-content/70 mt-2 max-w-md">
//             {user.About}
//           </p>
//         )}

//         {/* Meta badges */}
//         <div className="flex flex-wrap gap-2 mt-3">
//           <div className="badge badge-ghost gap-1">
//             📅 Joined{" "}
//             {new Date(user.createdAt).toLocaleDateString("en-IN", {
//               month: "short",
//               year: "numeric",
//             })}
//           </div>
//           <div className="badge badge-ghost gap-1">
//             📍 {user.location || "India"}
//           </div>
//         </div>
//       </div>

//       {/* Stats */}
//       <div className="stats stats-horizontal shadow w-full mt-6 bg-base-200">
//         <div className="stat place-items-center">
//           <div className="stat-value text-xl">{trips.length}</div>
//           <div className="stat-desc">Trips shared</div>
//         </div>
//         <div className="stat place-items-center">
//           <div className="stat-value text-xl">{user.countries || 0}</div>
//           <div className="stat-desc">Countries</div>
//         </div>
//         <div className="stat place-items-center">
//           <div className="stat-value text-xl">4.8</div>
//           <div className="stat-desc">Avg rating</div>
//         </div>
//         <div className="stat place-items-center">
//           <div className="stat-value text-xl">2.1k</div>
//           <div className="stat-desc">Helped</div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="tabs tabs-boxed bg-base-200 mt-6">
//         {["trips", "saved", "reviews"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`tab capitalize flex-1 ${activeTab === tab ? "tab-active" : ""}`}
//           >
//             {tab === "trips" && "🗺 "}
//             {tab === "saved" && "🔖 "}
//             {tab === "reviews" && "⭐ "}
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* Trips Tab */}
//       {activeTab === "trips" && (
//         <div className="flex flex-col lg:flex-row gap-6 mt-5">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
//           {trips.length === 0 ? (
//             <div className="col-span-2">
//               <div className="hero bg-base-200 rounded-2xl py-12">
//                 <div className="hero-content text-center">
//                   <div>
//                     <p className="text-4xl mb-3">🧳</p>
//                     <h3 className="font-bold text-lg">No trips yet</h3>
//                     <p className="text-sm text-base-content/60 mt-1">
//                       Share your first trip!
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : ( 
//             trips.map((trip) => (
//               <div
//                 key={trip._id}
//                 className="card bg-base-200 shadow-sm hover:-translate-y-1 transition-transform cursor-pointer "
//               >
//                 <div className="card-body">
//                   <div className="badge badge-outline badge-sm text-orange-500 border-orange-400 uppercase tracking-wide">
//                     {trip.destination}
//                   </div>
//                   <h3 className="card-title text-base mt-1">
//                     {trip.bestPlace?.slice(0, 50)}
//                     {trip.bestPlace?.length > 50 ? "…" : ""}
//                   </h3>
/trips/${id}
//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-1 mt-1">
//                     {trip.tags?.slice(0, 3).map((tag) => (
//                       <span key={tag} className="badge badge-ghost badge-xs">
//                         #{tag}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="card-actions justify-between items-center mt-3">
//                     <span className="font-semibold text-sm">
//                       ₹{trip.totalBudget?.toLocaleString("en-IN")}
//                       <span className="text-xs text-base-content/50 font-normal">
//                         {" "}
//                         /person
//                       </span>
//                     </span>
//                     <div className="rating rating-sm">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <input
//                           key={star}
//                           type="radio"
//                           className="mask mask-star-2 bg-orange-400"
//                           checked={trip.rating === star}
//                           readOnly
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//           <div className="lg:w-60 flex justify-center lg:block">
//             <div className="bg-base-200 rounded-2xl p-4 text-center shadow-md sticky top-20">
//               <p className="text-sm mb-2">Got a new journey?</p>
//               <button className="btn btn-primary btn-sm w-full">
//                 Share your next trip ✈
//               </button>
//             </div>
//           </div>
//           </div>
//         </div>
//       )}

//       {/* Saved Tab */}
//       {activeTab === "saved" && (
//         <div className="hero bg-base-200 rounded-2xl mt-5 py-12">
//           <div className="hero-content text-center">
//             <div>
//               <p className="text-4xl mb-3">🔖</p>
//               <h3 className="font-bold text-lg">No saved trips</h3>
//               <p className="text-sm text-base-content/60 mt-1">
//                 Bookmark trips you love!
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Reviews Tab */}
//       {activeTab === "reviews" && (
//         <div className="hero bg-base-200 rounded-2xl mt-5 py-12">
//           <div className="hero-content text-center">
//             <div>
//               <p className="text-4xl mb-3">⭐</p>
//               <h3 className="font-bold text-lg">No reviews yet</h3>
//               <p className="text-sm text-base-content/60 mt-1">
//                 Reviews from other travellers will appear here.
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;
