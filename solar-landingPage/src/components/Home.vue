<script setup>
import { ref } from "vue";

import photo from "../assets/img/manworking.jpg";
import Service from "./Service.vue";

const windmill = ref(photo);
</script>

<template>
  <section class="bg-white">
    <div class="container flex flex-col lg:flex-row items-center py-20 gap-10">
      <div class="text-center">
        <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
          Creating a sustainable future with renewable energy solutions!
        </h1>
        <p class="text-xl lg:text-2xl mb-8 text-balance">
          Discover the many amazing ways Solar Energy Power can transform your
          Home or Business.
        </p>
        <RouterLink to="/contact" class="btn btn-primary btn-lg text-center"
          >GET A FREE QUOTE</RouterLink
        >
      </div>
    </div>

    <div class="row justify-content-center my-3">
      <div class="col-sm-6">
        <div class="card my-3 ">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <!-- Image Section -->
              <img
                :src="windmill"
                alt="Solar Windmill"
                class="bg-dark me-3"
                style="
                  width: 40%;
                  height: auto;
                  border-color: aqua;
                  object-fit: cover;
                  border-radius: 5%;
                "
              />
              <!-- Text Section -->
              <div>
                <h5 class="card-title text-center ">SOLAR ENERGY</h5>
                <p class="card-text text-center">
                 Verified and Quality Services Guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <hr>
  <section>
    <Service/>
  </section>
</template>

<style scoped>
.container {
  margin-top: 13%;
}
.text-subject {
  margin-top: 3%;
  margin-bottom: 4%;
}

.card {
  border-radius: 2%;
  border-style: groove;
}
</style>
