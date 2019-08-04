<template>
  <el-container class="wrapper">
    <el-aside :width="isCollapse ? '60px' : '200px'">
      <div class="logo" :class="{ Menulogo: isCollapse }"></div>
      <el-menu
        router
        :collapse="isCollapse"
        :collapse-transition="false"
        :default-active="$route.path"
        background-color="#002033"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <!-- el-submenu 是菜单项包含子级菜单 -->
        <!-- el-menu-item 是菜单项不包含子级菜单 -->
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="/images">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="/public">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发表文章</span>
        </el-menu-item>
        <el-menu-item index="/comments">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="/setting">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <span class="el-icon-s-fold" @click="toggleMenu()"></span>
        <span class="text">江苏传智播客科技教育有限公司</span>
        <el-dropdown class="my-dropdown">
          <span class="el-dropdown-link">
            <img src="../../assets/images/avatar.jpg" alt />
            下拉菜单
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock">推出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <!-- 二级路由 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    toggleMenu() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style scoped lang="less">
.wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  //   background-color: #ccc;

  .el-aside {
    background: #002033;
  }
  .el-header {
    line-height: 60px;
    border-bottom: 1px solid #ddd;
    .el-icon-s-fold {
      font-size: 24px;
      vertical-align: middle;
    }
    .text {
      vertical-align: middle;
      margin-left: 10px;
    }
    .my-dropdown {
      float: right;
      font-weight: bold;
      img {
        height: 30px;
        width: 30px;
        vertical-align: middle;
      }
    }
  }
}
.logo {
  height: 60px;
  width: 100%;
  background: #002244 url(../../assets/images/logo_admin.png) no-repeat center /
    140px auto;
}
.Menulogo {
  background-image: url(../../assets/images/logo_admin_01.png);
  background-size: 36px auto;
}
.el-menu {
  border-right: none;
}
</style>
