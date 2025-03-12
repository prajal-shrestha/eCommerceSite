import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas/SignupSchema";

const onSubmit = async (values, actions) => {
  // api call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(values);
  actions.resetForm();
};
const SignUp = ({ onSwitchToLogin }) => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      dob: "",
      gender: "",
    },
    validationSchema: signUpSchema,
    onSubmit,
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="max-w-md mx-auto"
      >
        <div className="mt-2 grid md:grid-cols-2 md:gap-6">
          {/* firstName */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="firstName"
              id="floating_first_name"
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
                errors.firstName && touched.firstName
                  ? "border-red-500 dark:border-red-500" // Error state
                  : "border-gray-300 dark:border-gray-600" // Normal state
              } appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              placeholder=" "
              value={values.firstName}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>

          {/* lastName */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="lastName"
              id="floating_last_name"
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
                errors.lastName && touched.lastName
                  ? "border-red-500 dark:border-red-500" // Error state
                  : "border-gray-300 dark:border-gray-600" // Normal state
              } appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              placeholder=" "
              value={values.lastName}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>

        {/* email */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
              errors.email && touched.email
                ? "border-red-500 dark:border-red-500" // Error state
                : "border-gray-300 dark:border-gray-600" // Normal state
            } appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            placeholder=" "
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        {errors.email && touched.email && (
          <div className="text-red-500 dark:text-red-500 mt-1 text-sm">
            {errors.email}
          </div>
        )}
        {/* password */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="floating_password"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
              errors.password && touched.password
                ? "border-red-500 dark:border-red-500" // Error state
                : "border-gray-300 dark:border-gray-600" // Normal state
            } appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            placeholder=" "
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        {errors.password && touched.password && (
          <div className="text-red-500 dark:text-red-500 mt-1 text-sm">
            {errors.password}
          </div>
        )}

        {/* confirmPassword */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="confirmPassword"
            id="floating_repeat_password"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
              errors.confirmPassword && touched.confirmPassword
                ? "border-red-500 dark:border-red-500" // Error state
                : "border-gray-300 dark:border-gray-600" // Normal state
            } appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            placeholder=" "
            value={values.confirmPassword}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm password
          </label>
        </div>
        {errors.confirmPassword && touched.confirmPassword && (
          <div className="text-red-500 dark:text-red-500 mt-1 text-sm">
            {errors.confirmPassword}
          </div>
        )}

        {/* gender */}
        <div className="flex py-2.5">
          <div className="flex items-center me-4">
            <input
              type="radio"
              id="inline-radio"
              name="gender"
              value="male"
              checked={values.gender === "male"}
              onChange={handleChange}
            />
            <label
              htmlFor="inline-radio"
              className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400"
            >
              Male
            </label>
          </div>
          <div className="flex items-center me-4">
            <input
              type="radio"
              id="inline-2-radio"
              name="gender"
              value="female"
              checked={values.gender === "female"}
              onChange={handleChange}
            />
            <label
              htmlFor="inline-2-radio"
              className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400"
            >
              Female
            </label>
          </div>
          <div className="flex items-center me-4">
            <input
              type="radio"
              id="inline-3-radio"
              name="gender"
              value="other"
              checked={values.gender === "other"}
              onChange={handleChange}
            />
            <label
              htmlFor="inline-3-radio"
              className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400"
            >
              Other
            </label>
          </div>
        </div>
        {errors.gender && touched.gender && (
          <div className="text-red-500 dark:text-red-500 mt-1 text-sm">
            {errors.gender}
          </div>
        )}

        {/* date of birth */}
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="dob"
            className="text-sm font-medium text-gray-500 dark:text-gray-400"
          >
            Date of Birth:
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            className="p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            value={values.dob}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.dob && touched.dob && (
          <div className="text-red-500 dark:text-red-500 mt-1 text-sm">
            {errors.dob}
          </div>
        )}

        {/* submit-button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="p-2 mt-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Submit
          </button>
        </div>
        <p className="mt-2.5 text-md font-light text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <a
            onClick={onSwitchToLogin}
            className="font-medium text-blue-700 hover:underline dark:text-blue-700"
          >
            Log In
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
