<script setup>
import HeaderWeb from '../components/HeaderWeb.vue'


</script>

<template>
     <HeaderWeb />
  
    <div class="relative flex justify-center p-5">
        <input type="text" placeholder="Search..."
            class="w-full border rounded-md pl-10 pr-4 py-4 focus:outline-none focus:border-blue-500">
        <div class="absolute inset-y-0 left-0 ml-[25px] pl-3 flex items-center">
            <svg class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-6a8 8 0 11-16 0 8 8 0 0116 0z" />
            </svg>
        </div>
    </div>
    <div class="relative">
        <div class="m-5">
            <h1 class="text-3xl font-semibold text-gray-400">Category</h1>
        </div>
        <div class="overflow-x-auto">
            <div class="flex  gap-10 p-5">
                <div v-for="(item, index) in items" :key="index" class="flex flex-col items-center">
                    <img class="rounded-full bg-lime-500 w-24 h-24" :src="item.imageUrl" alt="">
                    <div class=" w-24 h-10 flex items-center justify-center">
                        <h1>{{ item.name }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="relative">
  
            <h1 class="text-3xl font-semibold text-gray-400 m-5">Recommend</h1>
            <div class="flex flex-wrap justify-center   m-5">
                <div class="w-full  rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="https://lh5.googleusercontent.com/C4h2qu1XS3gOPemUOgMeMklYiY-qEM5XbuSRX3xdB2Q8bzd6f1Klo98jyNiK1xi2JqPriCPAccFD8IQA7Xu7geofusYyrs9o0AK0YniqPIaJmWtDGXuN1Yup4NJ1L-Ut5AR_Fxh_AkdddlCVo3fPmgANuqonqz3P14VBFCCuidrROALn8tvZvfTDZ3UsGT6L8cAJoOhrCQ" >
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Folk</div>
                        <p class="text-gray-700 text-base">Fast</p>
                    </div>
                    <div class="px-6 py-4">
                        <span
                            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">sea
                           </span>
                    </div>
                </div>
                <div class="w-full rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="https://lh5.googleusercontent.com/C4h2qu1XS3gOPemUOgMeMklYiY-qEM5XbuSRX3xdB2Q8bzd6f1Klo98jyNiK1xi2JqPriCPAccFD8IQA7Xu7geofusYyrs9o0AK0YniqPIaJmWtDGXuN1Yup4NJ1L-Ut5AR_Fxh_AkdddlCVo3fPmgANuqonqz3P14VBFCCuidrROALn8tvZvfTDZ3UsGT6L8cAJoOhrCQ" >
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Folk</div>
                        <p class="text-gray-700 text-base">Fast</p>
                    </div>
                    <div class="px-6 py-4">
                        <span
                            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">sea
                           </span>
                    </div>
                </div>
                <div class="w-full rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="https://lh5.googleusercontent.com/C4h2qu1XS3gOPemUOgMeMklYiY-qEM5XbuSRX3xdB2Q8bzd6f1Klo98jyNiK1xi2JqPriCPAccFD8IQA7Xu7geofusYyrs9o0AK0YniqPIaJmWtDGXuN1Yup4NJ1L-Ut5AR_Fxh_AkdddlCVo3fPmgANuqonqz3P14VBFCCuidrROALn8tvZvfTDZ3UsGT6L8cAJoOhrCQ" >
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Folk</div>
                        <p class="text-gray-700 text-base">Fast</p>
                    </div>
                    <div class="px-6 py-4">
                        <span
                            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">sea
                           </span>
                    </div>
                </div>
               
                <div class="w-full rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="https://lh5.googleusercontent.com/C4h2qu1XS3gOPemUOgMeMklYiY-qEM5XbuSRX3xdB2Q8bzd6f1Klo98jyNiK1xi2JqPriCPAccFD8IQA7Xu7geofusYyrs9o0AK0YniqPIaJmWtDGXuN1Yup4NJ1L-Ut5AR_Fxh_AkdddlCVo3fPmgANuqonqz3P14VBFCCuidrROALn8tvZvfTDZ3UsGT6L8cAJoOhrCQ" >
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Folk</div>
                        <p class="text-gray-700 text-base">Fast</p>
                    </div>
                    <div class="px-6 py-4">
                        <span
                            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">sea
                           </span>
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
                { imageUrl: "https://www.photoschoolthailand.com/wp-content/uploads/2020/02/Beach-photography_2.jpg", name: "box1" },
                { imageUrl: "https://www.photoschoolthailand.com/wp-content/uploads/2020/02/Beach-photography_2.jpg", name: "box2" },
                { imageUrl: "https://www.photoschoolthailand.com/wp-content/uploads/2020/02/Beach-photography_2.jpg", name: "box3" },
                { imageUrl: "https://www.photoschoolthailand.com/wp-content/uploads/2020/02/Beach-photography_2.jpg", name: "box4" },
                { imageUrl: "https://www.photoschoolthailand.com/wp-content/uploads/2020/02/Beach-photography_2.jpg", name: "box5" },
                { imageUrl: "https://www.photoschoolthailand.com/wp-content/uploads/2020/02/Beach-photography_2.jpg", name: "box6" },
                { imageUrl: "https://www.photoschoolthailand.com/wp-content/uploads/2020/02/Beach-photography_2.jpg", name: "box7" },
                { imageUrl: "https://www.photoschoolthailand.com/wp-content/uploads/2020/02/Beach-photography_2.jpg", name: "box8" }
            ]
        };
    }
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