<template>
  <div class="homeShop">
    <div class="mxx">
        
      <el-row>
        <el-button type="primary" >携带参数打开下级路由，并且携带的参数在面包屑每一级正确导航，刷新浏览器也可使用</el-button>
        <p>使用场景为某一列表的详情页面关联的数据详情的详情的详情的详情，每一层级都有参数，返回和刷新浏览器面包屑都能正确导航</p>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeShop",
  methods:{
    
  }
};
</script>
<style scoped>
.homeShop{
    background: rgb(236, 240, 245);
    width: 100%;
    height: 100%;
    padding: 10px;
    }
.mxx{
    height: 155px;
    background: #fff;
    padding: 10px;
}
</style>