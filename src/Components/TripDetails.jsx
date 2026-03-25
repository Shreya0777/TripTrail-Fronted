import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";

const TripDetails = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    axios.get(`/trips/${id}`)
      .then(res => setTrip(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!trip) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">

      {/* 🌊 HERO SECTION */}
      <div className="relative h-[70vh]">
        <img
          src={trip.media?.[0]?.url || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"}
          alt="trip"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Text */}
        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-4xl font-bold">{trip.destination}</h1>
          <p className="text-sm mt-1">From {trip.from}</p>
        </div>
      </div>

      {/* 🔥 FLOATING CARD */}
      <div className="max-w-5xl mx-auto -mt-16 px-4">
        <div className="backdrop-blur-lg bg-white/70 shadow-xl rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="text-center">
            <p className="text-sm opacity-60">Budget</p>
            <p className="font-bold">₹{trip.totalBudget}</p>
          </div>

          <div className="text-center">
            <p className="text-sm opacity-60">Duration</p>
            <p className="font-bold">{trip.duration} days</p>
          </div>

          <div className="text-center">
            <p className="text-sm opacity-60">Transport</p>
            <p className="font-bold">{trip.transportation}</p>
          </div>

          <div className="text-center">
            <p className="text-sm opacity-60">Rating</p>
            <p className="font-bold">⭐ {trip.overallRating}</p>
          </div>

        </div>
      </div>

      {/* 📝 CONTENT */}
      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">About this trip</h2>
          <p className="text-gray-700">{trip.description}</p>
        </div>

        {/* Experience */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">

          <div className="bg-green-100 p-4 rounded-xl">
            <h3 className="font-bold mb-2">👍 Pros</h3>
            <p>{trip.pros || "N/A"}</p>
          </div>

          <div className="bg-red-100 p-4 rounded-xl">
            <h3 className="font-bold mb-2">👎 Cons</h3>
            <p>{trip.cons || "N/A"}</p>
          </div>

          <div className="bg-yellow-100 p-4 rounded-xl">
            <h3 className="font-bold mb-2">💡 Tips</h3>
            <p>{trip.tips || "N/A"}</p>
          </div>

        </div>

        {/* Extra */}
        <div className="space-y-2">
          <p><b>Trip Type:</b> {trip.tripType}</p>
          <p><b>Hotel:</b> {trip.hotelName || "N/A"} ⭐ {trip.hotelRating || "-"}</p>
          <p><b>Best Time:</b> {trip.bestTimeToVisit || "N/A"}</p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex gap-2 flex-wrap">
          {trip.tags?.map(tag => (
            <span key={tag} className="badge badge-outline">
              #{tag}
            </span>
          ))}
        </div>

      </div>

    </div>
  );
};

export default TripDetails;