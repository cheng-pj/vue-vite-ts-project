import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/main/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'HomeView',
			component: HomeView
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/AboutView.vue')
		}
	]
})

export default router
