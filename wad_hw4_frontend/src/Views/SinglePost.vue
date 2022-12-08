<template>
  <HeaderBox titleText="A post" />
  <div class="maincontent">
    <div class="graybox">
      <div class="greenloginbox">
        <h2>A Post</h2>
        <div class="labelfield">
          <label for="email">Body</label>
          <input type="text" name="postbody" required v-model="post.postbody" placeholder="body"/>
        </div>

        <div class="buttoncontainer">
          <button @click="updatePost" class="center">Update</button>
          <button @click="DeletePost" class="center">
            Delete
          </button>

      </div>
    </div>
      </div>
  </div>
  <FooterBox />

</template>

<script>
import HeaderBox from "@/components/Header";
import FooterBox from "@/components/Footer";
export default {
  name: "SinglePost",
  components: {HeaderBox, FooterBox},
  data(){
    return {
      post: {
        id: "",
        postbody: "",
        postdate: "",
      },
    };
  },
  methods: {
    fetchAPost(id) {
      fetch(`http://localhost:3000/api/posts/${id}`)
          .then((response) => response.json())
          .then((data) => (this.post = data))
          .catch((err) => console.log(err.message));
    },
    DeletePost(){
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "DELETE",
        headers: { "Content-Type" : "application/json" },
      })
          .then((response) => {
            console.log(response.data);
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
          });
    },
    updatePost() {
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
          .then((response) => {
            console.log(response.data);
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.fetchAPost(this.$route.params.id);
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