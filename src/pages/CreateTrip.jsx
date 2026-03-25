import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import Input from "../Components/common/Input";
import Select from "../Components/common/Select";
import Textarea from "../Components/common/Textarea"
const CreateTrip = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    from: "",
    destination: "",
    duration: "",
    totalBudget: "",
    transportation: "",
    description: "",
    hotelName: "",
    hotelRating: "",
    overallRating: "",
    pros: "",
    cons: "",
    tips: "",
    tripType: "",
    bestTimeToVisit: "",
    tags: "",
  });

  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  // 🔥 handle change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 validation
  const validate = () => {
    let newErrors = {};

    if (!form.from) newErrors.from = "Required";
    if (!form.destination) newErrors.destination = "Required";
    if (!form.duration) newErrors.duration = "Required";
    if (!form.totalBudget) newErrors.totalBudget = "Required";
    if (!form.transportation) newErrors.transportation = "Required";

    if (!form.description) {
      newErrors.description = "Required";
    } else if (form.description.trim().split(/\s+/).length < 200) {
      newErrors.description = "Minimum 200 words required";
    }

    if (!form.overallRating) newErrors.overallRating = "Required";
    if (!image) newErrors.image = "Image required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔥 submit
  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      const formData = new FormData();

      // append text fields
      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      // append image
      formData.append("image", image);

      await axios.post("/trips/create", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Trip Shared Successfully 🚀");
      navigate("/profile");

    } catch (err) {
      console.log(err);
      alert("Error creating trip");
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-blue-900 min-h-screen py-10 px-4">

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md">

        <h2 className="text-2xl font-bold mb-6 text-blue-600">
          Share Your Trip ✈
        </h2>

        {/* 🔹 Inputs */}
        <div className="grid md:grid-cols-2 gap-4">

          <Input label="From" name="from" value={form.from} onChange={handleChange} error={errors.from} />
          <Input label="Destination" name="destination" value={form.destination} onChange={handleChange} error={errors.destination} />

          <Input label="Duration (days)" name="duration" value={form.duration} onChange={handleChange} error={errors.duration} />
          <Input label="Budget" name="totalBudget" value={form.totalBudget} onChange={handleChange} error={errors.totalBudget} />

          <Select name="transportation" value={form.transportation} onChange={handleChange} error={errors.transportation} />

          <Input label="Trip Type" name="tripType" value={form.tripType} onChange={handleChange} />
          <Input label="Best Time to Visit" name="bestTimeToVisit" value={form.bestTimeToVisit} onChange={handleChange} />

          <Input label="Hotel Name" name="hotelName" value={form.hotelName} onChange={handleChange} />
          <Input label="Hotel Rating (1-5)" name="hotelRating" value={form.hotelRating} onChange={handleChange} />

          <Input label="Overall Rating (1-5)" name="overallRating" value={form.overallRating} onChange={handleChange} error={errors.overallRating} />

          <Input label="Tags (comma separated)" name="tags" value={form.tags} onChange={handleChange} />

        </div>

        {/* 🔹 Image Upload */}
        <div className="mt-4">
          <label className="label">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className={`file-input file-input-bordered w-full ${errors.image ? "border-red-500" : ""}`}
          />
          {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
        </div>

        {/* 🔹 Description */}
        <Textarea label="Description (min 200 words)" name="description" value={form.description} onChange={handleChange} error={errors.description} />

        <Textarea label="Pros" name="pros" value={form.pros} onChange={handleChange} />
        <Textarea label="Cons" name="cons" value={form.cons} onChange={handleChange} />
        <Textarea label="Tips" name="tips" value={form.tips} onChange={handleChange} />

        {/* 🔥 Submit */}
        <button
          onClick={handleSubmit}
          className="btn bg-blue-500 hover:bg-blue-600 text-white w-full mt-6"
        >
          Share Trip 🚀
        </button>

      </div>
    </div>
  );
};

export default CreateTrip;