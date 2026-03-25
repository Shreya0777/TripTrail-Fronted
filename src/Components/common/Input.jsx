const Input = ({ label, name, value, onChange, error }) => (
  <div>
    <label className="label">{label}</label>
    <input
      name={name}
      value={value}
      onChange={onChange}
    className={`input w-full bg-white text-black border border-gray-400 ${
  error ? "border-red-500" : ""
}`}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default Input;