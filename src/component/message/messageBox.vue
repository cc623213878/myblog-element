<template>
	<div class="message">
		<el-input class="message-box" type="textarea" :rows="5" :placeholder="textTip" resize="none" v-model="msg" spellcheck="false" maxlength="100" show-word-limit></el-input>
		 <el-alert
    title="输入最少14个字!"
    :type="msgTip"
	:closable="false"
	:effect="coloreffect">
  </el-alert>
		<el-button v-on:click="submitMsg()">提交评论</el-button>
	</div>
</template>

<script>
export default {
	name: 'messageBox',
	props: {
		textTip: '',
		type: ''
	},
	data() {
		return {
			msg: '',
			msgTip:'info',
			coloreffect:'light'
		};
	},
	methods: {
		submitMsg(){
			if (this.msg.length<14) {
				this.msgTip='error';
				this.coloreffect='dark';
			}else{
				this.msgTip='info';
				this.coloreffect='light';
Axios.post()
			}
		}
	}
};
</script>


<style scoped>
	.message{
		margin-top: 10px;
	}
	.message-box{
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}
	.el-alert{
		padding: 3px 0 3px 0;
		margin-top: 2px;
		margin-bottom: 2px;
	}
</style>
