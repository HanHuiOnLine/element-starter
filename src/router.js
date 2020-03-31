/*
 * @Author: 韩辉
 * @Date: 2020-03-18 18:08:10
 * @LastEditTime: 2020-03-26 15:55:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \src\router.js
 */
const routers = [{
	path: '/',
	meta: {
		title: '大框'
	},
	component: (resolve) => require(['./assets/views/windowBig.vue'], resolve),
	children: [
		{
			path: '/',
			redirect: '/homePage'
		},
		{
			path: '/homePage',
			meta: {
				title: '首页'
			},
			component: (resolve) => require(['./assets/views/homePage.vue'], resolve)
		},
		{
			path: '/timeLine',
			meta: {
				title: '版本变更历史'
			},
			component: (resolve) => require(['./assets/views/timeLine.vue'], resolve)
		},
		{
			path: '/componentTree',
			meta: {
				title: '预制件目录'
			},
			component: (resolve) => require(['./assets/views/componentTree.vue'], resolve)
		}
	]
}];
export default routers;