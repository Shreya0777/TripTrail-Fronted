import { useState } from "react";
import axios from "axios";
const login = () => {
  const [EmailId, setemailId] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:7777/login", {
        EmailId,
        password,
      } ,{withCredentials: true});
    } catch (err) {
      console.log(err.message);
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
                value={EmailId}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setemailId(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                value={password}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setpassword(e.target.value)}
              />
            </label>
          </div>
          <div className="card-actions justify-center ">
            <button className="btn bg-blue-500 w-20" onClick={handleLogin}>
              Login{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
