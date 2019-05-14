<template>
    <el-container class="app-body">
        <el-header class="header" style="height: 61px;">
            <el-row>
                <el-col>
                    <el-menu :default-active="activeIndex" mode="horizontal" class="el-menu-demo" router>
                        <el-menu-item>
                            <a href="/">
                                <img class="logo" src="./assets/logo.png">
                            </a>
                        </el-menu-item>
                        <el-menu-item index="/home">博文</el-menu-item>
                        <el-menu-item>
                            <el-link :underline="false" href="#">MAX导航</el-link>
                        </el-menu-item>
                        <el-menu-item index="/message">留言</el-menu-item>
                        <el-menu-item index="/user">用户登录</el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside class="sider" width="200px">
                <el-collapse v-model="activeNames">
                    <el-collapse-item title="关于我" name="1" class="friend">
                        <div></div>
                    </el-collapse-item>
                    <el-collapse-item title="最新文章" name="2" class="friend">
                        <el-row class="sider-title" v-for="item in 9" :key="item">
                            <el-link href="#">{{item}}</el-link>
                        </el-row>
                    </el-collapse-item>
                    <el-collapse-item title="友情链接" name="3" class="friend">
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
                <el-main style="padding: 0" class="main-body-view" id="scroll-view" v-on:scroll.native="setViewPoint">
                    <div id="mainBody">
                        <div class="main-body-view-content">
                            <router-view></router-view>
                        </div>
                        <el-footer class="footer" height="20px">
                            <el-link>blog.chchyu.cn</el-link>&nbsp;&nbsp;&nbsp;&nbsp;@2019
                        </el-footer>
                        <div class="scroll-bar" id="scroll-bar">
                            <el-slider
                                v-model="viewPoint"
                                :show-tooltip="false"
                                vertical
                                :max="scrollviewhideHeight"
                                :height="scrollBarHeight">
                            </el-slider>
                        </div>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                activeNames: ["1", "2", "4"],
                mydescribed: "111111111111",
                activeIndex: "home",
                viewPoint: 100,
                scrollviewhideHeight: 100,
                scrollmultiple: 1,
                mainBodyHeight: 0,
                scrollBarHeight: (document.body.clientHeight - 181).toString() + 'px',
            };
        },
        created: function () {
            window.onresize = () => {
                return (() => {
                    this.scrollBarChange();
                    this.scrollBarHeight = (document.body.clientHeight - 181).toString() + 'px';
                })()
            };
        },
        mounted: function () {
            this.scrollBarChange();
        },
        updated: function () {
            this.mainBodyHeight = document.getElementById('mainBody').clientHeight;
        },
        watch: {
            viewPoint: function () {
                document.getElementById('scroll-view').scrollTop = (this.scrollviewhideHeight - this.viewPoint) / this.scrollmultiple;
            },
            mainBodyHeight: function () {
                this.scrollBarChange();
            }
        },
        methods: {
            scrollBarChange() {
                this.mainBodyHeight = document.getElementById('mainBody').offsetHeight;
                this.scrollviewhideHeight = this.mainBodyHeight - (document.body.clientHeight - 61);
                if (this.scrollviewhideHeight < 100) {
                    this.scrollmultiple = 100 / this.scrollviewhideHeight;
                    this.scrollviewhideHeight = 100;
                } else {
                    this.scrollmultiple = 1;
                }
                this.viewPoint = this.scrollviewhideHeight;
            },
            setViewPoint() {
                this.viewPoint = this.scrollviewhideHeight - document.getElementById('scroll-view').scrollTop * this.scrollmultiple;
            }
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

    .main-body-view-content {
        padding: 15px 40px 15px 15px;
    }

    .main-body-view {
        position: relative;
    }

    .main-body-view::-webkit-scrollbar {
        display: none;
    }

    .scroll-bar {
        position: fixed;
        top: 101px;
        right: 0;
        z-index: 2;
    }

    .el-slider__bar {
        background-color: #E4E7ED;
    }

    .logo {
        height: 54px;
    }

    .header {
        border-bottom: 1px solid #e6e6e6;
        margin: 0;
        padding-bottom: 1px;
    }

    .footer {
        font-size: 12px;
        border-top: 1px solid #e6e6e6;
        text-align: center;
        color: #475669;
    }

    .app-body {
        height: 100%;
    }

    .sider {
        border-right: 1px solid #eaeefb;
        box-shadow: 0 0 12px 1px rgba(0, 0, 0, 0.1);
    }

    .sider::-webkit-scrollbar {
        position: fixed;
        display: none;
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
