<template>
  <div class="bg-gray-700 min-h-screen flex justify-center items-center">
    <div class="w-72 bg-gray-600 rounded-lg p-8 flex flex-col">
      <h2
        class="text-gray-900 text-3xl text-center font-medium title-font mb-5"
      >
        Sign Up
      </h2>
      <form>
        <input
          type="text"
          id="full-name"
          name="full-name"
          placeholder="Username"
          class="mt-2 w-full bg-gray-500 rounded focus:ring-2 focus:ring-gray-700 text-base outline-none text-gray-700 py-1 px-3"
        />
        <input
          type="password"
          id="email"
          name="email"
          placeholder="Password"
          class="mt-2 w-full bg-gray-500 rounded focus:ring-2 focus:ring-gray-700 text-base outline-none text-gray-700 py-1 px-3"
        />
        <input
          type="password"
          id="email"
          name="email"
          placeholder="Confirm Password"
          class="mt-2 w-full bg-gray-500 rounded focus:ring-2 focus:ring-gray-700 text-base outline-none text-gray-700 py-1 px-3"
        />
        <input
          type="submit"
          id="email"
          name="email"
          value="Sign Up"
          class="cursor-pointer mt-2 w-full rounded text-base outline-none text-gray-100 bg-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </form>
      <p class="text-center text-xs text-purple-200 mt-3">
        Already registered? Sign in
        <router-link to="/login" class="text-purple-300">here.</router-link>
      </p>
    </div>
  </div>
</template>
