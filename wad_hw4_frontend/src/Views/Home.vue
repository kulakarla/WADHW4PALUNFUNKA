<template>
  <HeaderBox titleText="Homepage"/>
  <div class="maincontent">
    <button v-if="authResult" @click="logOut" class="logOut">Logout</button>
    <div class="asjad">
      <div v-for="post in posts.reverse()" :key="post.id" class="posts">
        <a class ="singlepost" :href="'/api/apost/' + post.id">
        <PostEntity ref="post"
                    :postDate="post.postdate"
                    :postParagraph="post.postbody"></PostEntity>
       </a>
      </div>
    </div>
    <div class="bottombuttons">
      <button @click="addPost" class="addPost"><router-link to="/addpost">Add Post</router-link></button>
      <button @click="deleteAll" class="deleteAll">Delete All</button>
    </div>
  </div>
  <FooterBox />
</template>

<script>
import HeaderBox from "@/components/Header";
import FooterBox from "@/components/Footer";
import PostEntity from "@/components/Post";
import auth from "../auth";

export default {
  name: 'HomeView',
  components: {
    FooterBox,
    HeaderBox,
    PostEntity
  },
  //computed: {
  //  postListStuff(){
  //    return this.$store.getters.postListStuff
  //  },
  //},
  data: function(){
    return{
      posts: [],
      authResult: auth.authenticated(),
    };
  },
  mounted(){
    this.fetchPosts();
    console.log("Posts have been mounted");
  },

  methods: {
    fetchPosts(){
      fetch(`http://localhost:3000/api/posts`)
          .then((response) => response.json())
          .then((data) => (this.posts = data))
          .catch((err) => console.log(err.message));
    },
    deleteAll(){
      fetch(`http://localhost:3000/api/deleteall`, {
        method: "DELETE",
      }).then(() => {
        window.location.reload();
      })
    },

    logOut(){
      fetch("http://localhost:3000/auth/logout", {
        credentials: "include",
      })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            console.log("jwd removed");
            this.$router.push("/login");
          })
          .catch((e) => {
            console.log(e);
            console.log("error logout");
          })
    }

  }

}
</script>

<style>
.posts{
  display: flex;
  justify-content: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.resetbutton{
  background-color: darkgray;
  border-radius: 2%;
  margin: 10px;
  font-family: Avenir, Avenir, Helvetica, Arial, sans-serif;
}
.bottombuttons{
  margin: 20px;
  width: 25%;
  display: flex;
  justify-content: space-between;
}
button{
  background-color: darkgray;
  border-radius: 10px;
  font-size: 25px;
  padding: 10px;
  margin: 20px;
  text-decoration: none;
}

.maincontent{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.asjad{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.singlepost{
  width: 100%;
  display: flex;
  justify-content: center;
}
.singlepost{
  text-decoration: none;
  color: black;
}
a{
  text-decoration: none;
  color: black;
}
</style>
