<template>
  <div class="w-full h-[160px] footnav">
    <div class="footnav-box">
      <span class="footnav-text1">© 2023, nanyano Online Store Powered by Shopify</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .footnav{
    border-top: 1px solid #e6e6e6;
    margin-top: 50px;
    background-color: rgb(248, 248, 248);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .footnav-box{
    max-width: 1200px;
    width: 100%;
    height: 100px;
    padding: 0 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: flex-end;
  }
  .footnav-text1{
    font-size: 1rem;
    padding-top: 30px;
    color: #737373;
    font-family: "tangyuan"
  }
</style>