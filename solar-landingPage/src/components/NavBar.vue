<script setup>

</script>

<template>

<nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Solar Energy Powerr</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
        aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center my-8 mx-8 link-offset-2-hover"id="navbarNavDropdown">
      <ul class="nav ">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </li>
        <li class="nav-item ">
          <router-link class="nav-link" to="/service">Service</router-link>
        </li>
        <div class="justify-content-end">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" 
          aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu ">
            <li><RouterLink class="dropdown-item" to="/contact">Contact Us</RouterLink></li>
            <li><RouterLink class="dropdown-item" to="/registration">Registration</RouterLink></li>
          </ul>
        </li>

        </div>
    
      </ul>
    </div>
  </div>
</nav>
</template>