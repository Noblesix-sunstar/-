<template>
	<view id="background">
		<div class="top_info">
			<image class="icon" src="/static/icon.png"></image>
			<div class="name">{{this.$data.name}} 【学生】</div>
			<div class="role">学生</div>
			<div class="college_and_school">{{this.$data.college}}</div>
		</div>
		<div class="main">
			<div>
				<div id="check">校验码</div>
				<div id="ID">ID:{{this.$data.id}}</div>
			</div>
			<div>
				<div id="refresh">刷新获取</div>
				<image id="refresh_pic" src="/static/refresh.png"></image>
				<div id="click_refresh">点击刷新</div>
			</div>
			<div id="tools">常用工具</div>
			<div id="line1">
				<button class="sys_button" @click="jump"></button>
				<button class="jcsq_button"></button>
				<button class="jcjl_button"></button>
				<button class="xzyy_button"></button>
			</div>
			<div id="line2">
				<div class="sys" @click="jump">扫一扫</div>
				<div class="jcsq">进出申请</div>
				<div class="jcjl">进出记录</div>
				<div class="xzyy">洗澡预约</div>
			</div>
			<div id="line3">
							<button class="sqjl_button"></button>
			</div>
			<div id="line4">
				<div class="sqjl">申请记录</div>
			</div>
			<div id="bottom">
				-技术支持 南京河海科技有限公司-
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		created() {
			const eventChannel = this.getOpenerEventChannel();
			eventChannel.on('acceptDataFromOpenerPage', para=>{
				this.$data.name=para[0]
				this.$data.college=para[1]
				this.$data.school=para[2]
				this.$data.gate=para[3]
				this.$data.id=para[4]
				for(var i=0;i<5;i++){
					console.log(para[i]);
				}
			})
		}
		,
		data() {
			return {
				school:'',
				gate:'',
				name:'',
				college:'',
				id:''
			}
		},
		onLoad() {
			
		},
		methods: {
			jump(){
				uni.navigateTo({
					url:'../home/home',
					success: (res) => {
						res.eventChannel.emit('Send', [this.$data.name,this.$data.college,this.$data.school,this.$data.gate,this.$data.id])
						console.log("success")
					},
					fail:(res)=>{
						console.log(res)
					}
				})
				console.log("确定")
			},
		}
	}
</script>

<style>
	#background {
		background: -webkit-linear-gradient(#425ebf, #4f74cc); /* Safari 5.1 - 6.0 */
	
		background: -o-linear-gradient(#425ebf, #4f74cc); /* Opera 11.1 - 12.0 */
	
		background: -moz-linear-gradient(#425ebf, #4f74cc); /* Firefox 3.6 - 15 */
	
		background: linear-gradient(#425ebf, #4f74cc); /* 标准的语法（必须放在最后） */
		height:700px;
	}
	.top_info {
		height: 100px;
	}
	.icon {
		width: 72px;
		height: 72px;
		position: absolute;
		left:30px;
		top:14px;
	}
	.name {
		position: absolute;
		left:130px;
		top: 20px;
		font-size: 20px;
		font-weight: bold;
		color: white;
	}
	.role {
		position: relative;
/* 		display: inline-block; */
		left:280px;
		top: 25px;
		width: 40px;
		height:18px;
		text-align: center;
		font-size: 12px;
		color: white;
		border-radius: 3px;
		background-color: #5dc8ea;
	}
	.college_and_school {
		position: absolute;
		left:130px;
		top: 55px;
		font-size: 15px;
		color: #b6cef2;
	}
	.main {
		position: relative;
		background-color: white;
		height: calc(80vh);
		border-radius: 16px;
	}
	#check {
		position: relative;
		display: inline-block;
		top:20px;
		left:30px;
		width: 50px;
		color: #5f5f5f;
		font-weight: bold;
		font-family: ;
	}
	#ID {
		position: relative;
		display: inline-block;
		width: 130px;
		top:20px;
		left:180px;
		background-color: #0ab8ff;
		border-radius: 4px;
		color: white;
		text-align: center;
		font-size: 14px;
	}
	#refresh {
		position: relative;
		display: inline-block;
		width: 80px;
		top: 40px;
		left:30px;
		font-size: 20px;
		color:#5aaa75;
		
	}
	#refresh_pic {
		position: relative;
		display: inline-block;
		width: 15px;
		height:15px;
		top:43px;
		left:190px;
	}
	#click_refresh {
		position: relative;
		display: inline-block;
		top:40px;
		color:#8e8e8e;	
		left: 200px;
	}
	#tools {
		position: relative;
		width: 100px;
		top:60px;
		left: 30px;
		color: #5f5f5f;
		font-weight: bolder;
	}
	#line1 {
		width: 100%;
		top:80px;
		position: relative;
		display: inline-block;
	}
	.sys_button {
		position: relative;
		display: inline-block;
		background: url(../../static/scan.png); 
		width: 60px; 
		height: 60px;
		left:30px;
	}
	.jcsq_button {
		position: relative;
		display: inline-block;
		background: url(../../static/apply.png); 
		width: 60px; 
		height: 60px;
		left:60px;
	}
	.jcjl_button {
		position: relative;
		display: inline-block;
		background: url(../../static/record.png); 
		width: 60px; 
		height: 60px;
		left:90px;
	}
	.xzyy_button {
		position: relative;
		display: inline-block;
		background: url(../../static/shower.png); 
		width: 60px; 
		height: 60px;
		left:120px;
	}
	#line2 {
		width: 100%;
		top: 90px;
		position: relative;
		display: inline-block;
	}
	.sys {
		position: relative;
		display: inline-block;
		width: 60px; 
		left:30px;
		font-size: 12px;
		text-align: center;
		color: #919191;
	}
	.jcsq {
		position: relative;
		display: inline-block;
		width: 60px; 
		left:60px;
		font-size: 12px;
		text-align: center;
		color: #919191;
	}
	.jcjl {
		position: relative;
		display: inline-block;
		width: 60px; 
		left:90px;
		font-size: 12px;
		text-align: center;
		color: #919191;
	}
	.xzyy {
		position: relative;
		display: inline-block;
		width: 60px; 
		left:120px;
		font-size: 12px;
		text-align: center;
		color: #919191;
	}
	#line3 {
		width: 100%;
		top:120px;
		position: relative;
		display: inline-block;
	}
	.sqjl_button {
		position: relative;
		display: inline-block;
		background: url(../../static/apply_record.png); 
		width: 60px; 
		height: 60px;
		left:30px;
	}
	#line4 {
		width: 100%;
		top: 130px;
		position: relative;
		display: inline-block;
	}
	.sqjl {
		position: relative;
		display: inline-block;
		width: 60px; 
		left:30px;
		font-size: 12px;
		text-align: center;
		color: #919191;
	}
	#bottom {
		position: absolute;
		bottom: 20px;
		text-align: center;
		left:22%;
		font: 12px;
		color: #dbdbdb
	}
</style>

