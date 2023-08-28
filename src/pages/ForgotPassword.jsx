import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { getPasswordResetToken } from "../services/operations/authAPI";

const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSent));
  };

  return (
    <div className="grid min-h-[calc(100vh-4rem)] place-items-center text-richblack-5">
      {loading ? (
        
        <div className="custom-loader"> </div>
      ) : (
        <div className="max-w-[31.75rem] p-4 lg:p-8">
          <div className="text-3xl font-semibold">
            {emailSent ? (
              <div>Check email</div>
            ) : (
              <div>Reset your password</div>
            )}
          </div>
          <div className="text-richblack-100 leading-[1.625rem] text-lg my-4">
            {emailSent ? (
              <div>{`We have sent the reset email to
                   ${email} `}</div>
            ) : (
              <div>
                Have no fear. We’ll email you instructions to reset your
                password. If you dont have access to your email we can try
                account recovery
              </div>
            )}
          </div>
          <form onSubmit={handleOnSubmit}>
            {!emailSent && (
              <div>
                <label>
                  <div className="mb-1">
                    Email Address <sup className="text-pink-200">*</sup>
                  </div>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  className="form-style bg-richblack-800 text-richblack-200 rounded-lg shadow-custom p-3 w-full mb-9"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email Address"
                />
              </div>
            )}
            <button
              type="submit"
              className="text-richblack-900 bg-yellow-50 py-3 font-medium w-full shadow-custom rounded-lg"
            >
              {emailSent ? "Resend Email" : "Submit"}
            </button>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <Link to="/login">
              <div className="flex items-center gap-x-2 text-richblack-5">
                <BiArrowBack /> Back To Login
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
