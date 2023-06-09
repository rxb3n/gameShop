<template>
  <div class="nav-container">
    <img src="@/assets/hamburger-menu.png" height="50" width="50" class="hamb-menu">

     <!-- TOP SECTION -->
    <div class="nav-top">

      <h1 id="txt-logo">LOGO</h1>
      <div class="search-container">
        <input type="text" class="searchbar" placeholder="Search.."> <button id="search-icon"><img src="@/assets/search-icon.png" height="23" width="23" ></button>
      </div>

      <img src="@/assets/cart-icon.png" height="35" width="35" class="top-element">
      <img src="@/assets/account-icon.png" height="35" width="35" id="account-icon" class="top-element">

    </div>
    <!-- TOP SECTION -->

    <!-- bottom SECTION -->
    <div class="nav-bottom">
      <h3 class="nav-element">Home</h3>
      <h3 class="nav-element">Shop</h3>
      <h3 class="nav-element">Features</h3>
    </div>
  </div>
  <!-- bottom SECTION -->
</template>

<style>

@media screen and (max-width: 1000px) {
  .hamb-menu {
    display: block;
    margin-top: 1%;
  }
  .nav-container {
    display: block;
  }
  .nav-top {
    display: block;
  }

  .nav-bottom {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .nav-elements {
    margin-right:25%;
  }

  .search-container {
    display: none;
  }

}

.hamb-menu {
  display: none;
}


.nav-container {
  background-color: white;
  z-index: 999;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
}

.nav-top {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.top-element  {
  margin-top: 1%;
}


.search-container {
  position: relative;
  margin-top: 1%;
  border-color: #d1d2d2;
}

.searchbar {
  padding: 10px;
  width: 900px;
}

#search-icon {
  position: relative;
  top: 5px;
  margin-left: -5px;
  padding: 5px;
}

.nav-bottom {
  background-color: rgb(45,116,255);
  padding-right: 50%;
  padding-top: 1%;padding-bottom: 1%;
  color: white;
  display: flex;
  justify-content: flex-start;
}

.nav-element {
  padding-left: 10%;
}

#account-icon {
  border-radius: 40px;
  background-color: #d1d2d2;
}

</style>