<template>
  <div>
    <el-row :gutter="5" class="content" v-for="item in onpagenow(currentPage*pageSize)" :key="item">
      <el-col :span="4">
        <div class="content-date">2019-04-12</div>
      </el-col>
      <el-col :span="20">
        <div class="content-view">
          <el-row class="content-title">
            <el-link :underline="false">{{item}}Html空格字符语法代码</el-link>
          </el-row>
          <el-row class="content-described">
            <el-link :underline="false">
              &amp;nbsp;
              <br>空格字符由&+n+b+s+p+;组成字符，后面的分号记住不能少了。这组空格字符一定输入到HTML代码里，才能实现空格效果。
            </el-link>
          </el-row>
          <el-row class="author">
            <el-link :underline="false">By chchyu</el-link>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="50"
        :page-size="pageSize"
        :current-page="currentPage"
        @current-change="currentpagechange"
      ></el-pagination>
    </el-row>
  </div>
</template>
<script>
import ElRow from "element-ui/packages/row/src/row";
import ElLink from "../../node_modules/element-ui/packages/link/src/main.vue";
import ElContainer from "../../node_modules/element-ui/packages/container/src/main.vue";
export default {
  components: {
    ElLink,
    ElRow,
    ElContainer
  },
  methods: {
    currentpagechange(pageNo) {
      this.currentPage = pageNo;
    },
    onpagenow: function(value) {
      this.article = [];
      for (var i = value - 9; i <= value; i++) {
        this.article.push(i);
      }
      return this.article;
    }
  },
  data() {
    return {
      article: [],
      pageSize: 10,
      currentPage: 1
    };
  }
};
</script>
<style>
.content {
  height: 150px;
  border: 1px solid #eaeefb;
  padding: 10px 5px 10px 5px;
  margin-bottom: 20px;
}
.content-view {
  text-align: left;
  height: 130px;
}
.content-view .el-row {
  margin-left: 10px;
}
.content-date {
  padding-right: 10px;
  font-size: 14px;
  line-height: 130px;
  border-right: 1px solid #eaeefb;
  height: 130px;
}
.content-described {
  border-top: 1px solid #eaeefb;
  height: 80px;
}
.content-described a {
  font-size: 14px;
  line-height: 16px;
}
.content-title a {
  font-size: 20px;
  height: 30px;
}
.author {
  text-align: right;
  margin-right: 10px;
}
</style>
