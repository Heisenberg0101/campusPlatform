<template>
	<view id="id-lock">
		<image src="../static/logo.png" mode=""></image>
	</view>
</template>

<script>
	
</script>

<style>
	#id-lock {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background:rgba(0, 0, 0, 0.4);
		opacity:0.6;
		display:none; 
		z-Index:999;  
	}
	#id-lock image {
		width: 190rpx;
		height: 190rpx;
		z-index: 1000;
	}
</style>
