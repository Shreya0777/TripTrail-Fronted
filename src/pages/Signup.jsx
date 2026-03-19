import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  // 🔥 validation function
  const validate = (field, value) => {
    let error=""

    if (field ==="name" && !value) error = "Name is required";
    if (field ==="username" && !value) error = "Username is required";

    if(field === "email"){
      if(!value) error = "Email is required";
      else if(!/\S+@\S+\.\S+/.test(value))
        error = "Invalid email format";
    }

   if  (field=="password"){
    if(!value) error = "Password is required";
    else if(!/\S+@\S+\.\S+/.test(value)){
      error =!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(value)
    }
   }

    setErrors((prev)=>({
      ...prev,
      [field]: error,
    }))
  };
  const handlechange = (field, value,setter)=>{
    setter(value);

    if(errors[field,value]);
  }

  const handleSignup = async () => {
    validate("name",name);
    validate("username",username);
    validate("email",email);
    validate("password",password);

    if (Object.values(errors).some((err)=>err)) return;
    try {
      const res = await axios.post("/signup", {
        name,
        username,
        email,
        password,
      });


      navigate("/");
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        api: err.response?.data?.message || "Signup Failed",
      }));
    }
  };

  return (
    <div className="flex justify-center">
      <div className="card bg-base-300 w-96 my-20">
        <div className="card-body">
          <h2 className="card-title justify-center font-bold">Signup</h2>

          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            value={name}
            className={`input input-bordered w-full my-2 ${
              errors.name ? "input-error" : ""
            }`}
            onChange={(e) => handlechange("name",e.target.value,setname)}
            onBlur={()=>validate("name",name)}
          />
          {errors.name && <p className="text-error text-sm">{errors.name}</p>}

          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            className={`input input-bordered w-full my-2 ${
              errors.username ? "input-error" : ""
            }`}
            onChange={(e) => handlechange("username",e.target.value,setusername)}
            onBlur={()=> validate("username",username)}
          />
          {errors.username && (
            <p className="text-error text-sm">{errors.username}</p>
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            className={`input input-bordered w-full my-2 ${
              errors.email ? "input-error" : ""
            }`}
            onChange={(e) => handlechange("email",e.target.value,setemail)}
            onBlur={()=> validate("email",email)}
          />
          {errors.email && (
            <p className="text-error text-sm">{errors.email}</p>
          )}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            className={`input input-bordered w-full my-2 ${
              errors.password ? "input-error" : ""
            }`}
            onChange={(e) => handlechange("password",e.target.value,setpassword)}
            onBlur={()=>validate("password",password)}
          />
          {errors.password && (
            <p className="text-error text-sm">{errors.password}</p>
          )}

          {/* API Error */}
          {errors.api && (
            <p className="text-error text-center">{errors.api}</p>
          )}

          <div className="card-actions justify-center">
            <button
              className="btn bg-blue-500 w-20"
              onClick={handleSignup}
            >
              Signup
            </button>
          </div>

          <p className="text-center mt-3 text-sm">
            Already have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;