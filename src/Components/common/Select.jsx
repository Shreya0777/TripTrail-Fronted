const Select = ({ name, value, onChange, error }) => (
  <div>
    <label className="label">Transportation</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`select w-full bg-white text-black border border-gray-500 ${
        error ? "border-red-500" : ""
      }`}
    >
      <option value="">Select</option>
      <option value="train">Train</option>
      <option value="flight">Flight</option>
      <option value="bus">Bus</option>
      <option value="car">Car</option>
    </select>
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default Select;
