import { useState } from "react";
import axios from '../api/axios'
import { useNavigate } from "react-router-dom";
const login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errors, setErrors] = useState({});
  const Navigate = useNavigate();

  const validateField = (field, value) => {
    let error = "";

    if (field === "email") {
      if (!value) error = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(value))
        error = "Invalid email format";
    }

    if (field === "password") {
      if (!value) error = "Password is required";
    }

    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
  };

  const handleChange = (field, value, setter) => {
    setter(value);

    if (errors[field]) {
      validateField(field, value);
    }
  };

  const handleLogin = async () => {
     validateField("email", email);
    validateField("password", password);
    try {
      const res = await axios.post("/login", {
        email,
        password,
      } );
      
      Navigate("/"); 
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        api: err.response?.data?.message || "Login Failed",
      }));
    }
  };
  return (
    <div className="flex justify-center">
      <div className="card card-dash bg-base-300 w-96 my-20">
        <div className="card-body">
          <h2 className="card-title justify-center font-bold ">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Email ID:</span>
              </div>
              <input
                type="Email"
                value={email}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => handleChange("email",e.target.value, setemail)}
                onBlur={()=> validateField("email",email)}
              />
               {errors.email && (
            <p className="text-error text-sm">{errors.email}</p>
          )}
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                value={password}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => handleChange("password",e.target.value,setpassword)}
                onBlur={()=>validateField("password",password)}
              />
              {errors.password && (
            <p className="text-error text-sm">{errors.password}</p>
          )}

          {/* API Error */}
          {errors.api && (
            <p className="text-error text-center">{errors.api}</p>
          )}

            </label>
          </div>
          <div className="card-actions justify-center ">
            <button className="btn bg-blue-500 w-20" onClick={handleLogin}>
              Login{" "}
            </button>
             <p className="text-center mt-3 text-sm">
            Don't have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => Navigate("/signup")}
            >
              Signup here
            </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
