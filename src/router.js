import { createWebHistory, createRouter } from 'vue-router';
import Intro from './components/Intro.vue';
import MainMenu from './components/MainMenu.vue';

const routes = [
	{
		path: '/',
		name: 'Intro',
		component: Intro,
	},
    {
		path: '/menu',
		name: 'MainMenu',
		component: MainMenu,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

export default router;