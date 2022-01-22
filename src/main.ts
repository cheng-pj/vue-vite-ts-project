import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

import {
	// create naive ui
	create,
	// component
	NButton
} from 'naive-ui'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const naive = create({
	components: [NButton]
})
app.use(naive)

app.mount('#app')
