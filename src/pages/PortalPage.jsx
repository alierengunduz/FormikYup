import React from "react";
import { useFormik } from "formik";
import { userSchema } from "../schemas/PortalYup";

const PortalPage = () => {
  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      date: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema: userSchema,
    onSubmit,
  });

  return (
    <div className="w-full h-full bg-gray-700 text-white flex flex-col items-center  lg:p-10 sm:p-5 p-1 justify-start">
      <div className="border-2 lg:w-[70%]  w-full h-full md:p-5 p-2 flex flex-col items-center">
        <h2 className="font-bold text-2xl  border-4 py-1 px-4 rounded-xl mb-3">
          Formik Yup
        </h2>
        <form
          onSubmit={formik.handleSubmit}
          className="lg:w-[60%] w-full h-full flex flex-col  gap-y-5 p-2"
        >
          {/* components username */}
          <div className="flex flex-col items-start gap-y-2 mx-auto w-full">
            <label className="w-[40%]" htmlFor="userName">
              UserName:{" "}
            </label>
            <input
              value={formik.values.userName}
              onChange={formik.handleChange}
              className={`border-4 focus:outline-none text-gray-700  h-11 focus-within:border-gray-600  rounded-xl pl-2 w-full ${
                formik.touched.userName && formik.errors.userName
                  ? "border-red-500"
                  : ""
              }`}
              type="text"
              placeholder="Username"
              id="userName"
            />
            {formik.touched.userName && formik.errors.userName && (
              <p className="text-red-500">{formik.errors.userName}</p>
            )}
          </div>

          {/* components email */}
          <div className="flex flex-col items-start gap-y-2 mx-auto w-full">
            <label className="w-[40%]" htmlFor="email">
              Email:{" "}
            </label>
            <input
              value={formik.values.email}
              onChange={formik.handleChange}
              className={`border-4 focus:outline-none text-gray-700  h-11 focus-within:border-gray-600  rounded-xl pl-2 w-full ${
                formik.touched.userName && formik.errors.userName
                  ? "border-red-500"
                  : ""
              }`}
              type="email"
              placeholder="Email"
              id="email"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500">{formik.errors.email}</p>
            )}
          </div>

          {/* components birthday */}
          <div className="flex flex-col items-start gap-y-2 mx-auto w-full">
            <label className="w-[40%]" htmlFor="date">
              Date:{" "}
            </label>
            <input
              value={formik.values.date}
              onChange={formik.handleChange}
              className={`border-4 focus:outline-none text-gray-700  h-11 focus-within:border-gray-600  rounded-xl pl-2 w-full ${
                formik.touched.userName && formik.errors.userName
                  ? "border-red-500"
                  : ""
              }`}
              type="date"
              placeholder="date"
              id="date"
            />
            {formik.touched.date && formik.errors.date && (
              <p className="text-red-500">{formik.errors.date}</p>
            )}
          </div>

          {/* components password */}
          <div className="flex flex-col items-start gap-y-2 mx-auto w-full">
            <label className="w-[40%]" htmlFor="password">
              Password:{" "}
            </label>
            <input
              value={formik.values.password}
              onChange={formik.handleChange}
              className={`border-4 focus:outline-none text-gray-700  h-11 focus-within:border-gray-600  rounded-xl pl-2 w-full ${
                formik.touched.userName && formik.errors.userName
                  ? "border-red-500"
                  : ""
              }`}
              type="password"
              placeholder="Password"
              id="password"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500">{formik.errors.password}</p>
            )}
          </div>

          {/* components re-password */}
          <div className="flex flex-col items-start gap-y-2 mx-auto w-full">
            <label className="w-[40%]" htmlFor="confirmPassword">
              ConfirmPassword:{" "}
            </label>
            <input
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              className={`border-4 focus:outline-none text-gray-700  h-11 focus-within:border-gray-600  rounded-xl pl-2 w-full ${
                formik.touched.userName && formik.errors.userName
                  ? "border-red-500"
                  : ""
              }`}
              type="password"
              placeholder="ConfirmPassword"
              id="confirmPassword"
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className="text-red-500">{formik.errors.confirmPassword}</p>
              )}
          </div>

          {/* components checkbox */}
          <div className="flex flex-col items-start gap-y-2 mx-auto w-full">
            <div className="flex items-center gap-x-2 text-sm">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                value={formik.values.terms}
                className="h-5 w-5"
                onChange={formik.handleChange}
              />
              <label htmlFor="terms">I accept the terms and conditions</label>
            </div>
            <div>
              {formik.touched.terms && formik.errors.terms && (
                <p className="text-red-500">{formik.errors.terms}</p>
              )}
            </div>
          </div>

          <button className="bg-purple-500 py-2 rounded-2xl" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PortalPage;
