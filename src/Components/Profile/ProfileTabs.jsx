const ProfileTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs tabs-boxed bg-base-200 mt-6">
      {["trips", "saved", "reviews"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`tab flex-1 capitalize ${
            activeTab === tab ? "tab-active" : ""
          }`}
        >
          {tab === "trips" && "🗺 "}
          {tab === "saved" && "🔖 "}
          {tab === "reviews" && "⭐ "}
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ProfileTabs;