import * as Constants from '@/constants'
import DefenseBuilding from '@IBuilderBase/defenses/hiddenTesla/defense.interface'
import { getHallLevel, getLevel, getSize } from '@Utils/buildings.utility'

const building: DefenseBuilding = {
	name: 'Hidden Tesla',
	description: 'Part tower, part trap, completely shocking! Zap air and ground foes alike with the power of science!',
	maxCount: 3,
	width: 2,
	height: 2,
	maxLevel: 10,
	mode: {
		damageType: Constants.singleTarget,
		unitTypeTarget: Constants.groundAndAir,
		minRange: 0,
		maxRange: 7,
		triggerRange: 6,
		attackSpeed: 0.6,
	},
	builderHallDetails: [
		{
			builderHallLevel: 1,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 2,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 3,
			availableCount: 1,
			maxLevel: 3,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 4,
			availableCount: 1,
			maxLevel: 4,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 5,
			availableCount: 1,
			maxLevel: 5,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 6,
			availableCount: 2,
			maxLevel: 6,
			stage1MaxCount: 3,
			stage2MaxCount: 3,
		},
		{
			builderHallLevel: 7,
			availableCount: 3,
			maxLevel: 7,
			stage1MaxCount: 3,
			stage2MaxCount: 3,
		},
		{
			builderHallLevel: 8,
			availableCount: 3,
			maxLevel: 8,
			stage1MaxCount: 3,
			stage2MaxCount: 3,
		},
		{
			builderHallLevel: 9,
			availableCount: 3,
			maxLevel: 9,
			stage1MaxCount: 3,
			stage2MaxCount: 3,
		},
		{
			builderHallLevel: 10,
			availableCount: 3,
			maxLevel: 10,
			stage1MaxCount: 3,
			stage2MaxCount: 3,
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 60,
			damagePerShot: 36,
			hitpoints: 300,
			buildCost: 50000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 30,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 42,
			builderHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/81/Hidden_Tesla1.png/revision/latest/scale-to-width-down/80?cb=20180606190107',
		},
		{
			level: 2,
			damagePerSecond: 66,
			damagePerShot: 40,
			hitpoints: 350,
			buildCost: 100000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 3,
			buildTimeDay: 0,
			exp: 103,
			builderHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Hidden_Tesla2.png/revision/latest/scale-to-width-down/80?cb=20180606190121',
		},
		{
			level: 3,
			damagePerSecond: 73,
			damagePerShot: 44,
			hitpoints: 400,
			buildCost: 150000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 5,
			buildTimeDay: 0,
			exp: 134,
			builderHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fb/Hidden_Tesla3.png/revision/latest/scale-to-width-down/80?cb=20180606190137',
		},
		{
			level: 4,
			damagePerSecond: 80,
			damagePerShot: 48,
			hitpoints: 460,
			buildCost: 280000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 10,
			buildTimeDay: 0,
			exp: 189,
			builderHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/54/Hidden_Tesla4.png/revision/latest/scale-to-width-down/80?cb=20180606190150',
		},
		{
			level: 5,
			damagePerSecond: 88,
			damagePerShot: 53,
			hitpoints: 550,
			buildCost: 700000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			builderHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e9/Hidden_Tesla5.png/revision/latest/scale-to-width-down/80?cb=20180606190204',
		},
		{
			level: 6,
			damagePerSecond: 96,
			damagePerShot: 58,
			hitpoints: 650,
			buildCost: 1300000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			builderHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d7/Hidden_Tesla6.png/revision/latest/scale-to-width-down/80?cb=20180606190216',
		},
		{
			level: 7,
			damagePerSecond: 106,
			damagePerShot: 64,
			hitpoints: 750,
			buildCost: 2100000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			builderHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/79/Hidden_Tesla7.png/revision/latest/scale-to-width-down/80?cb=20180606190230',
		},
		{
			level: 8,
			damagePerSecond: 116,
			damagePerShot: 70,
			hitpoints: 850,
			buildCost: 3100000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 6,
			exp: 720,
			builderHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4f/Hidden_Tesla8.png/revision/latest/scale-to-width-down/80?cb=20180606190243',
		},
		{
			level: 9,
			damagePerSecond: 128,
			damagePerShot: 77,
			hitpoints: 1000,
			buildCost: 4100000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			builderHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e3/Hidden_Tesla9.png/revision/latest/scale-to-width-down/80?cb=20180606190256',
		},
		{
			level: 10,
			damagePerSecond: 141,
			damagePerShot: 85,
			hitpoints: 1150,
			buildCost: 5100000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 10,
			exp: 929,
			builderHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/37/Hidden_Tesla10.png/revision/latest/scale-to-width-down/80?cb=20180604161808',
		},
	],
	getSize: () => getSize(building.width, building.height),
	getLevel: (level: number) => getLevel(building.levels, level, 'level'),
	getBuilderHallLevel: (level: number) => getHallLevel(building.builderHallDetails, level, 'builderHallLevel'),
}

export default building
