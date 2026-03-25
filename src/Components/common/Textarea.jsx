const Textarea = ({ label, name, value, onChange, error }) => (
  <div className="mt-4">
    <label className="label">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={4}
     className={`textarea w-full bg-white text-black border border-gray-400 ${
  error ? "border-red-500" : ""
}`}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default Textarea;