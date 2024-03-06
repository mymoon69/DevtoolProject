<template>
  <div class="flex flex-col min-h-screen bg-[#3A4646]">
    <div class="flex flex-1 items-center justify-center">
      <div class="">
        <form class="text-center">
          <h1 class="text-[39px] text-[#E5E6E1] uppercase">Register</h1>
          <p class="text-[#E5E6E1] text-[14px] mb-8">
            Plan your tour and forget, we will remind you in advance!
          </p>
          <div class="py-2 text-left">
            <input
              type="text"
              class="border-2 border-gray-100 focus:outline-none bg-none block w-full py-2 px-4 rounded-lg focus:border-gray-700"
              placeholder="Username"
            />
          </div>
          <div class="py-2 text-left">
            <input
              type="password"
              class="border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700"
              placeholder="Password"
            />
          </div>
          <div class="py-2 text-left">
            <input
              type="password"
              class="border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700"
              placeholder="Confirm Password"
            />
          </div>
          <div class="py-10">
            <button
              type="submit"
              class="bg-[#C1CB9C] text-[#3A4646] tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-[#C2D189]"
            >
              Get started
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
