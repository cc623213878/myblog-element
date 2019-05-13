<template>
    <div id="articleView">
        <div class="content">
            <h2 class="content-title">vue.js的axios的get,post方法</h2>
            <div class="content-data">chchyu</div>
            <el-divider></el-divider>
            <div class="content-data">2019-2-12</div>
            <h1>
                <a href="#kjpush介绍" name="kjpush介绍"></a>
                KJPush介绍
            </h1>
            <p>
                KJPush是一个Android推送框架，目标是让Android开发者一人无需与服务端开发者交流也能完成推送功能开发
                <br/>
                不同于现有的第三方推送服务(极光、个推、百度等)以socket长连接的形式实现推送，KJPush采用轮询机制更适合轻量级应用快速完成推送功能开发。很多人认为长连接没有任何消耗，其实不然。如果轮询策略配置的好，消耗的电与数据流量绝不比维持一个socket连接使用的多。
            </p>
            <h2><a href="#欢迎你访问" name="欢迎你访问"></a>
                欢迎你访问
            </h2>
            <pre><code class="javascript">router.push({ path: 'home' })
const userId = '123'
router.push({ name: 'user', params: { userId }}) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123
// 这里的 params 不生效
router.push({ path: '/user', params: { userId }}) // -> /user
</code></pre>
            <div class="tag">
                <el-tag color="white">javascript</el-tag>
            </div>
        </div>
        <messageBox textTip="请输入文章评论!" type="articleReview"/>
        <article-message></article-message>
    </div>
</template>

<script>
    import messageBox from '../message/messageBox.vue';
    import ArticleMessage from "~/component/message/articleMessage";

    export default {
        name: 'articleView',
        components: {
            ArticleMessage,
            messageBox
        },
        data() {
            return {
                id: this.$route.params.id
            };
        }
    };
</script>

<style scoped>
    .content {
        color: #475669;
        border: 1px solid #eaeefb;
        padding: 15px;
        border-radius: 5px;
        box-shadow: 0 0 12px 1px rgba(0, 0, 0, 0.1);
    }

    .content-data {
        font-size: 12px;
        text-align: right;
        margin-right: 15px;
    }

    .el-divider {
        margin-bottom: 3px;
        margin-top: 3px;
    }

    pre {
        margin: 15px 0 15px 0;
        background-color: #282c34;
        padding: 15px 15px 15px 30px;
        border-radius: 4px;
        border-left: 6px solid #516363;
        overflow-x: auto;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;
        color: #fff;
        font-size: 0.85em;
        line-height: 1.8;
    }

    .el-tag {
        color: #475669;
        border: 1px solid rgba(0, 0, 0, 0.1);
    }
</style>
