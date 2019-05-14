<template>
    <div>
        <el-row :gutter="5" class="content" v-for="item in articleList" :key="item.id">
            <el-col :span="4" class="content-date">
                <div>{{item.time}}</div>
            </el-col>
            <el-col :span="20">
                <div class="content-view">
                    <el-row class="content-title">
                        <router-link class="el-link el-link--default is-underline"
                                     :to="{name:'article',params: { id:item.id }}">{{item.title}}
                        </router-link>
                    </el-row>
                    <el-row class="content-described">
                        {{item.content}}
                    </el-row>
                    <el-row class="author">
                        By chchyu
                    </el-row>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-pagination
                background
                layout="prev, pager, next"
                :total="articleNum"
                :page-size="pageSize"
                :current-page="currentPage"
                @current-change="currentpagechange"
            ></el-pagination>
        </el-row>
    </div>
</template>
<script>
    //文章列表
    export default {
        components: {},
        data() {
            return {
                articleList: [],
                pageSize: 10,
                articleNum: 126,
                currentPage: 1
            };
        },
        methods: {
            //获取当前页的文章列表
            getArticle(page) {
                this.articleList = [];
                var valuebegin = (page - 1) * this.pageSize + 1;
                var valueend = valuebegin + 9;
                if (valueend > this.articleNum) {
                    valueend = this.articleNum;
                }
                for (var i = valuebegin; i <= valueend; i++) {
                    this.articleList.push({
                        id: i.toString(),
                        title: i.toString(),
                        time: '2019-2-12',
                        content: (i * 2).toString()
                    });
                }
            },
            //翻页时
            currentpagechange(pageNo) {
                this.getArticle(pageNo);
                this.currentPage = pageNo;
            }
        },
        created() {
            this.getArticle(this.currentPage);
        }
    };
</script>
<style scoped>
    .content {
        border: 1px solid #eaeefb;
        padding: 10px 5px 15px 5px;
        margin-bottom: 15px;
        color: #606266;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }

    .content-view {
        text-align: left;
        border-left: 1px solid #eaeefb;
    }

    .content-view .el-row {
        margin-left: 10px;
    }

    .content-date {
        max-width: 100px;
        min-width: 85px;
    }

    .content-date div {
        padding-right: 10px;
        margin-top: 30px;
        font-size: 14px;
    }

    .content-described {
        padding-top: 5px;
        border-top: 1px solid #eaeefb;
        font-size: 12px;
        line-height: 16px;
    }

    .content-title a {
        font-size: 20px;
        height: 30px;
    }

    .author {
        text-align: right;
        margin-right: 10px;
        font-size: 12px;
    }
</style>
