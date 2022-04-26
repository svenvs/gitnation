<template>
  <div class="background-image">
    <div class="bg-white w-50">
      <form class="w-50 ml-3">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="mt-2">Name</div>
        <b-form-input
          class="mt-2"
          v-model="text"
          placeholder="Enter name"
        ></b-form-input>

        <div class="mt-2">Last name</div>
        <b-form-input
          class="mt-2"
          v-model="text"
          placeholder="Enter last name"
        ></b-form-input>

        <div class="mt-2">Phone number</div>
        <b-form-input
          v-model="text"
          placeholder="Enter your phone number  "
        ></b-form-input>

        <div class="mt-2">Address</div>
        <b-form-input
          v-model="text"
          placeholder="Enter your address "
        ></b-form-input>

        <div class="mt-2">Email Address</div>
        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <b-button type="submit" variant="primary">Submit</b-button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      message: "",
      text: "",
    };
  },
  methods: {
    async submitForm(e) {
      e.preventDefault();
      console.log('yes hello');
          //does the post
    const { message } = await (await fetch(
      '/api/contestor', 
      {
        method: 'post',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: "Willem Hengel",
          email: "WillemFishingForLive@rodHunting.com",
          phone: "0658246985",
          country: "NL",
          profession: "fisherman",
          recruitment: true,
        }),
      })
    ).json();
    //when done post the message
    this.message = message;
    }
  }
};
</script>

<style scoped></style>
