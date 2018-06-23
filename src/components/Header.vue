<template>
    <header ref="refHeader" class="header-original">
        <img id="logo" src="../assets/JSAlogoattemptred.png" alt="UCSD_JSA_LOGO">
        <ul class="tabs">
            <li class="tab" :style="{'color':'#CB7AA4'}">About</li>
            <li class="tab">Events</li>
            <li class="tab">Board</li>
            <li class="tab">Contact</li>
        </ul>
    </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log("created scroll listener");
    window.addEventListener("mousewheel", this.resizeHeaderOnScroll);
  },
  methods: {
    resizeHeaderOnScroll: function() {
      const distanceY =
        window.pageYOffset || document.documentElement.scrollTop;
      const shrinkOn = 200;
      console.log("header is" + this.$refs.refHeader);

/*

      if (distanceY > shrinkOn) {
        this.$refs.refHeader.classList.remove("header-original");
        this.$refs.refHeader.classList.add("header-smaller");
      } else {
        this.$refs.refHeader.classList.remove("header-smaller");
        this.$refs.refHeader.classList.add("header-original");
      }
*/
    }
  }
};
</script>

<style scoped lang="scss">
$logo-w-and-h: 100px;
$logo-w-and-h-min: 50px;
$header-l-r-pad: 8vw;

.header-original {
  width: 100%;
  height: $logo-w-and-h + 50px;
  background: rgba(#eeeeee, 0.53);
  box-shadow: rgba(#000, 0.2) 0px 3px 6px;
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  #logo {
    width: $logo-w-and-h;
    height: $logo-w-and-h;
    margin: 25px 0 25px $header-l-r-pad;
  }

  .tabs {
    list-style: none;
    display: flex;
    margin-right: $header-l-r-pad;
    .tab {
      position: relative;
      top: 40%;
      margin: 1.5vw;
      color: #707070;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 25px;
    }
  }
}

.header-smaller {
  width: 100%;
  height: $logo-w-and-h-min + 10px;
  background: rgba(#eeeeee, 0.53);
  box-shadow: rgba(#000, 0.2) 0px 3px 6px;
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  #logo {
    width: $logo-w-and-h-min;
    height: $logo-w-and-h-min;
    margin: 5px 0 5px $header-l-r-pad;
  }

  .tabs {
    list-style: none;
    display: flex;
    margin-right: $header-l-r-pad;
    .tab {
      position: relative;
      top: 40%;
      margin: 0 1.5vw 0 1.5vw;
      color: #707070;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 20px;
    }
  }
}
</style>