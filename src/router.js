/*
 * @Author: 韩辉
 * @Date: 2020-03-18 18:08:10
 * @LastEditTime: 2020-03-18 19:19:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \src\router.js
 */
const routers = [{
	path: '/',
	meta: {
		title: '首页'
	},
	component: (resolve) => require(['./assets/views/windowBig.vue'], resolve),
	children: [{
		path: '/timeLine',
		meta: {
			title: '版本变更历史'
		},
		component: (resolve) => require(['./assets/views/timeLine.vue'], resolve)
	}]
}];
export default routers;