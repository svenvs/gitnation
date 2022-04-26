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
    //does the post
    const { message } = await (await fetch(
      '/contestor', 
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: 'Willem Hengel',
          email: 'WillemFishingForLive@rodHunting.com',
          phone: '0658246985',
          country: 'NL',
          profession: 'fisherman',
          recruitment: true,
        }),
      })).json();
      //when done post the message
    this.message = message;
  }
};
</script>
