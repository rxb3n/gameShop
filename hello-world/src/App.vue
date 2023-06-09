<template>

  <NavView />
  <!-- HERO SECTION -->
  <div class="hero-container">
    <div class="hero-content">
    <h2 id="discount-text" class="header-txt">20% OFF</h2>
    <h1 class="header-txt head-name">Cooler Master 
      <br>KFCONSOLE</h1>
      <div class="shop-price">
        <button class="shop-btn header-txt">SHOP NOW</button>
        <h2 class="header-txt">€ 399,99</h2>
        <h2 id="discounted-price">€ 479,99</h2>
      </div>

      </div>
  </div>
  <!-- HERO SECTION -->

  <!-- BENEFITS SECTION -->
  <div class="benefits-container">

    <div class="benefit-card ">
      <img src="@/assets/delivery.png" height="80" width="80" id="benefit-img">
      <h2 class="each-benef">Free Shipping</h2>
      <p id="benefit-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
        Voluptates quo nam sunt molestiae perspiciatis, <br>
        cupiditate dolores </p>
    </div>

    <div class="benefit-card ">
      <img src="@/assets/parcel.png" height="80" width="80" id="benefit-img">
      <h2 class="each-benef">Easy Return</h2>
      <p id="benefit-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
        Voluptates quo nam sunt molestiae perspiciatis, <br>
        cupiditate dolores </p>
    </div>

    <div class="benefit-card ">
      <img src="@/assets/customer-support.png" height="80" width="80" id="benefit-img">
      <h2 class="each-benef">24/7 Customer Support</h2>
      <p id="benefit-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
        Voluptates quo nam sunt molestiae perspiciatis, <br>
        cupiditate dolores </p>
    </div>

  </div>
   <!-- BENEFITS SECTION -->

   <h2 id="separation">OUR BEST SELLING PRODUCTS</h2>

<!-- ARTICLES GRID SECTION -->
   <div class="items-container">

    <div  v-for="item in items" v-bind:key="item.id" class="cards-container" >
      <div class="card" @click="items.isActive = true, 
      clickedItem = [],
      clickedItem.push(item.attributes.name, item.attributes.description, item.attributes.price, item.attributes.image.data.attributes.url),
       console.log(clickedItem)">
        <img class="card-img" :src="`${api_url}${item.attributes.image.data.attributes.url}`" />
        <p class="card-name first-line" id="card-on-hover">{{ item.attributes.name }}</p>
        <p class="card-price second-line" id="card-on-hover">€ {{ item.attributes.price }}</p>
        <p class="card-desc third-line" id="card-on-hover">{{ item.attributes.description }}</p>
        <p id="item-id" style="display: none;">{{ item.id }}</p>
      </div>
    </div>
    
   </div>
   <!-- ARTICLES GRID SECTION -->

<!-- MODAL VIEW -->
   <div v-if="items.isActive" class="modal-wrapper">

    <ModalView>

      <div class="modal-top">

      <button @click="items.isActive = false" class="close-modal">
        <img src="@/assets/close.png" height="30" width="30">
      </button>
      <h2 style="font-size: 36px;">{{ clickedItem[0] }}</h2>

    </div>
    
      <p>{{ clickedItem[1] }}</p>
      <p style="color:#d32d4d; font-weight: 700; font-size: 1.25em;">{{ clickedItem[2] }} €</p>
      <img :src="`${api_url}${clickedItem[3]}`" alt="" height="500" width="800" class="modal-img">
      <button class="add-cart">AJOUTER AU PANIER</button>

    </ModalView>

   </div>
   <!-- MODAL VIEW -->


   <FooterView />
</template>

<script>
import NavView from './components/NavView.vue'
import ModalView from './components/ModalView.vue'
import FooterView from './components/FooterView.vue'
import {useItemStore} from "@/store/store.js"


