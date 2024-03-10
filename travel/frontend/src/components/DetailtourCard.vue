<template>
  <div class="bg-[#3A4646] flex flex-row p-2 rounded-lg">
    <div class="basis-1/2">
      <img
        class="w-full rounded-lg"
        src="https://a.cdn-hotels.com/gdcs/production74/d462/9fe21145-585c-4e7f-9373-24ed559ec010.jpg"
      />
    </div>
    <div class="basis-1/2 justify-center pl-3">
      <div>
        <h4 class="justify-center text-white">{{ startdate }} - {{ enddate }}</h4>
        <h4 class="justify-center text-white">{{ location }}</h4>
      </div>
      <div>
        <i class="fa-solid fa-location-dot text-white"></i>
        <label class="date text-white pl-2">{{ country }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
      startdate: {
        type: String,
        default: ""
      },
      enddate: {
        type: String,
        default: ""
      },
      location: {
        type: String,
        default: ""
      },
      country: {
        type: String,
        default: ""
      }
    }
  };
</script>
