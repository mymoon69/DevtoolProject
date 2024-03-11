 <template>
  <div>
    <header>
      <i class="fa fa-bars"></i>
      <label class="text-2xl">List Your Trip</label>
    </header>

    <!-- Name -->
    <div class="mx-5 my-5">
      <label class="text-2xl">{{ nameplace }}</label>
      

      <div
        v-for="result in places"
        :key="result.id"
        class="flex rounded-lg shadow-lg p-5 items-center"
      >
        <div class="w-1/3">
          <img
            class="loginImg w-[100px] h-[120px] bg-cover rounded-lg"
            :src="result.img"
            alt="coverBook"
          />
        </div>

        <div class="w-2/3 p-4 md:p-4">
          <h1 class="text-l font-bold text-gray-800">{{ result.name }}</h1>

          <p class="mt-2 text-xs text-gray-600">{{ result.province }}</p>

          <div class="flex justify-between mt-3 item-center">
            <h1 class="text-lg font-bold text-gray-700 md:text-xl">
              {{ result.price }}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      places: [],
      nameplace: "",
    };
  },
  created() {
      this.fetchplace();
  },
  methods: {
    async fetchplace() {
        console.log("place")
        console.log("plance3", this.places)
      try { 
        const response =  await axios.get('http://localhost:4000/place/KMS1g85dyGjM86BESvsU');
        this.places = response.data.selectedTrips
        this.nameplace = response.data.nameTrip
        
        console.log("plance3", response.data.selectedTrips)
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    }
  },
};
</script>
