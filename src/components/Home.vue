<template>
    <div class="home-body fullpage-container">
        <div class="fullpage-wp" v-fullpage='opts' ref='homePage'>
            <div class="page-1 page">
                <carousel 
                v-animate="{value: 'fadeIn'}" 
                :per-page="1" 
                :autoplay='true'
                :autoplayTimeout= 5000 
                :autoplayHoverPause='true' 
                :loop='true'
                paginationActiveColor='#cb7aa4'>
                    <slide>
                        <div class="img-holder">
                            <img class="slide-show-img" src="../assets/JSAFBbannerattempt.jpg" alt=""> 
                        </div>
                    </slide>
                    <slide>
                        <div class="img-holder">
                            <img class="slide-show-img" src="../assets/RMW00468.jpg" alt="">   
                        </div>
                    </slide>
                    <slide>
                        <div class="img-holder">
                            <img class="slide-show-img" src="../assets/JSAFBbannerattempt.jpg" alt="">  
                        </div>
                    </slide>
                </carousel>
            </div>
            <div class="page-2 page">
                Upcoming Events
            </div>
            <div class="page-3 page">
                Past Events
                <app-footer></app-footer>      
            </div>
        </div>
        
    </div>
    
</template>

<script>
import Footer from "./Footer.vue";
export default {
  components: {
    "app-footer": Footer
  },
  data() {
    return {
      opts: {
        start: 0,
        dir: "v",
        duation: 500,
        beforeChange: function(prev, next) {},
        afterChange: function(prev, next) {}
      }
    };
  },
  methods: {
    moveNext() {
      this.$refs.homePage.$fullpage.moveNext();
    }
  }
};
</script>

<style scoped lang="scss">
.app-footer {
  position: fixed;
}
.slide-show-img {
  vertical-align: middle;
  max-width: 100%;
  margin: auto 0;
}

.img-holder {
  height: 70vh;
  overflow: hidden;
  display: flex;
  object-fit: contain;
}

.fullpage-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.page {
  display: block;
  text-align: center;
  font-size: 26px;
}
.page-1 {
  padding-top: 170px;
}
.page-2 {
  padding-top: 170px;
}
.page-3 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 170px;
}
h3,
p {
  font-size: 16px;
}
.button-group {
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 9;
}
.button-group button {
  display: inline-block;
  margin: 10px;
  color: #000;
  background: #fff;
  background: rgba(255, 255, 255, 0.5);
  -webkit-border-radius: 10px;
  border-radius: 10px;
  padding: 9px 18px;
  border: none;
  outline: none;
}
.button-group button.active {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
}
</style>
