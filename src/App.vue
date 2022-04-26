<template>
  <div class="background-image">
    <form @submit="submitForm">
      <img class="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input type="text" class="form-control" id="floatingFullName" placeholder="John Wick" v-model="fullName" name="fullName">
        <label for="floatingFullName">Full name</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
    </form>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      message: "",
      fullName: "",
      phone: "",
      country: "",
      profession: "",
      recruitment: ""
    };
  },
  methods: {
    async submitForm(e) {
      e.preventDefault();
      //does the post
      const { message } = await (await fetch(
        '/api/contestor', 
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName: this.fullName,
            email: this.email,
            phone: this.phone,
            country: this.country,
            profession: this.profession,
            recruitment: this.recruitment,
          }),
        })).json();
        //when done post the message
      this.message = message;
    }
  }
};
</script>
