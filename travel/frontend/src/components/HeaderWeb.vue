<template>
  <header class="bg-gray-800 text-white py-5 px-5">
    <div class="container mx-auto flex justify-between items-center">
      <img src="../assets/Group 1.svg" alt="">
      <h1 class="text-2xl font-semibold text-gray-500">Search</h1>
      <nav>
        <ul class="flex space-x-4" v-if="user == ''">

          <router-link to="login"><button class="hover:bg-slate-400 p-2 rounded-full">Login</button> </router-link>
        </ul>
        <ul class="flex space-x-4" v-else>

          <router-link to="">   <img class="object-cover w-14 h-14 rounded-full" src="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5K33rPih0ekXpdjTYJZMA1xjXzItlZVde9muslF5HbRKeGtfS5w.jpg" alt=""> </router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>


<script>

export default {
  data() {
    return {
      user: "Folk"
    };
  },


   created() {
     this.user = localStorage.getItem('token')
   }

};
</script>
