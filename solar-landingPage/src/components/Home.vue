<script setup>
    import { ref } from 'vue';

    import photo from '../assets/img/manworking.jpg';


    const windmill = ref(photo);

</script>

<template>
    <div class="container text-center ">
        <div class="row justify-content-md-center">
            <div class=" col col-md-8   ">
                <h2 class="text-white">CREATING A SUSTAINABLE FUTURE WITH RENEWABLE ENERGY SOLUTIONS</h2>
                <h6 class=" text-subject text-light">DISCOVER THE MANY AMAZING WAYS SOLAR ENERGY POWER CAN TRANSFORM YOUR 
                    HOME OR BUSINESS 
                </h6>
            </div>
        </div>
        <RouterLink to="/contact" class="btn btn-warning btn-lg text-center ">GET A FREE QUOTE</RouterLink>
    </div>
    <div class="row justify-content-center my-3">
    <div class="col-sm-6">
        <div class="card my-3">
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <!-- Image Section -->
                    <img :src="windmill" alt="Solar Windmill" class="bg-dark me-3" style="width: 40%; height: auto; border-radius: 5px; 
                        object-fit: cover; border-radius: 5%;">
                    <!-- Text Section -->
                    <div>
                        <h5 class="card-title text-center">SOLAR ENERGY</h5>
                        <p class="card-text text-center">With supporting text below as a natural lead-in to additional content.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



</template>

<style scoped>
    .container {
        margin-top: 13%;
    }
    .text-subject {
        margin-top:3%;
        margin-bottom: 4%;
    }

    .card {
        border-radius: 2%;
        border-style: groove;
    }
</style>
