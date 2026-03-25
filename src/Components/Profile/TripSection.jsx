import TripCard from "./TripCard";
import ShareTripCard from "./ShareTripCard";
import EmptyState from "./EmptyState";

const TripsSection = ({ trips }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 mt-6 px-2 sm:px-0">

      {/* LEFT SIDE - Trips */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        
        {trips.length === 0 ? (
          <div className="col-span-full flex justify-center items-center min-h-[200px]">
            <EmptyState
              icon="🧳"
              title="No trips yet"
              text="Share your first trip!"
            />
          </div>
        ) : (
          trips.map((trip) => (
            <TripCard key={trip._id} trip={trip} />
          ))
        )}

      </div>

      {/* RIGHT SIDE - Sticky Card */}
      <div className="lg:block hidden">
        <div className="sticky top-24">
          <ShareTripCard />
        </div>
      </div>

    </div>
  );
};

export default TripsSection;