<template>
    <div class="contact-container">
        <img class=" photo contact-left-img  col col-md-6 d-none d-lg-block justify-content-center align-content-center " :src="photoUrl" alt="" srcset="">
        <form action="https://api.web3forms.com/submits" method="post" class="contact-left">
            <div class="contact-left-title">
                <h2>Get in touch with us</h2>
                <hr>
            </div>
            <input type="hidden" name="access_key" value="ACCESS_KEY_HERE" class="contact-left">
            <input type="text" name="name" placeholder="Your Name" class="contact-inputs" required>
            <input type="text" name="email" placeholder="Your Email" class="contact-inputs" required>
            <input type="text" name="Message" placeholder="Your Message" class="contact-inputs" required>
            <a :href="submitUrl" target="_blank" rel="noopener noreferrer">

                <button type="submit">Submit</button>
            </a>
        </form>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    import photo from '../assets/contact.png';

    const photoUrl = ref(photo);
    const submitUrl = ref("https://google.com");
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        font-family: Verdana, Geneva, Tahoma, sans-serif;

    } 
    .photo {
        width: 360px;
        height: 360px;
        margin-right: 50px;
    }                                                        
    .contact-container {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .contact-left {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
    .contact-left-title h2{
        font-weight: 600;
        color: #a363aa;
        font-size:40px;
        margin-bottom: 6px;
    }
    .contact-left-title hr {
        border: none;
        width: 120px;
        height: 5px;
        background-color: #a363aa;
        border-radius: 10px;
        margin-bottom: 20px;
    }
    .contact-inputs {
        width: 400px;
        height: 40px;
        border: none;
        outline: none;
        padding-left: 25px;
        font-weight: 500;
        color: #666;
        border-radius: 50px;
    }
    .contact-inputs textarea {
        height: 200px;
        padding-top: 15px;
        border-radius: 20px;
    }
    .contact-inputs:focus {
        border: 2px solid #ff994f;
    }
    .contact-inputs::placeholder {
        color: #9a9a99;
    }
    .contact-left button {
        display: flex;
        align-items: center;
        padding: 15px 30px;
        font-size: 26px;
        color: #fff;
        gap:10px;
        border: none;
        border-radius: 50px;
        background: linear-gradient(270deg, #ff994f, #fa6d86);
        cursor: pointer;
}
</style>