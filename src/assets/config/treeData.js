const TreeData = {
	data: [{
			id: '1',
			label: 'AchievementUI(成就系统)',
			leaf: true
		},
		{
			id: 2,
			label: 'ActivityUI(活动文件夹)'
		},
		{
			id: 3,
			label: 'AmenityTipsUI(快速换装备)'
		},
		{
			id: 4,
			label: 'ArenaUI(竞技场,仙道会,王者争霸)'
		},
		{
			id: 5,
			label: 'BagUI(背包)'
		},
		{
			id: 6,
			label: 'BossUI(首领)'
		},
		{
			id: 7,
			label: 'ChatUI(聊天)'
		},
		{
			id: 8,
			label: 'DaNianUI(龙宫夺宝)'
		},
		{
			id: 9,
			label: 'DailyTaskUI(日常任务系统)'
		},
		{
			id: 10,
			label: 'DivineSoulUI(圣魂)'
		},
		{
			id: 11,
			label: 'EquipDevUI(装备)'
		},
		{
			id: 12,
			label: 'EquipShopUI(装备商店)'
		},
		{
			id: 13,
			label: 'FightUI(boss来袭)'
		},
		{
			id: 14,
			label: 'FriendUI(好友)'
		},
		{
			id: 15,
			label: 'FuBenUI(副本)'
		},
		{
			id: 16,
			label: 'Gang(帮会)'
		},
		{
			id: 17,
			label: 'Grade(进阶)'
		},
		{
			id: 18,
			label: 'Guide(新手引导)'
		},
		{
			id: 19,
			label: 'ImperialUI(科举比赛)'
		},
		{
			id: 20,
			label: 'InitRoleInfo(角色信息)'
		},
		{
			id: 21,
			label: 'JinJieJiangLi(进阶奖励)'
		},
		{
			id: 22,
			label: 'Kid(仙童)'
		},
		{
			id: 23,
			label: 'KuaFuUI(跨服)'
		},
		{
			id: 24,
			label: 'MainCityUI(主城)'
		},
		{
			id: 25,
			label: 'MarriageUi(结婚系统)'
		},
		{
			id: 26,
			label: 'MasterUi(师徒)'
		},

		{
			id: 27,
			label: 'PlayerUi(其他玩家信息)'
		},
		{
			id: 28,
			label: 'RankUI(排行榜)'
		},
		{
			id: 29,
			label: 'RebateTurnTable(幸运转盘)'
		},
		{
			id: 30,
			label: 'Reconnection(断线重连)'
		},
		{
			id: 31,
			label: 'RedBag(红包)'
		},
		{
			id: 32,
			label: 'RedDot(小红点系统)'
		},
		{
			id: 33,
			label: 'RoleUI(角色)'
		},
		{
			id: 34,
			label: 'RunesUI(符文)'
		},
		{
			id: 35,
			label: 'SendShopUI(寄售行)'
		},
		{
			id: 36,
			label: 'StrengthUI(我要变强)'
		},
		{
			id: 37,
			label: 'Verified(实名认证)'
		},
		{
			id: 38,
			label: 'VipUI(vip相关)'
		},
		{
			id: 39,
			label: 'WestExpUI(护送神女)'
		},
		{
			id: 40,
			label: 'XuanNVUI(玄女,神女)'
		},
		{
			id: 41,
			label: 'common(通用)'
		},
		{
			id: 42,
			label: 'login(登陆注册)'
		},
		{
			id: 43,
			label: 'mail(邮件)'
		},
		{
			id: 44,
			label: 'pet(宠物)'
		},
		{
			id: 45,
			label: 'petA(仙侣)'
		},
		{
			id: 46,
			label: 'realm(境界)'
		},
		{
			id: 47,
			label: 'shopMall(商店相关)'
		},
		{
			id: 48,
			label: 'uiHelper(通用小组件)'
		},
		{
			id: 49,
			label: 'worldMap(世界地图)'
		},
	],
	//获取一级目录
	getFirstLevel: function () {
		let _list = TreeData.data;
		let _rList = [];
		for (let i = 0, l = _list.length; i < l; i++) {
			let _tmp = _list[i];
			let _tmpData = {
				id: _tmp.id,
				label: _tmp.label,
				leaf: _tmp.leaf?_tmp.leaf:false
			};
			_rList.push(_tmpData);
		}
		return _rList;
	}
}
export default TreeData;