<template>
  <div>
    <header>
      <i class="fa fa-bars"></i>
      <label class="text-2xl">List You Trip</label>
      <div class="search flex flex-row bg-blue-300 w-full">
        <input
          id="search"
          name="search"
          type="search"
          autocomplete="search"
          class="block border-solid border-2 border-neutral-400 w-auto p-2 ps-3 text-sm text-camelcoat rounded-full"
        />
        <button>ff</button>
      </div>
    </header>
    <div
      class="trip items-center box-content p-5 mt-[30px] border-solid border-2 border-neutral-400 rounded-[30px] drop-shadow-lg"
    >
      <div>
        <label class="name">Book Name Der</label>
      </div>
      <div>
        <label class="price text-orange-600">$ 1233333</label>
      </div>
      <div>
        <i class="fa fa-calendar"></i>
        <label class="date text-gray-400">10-01-1010 - 10-08-1010</label>
      </div>
    </div>
  </div>
</template>
