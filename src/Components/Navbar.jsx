import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { useState, useEffect } from "react";
import Profile from "../pages/Profile";

const Navbar = () => {
  const [user, setuser] = useState(null);

  //fetch profile
  const fetchProfile = async () => {
    try {
      const res = await axios.get("/users/profile/view");
      setuser(res.data);
      console.log(res);
    } catch (err) {
      console.log("Profile error:", err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const navigate = useNavigate();
  const handlelogout = async () => {
    try {
      await axios.post("/logout");
      navigate("/signup");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="navbar bg-base-300 shadow-sm flex-1">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">TripTrail</a>
      </div>
      <div className="flex gap-2">
        {user && <p className="font-semibold">welcome,{user.username}</p>}
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <button onClick={() => navigate("/profile")}>Profile</button>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button onClick={handlelogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
