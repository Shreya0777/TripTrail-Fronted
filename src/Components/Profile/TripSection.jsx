import TripCard from "./TripCard";
import ShareTripCard from "./ShareTripCard";
import EmptyState from "./EmptyState";

const TripsSection = ({ trips }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-6 mt-5">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        {trips.length === 0 ? (
          <div className="col-span-2">
            <EmptyState
              icon="🧳"
              title="No trips yet"
              text="Share your first trip!"
            />
          </div>
        ) : (
          trips.map((trip) => <TripCard key={trip._id} trip={trip} />)
        )}
      </div>

       <div className="sticky top-20 h-fit">
        <ShareTripCard />
      </div>

    </div>
  );
};

export default TripsSection;