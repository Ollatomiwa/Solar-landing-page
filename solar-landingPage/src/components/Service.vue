<template>
    <!--BLOG-->
    <div class="container text-center ">
        <div class="row justify-content-md-center">
            <div class="col col-md-6 py-5  ">
                <h2 class="text-black">LATEST PRODUCTS</h2>
                
            </div>
        </div>
    </div>    
<div class="row">
    <div class="col-sm-6">
        <div class="card my-3">
            <div class="card-body">
                <img :src="windmill" alt="Solar Windmill" class="bg-dark">
                 <h5 class="card-title">Windmill</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <RouterLink to="#" class="btn btn-primary">Check sample</RouterLink>
            </div>
         </div>
    </div>
     <div class="col-sm-6">
        <div class="card my-3">
            <div class="card-body">
                <img :src="windmill" alt="Solar Windmill">
                <h5 class="card-title">Windmill Blade</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <RouterLink to="#" class="btn btn-primary">Check sample</RouterLink>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="card my-3">
            <div class="card-body">
                <img :src="inverter" alt="Solar Inverter">
                 <h5 class="card-title">Inverter</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <RouterLink to="#" class="btn btn-primary">Check sample</RouterLink>
            </div>
         </div>
    </div>
     <div class="col-sm-6">
        <div class="card my-3">
            <div class="card-body">
                <img :src="batterys" alt="Solar Battery">
                <h5 class="card-title">Battery 15KV</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <RouterLink to="/service/battery" class="btn btn-primary">Check sample</RouterLink>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="card my-3">
            <div class="card-body">
                <img :src="battery" alt="Solar Battery">
                 <h5 class="card-title">Battery 16KV</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <RouterLink to="/service/battery" class="btn btn-primary">Check sample</RouterLink>
            </div>
         </div>
    </div>
     <div class="col-sm-6">
        <div class="card my-3">
        <div class="card-body">
        <img :src="solar" alt="Solar Panel">
        <h5 class="card-title">Solar Panel</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <RouterLink to="#" class="btn btn-primary">Check sample</RouterLink>
    </div>
</div>

    </div>
    

</div>
      <!--/SERVICE-->
</template>

<script setup>
import {ref} from 'vue';

import photoWindmill from '../assets/img/wind.jpg';
import photoInverter from '../assets/img/inverter.jpg';
import photoSolar from '../assets/img/solarpanelsrvice.jpg';
import photoBattery from '../assets/img/battery.jpg';
import photoBatterys from '../assets/img/battery2.jpg';

const windmill = ref(photoWindmill);
const inverter = ref(photoInverter);
const solar = ref(photoSolar);
const battery = ref(photoBattery);
const batterys = ref(photoBatterys);

</script>

<style scoped>
 .card-body img {
    max-width: 100%; /* Ensures the image does not exceed the card's width */
    max-height: 100%; /* Ensures the image does not exceed the card's height */
    object-fit:cover; /* Maintains the aspect ratio without stretching */
    display: block; /* Removes inline spacing issues */
    margin: 0 auto; /* Optional: Centers the image horizontally */
}
.card {
    
    border-radius: 10%;
}

</style>