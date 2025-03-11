<template>
     <div class="container text-center ">
        <div class="row justify-content-md-center">
            <div class="col col-md-6 my-5 py-5  ">
                <h2 class="text-white">ABOUT US</h2>
            </div>
        </div>
        
    </div>
    <div class="container">
        <div class="text-light row justify-content-between">
            <div class="col-4">
                <div class="card">
                    <img :src="photoUrlsAbout" class="img-top" alt="image description">
                    <div class="card-body">
                        <h5 class="card-title">PANELS</h5>
                        <p class="card-text">this are some related solar panels for your needs it 
                            provides stable electricity</p>
                    </div>
                </div>
            </div>
            <div class="col-4 text-right">
                <h2>ABOUT US.</h2>
                <p>We exist to empower individuals and businesses to embrace solar energy.</p>
            </div>
        </div>
    </div>
    <hr>
    <div class="container-commitment">
        <div class="text-light row justify-content-between">
            <div class="col-4">
                <div class="card">
                    <img :src="photoUrlsCommitment" class="img-top" alt="image description">
                    <div class="card-body">
                        <h5 class="card-title">Commitments</h5>
                        <p class="card-text">serving the need of the people.</p>
                    </div>
                </div> 
            </div>           
            <div class="col-4 text-right">
                <h2> COMMITMENT.</h2>
                <p> We envision a planet powered by the sun, where clean energy is affordable and accessible to all.
                </p>
            </div>
            
        </div>
        
    </div>
    <hr>

    <div class="container-commitment">
        <div class="text-light row justify-content-between">
            <div class="col-4">
                <div class="card">
                    <img :src="photoUrlsMission" class="img-top" alt="image description">
                    <div class="card-body">
                        <h5 class="card-title">Mission</h5>
                        <p class="card-text">producing optimum services throughout the continent.</p>
                    </div>
                </div> 
            </div>           
            <div class="col-4 text-right">
                <h2>OUR MISSION.</h2>
                <p>Our mission is clear: to make the world a better place by providing innovative, reliable and eco
                    friendly solar energy solutions.
                </p>
            </div>
            
        </div>
        
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    import photo1 from '../assets/img/solar.JPG';
    import photo2 from '../assets/img/windmill.JPG';
    import photo3 from '../assets/img/panel.JPG';

    const photoUrlsAbout  = ref(photo1);
    const photoUrlsCommitment = ref(photo2);
    const photoUrlsMission = ref(photo3);
</script>

<style scoped>

    .img-top {
        height: 40vh;
        max-width: 100vw;
    }
   /* Default styles (Desktop and larger screens) */
.container,
.container-commitment {
  margin: 20px auto;
}

.row {
  display: flex;
  justify-content: space-between; /* Default alignment for larger screens */
  align-items: flex-start;
}

.card {
  text-align: center;
}

.text-right {
  text-align: center;
}

/* Mobile Phones and Tablets */
@media (max-width: 768px) {
  .container,
  .container-commitment {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center horizontally */
    justify-content: center; /* Center vertically */
    text-align: center; /* Center text */
  }

  .row {
    flex-direction: column; /* Stack items vertically */
    justify-content: center; /* Center items vertically */
    align-items: center; /* Center items horizontally */
  }

  .col-4 {
    flex: none; /* Disable flex for children */
    width: 100%; /* Full width for columns */
    max-width: 90%; /* Add some margin for spacing */
    margin-bottom: 20px; /* Add spacing between elements */
  }

  .text-right {
    text-align: center; /* Center align text */
  }

  .card img {
    max-width: 100%; /* Ensure images scale properly */
    height: 50vh; /* Maintain aspect ratio */
  }
}

        
    
    hr {
        height: 10px;
        width: 40px;
        color: yellow;
    }
    h2 {
        font-size:20px;
        font-weight: 600;
    }

</style>