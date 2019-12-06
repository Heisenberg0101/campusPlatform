<template>
	<view class="content">
		<!-- <view class="">
			<view class="class-loginBox">
				<view class="class-title">
					<text>登录</text>
				</view>
				<view class="class-loginInput">
					<text>账户：</text>
					<input type="text" value="" v-model="account"/>
				</view>
				<view class="class-loginInput">
					<text>密码：</text>
					<input type="password" value="" v-model="password" />
				</view>
				<view class="class-loginBtn">
					<button type="primary" @click="cancel">取消</button>
					<button type="primary" @click="sure">确定</button>
				</view>
			</view>
		</view> -->
		<view class="class-loginBox">
			<view class="class-title">
				<text>登录</text>
			</view>
			<view class="class-loginInput">
				<text>账户：</text>
				<input type="text" value="" v-model="account"/>
			</view>
			<view class="class-loginInput">
				<text>密码：</text>
				<input type="password" value="" v-model="password" />
			</view>
			<view class="class-loginBtn">
				<button type="primary" @click="cancel">取消</button>
				<button type="primary" @click="sure">确定</button>
			</view>
		</view>
		<uni-popup ref="popup" type="center" animation="true" maskClick="true"><text class="popup-content">{{ content }}</text></uni-popup>
		<isLock></isLock>
	</view>
</template>

<script>
	const server = require("../../common/server.js")
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	import uniSection from "../../components/uni-transition/uni-transition.vue"
	export default {
		components: {
			uniPopup,
			uniSection
		},
		data() {
			return {
				account: "",
				password: "",
				content: "",
			}
		},
		onLoad: {
			
		},
		methods: {
			sure: function() {
				uni.redirectTo({
				    url: '../list/teaIndex'
				})
				uni.request({
					url: server.baseURL + "/CloudStudyLogin",
					method: "POST",
					header: {
						"content-type": "application/x-www-form-urlencoded"
					},
					data: {
						account: this.account,
						password: this.password
					},
					success: function(r) {
						
					},
					fail: function(r) {
						this.content = "账号或密码错误！"
						this.$refs.popup.open()
					}
				})
				// let url = server.baseURL + "/CloudStudyLogin"
				// let data = {
				// 	account: this.account,
				// 	password: this.password
				// }
			},
			cancel: function() {
				uni.redirectTo({
				    url: '../list/stuIndex'
				})
				this.email = ""
				this.password = ""
				
			},
		},
	}
</script>

<style>
	/* .content {
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgb(38, 67, 49);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		color: #fff;
	}
	.content > view {
		border: 5px solid rgb(149, 163, 153);
	}
	.class-loginBox {
		width: 4rem;
		height: 2.7rem;
		margin: 0.8rem;
	}
	.class-loginBtn {
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
	}
	.class-title {
		padding-bottom: 0.45rem;
		font-size: 0.3rem;
		text-align: center;
	}
	.class-loginInput {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.2rem;
		padding: 0 0.1875rem 0.265rem 0.1875rem;
	}
	.class-loginBtn button {
	    border-radius: 0.2rem;
	    background: rgb(66,92,76) !important;
	    color: #fff !important;
		margin: 0;
		width: 1.125rem;
		height: 0.3375rem;
		border: 0.015rem solid rgb(149, 163, 153);
		margin: 0 0.1875rem;
		line-height: 0.3375rem;
		font-size: 0.12rem;
	}
	.class-loginBox input {
	    background: rgb(66,92,76);
	    border: 0.015rem solid rgb(149, 163, 153);
	    font-size: 0.16rem;
	    text-indent: 5rem;
	    color: #fff;
		width: 2.625rem;
		height: 0.3rem !important;
		min-height: 0.3rem;
	} */
	
	.content {
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgb(38, 67, 49);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		color: #fff;
	}
	.content > view {
		border: 5px solid rgb(149, 163, 153);
	}
	.class-loginBox {
		width: 400rpx;
		height: 270rpx;
		margin: 80rpx;
	}
	.class-loginBtn {
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
	}
	.class-title {
		padding-bottom: 45rpx;
		font-size: 30rpx;
		text-align: center;
	}
	.class-loginInput {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 20rpx;
		padding: 0 18.75rpx 26.5rpx 18.75rpx;
	}
	.class-loginBtn button {
	    border-radius: 20rpx;
	    background: rgb(66,92,76) !important;
	    color: #fff !important;
		margin: 0;
		width: 112.5rpx;
		height: 33.75rpx;
		border: 1.5rpx solid rgb(149, 163, 153);
		margin: 0 18.75rpx;
		line-height: 33.75rpx;
		font-size: 12rpx;
	}
	.class-loginBox input {
	    background: rgb(66,92,76);
	    border: 1.5rpx solid rgb(149, 163, 153);
	    font-size: 16rpx;
	    text-indent: 5px;
	    color: #fff;
		width: 262.5rpx;
		height: 30rpx !important;
		min-height: 30rpx;
	}
</style>
