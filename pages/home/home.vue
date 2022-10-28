<template>
	<view class="content">
		<div class="top_info">
			<image class="icon" src="/static/icon.png"></image>
			<div class="name">{{this.$data.name}}</div>
			<div class="college_and_school">{{this.$data.college}} ({{this.$data.school}})</div>
		</div>
		<div class="info_show">
			<div class="time">{{this.$data.dateTime['month']}}月{{this.$data.dateTime['day']}}日 {{this.$data.dateTime['hour']}}:{{this.$data.dateTime['minute']}}</div>
			<image class="qcode" src="/static/green_code.jpg"></image>
			<div class="greetings">祝你平安</div>
			<div class="gate_info">门岗-{{this.$data.school}}{{this.$data.gate}} (出门码) </div>
		</div>
		<div class="bottom_info">技术支持-南京河海科技有限公司</div>
	</view>
</template>

<script>
	export default{
		created() {
			const eventChannel = this.getOpenerEventChannel();
			eventChannel.on('Send', para=>{
				this.$data.name=para[0]
				this.$data.college=para[1]
				this.$data.school=para[2]
				this.$data.gate=para[3]
				console.log(para)
			})
			this.dateTimeStr()
		},
		data() {
			return {
				school:'single everyday university',
				gate:'阿门',
				name:'张三',
				college:'摸鱼学院',
				dateTime:{
					'year':2022,
					'month':1,
					'day':10,
					'hour':14,
					'minute':47
					
				}
			}
		},
		onLoad() {
			
		},
		methods:{
			dateTimeStr(){
				var date = new Date(),
					year = date.getFullYear(), //年
					month = date.getMonth() + 1, //月
					day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(), //日
					hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(), //时
					minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(); //分
					// second = date.getSeconds() < 10 ? date.getSeconds() : date.getSeconds(); //秒
					if(month<10){
						month='0'+String(month)
					}
				this.$data.dateTime['year']=year
				this.$data.dateTime['month']=month
				this.$data.dateTime['day']=day
				this.$data.dateTime['hour']=hour
				this.$data.dateTime['minute']=minute
				console.log(this.$data.dateTime)
			}
		}
	}
</script>

<style>
	.content {
		background: -webkit-linear-gradient(#6e89d8, #48c6ee); /* Safari 5.1 - 6.0 */

		background: -o-linear-gradient(#6e89d8, #48c6ee); /* Opera 11.1 - 12.0 */

		background: -moz-linear-gradient(#6e89d8, #48c6ee); /* Firefox 3.6 - 15 */

		background: linear-gradient(#6e89d8, #48c6ee); /* 标准的语法（必须放在最后） */
		height:calc(100vh);
	}
	.top_info {
		height: 100px;
	}
	.icon {
		width: 72px;
		height: 72px;
		position: absolute;
		left:2%;
		top:14px;
	}
	.name {
		position: absolute;
		left:100px;
		top: 20px;
		font-size: 20px;
		font-weight: bold;
		color: white;
	}
	.college_and_school {
		position: absolute;
		left:100px;
		top: 55px;
		font-size: 15px;
		color: #d9e9ff;
	}
	.info_show {
		border-radius: 20px;
		/* border-color: #454547; */
		/* border-style: solid; */
		height: 550px;
		margin-left: 3%;
		margin-right: 3%;
		background: white;
	}
	.qcode {
		width: 200px;
		height: 200px;
		position: absolute;
		left:26%;
		top:35%;
	}
	.time {
		position: absolute;
		font-size: 30px;
		color: #60a6e4;
		font-weight: bold;
		/* left: 21%; */
		width: 96%;
		top: 25%;
		text-align: center;
	}
	.greetings {
		position: absolute;
		/* left:35%; */
		color: #14c559;
		text-align: center;
		width: 96%;
		top: 63%;
		font-size:28px;
		font-weight: bold;
	}
	.gate_info {
		position: absolute;
		/* left:35%; */
		color: #14c559;
		text-align: center;
		width: 96%;
		top: 68%;
		font-size:18px;
	}
	.bottom_info {
		text-align: center;
		width: 100%;
		position: absolute;
		bottom: 2%;
		font-size: 5px;
		color: #a0ecff;
	}
</style>
