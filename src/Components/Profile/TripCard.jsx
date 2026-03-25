import { useNavigate } from "react-router-dom";

const TripCard = ({ trip }) => {
  const navigate = useNavigate();
  return (
    <div className="card bg-base-100 shadow-sm hover:-translate-y-1 transition-transform cursor-pointer">
      
      {/* Image Section */}
      <figure>
        <img
          src={trip.image || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"}
          alt={trip.destination}
          className="h-48 w-full object-cover"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        
        {/* Title + Badge */}
        <h2 className="card-title text-base">
          {trip.bestPlace?.slice(0, 40)}
          <div className="badge badge-secondary">
            {trip.destination}
          </div>
        </h2>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {trip.tags?.slice(0, 3).map((tag) => (
            <div key={tag} className="badge badge-outline">
              #{tag}
            </div>
          ))}
        </div>

        {/* Budget + Rating */}
        <div className="card-actions justify-between items-center mt-3">
          
          <span className="font-semibold text-sm">
            ₹{trip.totalBudget?.toLocaleString("en-IN")} /person
          </span>

          <div className="rating rating-sm">
            {[1, 2, 3, 4, 5].map((star) => (
              <input
                key={star}
                type="radio"
                className="mask mask-star-2 bg-orange-400"
                checked={trip.overallRating === star}
                readOnly
              />
            ))}
          </div>
          <button
            className="btn btn-xs btn-primary"
            onClick={() => navigate(`/trip/${trip._id}`)}
          >
            View
          </button>

        </div>
      </div>
    </div>
  );
};

export default TripCard;