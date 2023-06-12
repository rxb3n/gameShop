<template>

    <!-- SOCIALS -->
    <div class="socials">
        <h3>Connect with us:</h3>
        <div class="social-icons">
            <img id="icon" src="../assets/google-icon.png" height="30" width="30" >
            <img id="icon" src="../assets/facebook-icon.png" height="30" width="30" >
            <img id="icon" src="../assets/twitter-icon.png" height="30" width="30" >
            <img id="icon" src="../assets/instagram-icon.png" height="30" width="30" >
        </div>
    </div>
        <!-- SOCIALS -->

        <!-- FOOTER -->
    <div class='footer-wrapper'>

        <!-- FIRST COLUMN -->
        <div class="col first">
            <h2>Games.com</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam odio ratione perferendis rerum doloremque blanditiis exercitationem! Optio molestiae eaque beatae? Eaque adipisci illo expedita ipsam.</h3>
            <h3>@ Games.com Copyright 2023. All rights reserved</h3>
        </div>
        <!-- FIRST COLUMN -->

        <!-- SECOND COLUMN -->
        <div class="col second">
            <h2>Products</h2>
            <p>Consoles</p>
            <p>Laptops</p>
            <p>Peripherals</p>
            <p>Accessories</p>
        </div>
        <!-- SECOND COLUMN -->
        
        <!-- THIRD COLUMN -->
        <div class="col third">
            <h2>Useful Links</h2>
            <p>Your account</p>
            <p>Shopping</p>
            <p>Ordering</p>
        </div>
        <!-- THIRD COLUMN -->

        <!-- FOURTH COLUMN -->
        <div class="col fourth">
            <h2>Find us</h2>
            <p>Games.com</p>
            <p>Games St. 188, Abidjan, C.I.</p>
            <p>(+225) 25 52 25 52</p>
        </div>
        <!-- FOURTH COLUMN -->
    </div>
    <!-- FOOTER -->
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

.socials {
    margin-top: 5%;
    color: white;
    font-family: 'Roboto';
    display: flex;
    justify-content: space-around;
    font-size: 22px;
    width: 100%;
    background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
background-size: 1800% 1800%;

-webkit-animation: rainbow 18s ease infinite;
-z-animation: rainbow 18s ease infinite;
-o-animation: rainbow 18s ease infinite;
  animation: rainbow 18s ease infinite;}

@-webkit-keyframes rainbow {
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
}
@-moz-keyframes rainbow {
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
}
@-o-keyframes rainbow {
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
}
@keyframes rainbow { 
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
}

.social-icons {
    padding-top: 1.5%;
    padding-left: 5px;
    filter: invert();
}

#icon {
    padding-left: 100px;
}

.footer-wrapper {
    font-family: 'Roboto';
    background-color: #2d74ff;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.col {
    display: flex;
    flex-direction: column;
}

.first {
    width: 25%;
}

.col > p {
    font-size: 1    8px;
}

@media screen and (max-width: 1000px) {
    .footer-wrapper {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        font-size: 0.5em;
    }
}

</style>