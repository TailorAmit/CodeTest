"use client";

import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    try {
    } catch (error) {}
  };
  return (
    <main className="flex min-h-screen flex-display justify-center items-center p-24">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="grid gap-3 mb-6 md:grid-cols-3">
          <div>
            <label
              for="User_Name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              User Name
            </label>
            <input
              type="text"
              id="User_Name"
              {...register("username", { required: true })}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="User Name"
            />
            {errors.username?.type === "required" && (
              <p
                role="alert"
                className="block mb-2 text-sm font-medium text-red-500"
              >
                Username is required
              </p>
            )}
          </div>

          <div>
            <label
              for="First_Name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First Name
            </label>
            <input
              type="text"
              id="First_Name"
              {...register("firstname", { required: true })}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="First Name"
            />
            {errors.firstname?.type === "required" && (
              <p
                role="alert"
                className="block mb-2 text-sm font-medium text-red-500"
              >
                First Name is required
              </p>
            )}
          </div>

          <div>
            <label
              for="Last_Name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              id="Last_Name"
              {...register("lastname", { required: true })}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Last Name"
            />
            {errors.lastname?.type === "required" && (
              <p
                role="alert"
                className="block mb-2 text-sm font-medium text-red-500"
              >
                Last Name is required
              </p>
            )}
          </div>

          <div>
            <label
              for="Address"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address
            </label>
            <input
              type="text"
              id="Address"
              {...register("address1", { required: true })}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Address"
            />
            {errors.address1?.type === "required" && (
              <p
                role="alert"
                className="block mb-2 text-sm font-medium text-red-500"
              >
                Address is required
              </p>
            )}
          </div>

          <div>
            <label
              for="city"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              city
            </label>
            <input
              type="text"
              id="city"
              {...register("city", { required: true })}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="city"
            />
            {errors.city?.type === "required" && (
              <p
                role="alert"
                className="block mb-2 text-sm font-medium text-red-500"
              >
                City is required
              </p>
            )}
          </div>

          <div>
            <label
              for="country"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              {...register("country", { required: true })}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="country"
            />
            {errors.country?.type === "required" && (
              <p
                role="alert"
                className="block mb-2 text-sm font-medium text-red-500"
              >
                Country is required
              </p>
            )}
          </div>

          <div>
            <label
              for="currency"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Currency
            </label>
            <input
              type="text"
              id="currency"
              {...register("currency")}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="currency"
            />
          </div>

          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="email"
            />
            {errors.email?.type === "required" && (
              <p
                role="alert"
                className="block mb-2 text-sm font-medium text-red-500"
              >
                Email is required
              </p>
            )}
          </div>

          <div>
            <label
              for="postalCode"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              {...register("postalCode")}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="postalCode"
            />
          </div>

          <div class="mb-6">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
            />
          </div>

          <div>
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              title
            </label>
            <input
              type="text"
              id="title"
              {...register("title")}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="postalCode"
            />
          </div>

          <div>
            <label
              for="nationality"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nationality
            </label>
            <input
              type="text"
              id="nationality"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="nationality"
              {...register("nationality")}
            />
          </div>
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
