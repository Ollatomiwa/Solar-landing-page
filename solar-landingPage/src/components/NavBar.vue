<script setup>

</script>

<template>
<header class="py-4 border-6">
  <nav class="navbar w-full block max-w-screen-xl px-4 py-2 mx-auto bg-white bg-opacity-90  top-3 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999] navbar-expand-lg sticky-top bg-black ">
    <div class="container-fluid w-100">
      <a class="navbar-brand fw-bolder text-black " href="#">SOLAR ENERGY POWER</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
          data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
          aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end my-8 mx-8 "id="navbarNavDropdown">
        <ul class="nav ">
          <li class="nav-item ">
            <router-link class="nav-link active font-bold " aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link " to="/about">About</RouterLink>
          </li>
          <li class="nav-item ">
            <router-link class="nav-link " to="/contact">Contact Us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
</header>
</template>
<style scoped>

.container-fluid {
  padding-left: 0;
  padding-right: 0;
}

.nav-link:hover{
  content: '';
  transition:  all .3s ease;
  bottom: 0;
  left: 0;
  
  border-bottom: 1px solid #93f117;
 
}

</style>