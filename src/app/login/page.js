"use client";
import { useForm } from "react-hook-form";

export default function login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <main className="flex min-h-screen flex-display justify-center items-center p-24">
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label for="username" className="block mb-2 text-sm font-medium">
            User Name
          </label>
          <input
            type="text"
            id="username"
            {...register("username", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="User Name"
          />
          {errors.username?.type === "required" && (
            <p role="alert" className="block mb-2 text-sm font-medium text-red-500">
              Username is required
            </p>
          )}
        </div>

        <div className="mb-5">
          <label for="Password" className="block mb-2 text-sm font-medium ">
            Password
          </label>
          <input
            type="password"
            id="Password"
            {...register("password", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p role="alert" className="block mb-2 text-sm font-medium text-red-500">Password is required</p>
          )}
        </div>

        <button
          type="submit"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 "
        >
          Submit
        </button>
      </form>
    </main>
  );
}
