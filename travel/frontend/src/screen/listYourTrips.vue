<template>
  <div>
      <i class="fa fa-bars"></i>
      <label class="text-2xl">List You Trip</label>
      
    <div>
      <label>name trip</label>
      <input id="name"
          name="name"
          type="name"
          autocomplete="name"
          class="block border-solid border-2 border-neutral-400 w-full p-2 ps-3 text-sm text-camelcoat rounded-full"/>
    </div>
    
    <label>ค้นหาจังหวัด หรือ ชื่อสถานที่</label>
    <div class="search flex flex-row bg-blue-300 w-full">
        <input
          id="search"
          name="search"
          type="search"
          autocomplete="search"
          class="block border-solid border-2 border-neutral-400 w-[250px] p-2 ps-3 text-sm text-camelcoat rounded-full"
        />
        <button>search</button>
      </div>
      <label>เลือกสถานที่ที่ต้องการ</label>
    <div
      class="trip items-center box-content p-5 mt-[30px] border-solid border-2 border-neutral-400 rounded-[30px] drop-shadow-lg"
    >
      <input type="checkbox" class="form-checkbox h-5 w-5 mr-3" />
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

    <button>สร้างทริปเด้อ</button>

    <label class="flex items-center">
      <input type="checkbox" class="form-checkbox h-5 w-5 mr-3" />
      <span class="text-xl">rrrrrrrr</span>
    </label>
  </div>
</template>
