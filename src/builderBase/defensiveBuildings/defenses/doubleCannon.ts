import * as Constants from '@/constants'
import Defense from '@IBuilderBase/defenses/doubleCannon/defense.interface'
import Level from '@IBuilderBase/defenses/level.interface'
import TownHallDetails from '@ICommon/hall/details.interface'

const doubleCannon: Defense = {
	name: 'Double Cannon',
	description:
		'The iconic ground defense, built to last! This classic makes the Master Builder a bit sentimental.',
	maxCount: 3,
	width: 3,
	height: 3,
	maxLevel: 10,
	mode: {
		name: Constants.mainMode,
		damageType: Constants.singleTarget,
		unitTypeTarget: Constants.ground,
		shotsPerBurst: 4,
		minRange: 0,
		maxRange: 7,
		attackSpeed: 1.6,
	},
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 1, maxLevel: 2 },
		{ townHall: 3, availableCount: 1, maxLevel: 3 },
		{ townHall: 4, availableCount: 1, maxLevel: 4 },
		{ townHall: 5, availableCount: 2, maxLevel: 5 },
		{ townHall: 6, availableCount: 2, maxLevel: 6 },
		{ townHall: 7, availableCount: 2, maxLevel: 7 },
		{ townHall: 8, availableCount: 3, maxLevel: 8 },
		{ townHall: 9, availableCount: 3, maxLevel: 9 },
		{ townHall: 10, availableCount: 3, maxLevel: 10 },
	],
	achievement: [],
	levels: [
		{
			level: 1,
			hitpoints: 600,
			damagePerSecond: 84,
			damagePerShot: 50,
			buildCost: 20000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 10,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 24,
			townHallLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cc/Double_Cannon1.png/revision/latest/scale-to-width-down/90?cb=20171108155759',
		},
		{
			level: 2,
			hitpoints: 690,
			damagePerSecond: 92,
			damagePerShot: 55,
			buildCost: 50000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 1,
			buildTimeDay: 0,
			exp: 60,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/0c/Double_Cannon2.png/revision/latest/scale-to-width-down/90?cb=20171108155800',
		},
		{
			level: 3,
			hitpoints: 800,
			damagePerSecond: 103,
			damagePerShot: 61,
			buildCost: 80000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 3,
			buildTimeDay: 0,
			exp: 103,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/98/Double_Cannon3.png/revision/latest/scale-to-width-down/90?cb=20171108155801',
		},
		{
			level: 4,
			hitpoints: 910,
			damagePerSecond: 113,
			damagePerShot: 67,
			buildCost: 300000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/63/Double_Cannon4.png/revision/latest/scale-to-width-down/90?cb=20171108155801',
		},
		{
			level: 5,
			hitpoints: 1050,
			damagePerSecond: 125,
			damagePerShot: 74,
			buildCost: 900000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/de/Double_Cannon5.png/revision/latest/scale-to-width-down/90?cb=20171108155801',
		},
		{
			level: 6,
			hitpoints: 1250,
			damagePerSecond: 136,
			damagePerShot: 81,
			buildCost: 1400000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/75/Double_Cannon6.png/revision/latest/scale-to-width-down/90?cb=20171108155802',
		},
		{
			level: 7,
			hitpoints: 1450,
			damagePerSecond: 150,
			damagePerShot: 89,
			buildCost: 2200000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bd/Double_Cannon7.png/revision/latest/scale-to-width-down/90?cb=20171108155802',
		},
		{
			level: 8,
			hitpoints: 1700,
			damagePerSecond: 165,
			damagePerShot: 98,
			buildCost: 3200000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 6,
			exp: 720,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6c/Double_Cannon8.png/revision/latest/scale-to-width-down/90?cb=20171108155802',
		},
		{
			level: 9,
			hitpoints: 1950,
			damagePerSecond: 182,
			damagePerShot: 108,
			buildCost: 4200000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ee/Double_Cannon9.png/revision/latest/scale-to-width-down/90?cb=20190616215121',
		},
		{
			level: 10,
			hitpoints: 2200,
			damagePerSecond: 202,
			damagePerShot: 120,
			buildCost: 5200000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 10,
			exp: 929,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/df/Double_Cannon10.png/revision/latest/scale-to-width-down/90?cb=20230516071432',
		},
	],
	getSize(): string {
		return `${this.width}x${this.height}`
	},
	getLevel(level: number): Level | undefined {
		if (level >= 1 && level <= this.levels.length) {
			return this.levels[level - 1]
		} else {
			console.error(`Invalid ${this.name} level: ${level}`)
			return undefined
		}
	},
	getTownHallLevel(level: number): TownHallDetails | undefined {
		if (level >= 1 && level <= this.townHallDetails.length) {
			return this.townHallDetails[level - 1]
		} else {
			console.error(`Invalid Town Hall level: ${level}`)
			return undefined
		}
	},
}

export default doubleCannon
