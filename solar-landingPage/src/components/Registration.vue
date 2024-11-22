<template>
    <div class="container">
        <form action="" class="login">
            <div class="column">
                <div class="header">
                    
                </div>
                <div class="form">
                    <h1>Welcome Back</h1>
                    <div class="form-page">
                        <div class="segmented">
                            <button class="segmented-btn " aria-selected="true">
                                Sign In
                            </button>
                            <button class="segmented-btn">
                                Sign Up
                            </button>
                            <div class="segmented-focus"></div>
                        </div>
                        <div class="field">
                            <input class="input-textbox" type="email" name="email">
                            <label for="user-email" class="label">
                                Email
                            </label>
                        </div>
                        <button class="btn" type="submit">Continue</button>
                        <div class="or">Or continue with</div>
                        <div class="socia">
                            <button class="social-btn">
                                <i class="fa-brands fa-google"></i>
                            </button>
                            <button class="social-btn">
                                <i class="fa-brands fa-apple"></i>
                            </button>
                            <button class="social-btn">
                                <i class="fa-brands fa-github"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <ul class="footer-nav">
                        <li><a href="">Terms of Us</a></li>
                        <li><a href="#">Disclosures</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div class="column column--bg">
                <img src="" alt="" class="bg-img">
            </div>
        </form>
    
    </div>
</template>
<script setup>

</script>
<style scoped>
 
body {
    height: 100vh;
}

.login {
    display: flex;
    margin: auto;
    width:100%;
    height: 100%;
    color: hsl(223, 10%, 10%); 
    font: 1em/1.5, sans-serif;
}

.column {
    width: 50%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    overflow: auto;
    padding: 1.5em;
    position: relative;
}

.header {
    width: 100%;
    padding: 1.5em 0;
}

.form {
    width: 22em;
    flex-shrink: 0;
    margin: 3em 0;
    height: min-content;
}

h1 {
    font-size: 2em;
    margin: 0 0 1.5em;
    text-align: center;
}

.segmented {
    position: relative;
    background-color: hsl(223, 10%, 90%);
    border-radius: 0.75em;
    margin-bottom: 1.5em;
    min-height:3em;
}

.segmented-btn {
    border-radius: 0.075em;
    box-shadow: 0 0 0 0.1875em var(--focus-t) inset;
    color: hsl(223, 10%, 90%);
    cursor: pointer;
    outline: transparent;
    padding: 0.75em;
    width: 100%;
    background-color: transparent;
    position: relative;
    z-index: 1;
}

.segmented-btn [aria-selected=true] {
    color: hsl(223, 10%, 10%);
}
.segmented-focus {
    background-color: white;
    border-radius: 0.625em;
    pointer-events: none;
    position: absolute;
    top: 0.25em;
    bottom: 0.25em;
    left: 0.25em;
    width: calc(50% - 0.5em);
}

.field {
    position: relative;
    margin-bottom: 2.2em;
}

.input-textbox {
    width: 100%;
    background-color: transparent;
    border-radius:0.75em;
    box-shadow: 0 0 0 0.125em hsl(223, 10%, 80%) inset;
    outline: transparent;
    padding: 1.5em 1em 0.5em 1em;
    padding-inline-end: 3.5em;
    appearance: none;
}

.label {
    color: hsl(var(--hue), 10%, 30%);
    cursor: text;
    display: flex;
    position: absolute;
    bottom: 0.4em;
    left: 1em;
    pointer-events: none;
}

.btn {
    width: 100%;
    background-color:hsl(223, 90%, 50%);
    border-radius: 0.75em;
    box-shadow: 
    0 0 0 0.1em hsl(223deg, 10%, 90% / 0%) ,
    0 0 0 0.1em hsl(223deg, 90%, 50% / 0%) ;
    color: white;
    margin-bottom: 1.5em;
    padding: 1em;
    cursor: pointer;
    display: block;
    outline: transparent;
}

.or {
    color:  hsl(223, 10%, 40% );
    display: flex;
    align-items: center;
    font-size: 0.75em;
    line-height: 2;
    margin-bottom: 1.5em;
    text-align: center;
}
.or::before, .or::after {
    background-color: hsl(223, 10%, 70% );
    content: "";
    display: block;
    flex: 1;
    height:1px;
}

.or:before {
    
} 
</style>