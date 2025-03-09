import { useFormik } from "formik";
import React from "react";
import { logInSchema } from "./schemas/LoginSchema";

const onSubmit = async (values, actions) => {
  // api call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(values);
  actions.resetForm();
};
const LogIn = ({ onSwitchToSignup }) => {
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
      email: "",
      password: "",
    },
    validationSchema: logInSchema,
    onSubmit,
  });
  return (
    <>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="max-w-md mx-auto"
      >
        {/* email */}
        <div className="mt-2 relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="login_floating_email"
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
            htmlFor="login_floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        {errors.email && touched.email && (
          <div className="text-red-500 text-sm">{errors.email}</div>
        )}
        {/* password */}
        <div className="mt-2 relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="login_floating_password"
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
            htmlFor="login_floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        {errors.password && touched.password && (
          <div className="text-red-500 text-sm">{errors.password}</div>
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
          Don’t have an account yet?{" "}
          <a
            onClick={onSwitchToSignup}
            className="font-medium text-blue-700 hover:underline dark:text-blue-700"
          >
            Sign up
          </a>
        </p>
      </form>
    </>
  );
};

export default LogIn;
