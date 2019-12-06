<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			plus.screen.lockOrientation('landscape-primary')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	/* @import './common/uni.css'; */
	@import './common/popup.css';
	@import "colorui/main.css";
	@import "colorui/icon.css";
</style>