export default {
  name: 'App',
  components: {
    NavView,
    ModalView,
    FooterView,
  },

  data() {
    return {
      items: [],
      api_url: "http://localhost:1337",
      clickedItem: []
    }
  },

  
  beforeMount() {
    const items = useItemStore();
    console.log(items.isActive)
    if (items.articles.length == 0) {
      items.getArticles()
    }

    let articles = items.articles;
    this.items.push(articles)
    this.items = this.items[0]
  },

}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

@media screen and (max-width: 1000px) {
  .hero-container {
    display: block;
  }

  .benefits-container {
    display: flex;
    flex-wrap: wrap;
  }

  #separation {
    font-size: 1.2em;
    margin-right: 50%;
  }

  .items-container {
    display: grid;
    grid-template-columns: repeat(1, 2fr);

  }
}

.add-cart {
  border: none;
  padding: 2%;
  border-radius: 40px;
  background-color: #2d74ff;
  color: white;
  font-size: 1.25em;
  transition: 0.2s;
  margin-left: 5%;
  margin-top: 1%;
}

.modal-top {
  display: flex;
  flex-direction: row;
}

.modal-img {
  width: 100%;
}

.close-modal {
  height: fit-content;
  position: relative;
  left: 95%;
  border: none;
  transition: 0.2s;
}

.close-modal:hover {
  filter: invert();
}

.modal-wrapper {
  display: flex;
  flex-direction: column;
}

.add-cart:hover {
  transform: scale(1.1);
}

#app {
  margin: 0;
  padding: 0;
}

.items-container {
  margin-left: 5%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3,33.33333%);
}

.first-line {
  opacity: 0;
  transition-duration: 0.45s;
  font-size: 1.75em;
  position: absolute;
  top: 0%;
}
.second-line {
  opacity: 0;
  transition-duration: 1s;
  font-size: 1.5em;
  position: absolute;
  top: 65%;
}
.third-line {
  opacity: 0;
  transition: 1.5s;
  position: absolute;
  top: 80%;
}

.card {
  position: relative;
  transition: 0.45s;
  overflow: hidden;
}

.card-img {
  width: 75%;
  transition: 0.45s;
}


#card-on-hover {
  z-index: 5;
  color: white;
  margin-left: 2%;
}

.card:hover .card-img {
  filter: blur(8px);
  transform: scale(1.1);
}

.card:hover .first-line,
  .card:hover .second-line,
    .card:hover .third-line{
  opacity: 1;
}

body {
  font-family: Roboto;
  margin: 0;
  padding: 0;
  top: 0;
  overflow-x: hidden;
  background-color: #f9f9fa;
}

.each-benef {
  position: relative;
  display: flex;
  justify-content: center;
}

#separation {
  position: relative;
  left: 42%; 
  margin-bottom: 5%;
}


#discounted-price {
  padding-left: 2%;
  text-decoration: line-through;
  color: #6f6f73;
}

#benefit-img {
  margin-left: 40%;
}

#discount-text {
  font-size: 2em;
  color: #d32d4d;
}

.hero-container {
  padding: 0;
  margin-top: -27px;
  background-image: url('@/assets/header-bg.jpg');
  width: 100vw;
  height: 900px;
  background-color: black !important;
  color: white;
}

.head-name {
  font-size: 3.5em;
}

#hero-image {
  z-index: 0;
}

.shop-price {
  display: flex;
  flex-direction: row;
  justify-content:flex-start;
  width: 50%;
}

.hero-content {
  position: relative;
  top: 50%;
  margin-left: 5%;
}

.shop-btn {
  border: none;
  background-color: #2d74ff;
  color: white;
  padding-left: 3%;padding-right: 3%;
  margin-right: 5%;
  font-size: 1.25em;
  transition: 0.2s;
}

.shop-btn:hover {
  transform: scale(1.1);
  background-color: #da5050;
}

.benefits-container {
  padding-top: 5%;padding-bottom: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}


.benefit-card {
  align-items: center;
  padding: 3%;
  background-color: white;
  align-items: center;
  transition: 0.5s;
}

.benefit-card:hover {
  transform: scale(1.1);
  background-color: black;
  color: white;
}

#benefit-description {
  color: #6f6f73;
}



</style>
