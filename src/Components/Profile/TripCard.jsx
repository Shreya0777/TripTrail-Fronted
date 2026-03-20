const TripCard = ({ trip }) => {
  return (
   
    <div className=" card bg-base-200 shadow-sm hover:-translate-y-1 transition-transform cursor-pointer">
      <div className="card-body ">
        <div className="badge badge-outline badge-sm text-blue-500 border-orange-400 uppercase">
          {trip.destination}
        </div>

        <h3 className="card-title text-base mt-1">
          {trip.bestPlace?.slice(0, 50)}
        </h3>

        <div className="flex flex-wrap gap-1 mt-1">
          {trip.tags?.slice(0, 3).map((tag) => (
            <span key={tag} className="badge badge-ghost badge-xs">
              #{tag}
            </span>
          ))}
        </div>

        <div className="card-actions justify-between mt-3">
          <span className="font-semibold text-sm">
            ₹{trip.totalBudget?.toLocaleString("en-IN")} /person
          </span>

          <div className="rating rating-sm">
            {[1, 2, 3, 4, 5].map((star) => (
              <input
                key={star}
                type="radio"
                className="mask mask-star-2 bg-orange-400"
                checked={trip.rating === star}
                readOnly
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default TripCard;