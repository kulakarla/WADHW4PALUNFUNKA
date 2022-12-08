<template>
  <div class = "header">
    <h1>{{ titleText }}</h1>
    <div class = "navmenu">
      <router-link to="/">Home</router-link> |
      <router-link to="/contactus">Contact Us</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBox",
  props:{
    titleText: String
  }
}
</script>


<style scoped>
.header{
  margin-top: -3%;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: darkgray;
  padding-bottom: 20px;

}

a{
  margin: 10px;
  text-decoration: none;
  font-size: 20px;
}

a:visited{
  color: black;
}

h1{
  margin-top: 20px;
  font-size: 50px;
}


</style>