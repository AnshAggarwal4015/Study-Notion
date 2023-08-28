import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../../services/operations/authAPI"
import { useDispatch } from "react-redux"

const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }
  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col w-full gap-y-9 mt-9">
      <label className="w-full">
        <div className="text-sm	text-richblack-5 mb-1">
          Email Address <sup className="text-pink-200">*</sup>
        </div>
        <input
          required
          type="text"
          name="email"
          value={email}
          placeholder="Enter Email Address"
          onChange={handleOnChange}
          className="bg-richblack-800 shadow-custom rounded-lg self-stretch items-center text-richblack-5 gap-3 p-3 w-full"
        />
      </label>
      <label className="w-full relative">
        <div className="text-sm	text-richblack-5 mb-1">
          Password <sup className="text-pink-200">*</sup>
        </div>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          placeholder="Enter Password"
          onChange={handleOnChange}
          className="bg-richblack-800 shadow-custom rounded-lg self-stretch items-center text-richblack-5 gap-3 p-3 w-full"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[38px] z-[10] cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link to="/forgot-password">
          <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
            Forgot Password
          </p>
        </Link>
      </label>
      <button
      type="submit"
      className="font-medium mt-9 gap-2 p-3 bg-yellow-50 rounded-lg text-richblack-900 shadow-customAuthButtonShadow justify-center items-center self-stretch">
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
