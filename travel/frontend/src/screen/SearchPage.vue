<script setup>
// import HeaderWeb from '../components/HeaderWeb.vue'
import HeaderWeb from "../components/HeaderWeb.vue";
</script>

<template>
  <div>
    <HeaderWeb />
    <div class="relative flex justify-center p-5">
      <input
        type="text"
        placeholder="Search"
        class="w-full border-[#DFDFDF] rounded-md pl-10 pr-4 py-4 focus:border-blue-500"
      />
      <div class="absolute inset-y-0 left-0 ml-[25px] pl-3 flex items-center">
        <i class="fa-solid fa-magnifying-glass" style="color: #6f7789"></i>
      </div>
    </div>

    <div class="relative">
      <div class="mx-5">
        <h1 class="text-[26px] font-bold text-[#121212]">Category</h1>
      </div>
      <div class="overflow-x-auto">
        <div class="flex gap-2 p-5">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="flex flex-col items-center"
          >
            <img
              class="rounded-full w-[80px] h-[80px]"
              :src="item.imageUrl"
              alt=""
            />
            <div class="w-24 h-10 flex items-center justify-center">
              <h1>{{ item.name }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative">
      <h1 class="text-[26px] font-bold text-black mx-5">Recommend</h1>
      <div class="flex flex-wrap justify-center m-5 grid grid-cols-2 gap-4">
        <div v-for="(item, index) in items2" :key="index">
          <div
            class="w-[195px] h-[195px] rounded-[13px] overflow-hidden shadow-lg"
          >
            <div class="flex items-center justify-center">
              <img
                class="w-[180px] h-[119px] bg-cover rounded-[13px] flex items-center justify-center"
                src="https://lh5.googleusercontent.com/C4h2qu1XS3gOPemUOgMeMklYiY-qEM5XbuSRX3xdB2Q8bzd6f1Klo98jyNiK1xi2JqPriCPAccFD8IQA7Xu7geofusYyrs9o0AK0YniqPIaJmWtDGXuN1Yup4NJ1L-Ut5AR_Fxh_AkdddlCVo3fPmgANuqonqz3P14VBFCCuidrROALn8tvZvfTDZ3UsGT6L8cAJoOhrCQ"
              />
              
            </div>

            <div class="px-2 py-2">
              <div class="flex flex-row">
                <div class="font-bold text-[14px] mb-2 flex-initial">
                  Raja Ampat IsLand
                </div>
                <div class="flex flex-row flex-auto text-center">
                  <i
                    class="fa-solid fa-star flex-auto"
                    style="color: #ee684a"
                  ></i>
                  <p class="text-[12px] text-[#6F7789]">4.8</p>
                </div>
              </div>

              <div class="flex flex-row flex-auto">
                <i class="fa-solid fa-location-dot" style="color: #ee684a"></i>
                <p class="text-[#6F7789] text-[15px] mx-1 text-nowrap">
                  Raja Ampat, Papua Barat
                </p>
              </div>
            </div>
            <!-- 
          <div class="px-6 py-4">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >sea
            </span>
          </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          imageUrl:
            "https://www.photoschoolthailand.com/wp-content/uploads/2020/02/Beach-photography_2.jpg",
          name: "box1",
        },
        {
          imageUrl:
            "https://www.photoschoolthailand.com/wp-content/uploads/2020/02/Beach-photography_2.jpg",
          name: "box2",
        },
        {
          imageUrl:
            "https://www.photoschoolthailand.com/wp-content/uploads/2020/02/Beach-photography_2.jpg",
          name: "box3",
        },
        {
          imageUrl:
            "https://www.photoschoolthailand.com/wp-content/uploads/2020/02/Beach-photography_2.jpg",
          name: "box4",
        },
        {
          imageUrl:
            "https://www.photoschoolthailand.com/wp-content/uploads/2020/02/Beach-photography_2.jpg",
          name: "box5",
        },
        {
          imageUrl:
            "https://www.photoschoolthailand.com/wp-content/uploads/2020/02/Beach-photography_2.jpg",
          name: "box6",
        },
        {
          imageUrl:
            "https://www.photoschoolthailand.com/wp-content/uploads/2020/02/Beach-photography_2.jpg",
          name: "box7",
        },
        {
          imageUrl:
            "https://www.photoschoolthailand.com/wp-content/uploads/2020/02/Beach-photography_2.jpg",
          name: "box8",
        },
      ],
      items2: [
        {
          imageUrl:
            "https://lh5.googleusercontent.com/C4h2qu1XS3gOPemUOgMeMklYiY-qEM5XbuSRX3xdB2Q8bzd6f1Klo98jyNiK1xi2JqPriCPAccFD8IQA7Xu7geofusYyrs9o0AK0YniqPIaJmWtDGXuN1Yup4NJ1L-Ut5AR_Fxh_AkdddlCVo3fPmgANuqonqz3P14VBFCCuidrROALn8tvZvfTDZ3UsGT6L8cAJoOhrCQ",
          name: "Raja Ampat IsLand",
          star: "4.8",
          location: "Raja Ampat, Papua Barat",
        },
        {
          imageUrl:
            "https://lh5.googleusercontent.com/C4h2qu1XS3gOPemUOgMeMklYiY-qEM5XbuSRX3xdB2Q8bzd6f1Klo98jyNiK1xi2JqPriCPAccFD8IQA7Xu7geofusYyrs9o0AK0YniqPIaJmWtDGXuN1Yup4NJ1L-Ut5AR_Fxh_AkdddlCVo3fPmgANuqonqz3P14VBFCCuidrROALn8tvZvfTDZ3UsGT6L8cAJoOhrCQ",
          name: "Raja Ampat IsLand",
          star: "4.8",
          location: "Raja Ampat, Papua Barat",
        },
        {
          imageUrl:
            "https://lh5.googleusercontent.com/C4h2qu1XS3gOPemUOgMeMklYiY-qEM5XbuSRX3xdB2Q8bzd6f1Klo98jyNiK1xi2JqPriCPAccFD8IQA7Xu7geofusYyrs9o0AK0YniqPIaJmWtDGXuN1Yup4NJ1L-Ut5AR_Fxh_AkdddlCVo3fPmgANuqonqz3P14VBFCCuidrROALn8tvZvfTDZ3UsGT6L8cAJoOhrCQ",
          name: "Raja Ampat IsLand",
          star: "4.8",
          location: "Raja Ampat, Papua Barat",
        },
        {
          imageUrl:
            "https://lh5.googleusercontent.com/C4h2qu1XS3gOPemUOgMeMklYiY-qEM5XbuSRX3xdB2Q8bzd6f1Klo98jyNiK1xi2JqPriCPAccFD8IQA7Xu7geofusYyrs9o0AK0YniqPIaJmWtDGXuN1Yup4NJ1L-Ut5AR_Fxh_AkdddlCVo3fPmgANuqonqz3P14VBFCCuidrROALn8tvZvfTDZ3UsGT6L8cAJoOhrCQ",
          name: "Raja Ampat IsLand",
          star: "4.8",
          location: "Raja Ampat, Papua Barat",
        },
      ],
    };
  },
};
</script>

<style>
/* Hide scrollbar for all browsers */
::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
html {
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE and Edge */
}

/* Responsive adjustments for smaller screens */
@media (max-width: 414px) {
  .container {
    padding-left: 1rem; /* Adjust as needed */
    padding-right: 1rem; /* Adjust as needed */
  }
}
</style>
