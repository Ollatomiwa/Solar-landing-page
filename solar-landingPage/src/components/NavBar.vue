<script setup>

</script>

<template>

<nav class="navbar navbar-expand-lg ">
  <div class="container-fluid w-100">
    <a class="navbar-brand fw-bolder text-white " href="#">Solar Energy Power</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
        aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center my-8 mx-8  "id="navbarNavDropdown">
      <ul class="nav ">
        <li class="nav-item ">
          <router-link class="nav-link active text-light" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-light" to="/about">About</RouterLink>
        </li>
        <li class="nav-item ">
          <router-link class="nav-link text-light" to="/service">Service</router-link>
        </li>
      
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" 
          aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu ">
            <li><RouterLink class="dropdown-item" to="/contact">Contact Us</RouterLink></li>
            <li><RouterLink class="dropdown-item" to="/registration">Registration</RouterLink></li>
          </ul>
        </li>

        
    
      </ul>
    </div>
  </div>
</nav>
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