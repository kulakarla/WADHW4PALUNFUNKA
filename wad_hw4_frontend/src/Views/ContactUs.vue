<template>
  <HeaderBox titleText="Contact Us" />
  <div class="maincontent">
    <div class="contactinformation">
      <p>Karl Kristjan Tamm +1-202-555-0140</p>
      <p>Sander Valt +1-202-555-0152</p>
      <p>Siim Maidla +1-202-555-0164</p>
    </div>
  </div>
  <FooterBox />

</template>

<script>
import HeaderBox from "@/components/Header";
import FooterBox from "@/components/Footer";
export default {
  name: "ContactUs",
  components: {FooterBox, HeaderBox}
}
</script>

<style scoped>
.contactinformation{
  background-color: darkgray;
  border-radius: 25px;
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px;
}
.maincontent{
  display: flex;
  justify-content: center;
}
p{
  font-family: Helvetica,serif;
  font-size: 25px;
}

</style>