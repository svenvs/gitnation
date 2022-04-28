<template>
  <div class="background-image">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12  offset-md-1 col-md-5 justify-content-center align-self-center">
          <h1 class="bold mb-4"> Win a Switch & a future at Capgemini! </h1>
          <p> Get inspired and start the conversation about what Capgemini could offer you. By entering the raffle you have a change to win a Nintendo Switch and an informal conversation with Capgemini regarding your potential future at Capgemini! </p>
        </div>
        <div class="col-6 col-md-6 justify-content-end align-self-right">
          <div class="bg-white w-30 rounded mt-5 p-4 mr-5 mb-5">
            <div class="row justify-content-start mt-4 mb-4 ml-1"> 
              <div class="col-3 cap-logo">
                <img src="./assets/Logo.svg" />
              </div>
              |
              <div class="col">
                what is this logo?
              </div>
            </div>
            
            <form class="mr-3 ml-3 form-floating">
              <div class="mt-2 mb-1">Full name</div>
              <b-form-input type="text" 
                v-model="fullName"
                placeholder="Captain America">
              </b-form-input>

              <div class="mt-3 mb-1">Country</div>
              <b-form-input
                v-model="country"
                placeholder="United States "
              ></b-form-input>

              <div class="mt-3 mb-1">Profession</div>
              <b-form-input
                v-model="profession"
                placeholder="Super hero"
              ></b-form-input>

              <div class="mt-3 mb-1">Phone number</div>
              <b-form-input
                v-model="phone"
                placeholder="+31612345678 "
              ></b-form-input>

              <div class="mt-3 mb-1">Email Address</div>
              <b-form-input
                placeholder="bestsuperhero@theavengers.com"
                v-model="email"
              />

              <div class="checkbox mt-4 mb-2">
                <label>
                  <input type="checkbox" value="remember-me" /> I agree on receiving communication from Capgemini's recruitment team
                </label>
              </div>
              <div class="mb-2">
                <button type="submit" class="submit-button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        <div class="row">
          <div class="col"></div>
          <div class="col-md-6 justify-content-end align-self-right">
            <p class="mt-1 mb-2 text-white text-right mr-5">&copy; 2017–2022</p>
          </div>
        </div>
    </div>
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
      email: "",
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

<style scoped></style>
