<template>
    <header>
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
  }
};
</script>

<style scoped lang="scss">
$logo-w-and-h: 100px;
$header-l-r-pad: 5vw;

header {
  width: 100%;
  height: $logo-w-and-h + 50px;
  background: rgba(#bfbfbf, 0.33);
  box-shadow: rgba(#000, 0.2) 0px 3px 6px;
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}

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
</style>