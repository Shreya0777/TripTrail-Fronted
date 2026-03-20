const EmptyState = ({ icon, title, text }) => {
  return (
    <div className="hero bg-base-200 rounded-2xl mt-5 py-12">
      <div className="hero-content text-center">
        <div>
          <p className="text-4xl mb-3">{icon}</p>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm text-base-content/60 mt-1">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;