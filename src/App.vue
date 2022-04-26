<template>
  <div class="background-image">
      {{ message }}
  </div>
</template>

<style lang="scss">

body, html {
  height: 100%;
  margin: 0;
}

.background-image {
  background-image: url("./assets/landing.jpg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<script>
export default {
  name: "App",
  data() {
    return {
      message: ""
    };
  },
  // async mounted() {
  //   const { message } = await (await fetch("/api/message?name=hello")).json();
  //   this.message = message;
  // }
};
</script>