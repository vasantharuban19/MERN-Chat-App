import React, { useState } from "react";
import Checkbox from "./Checkbox.jsx";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup.js";

const Signup = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
    // console.log(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-yellow-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-white text-base label-text">UserName</span>
            </label>
            <input
              name="username"
              type="text"
              placeholder="Enter UserName"
              className="w-full input input-bordered  h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2 ">
              <span className="text-white text-base label-text">Email</span>
            </label>

            <input
              name="email"
              type="text"
              placeholder="Enter Email"
              className="w-full input input-bordered h-10"
              value={inputs.email}
              onChange={(e) => 
                setInputs({ ...inputs, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label">
              <span className="text-white text-base label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label">
              <span className="text-white text-base label-text">
                Confirm Password
              </span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <Checkbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />{" "}
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-yellow-500 mt-2 inline-block"
          >
            Already have an account?{" "}
          </Link>{" "}
          <div>
            {" "}
            <button
              className="btn btn-block btn-sm mt-2 border border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
            {/* <button
              className="btn btn-block btn-sm mt-2 border border-slate-700"
            >"Sign Up"
            </button> */}
          </div>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};

export default Signup;
