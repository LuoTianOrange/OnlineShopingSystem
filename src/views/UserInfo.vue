<template>
  <div class="main-body fff">
      <div class="main-box mt-[60px] mx-[40px]">
        <div class="left">
            <span class="menu-box-header border-left-top">个人中心</span>
            <div class="menu-box" v-for="i in leftmenu" :key="i.no"
            :style="{'background-color': i.no == Ino?'#475669':null,
            'color': i.no == Ino?'#fff':null}"
            @click="changeboxNo(i.no,i.router)"
            >{{ i.name }}</div>
        </div>
        <div class="right">
          <router-view name="Buys"></router-view><!--路由不渲染-->
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      leftmenu:[
        {name:'我的信息',no:1,router:'/UserInfo'},
        {name:'我的购物车',no:2,router:'/Cart'},
        {name:'购买的商品',no:3,router:'/UserInfo/Buys'},
      ],
      Ino:1,
    }
  },
  methods:{
    changeboxNo(no,router){
      this.Ino = no;
      this.$router.push(router)
    }

  }
}
</script>

<style scoped>
  .main-body{
    width: 100%;
    min-height: calc(100vh - 280px);
  }
  .main-box{
    max-width: 1000px;
    width: 100%;
    min-height: 800px;
    display: flex;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 6px;
  }

  .left{
    max-width: 160px;
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fafafa;
  }
  .right{
    max-width: 75%;
    width: 100%;
    min-height: 100%;
  }

  .menu-box{
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fafafa;
  }
  .menu-box-header{
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fafafa;
  }
  .menu-box:hover{
    background-color: #e1e4ea;
  }
  .border-left-top{
    border: 1px solid #e1e2e5;
  }
</style>