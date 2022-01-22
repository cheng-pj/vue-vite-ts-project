<template>
	<div class="about">
		<div class="box">
			<h1>{{ state.count }}</h1>
			<div style="display: flex;">
				<button @click="onClick">点击增加</button>
				<button @click="onReset">重置</button>
			</div>
		</div>
		<div class="box">
			<div style="display: flex;">
				<div style="flex: 1;">
					<h3>列表</h3>
					<ul>
						<li v-for="(item, index) in list" style="display: flex; align-items: center;">
							<div>{{ index }}--{{ item }}</div>
							<button @click="remove(index)">删除</button>
						</li>
					</ul>
					<div>
						<div class="input-text">
							<input type="text" v-model="fruit"/>
							<span class="tip" v-show="showRequire">请输入文本</span>
						</div>
						<button @click="add" style="margin-top: 10px;">添加</button>
					</div>
				</div>
				<div style="flex: 1;">
					<h3>对象</h3>
					<div>年龄: {{ person.age }}</div>
					<div>性别: {{ person.gender }}</div>
					<div>年龄: {{ person.age }}</div>
				</div>
			</div>
		</div>
		<div class="box">
			{{ foo }}
			<button @click="testRef">解构响应</button>
		</div>
		<div class="box">
			<h3>teleport</h3>
			<button>显示弹窗</button>
		</div>
	</div>
</template>
<script setup>
import {
	onActivated,
	onBeforeMount,
	onBeforeUnmount,
	onBeforeUpdate,
	onErrorCaptured,
	onMounted,
	onRenderTracked,
	onRenderTriggered,
	onUnmounted,
	onUpdated,
	reactive,
	ref
} from 'vue'

// -----------------------------------
const fruit = ref('')
const state = reactive({
	count: 0,
	arr: ['苹果', '橙子', '香蕉'],
})
// 点击
const onClick = () => {
	state.count++
}
// 重置
const onReset = () => {
	state.count = 0
}

// -----------------------------------
const showRequire = ref(false)
const person = reactive({
	// 解构会失去响应式
	name: '张三',
	gender: '男',
	age: 20
})
const list = reactive(['苹果', '橙子', '香蕉'])
// 添加列表
const add = () => {
	if (!fruit.value) {
		return showRequire.value = true
	} else {
		showRequire.value = false
	}
	list.push(fruit.value)
}
// 删除列表
const remove = (index) => {
	list.splice(index, 1)
}

//-------------------------------------------
const obj = {
	foo: ref(1),
	bar: ref(2),
}
// 具有响应式
const {foo, bar} = obj

const testRef = () => {
	foo.value = foo.value + bar.value
}

// -----------------------------------------
// 生命周期
onBeforeMount(() => console.log('beforeMount'))
onMounted(() => console.log('onMounted'))
onBeforeUpdate(() => console.log('onBeforeUpdate'))
onUpdated(() => console.log('onUpdated'))
onBeforeUnmount(() => console.log('onBeforeUnmount'))
onUnmounted(() => console.log('unmounted'))
onErrorCaptured(() => console.log('onErrorCaptured'))
onRenderTracked(() => console.log('onRenderTracked'))	// 渲染跟踪
onRenderTriggered(() => console.log('onRenderTriggered')) // 渲染触发
onActivated(() => console.log('onActivated'))

// --------------------------------------------
// 全局弹窗
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

	.box {
		background-color: rgb(253, 166, 93, 0.5);
		padding: 10px;
		border-radius: 12px;
		margin-bottom: 15px;
	}

	.btn, button {
		display: inline-block;
		padding: 5px 10px;
		background-color: #FF8243;
		border-radius: 4px;
		margin: 0.25rem 0.125rem;
		cursor: pointer;
		color: #ffffff;
		height: 30px;
		outline: none;
		border: 0;
		transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

		&:focus {
			background-color: #E26A2C;
			box-shadow: 0 0 0 0.25rem rgb(255, 130, 67, 0.5);
		}

		&:hover {
			background-color: #E26A2C;
		}
	}

	li {
		font-size: 16px;
		color: #333333;
		list-style: none;
		margin-bottom: 10px;
	}

	.input-text {
		display: flex;
		align-items: center;

		.tip {
			font-size: 14px;
			color: #ff5a4b;
			padding-left: 10px;
		}
	}

	input {
		outline: none;
		border-radius: 5px;
		border: 1px solid #FDA65D;
		background-color: #FFD07F;
		padding: 5px;
	}
}
</style>
