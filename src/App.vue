<template>
  <el-container class="app-body">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <a href="#">
            <img class="logo" src="./assets/logo.png">
          </a>
        </el-col>
        <el-col :span="6">
          <div></div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="sider" width="200px">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="关于我" name="1" class="friend">
            <div>{{mydescribed}}</div>
          </el-collapse-item>
          <el-collapse-item title="最新文章" name="2" class="friend">
            <el-row class="sider-title" v-for="item in 9" :key="item">
              <el-link href="#">{{item}}</el-link>
            </el-row>
          </el-collapse-item>
          <el-collapse-item title="友情链接" name="3" class="friend">
            <div></div>
          </el-collapse-item>
          <el-collapse-item title="捐赠" name="4" class="friend">
            <div class="block">
              <el-carousel height="150px">
                <el-carousel-item v-for="item in 2" :key="item">
                  <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <el-footer class="footer" height="20px">
      <el-link>blog.chchyu.cn</el-link>&nbsp;&nbsp;&nbsp;&nbsp;@2019
    </el-footer>
  </el-container>
</template>

<script>
import ElAside from "../node_modules/element-ui/packages/aside/src/main.vue";
import ElHeader from "../node_modules/element-ui/packages/header/src/main.vue";
import ElMain from "../node_modules/element-ui/packages/main/src/main.vue";
import ElFooter from "../node_modules/element-ui/packages/footer/src/main.vue";
import ElRow from "element-ui/packages/row/src/row";
import ElLink from "../node_modules/element-ui/packages/link/src/main.vue";
export default {
  components: {
    ElLink,
    ElRow,
    ElFooter,
    ElMain,
    ElHeader,
    ElAside
  },
  methods: {},
  data() {
    return {
      activeNames: ["1", "2", "4"],
      mydescribed: "111111111111"
    };
  }
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  text-align: center;
  height: 100%;
}
.logo {
  height: 59px;
}
.header {
  line-height: 20px;
  border-bottom: 1px solid rgba(68, 158, 255, 0.39);
  margin: 0 10px 0 10px;
}
.footer {
  font-size: 12px;
  border-top: 1px solid rgba(68, 158, 255, 0.39);
  text-align: center;
  color: #475669;
}
.app-body {
  height: 100%;
}
.sider {
  padding-top: 5px;
  border-right: 1px solid #eaeefb;
}
.sider-title {
  text-align: left;
  margin-left: 10px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-collapse-item__content {
  padding-bottom: 5px;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-collapse-item__header {
  height: 35px;
  padding-left: 20px;
}
</style>
