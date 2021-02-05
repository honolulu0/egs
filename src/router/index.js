import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
	{
	  path: '/error',
	  name: '',
	  component: resolve => require(['../views/error.vue'], resolve),
	
	},
	{
		path: '/',
		name: '',
		redirect: '/index'
	},
	{
		path: '/index',
		name: 'index',
		component: index,
	},
]

const router = new VueRouter({
  routes
})

export default router