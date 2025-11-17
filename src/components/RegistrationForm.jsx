import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      whatsappNumber: "",
      collegeName: "",
      studies: "bachelor",
    },
  });

  const [status, setStatus] = useState(null);

  const onSubmit = async (values) => {
    setStatus(null);
    try {
      const res = await axios.post(
        "https://stay-and-slay-backend.vercel.app/api/formData",
        values
      );
      setStatus({
        type: "success",
        message:
          "Registration submitted. Thank you! You'll receive a WhatsApp message from our team shortly for payment",
      });
      reset();
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err?.response?.data?.message || err.message || "Submission failed",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Registration Form</h2>

      {status && (
        <div
          className={`mb-4 p-3 rounded ${
            status.type === "success"
              ? "bg-green-100 text-green-900"
              : "bg-red-100 text-red-900"
          }`}
        >
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text">Full name</span>
          </label>
          <input
            {...register("fullName", {
              required: "Full name is required",
              minLength: { value: 2, message: "Too short" },
            })}
            className={`input input-bordered w-full ${
              errors.fullName ? "input-error" : ""
            }`}
          />
          {errors.fullName && (
            <p className="text-sm text-red-600 mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email",
              },
            })}
            className={`input input-bordered w-full ${
              errors.email ? "input-error" : ""
            }`}
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="label">
              <span className="label-text">Phone number</span>
            </label>
            <input
              {...register("phoneNumber", {
                required: "Phone number is required",
                minLength: { value: 6, message: "Invalid phone" },
              })}
              className={`input input-bordered w-full ${
                errors.phoneNumber ? "input-error" : ""
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-sm text-red-600 mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div>
            <label className="label">
              <span className="label-text">WhatsApp number</span>
            </label>
            <input
              {...register("whatsappNumber", {
                required: "WhatsApp number is required",
                minLength: { value: 6, message: "Invalid phone" },
              })}
              className={`input input-bordered w-full ${
                errors.whatsappNumber ? "input-error" : ""
              }`}
            />
            {errors.whatsappNumber && (
              <p className="text-sm text-red-600 mt-1">
                {errors.whatsappNumber.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="label">
            <span className="label-text">College name</span>
          </label>
          <input
            {...register("collegeName", {
              required: "College name is required",
            })}
            className={`input input-bordered w-full ${
              errors.collegeName ? "input-error" : ""
            }`}
          />
          {errors.collegeName && (
            <p className="text-sm text-red-600 mt-1">
              {errors.collegeName.message}
            </p>
          )}
        </div>

        <div>
          <label className="label">
            <span className="label-text">Studies</span>
          </label>
          <select
            {...register("studies", { required: true })}
            className="select select-bordered w-full"
          >
            <option value="+2">+2</option>
            <option value="bachelor">Bachelor</option>
            <option value="master">Master</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              reset();
              setStatus(null);
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
