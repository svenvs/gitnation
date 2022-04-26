<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: ""
    };
  },
  async mounted() {
    const { message } = await (await fetch("/api/message?name=hello")).json();
    this.message = message;
  }
};
</script>