<template>
    <div  class="popup" id="closer">
        <div class="popup-inner" >
            <slot />    
        </div>
    </div>
</template> 

<script>
import {useItemStore} from "@/store/store.js"

export default {
    name: 'ModalView',

    data() {
    return {
      items: [],
      api_url: "http://localhost:1337",
      activePop: true
    }
  },
  
  beforeMount() {
    const items = useItemStore();
    this.activePop = items.isActive;
    
},


}

</script>

<style scoped>

.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: rgba(0,0,0,0.65);
    display: flex;
    align-items: center;
    justify-content: center;
}

.popup-inner {
    background-color: white;
    padding: 32px;
}


</style>