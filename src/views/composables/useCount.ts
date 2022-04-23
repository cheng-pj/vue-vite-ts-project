import {reactive} from "vue";

export function useCount() {
	const state = reactive({
		count: 0
	})
	// 点击
	const onClick = () => {
		state.count++
	}
	// 重置
	const onReset = () => {
		state.count = 0
	}

	return {
		state,
		onClick,
		onReset
	}
}
