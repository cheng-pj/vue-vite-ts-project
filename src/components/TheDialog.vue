<template>
	<div class="" v-show="show">
		<div class="dialog-mask"></div>
		<div class="dialog-box">这是一个弹窗</div>
	</div>
</template>

<script setup>
import {watch, watchEffect} from 'vue'

const props = defineProps({
	show: Boolean
})

watchEffect(() => {
	console.log(props.show)
})
</script>

<style lang="scss" scoped>
.dialog-box {
	background-color: #ffffff;
	width: 50%;
	height: 200px;
}

.dialog-mask {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgb(51, 51, 51, 0.8);
}
</style>
