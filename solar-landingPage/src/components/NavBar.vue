<script setup>

</script>

<template>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Green Power</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
        aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center my-8 mx-8" id="navbarNavDropdown">
      <ul class="nav ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Benefits</a>
        </li>
        <div class="justify-content-end">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" 
          aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu ">
            <li><a class="dropdown-item" href="#">Contact Us</a></li>
            <li><a class="dropdown-item" href="#">Registration</a></li>
          </ul>
        </li>

        </div>
    
      </ul>
    </div>
  </div>
</nav>
</template>