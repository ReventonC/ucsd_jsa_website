<template>
    <div class="home-body">
        <carousel :per-page="1">
            <slide>
                <div class="img-holder">
                    <img class="slide-show-img" src="../assets/JSAFBbannerattempt.jpg" alt="">                    
                </div>
            </slide>
            <slide>
                <div class="img-holder">
                    <img class="slide-show-img" src="../assets/JSAFBbannerattempt.jpg" alt="">                    
                </div>
            </slide>
            <slide>
                <div class="img-holder">
                    <img class="slide-show-img" src="../assets/JSAFBbannerattempt.jpg" alt="">                    
                </div>
            </slide>
        </carousel>
    </div>
</template>


<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.home-body {
  margin-top: 170px;
}

.slide-show-img {
  vertical-align: middle;
  max-width: 100%;
}

.img-holder {
  height: 70vh;
  overflow: hidden;
}
</style>
