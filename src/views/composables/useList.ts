import {reactive, ref} from 'vue';

export function useList() {
	const listItem = ref('')
	const list = reactive(['苹果', '橙子', '香蕉'])

	// 验证数据
	const showRequire = ref(false)

	// 添加列表
	const add = () => {
		if (!listItem.value) {
			return showRequire.value = true
		} else {
			showRequire.value = false
		}
		list.push(listItem.value)
	}

	// 删除列表
	const remove = (index: number) => {
		list.splice(index, 1)
	}

	return {
		listItem,
		list,
		showRequire,
		add,
		remove
	}
}
