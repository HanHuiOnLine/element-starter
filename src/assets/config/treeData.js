const TreeData = {
	data: [{
			id: '1',
			label: 'AchievementUI(成就系统)',
			leaf: true
		},
		{
			id: '2',
			label: 'ActivityUI(活动文件夹)',
			children: [{
					id: '2-1',
					label: 'ActivityDT(活动列表)',
					leaf: true
				},
				{
					id: '2-2',
					label: 'AdvanceRankPanel(坐骑,精灵等排名)',
					leaf: true
				},
				{
					id: '2-3',
					label: 'Boss(仙魔挑战)',
					leaf: true
				},
				{
					id: '2-4',
					label: 'CarnivaActivity(狂欢活动-废弃)',
					leaf: true
				},
				{
					id: '2-5',
					label: 'CommonGigt(通用活动礼包)',
					leaf: false,
					children: [
						{
							id: '2-5-1',
							label: 'CommonG1通用礼包1',
							leaf: true
						},
						{
							id: '2-5-2',
							label: 'CommonG2通用礼包2-弃用',
							leaf: true
						}
					]
				},
				{
					id: '2-6',
					label: 'CountActivityTask(计数任务)',
					leaf: false,
					children: [
						{
							id: '2-6-1',
							label: 'AdventurePanel(奇遇献礼)',
							leaf: true
						},
						{
							id: '2-6-2',
							label: 'BWYBPanel(百万元宝)',
							leaf: true
						},
						{
							id: '2-6-3',
							label: 'CZPanel(坐骑精灵等累计充值)',
							leaf: true
						},
						{
							id: '2-6-4',
							label: 'dailyCharge(运营活动-连续充值)',
							leaf: true
						},
						{
							id: '2-6-5',
							label: 'DailydailyChargePanel(福利大厅-每日累充-废弃)',
							leaf: true
						},
						{
							id: '2-6-6',
							label: 'DBHDPanel(开服活动-藏宝图等)',
							leaf: true
						},
						{
							id: '2-6-7',
							label: 'FastLevelPanel(快速升级)',
							leaf: true
						},
						{
							id: '2-6-8',
							label: 'GiftpackagePanel(福利大厅-直购礼包-废弃)',
							leaf: true
						},
						{
							id: '2-6-9',
							label: 'GradeGiftPanel(福利大厅-等级礼包)',
							leaf: true
						},
						{
							id: '2-6-10',
							label: 'HLCZPanel(豪礼充值)',
							leaf: true
						},
						{
							id: '2-6-11',
							label: 'JinJieBaojiPanel(进阶暴击)',
							leaf: true
						},
						{
							id: '2-6-12',
							label: 'JJPanel(坐骑精灵等进阶)',
							leaf: true
						},
						{
							id: '2-6-13',
							label: 'LCFLPanel(福利大厅-连充返利-废弃)',
							leaf: true
						},
						{
							id: '2-6-14',
							label: 'LCHGigtPanel(开服活动-累充有礼-弃用)',
							leaf: true
						},
						{
							id: '2-6-15',
							label: 'LevelHDPanel(福利大厅-等级目标-废弃)',
							leaf: true
						},
						{
							id: '2-6-16',
							label: 'LJShopPanel(开服活动-累消有礼)',
							leaf: true
						},
						{
							id: '2-6-17',
							label: 'LoginYBPanel(福利大厅-送元宝)',
							leaf: true
						},
						{
							id: '2-6-18',
							label: 'LXCZPanel(福利大厅-连续充值-废弃)',
							leaf: true
						},
						{
							id: '2-6-19',
							label: 'MoneyRankPanel(开服活动-充值排行)',
							leaf: true
						},
						{
							id: '2-6-20',
							label: 'MRQDPanel(福利大厅-每日签到-废弃)',
							leaf: true
						},
						{
							id: '2-6-21',
							label: 'PassCheckPanel(封神令牌)',
							leaf: true
						},
						{
							id: '2-6-22',
							label: 'RankNamePanel(充值排行-废弃)',
							leaf: true
						},
						{
							id: '2-6-23',
							label: 'TGHDPanel(开服活动-首充团购)',
							leaf: true
						},
						{
							id: '2-6-24',
							label: 'TK_activePanel(封神令牌-激活面板)',
							leaf: true
						},
						{
							id: '2-6-25',
							label: 'ZKpackagePanel(折扣礼包-废弃)',
							leaf: true
						},
						{
							id: '2-6-26',
							label: 'ZLlHDPanel(战力目标-废弃)',
							leaf: true
						},

					]
				},
				{
					id: '2-7',
					label: 'DLHL-DLHLActivity(登陆豪礼)',
					leaf: true
				},
				{
					id: '2-8',
					label: 'GodTower-GodTowerPanel(新服目标)',
					leaf: true
				},
				{
					id: '2-9',
					label: 'JJGift-JJGiftPanel(境界礼包-废弃)',
					leaf: true
				},
				{
					id: '2-10',
					label: 'KuaFu(跨服)',
					leaf: false,
					children: [
						{
							id: '2-10-1',
							label: 'AKF_Desc_Panel(帮会战-废弃)',
							leaf: true
						},
						{
							id: '2-10-2',
							label: 'AKF_Member_Panel(帮会战-组队)',
							leaf: true
						},
						{
							id: '2-10-3',
							label: 'AKF_Resule_Panel(帮会战-结果界面)',
							leaf: true
						},
						{
							id: '2-10-4',
							label: 'AKF_Team_Panel(帮会战-组队界面)',
							leaf: true
						},
						{
							id: '2-10-5',
							label: 'GW_JRLD_Panel(帮会战-进入龙殿界面)',
							leaf: true
						},
						{
							id: '2-10-6',
							label: 'GW_JRLD_Panel(帮会战-进入龙殿界面)',
							leaf: true
						},
						{
							id: '2-10-7',
							label: 'GW_Rank_Panel(帮会战-排行界面)',
							leaf: true
						},
						{
							id: '2-10-8',
							label: 'GW_RankReward_Panel(帮会首领-排名奖励)',
							leaf: true
						},
						{
							id: '2-10-9',
							label: 'GW_RankReward_Panel(帮会战-积分奖励)',
							leaf: true
						},
						{
							id: '2-10-10',
							label: 'GW_SLD_Panel(帮会战最后一层-神龙鼎)',
							leaf: true
						},
						{
							id: '2-10-11',
							label: 'LobbyGangWarPanel(帮会战战斗场景)',
							leaf: true
						},
						{
							id: '2-10-12',
							label: 'LobbyNinePanel(九重天战斗场景)',
							leaf: true
						},
						{
							id: '2-10-13',
							label: 'ND_Rank_Panel(日常-活动-九重天-排名)',
							leaf: true
						},
						{
							id: '2-10-14',
							label: 'ND_RankNow_Panel(九重天-排名)',
							leaf: true
						},

					]
				},
				{
					id: '2-11',
					label: 'LimitTimeGift-LimitTimeGiftPanel(限时礼包-废弃)',
					leaf: true
				},
				{
					id: '2-12',
					label: 'OFFlineHarvest-OFFlineHarvestPanel(离线收益)',
					leaf: true
				},
				{
					id: '2-13',
					label: 'Puzzle(拼图活动-废弃)',
					leaf: true
				},
				{
					id: '2-14',
					label: 'TZFL-TZFLPanel(基金)',
					leaf: true
				},
				{
					id: '2-15',
					label: 'TZJH-TZJHPanel(投资-废弃)',
					leaf: true
				},
				{
					id: '2-16',
					label: 'WelfareSign(福利大厅-福利签到)',
					leaf: true
				},
				{
					id: '2-17',
					label: 'Xmcelebration(仙魔庆典)',
					leaf: true
				},
				{
					id: '2-18',
					label: 'XYuanGiftBag(X元礼包)',
					leaf: true
				},
				{
					id: '2-19',
					label: 'XunBao(寻宝)',
					leaf: false,
					children: [
						{
							id: '2-19-1',
							label: 'ShenZhuangXunBaoPanel(神装寻宝-废弃)',
							leaf: true
						},
						{
							id: '2-19-2',
							label: 'TreasureHuntTB1(寻仙)-废弃',
							leaf: true
						},
						{
							id: '2-19-3',
							label: 'TreasureHuntTB1Preview(寻仙预览)-废弃',
							leaf: true
						},
						{
							id: '2-19-4',
							label: 'TreasureHuntTB2(超级红宠-抽奖转盘)',
							leaf: true
						},
						{
							id: '2-19-5',
							label: 'TreasureHuntTB3(仙魔庆典-充值转盘-废弃)',
							leaf: true
						},
						{
							id: '2-19-6',
							label: 'TreasureHuntTB4(仙魔庆典-庆典转盘-废弃)',
							leaf: true
						},
						{
							id: '2-19-7',
							label: 'TreasureRewardAlert(转盘-恭喜获得)',
							leaf: true
						},
						{
							id: '2-19-8',
							label: 'XFShenshouPanel(金宠任务-废弃)',
							leaf: true
						},
						{
							id: '2-19-9',
							label: 'XiangFuMoShouGain(神兽之灵获取途径)',
							leaf: true
						},
						{
							id: '2-19-10',
							label: 'XiangFuMoShouPanel(降服神兽-废弃)',
							leaf: true
						},
						{
							id: '2-19-11',
							label: 'XunbaoBasePanel(寻宝老ui-废弃)',
							leaf: true
						},
						{
							id: '2-19-12',
							label: 'XunbaoBasePanel2(宠物,仙侣寻宝通用界面)',
							leaf: true
						},
						{
							id: '2-19-13',
							label: 'XunbaoDuiHuan1Alert(寻宝确认面板)',
							leaf: true
						},
						{
							id: '2-19-14',
							label: 'XunbaoGoodsShowAlert(寻宝概率预览)',
							leaf: true
						},
						{
							id: '2-19-15',
							label: 'XunBaoPanel(寻宝大框)',
							leaf: true
						},
						{
							id: '2-19-16',
							label: 'XunBaoRwwardAlert(寻宝-获得奖励展示)',
							leaf: true
						},
					]
				},
				{
					id: '2-20',
					label: 'YaoQianShu(摇钱树)',
					leaf: false,
					children: [
						{
							id: '2-20-1',
							label: 'ActivityYaoQianShu(福利大厅-摇钱树)',
							leaf: true
						},
						{
							id: '2-20-2',
							label: 'ActivityYaoQianShuBox(福利大厅-摇钱树宝箱)',
							leaf: true
						},
					]
				},
				{
					id: '2-21',
					label: 'activeCommonCard(月卡-至尊卡)',
					leaf: false,
					children: [
						{
							id: '2-21-1',
							label: 'activeCommonCard(月卡)',
							leaf: true
						},
						{
							id: '2-21-2',
							label: 'extremeCard(至尊卡)',
							leaf: true
						},
					]
				},
				{
					id: '2-22',
					label: 'activityRecharge(充值面板)',
					leaf: true
				},
				{
					id: '2-23',
					label: 'dailyPrice(充值)',
					leaf: false,
					children: [
						{
							id: '2-23-1',
							label: 'activeDailyCharge(每日首充-废弃)',
							leaf: true
						},
						{
							id: '2-23-2',
							label: 'activeDailyPrice(每日豪礼-废弃)',
							leaf: true
						},
						{
							id: '2-23-3',
							label: 'activeUpgradeNow(直升一阶-废弃)',
							leaf: true
						},
						{
							id: '2-23-4',
							label: 'collectPrice(收藏有礼-废弃)',
							leaf: true
						},
						{
							id: '2-23-5',
							label: 'firstInvite(首次邀请-废弃)',
							leaf: true
						},
						{
							id: '2-23-6',
							label: 'focusPrice(关注有礼-废弃)',
							leaf: true
						},

					]
				},
				{
					id: '2-24',
					label: 'discountShopMall(坐骑,精灵排名-折扣商店)',
					leaf: true
				},
				{
					id: '2-25',
					label: 'firstRecharge(首充)',
					leaf: false,
					children: [
						{
							id: '2-25-1',
							label: 'firstCharge2(老首充-废弃)',
							leaf: true
						},
						{
							id: '2-25-2',
							label: 'firstChargeTimeTipes(老首充倒计时时间tips-废弃)',
							leaf: true
						},
						{
							id: '2-25-3',
							label: 'firstChargeTips(老首充魔童tips-废弃)',
							leaf: true
						},
						{
							id: '2-25-4',
							label: 'NewFirstCharge(新首充)',
							leaf: true
						},
						{
							id: '2-25-5',
							label: 'TwoFirstCharge(首充后每日充值)',
							leaf: true
						},

					]
				},
				{
					id: '2-26',
					label: 'giftBag1(飞跃仙巅,一元秒杀)',
					leaf: true
				},
				{
					id: '2-27',
					label: 'mouseYearCollect(鼠年活动)',
					leaf: false,
					children: [
						{
							id: '2-27-1',
							label: 'mouseYearCollect(集字有礼-废弃)',
							leaf: true
						},
						{
							id: '2-27-2',
							label: 'mouseYearFreeExtreme(免费至尊-废弃)',
							leaf: true
						},
						{
							id: '2-27-3',
							label: 'mouseYearPanel(鼠年活动大框)',
							leaf: true
						},
					]
				},
				{
					id: '2-28',
					label: 'onlinePrice(在线礼包)',
					leaf: true
				},
				{
					id: '2-29',
					label: 'returnCommonCard(终身返利-废弃)',
					leaf: true
				},
				{
					id: '2-30',
					label: 'Activity_Desc_Panel(活动预告)',
					leaf: true
				},
				{
					id: '2-31',
					label: 'ActivityButton(活动图标按钮)',
					leaf: true
				},
				{
					id: '2-32',
					label: 'ActivityButton1(活动图标按钮1-在线礼包使用)',
					leaf: true
				},
				{
					id: '2-33',
					label: 'ActivityCDKEY(福利大厅-激活码)',
					leaf: true
				},
				{
					id: '2-34',
					label: 'ActivityGongGao(活动公告-废弃)',
					leaf: true
				},
				{
					id: '2-35',
					label: 'ActivityYYExchange(兑换元宝)',
					leaf: true
				},
				{
					id: '2-36',
					label: 'ActivityYYExchangeEff(兑换元宝-暴击ui)',
					leaf: true
				},
				{
					id: '2-37',
					label: 'FLDTPanel(福利大大厅框架)',
					leaf: true
				},
				{
					id: '2-38',
					label: 'operateActivity(运营活动框架)',
					leaf: true
				},
			]
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
				leaf: _tmp.leaf ? _tmp.leaf : false
			};
			_rList.push(_tmpData);
		}
		return _rList;
	},
	b: {},
	//获取其他目录
	getOtherLevel() {
		let _list = TreeData.data;
		for (let i = 0, l = _list.length; i < l; i++) {
			let _tmp = _list[i];
			TreeData.b[_tmp.id] = _tmp;
			if (_tmp.children) {
				TreeData.getOtherLevel1(_tmp);
			}
		}
	},
	getOtherLevel1(obj) {
		for (let i = 0, l = obj.children.length; i < l; i++) {
			let _tmp =  obj.children[i];
			TreeData.b[_tmp.id] = _tmp;
			if (_tmp.children) {
				TreeData.getOtherLevel1(_tmp);
			}
		}
	}
}
export default TreeData;