import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import PastOrders from '../views/PastOrders.vue'
import CheckOut from '../views/CheckOut';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/products',
		name: 'Products',
		component: Products
	},
	{
		path: '/past-orders',
		name: 'PastOrders',
		component: PastOrders
	},
	{
		path: '/checkout',
		name: 'CheckOut',
		component: CheckOut
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
