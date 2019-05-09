<template>
    <div id="app">
        <el-container class="app-body">
            <el-header class="header">
                <el-row>
                    <el-col :span="4">
                        <a href="#">
                            <img class="logo" src="./assets/logo.png"/>
                        </a>
                    </el-col>
                    <el-col :span="6"><div ></div></el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-aside class="sider" width="200px">
                    <el-divider>关于我</el-divider>
                    <div>
                    {{mydescribed}}
                    </div>
                    <el-divider></el-divider>
                    <el-row class="sider-title" v-for="item in 9">
                        <el-link href="#">{{item}}{{item}}{{item}}{{item}}{{item}}{{item}}{{item}}</el-link>
                    </el-row>
                    <el-divider></el-divider>
                    <span>捐赠</span>
                    <div class="block">
                        <el-carousel height="150px">
                            <el-carousel-item v-for="item in 2" :key="item">
                                <h3 class="small">{{ item }}</h3>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </el-aside>
                <el-container>
                    <el-main>
                        <el-row :gutter="5" class="content">
                            <el-col :span="4">
                                <div class="content-date">
                                    2019-04-12
                                </div>
                            </el-col>
                            <el-col :span="20">
                                <div class="content-view">
                                    <el-row class="content-title"><el-link :underline="false">1111111111</el-link></el-row>
                                    <el-row class="content-described"><el-link :underline="false">dddddddddddd</el-link></el-row>
                                    <el-row class="author"><el-link :underline="false">aaaaaaaaa</el-link></el-row>
                                </div>
                            </el-col>
                        </el-row>
                        <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1000"
                            :page-size="pageSize"
                            :current-page="currentPage"
                            @current-change="currentpagechange">
                        </el-pagination>
                    </el-main>
                </el-container>
            </el-container>
            <el-footer class="footer" height="20px">
                <el-link>blog.chchyu.cn</el-link> @2019
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import ElContainer from "../node_modules/element-ui/packages/container/src/main.vue";
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
        ElAside,
        ElContainer},
    methods: {
        currentpagechange(pageNo) {
            this.currentPage=pageNo;
        }
    },
    data(){
        return{
            pageSize:10,
            currentPage:1,
            mydescribed:"111111111111"
        }
    }
}
</script>

<style>
    html,body{
        padding: 0;
        margin: 0;
        height: 100%;
    }
    #app {
        font-family: Helvetica, sans-serif;
        text-align: center;
        height: 100%;
    }
    .logo{
        height: 59px;
        font-family: "STCaiyun";
        font-size: 40px;
        text-align: left;
        color: #409EFF;
    }
    .header{
        border-bottom: 1px solid rgba(68, 158, 255, 0.39);
        margin: 0 10px 0 10px;
    }
    .app-body{
        height: 100%;
    }
    .sider{
        border-right: 1px solid #eaeefb;
    }
    .sider-title{
        height: 20px;
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
    .content{
        height: 150px;
        border: 1px solid #eaeefb;
        padding: 10px 5px 10px 5px;
    }
    .content-view {
        text-align: left;
        height: 130px;
    }
    .content-view .el-row{
        margin-left: 10px;
    }
     .content-date{
         line-height: 130px;
         border-right: 1px solid #eaeefb;
         height: 130px;
     }
     .content-described{
         border-top: 1px solid #eaeefb;
         height: 80px ;
     }
     .content-described a{
         font-size: 16px;
     }
     .content-title a{
         font-size: 30px;
         height: 30px;
     }
     .author{
         text-align: right;
         margin-right: 10px;
     }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
