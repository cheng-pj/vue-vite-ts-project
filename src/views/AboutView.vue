<template>
	<div class="about">
		<h1>{{ state.count }}</h1>
		<div style="display: flex;">
			<button class="btn" @click="onClick">点击增加</button>
			<button class="btn" @click="onReset">重置</button>
		</div>
	</div>
</template>
<script>
import {reactive} from 'vue'

export default {

	setup() {
		const state = reactive({count: 0})

		const onClick = (val) => {
			console.log('点击', val)
			state.count++
		}

		const onReset = () => {

		}


		return {state, onClick, onReset}
	}
}
</script>
<style lang="scss">
@media (min-width: 1024px) {
	.about {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
}

.about {
	background-color: #FFD07F;
	border-radius: 12px;
	padding: 10px;
	color: #333333;

	.btn {
		padding: 5px 10px;
		background-color: #FF8243;
		border-radius: 4px;
		margin-right: 5px;
		cursor: pointer;
		border: 0px solid transparent;
		color: #ffffff;
		transition: all 0.3s ease;
		border

		&:hover {
			background-color: #FDA65D;
		}

		&:focus {
			border: 2px solid rgba(255, 130, 67, 0.5);
		}
	}
}
</style>
