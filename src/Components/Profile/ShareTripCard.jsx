const ShareTripCard = () => {
  return (
    <div className="flex justify-center lg:block">
      <div className="bg-base-200 rounded-2xl p-4 text-center shadow-md sticky top-20">
        <p className="text-sm mb-2">Got a new journey?</p>
        <button className="btn btn-primary btn-sm w-full">
          Share your next trip ✈
        </button>
      </div>
    </div>
  );
};

export default ShareTripCard;