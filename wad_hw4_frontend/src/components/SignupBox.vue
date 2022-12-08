<template>
  <div class ="wholepage">
  <div class="signup">
    <div id="alert" v-if="alert">{{ alert }}</div>

    <form @submit.prevent="signupWithPassword" class="meem">
      <label class="emailLabel">
        Email
        <input placeholder="Email" class="emailAns" type="email" v-model="email" />
      </label>
      <br>
      <label class="passLabel">
        Password
        <input placeholder="Password" class="passAns" type="password" v-model="password" />
      </label>
      <br>
      <button class="button" onclick="signupWithPassword()" type="submit">Sign up
        <span class="popuptext" id="myPopup">Invalid password. Password must be of length 8-14, start with an uppercase and include two lowercase alphabet characters, include the character '_' and include one numeric value</span>
      </button>
    </form>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signupWithPassword() {
      if (!this.passwordControl) {
        console.log(this.email);
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show")
      }
    },
    passwordControl() {
      if (this.password.length < 8 || this.password.length > 14 || this.password[0] != this.password[0].toUpperCase) {
        return false;
      }
      var consistsChar = false;
      var consistsNumber = false;
      let lowercase = 0;
      for (let i = 0; i < this.password.length; i++) {
        if (this.password[i] >= '0' && this.password[i] <= '9') {
          consistsNumber = true;
        }
        if (this.password[i] === this.password[i].toLowerCase) {
          lowercase += 1;
        }
        if (this.password[i] === "_") {
          consistsChar = true;
        }
      }
      return consistsChar && consistsNumber && lowercase >= 2;
    }
  }
}

</script>

<style scoped>
.signup{
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: darkgray;
  width: 65%;
  margin-top: 50px;
  margin-bottom: 50px;
}
form {
  margin: auto;
}

.wholepage{
  display: flex;
  justify-content: center;
}

.meem{
  display: flex;
  width: inherit;
  height: inherit;
  flex-direction: column;
  align-items: center;
}
.button{
  background-color: #349eeb;
  font-size: 40px;
  margin: 1%;
  width: 150px;
  border-radius: 25px;
}
.button:hover {
  background-color: #94b8d6;
}

.emailLabel{
  font-size: 70px;
  padding-left: 160px;
}
.emailAns{
  font-size: 30px;
  right: 10%;
  border-radius: 25px;
}
.passLabel{
  font-size: 70px;
  padding-left: 30px;
}
.passAns{
  font-size: 30px;
  border-radius: 25px;
}

.button .popuptext {
  visibility: hidden;
  width: 160px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
}

.button .popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.button .show {
  visibility: visible;
  animation: fadeIn 1s
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}
</style>