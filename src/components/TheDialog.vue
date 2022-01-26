<template>
	<div class="dialog-wrapper" v-show="show" :style="style">
		<div class="dialog-box">
			<div class="dialog-content">
				<p>这是一段内容</p>
			</div>
			<div class="dialog-btn">
				<button @click="onClose">关闭</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import {reactive, watch} from 'vue'

const props = defineProps({
	show: {
		type: Boolean,
		default: false
	}
})
const emit = defineEmits(['update:show'])

const style = reactive({
	zIndex: 2000,
})

watch(() => props.show, (val) => {
	if (val) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'auto'
	}
})

const onClose = () => {
	emit('update:show', false)
}
</script>

<style lang="scss" scoped>
.dialog-box {
	display: inline-block;
	width: 420px;
	padding-bottom: 10px;
	vertical-align: middle;
	border-radius: 4px;
	background-color: rgb(255 255 255);
	border: 1px solid rgb(235 238 245);
	font-size: 18px;
	box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
	text-align: left;
	overflow: hidden;
	backface-visibility: hidden;
}

.dialog-wrapper {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgb(51, 51, 51, 0.8);
	text-align: center;

	&:after {
		content: "";
		display: inline-block;
		height: 100%;
		width: 0;
		vertical-align: middle;
	}
}

.dialog-btn {
	padding: 5px 15px 0;
	text-align: right;
}

.dialog-content {
	padding: 10px 15px;
	color: rgb(96 98 102);
	font-size: 14px;
}
</style>
