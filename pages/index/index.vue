<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<div class="info_show">
			
			<view class="text-box">
				<view class="hint">输入姓名</view>
				<input class="uni-input" focus placeholder="张三" @input="input_name"/>
				<view class="hint">输入学院信息</view>
				<input class="uni-input" focus placeholder="摸鱼学院" @input="input_college"/>
				<view class="hint">输入id</view>
				<input class="uni-input" focus placeholder="810975" @input="input_id"/>
			</view>
			<picker mode="selector" :range="school_list" range-key="school_name" @change="school_select">
				<view class="hint">{{chosen_school}}</view>
			</picker>
			<picker mode="selector" :range="gate_list" range-key="gate_name" @change="gate_select">
				<view class="hint">{{chosen_gate}}</view>
			</picker>
			<button class="confirm" @click="jump">确定</button>
		</div>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '河海智行 难民版',
				school_list: [
					{id:1, school_name: '江宁校区'},
					{id:2, school_name: '西康路校区'}
				],
				chosen_school:'选择校区',
				gate_list: [
					{id:1, gate_name: '东门'},
					{id:2, gate_name: '南门'},
					{id:3, gate_name: '西门'},
					{id:4, gate_name: '北门'},
				],
				chosen_gate:'选择大门',
				name:'张三',
				college:'摸鱼学院',
				id:'810975'
			}
		},
		onLoad() {

		},
		methods: {
			school_select(e){
				const index = e.detail.value
				// console.log(e)
				// console.log(index)
				this.chosen_school=this.school_list[index].school_name
				console.log(this.chosen_school)
			},
			gate_select(e){
				const index = e.detail.value
				// console.log(index)
				this.chosen_gate=this.gate_list[index].gate_name
				console.log(this.chosen_gate)
			},
			jump(){
				uni.navigateTo({
					url:'../menu/menu',
					success: (res) => {
						res.eventChannel.emit('acceptDataFromOpenerPage', [this.$data.name,this.$data.college,this.$data.chosen_school,this.$data.chosen_gate,this.$data.id])
						console.log("success")
					},
					fail:(res)=>{
						console.log(res)
					}
				})
				console.log("确定")
			},
			input_name(e){
				console.log(e.detail.value)
				this.name=e.detail.value
			},
			input_college(e){
				console.log(e.detail.value)
				this.college=e.detail.value
			},
			input_id(e){
				console.log(e.detail.value)
				this.id=e.detail.value
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: -webkit-linear-gradient(#6e89d8, #48c6ee); /* Safari 5.1 - 6.0 */
		
		background: -o-linear-gradient(#6e89d8, #48c6ee); /* Opera 11.1 - 12.0 */
		
		background: -moz-linear-gradient(#6e89d8, #48c6ee); /* Firefox 3.6 - 15 */
		
		background: linear-gradient(#6e89d8, #48c6ee); /* 标准的语法（必须放在最后） */
		height:700px;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
		color: #0A0A0A;
		margin-bottom: 50px;
	}

	.title {
		font-size: 36rpx;
		color: #ffffff;
		font-weight: bold;
	}
	.uni-input {
		height: 50rpx;
		padding: 15rpx 25rpx;
		line-height:50rpx;
		font-size:28rpx;
		background:#FFF;
		flex: 1;
	}
	
	.text-box {
		margin-top: 20px;
		text-align: center;
		color: #6e89d8;
		/* border-radius: 8px; */
		/* border: solid;
		border-width: 4px; */
	}
	.info_show {
		/* margin-top: 60px; */
		border-radius: 20px;
		/* border-color: #454547; */
		/* border-style: solid; */
		height: 450px;
		/* margin-left: 3%; */
		/* margin-right: 3%; */
		background: white;
	}
	.hint {
		margin-top: 20px;
		text-align: center;
	}
	.confirm {
		margin-top: 50px;
		width: 50%;
		background-color: gray;
	}
</style>
