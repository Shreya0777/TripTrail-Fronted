const ProfileStats = ({ user, trips }) => {
  return (
    <div className="stats stats-horizontal shadow w-full mt-6 bg-base-200">
      <div className="stat place-items-center">
        <div className="stat-value text-xl">{trips.length}</div>
        <div className="stat-desc">Trips shared</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-value text-xl">{user.countries || 0}</div>
        <div className="stat-desc">Countries</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-value text-xl">4.8</div>
        <div className="stat-desc">Avg rating</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-value text-xl">2.1k</div>
        <div className="stat-desc">Helped</div>
      </div>
    </div>
  );
};

export default ProfileStats;