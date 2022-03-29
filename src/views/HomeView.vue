<template>
  <div class="home">
    <div>
      <el-container>
        <el-header class="headera">
          <div class="bt" ><p>ElementUi后台管理系统</p></div>
          <div></div>
          <div>
            <el-dropdown>
              <img src="@/assets/logo.png" alt="" class="img" />
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>首页</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
      </el-container>
    </div>
    <el-container>
      <el-aside style="background-color: rgb(50, 64, 87)" class="aside">
        <el-menu
          background-color="rgb(50, 64, 87)"
          text-color="#fff"
          :router="true"
        >
          <!-- 一级菜单 -->
          <el-menu-item class="item" index="/">
            <!-- 首页 -->
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!-- 二级菜单 -->
          <el-submenu index="2" class="item">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1"><i class="el-icon-chat-round"></i> 文章列表</el-menu-item>
              <el-menu-item index="2-2"><i class="el-icon-chat-round"></i> 多层路由示例</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <!-- 面包屑导航 -->
          <div>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item>首页</el-breadcrumb-item>
              <el-breadcrumb-item
                v-for="(item, index) in this.$route.meta"
                :key="index"
                >{{ item }}</el-breadcrumb-item
              >
            </el-breadcrumb>
          </div>
        </el-header>
        <el-main>
          <!-- 二级路由出口组件 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
<style scoped>
.aside {
  height: 100vh;
}
.item {
  background: rgb(50, 64, 87);
  color: #fff;
}
.item span {
  color: #fff;
}
.img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
}
.headera{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2167df;
  position: relative;
}
 .bt{
  background: #67a0da;
  width: 300px;
  height: 100%;
  text-align: center;
  line-height: 30px;
  position: absolute;
  left: 0;
}
</style>

