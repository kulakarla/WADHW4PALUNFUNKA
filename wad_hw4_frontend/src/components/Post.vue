<template>
    <div class = "post">
      <div class ="postheader">

        <p>{{postDate}}</p>

      </div>
      <div class = "postbody">

        <p>{{postParagraph}}</p>

      </div>
    </div>

</template>

<script>

export default {
  name: "PostEntity",
  props:{
    postDate: String,
    postParagraph: String,



  }
}

</script>

<style scoped>
.post{
  width: 65%;
  overflow:auto;
  border-radius: 25px;
  background-color: darkgray;
  padding: 1%;
  margin: 10px;
}
.postbody > p{
  text-align: justify;
}
.postbody{
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.postheader {
  display: flex;
  justify-content: right;
  margin-bottom: 1%;
  align-items: center;
}
p{
  font-size: 25px;
}

</style>