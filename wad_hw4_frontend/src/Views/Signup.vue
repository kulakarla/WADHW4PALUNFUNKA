<template>
  <HeaderBox titleText="Sign Up" />
  <div class="maincontainer">
  <div class="graybox">
    <div class="greenloginbox">
      <div class="labelfield">
        <label for="email">Email</label>
        <input type="email" name="email" required v-model="email" placeholder="Email"/>
      </div>
      <div class="labelfield">
        <label for="password">Password</label>
        <input type="password" name="password" required v-model="password" placeholder="Password"/>
      </div>
        <button @click="SignUp" class="center">
          SignUp
        </button>

    </div>
  </div>
  </div>
  <FooterBox />

</template>

<script>
import HeaderBox from "@/components/Header";
import FooterBox from "@/components/Footer";
export default {
  name: "SignUp",
  components: {FooterBox, HeaderBox},
  data: function(){
    return{
      email: "",
      password: "",
    };
  },
  methods: {
    SignUp(){
      var data = {
        email: this.email,
        password: this.password,
      };

      fetch("http://localhost:3000/auth/signup",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error")
          });

    }
  }
}
</script>

<style scoped>
.graybox{
  background-color: darkgray;
  width: 80%;
  border-radius: 25px;
  margin: 30px;
  display: flex;
  justify-content: center;
}

.greenloginbox{
  width: 80%;
  background-color: lemonchiffon;
  margin: 30px;
  padding: 25px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.labelfield{
  margin: 20px;
  font-size: 25px;
}

button{
  background-color: darkgray;
  border-radius: 10px;
  font-size: 25px;
  padding: 10px;
  margin-top: 20px;
}
input{
  border-radius: 20px;
  height: 150%;
  margin-left: 20px;
  text-align: center;
  font-size: 15px;
}
.maincontainer{
  display: flex;
  justify-content: center;
}

</style>