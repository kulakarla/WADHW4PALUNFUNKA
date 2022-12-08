<template>
  <HeaderBox titleText="Add Post" />
  <div class="maincontent">
    <div class="graybox">
      <div class="greenloginbox">
        <h2>Add Post</h2>
        <div class="labelfield">
          <label for="email">Body</label>
          <input type="text" name="postbody" required v-model="postbody" placeholder="body"/>
        </div>

        <button @click="addPost" class="center">Add Post</button>

      </div>
    </div>
  </div>
  <FooterBox />
</template>

<script>
import FooterBox from "@/components/Footer";
import HeaderBox from "@/components/Header";

export default {
  name: "AddPost",
  components: {FooterBox, HeaderBox},
  data: function(){
    return{
      postbody: this.postbody
    };
  },
  methods: {
    addPost(){
      var data = {
        postbody: this.postbody,
        postdate: new Date().toISOString().split('T')[0]
      };
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
          .then((response) => {
            console.log(response.data);
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("Error trying to add a post");
          })
    }

  }
}
</script>

<style scoped>
.maincontent{
  display: flex;
  justify-content: center;
}
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
}
input{
  border-radius: 20px;
  height: 150%;
  margin-left: 20px;
  text-align: center;
  font-size: 15px;
  width: 300px;
}

</style>