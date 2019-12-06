<template>
	<view class="">
		<view class="class-navBar">
			
		</view>
		<view class="class-mainCot">
			<view class="class-topTeaInfo">
				<view class="class-header-data">
					<view class="class-headPhoto">
						<image src="../../../static/indexImg/teaCorrectList.png" mode=""></image>
						<!-- <text>wo</text> -->
					</view>
					<view class="class-teaNameClass">
						<view class="">
							老师老师
						</view>
						<view class="uni-list-cell-db">
							<picker :range="classList" @change="pickClass" :value='classIndex'>
								<view class='uni-input'>{{classList[classIndex]}}</view>
							</picker>
						</view>
					</view>
				</view>
				<view class="class-header-image">
					<image src="../../static/indexImg/teaTitleName.png" mode=""></image>
				</view>
			</view>
			<view class="class-middle-block">
				<view class="class-middleImgBlock">
					<view class="">
						<image src="../../../static/indexImg/lockScreen.png" mode=""></image>
					</view>
					<view class="">
						<image src="../../../static/indexImg/stuMonitor.png" mode=""></image>
					</view>
					<view class="" @click='smartClass'>
						<image src="../../../static/indexImg/boardManage.png" mode=""></image>
					</view>
				</view>
				<view class="class-middleImgBlock">
					<view class="">
						<image src="../../../static/indexImg/subjectiveQue.png" mode=""></image>
					</view>
					<view class="">
						<image src="../../../static/indexImg/objectiveQue.png" mode=""></image>
					</view>
					<view class="">
						<image src="../../../static/indexImg/classroomCount.png" mode=""></image>
					</view>
				</view>
			</view>	
		</view>
		<view class="class-bottomBlock">
			<view class="class-bottomLeftBlock">
				<image src="../../../static/indexImg/teaReturn.png" mode=""></image>
			</view>
			<view class="class-bottomRightBlock">
				<image src="../../../static/indexImg/returnDoor.png" mode=""></image>
			</view>
		</view>
		<view class="class-topRightIcons">
			<view class="">
				<image src="../../../static/indexImg/upLoad.png" mode=""></image>
			</view>
			<view class="">
				<image src="../../../static/indexImg/min.png" mode=""></image>
			</view>
		</view>
		<view class="class-rightThreeIcons">
			<view class="">
				<image src="../../../static/indexImg/nailIcon.png" mode=""></image>
			</view>
			<view class="">
				<image src="../../../static/indexImg/canvas.png" mode=""></image>
			</view>
			<view class="">
				<image src="../../../static/indexImg/toolbox.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	const server = require("../../../common/server.js")
	export default {
		data() {
			return {
				classList: ["一（1）班", "一（2）班", "一（3）班"],
				classIndex: 0,
			}
		},
		onLoad: {
			
		},
		methods: {
			pickClass: function(e) {
				this.classIndex = e.target.value
			},
			smartClass: function() {
				uni.redirectTo({
				    url: '../list/smartClass/smartClass'
				})
			}
		}
	}
</script>

<style>	
	.class-navBar {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 8.5%;
		background: rgb(227, 221, 207);
	}
	.class-mainCot {
		position: absolute;
		top: 8.5%;
		left: 0;
		width: 100%;
		/* height: calc(100%-40rpx); */
		height: 91.5%;
		background: rgb(38, 67, 49) ;
	}
	.class-bottomBlock {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
	}
	.class-topTeaInfo {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 18.94%;
	}
	.class-middle-block {
		position: absolute;
		top: 19%;
		left: 0;
		width: 100%;
		/* height: 100%; */
		height: 81%;
	}
	.class-middleImgBlock {
		 display: flex;
		 justify-content: space-between;
		 width: 100%;
		 /* padding: 25rpx 170rpx 0 170rpx; */
		 padding: 20rpx 280rpx 0 280rpx;
	}
	.class-middleImgBlock > view {
		width: 180rpx;
		height: 180rpx;
	}
	.class-middleImgBlock image {
		width: 100%;
		height: 100%;
	}
	.class-bottomLeftBlock {
		position: absolute;
		bottom: 20rpx;
		left: 20rpx;
		width: 65rpx;
		height: 65rpx;
	}
	.class-bottomBlock image {
		width: 100%;
		height: 100%;
	}
	.class-bottomRightBlock {
		position: absolute;
		bottom: 20rpx;
		right: 20rpx;
		width: 65rpx;
		height: 65rpx;
	}
	.class-header-data {
		position: absolute;
		top: 0;
		left: 0;
		width: 280rpx;
		heigth: 100%;	
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.class-header-image {
		position: absolute;
		top: 0;
		left: 280rpx;
		width: calc(100% - 560rpx);
		height: 100%;
		/* text-align: center; */
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}
	.class-header-image image {
		width: 460rpx;
		height: 80rpx;
	}
	.class-headPhoto {
		padding: 10%;
	}
	.class-headPhoto image {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}
	.class-headPhoto text {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		color: #fff;
	}
	.class-teaNameClass {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-size: 12rpx;
		color: #fff;
		width: 100%;
		height: 60rpx;
	}
	.class-topRightIcons {
		position: absolute;
		top: 10%;
		right: 2%;
	}
	.class-topRightIcons view {
		display: inline-block;
		padding-left: 20rpx;
	}
	.class-topRightIcons image {
		width: 60rpx;
		height: 50rpx;
	}
	.class-rightThreeIcons {
		position: absolute;
		top: 20%;
		right: 2%;
	}
	.class-rightThreeIcons image {
		width: 50rpx;
		height: 60rpx;
	}
</style>
