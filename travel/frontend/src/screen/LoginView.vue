<template>
  <div class="flex flex-col min-h-screen bg-[#3A4646]">
    <div class="flex flex-1 items-center justify-center">
      <div class="">
        <div class="text-center">
          <h1 class="text-[39px] text-[#E5E6E1] uppercase">Login</h1>
          <p class="text-[#E5E6E1] text-[14px] mb-8">
            Plan your tour and forget, we will remind you in advance!
          </p>
          <div class="py-2 text-left">
            <input
              type="text"
              class="border-2 border-gray-100 focus:outline-none bg-none block w-full py-2 px-4 rounded-lg focus:border-gray-700"
              placeholder="Email"
              v-model="email"
            />

          </div>
          <div class="py-2 text-left">
            <input
              type="password"
              class="border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700"
              placeholder="Password"
              v-model="password"

            />
          </div>
          <div class="py-10">
            <button
              type="submit"
              class="bg-[#C1CB9C] text-[#3A4646] tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-[#C2D189]"
              @click="login"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';


    export default {
  data() {
    return {
       email : "",
       password : "",
       responseData : []
    };
  },


  methods: {



    login(){

        const data ={
            email : this.email,
            password : this.password
        }

        axios.post('http://localhost:4000/login', data)
        .then(response => {
          this.responseData = response.data;

          const token = this.responseData.email;
          localStorage.setItem('token', token);
          this.$swal({
                title: 'Login Success',
                icon: 'success'
            });

          console.log(this.responseData)
           this.$router.push("/");


        })
        .catch(error => {
          console.error('Error fetching data:', error);
          this.$swal({
                title: 'Login Failed',
                text: 'Invalid email or password',
                icon: 'error'
            });
        });
    },
  }
};
</script>

<style></style>
