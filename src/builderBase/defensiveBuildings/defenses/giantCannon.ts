import * as Constants from '@/constants'
import Defense from '@IBuilderBase/defenses/defense.interface'
import Level from '@IBuilderBase/defenses/level.interface'
import BuilderHallDetails from '@IBuilderBase/builderHall/details.interface'

const giantCannon: Defense = {
	name: 'Giant Cannon',
	description:
		'Nothing gets in the way of the Giant Cannon. Its mammoth-sized cannon balls push past anything and keeps going and going and going...',
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 10,
	mode: {
		name: Constants.mainMode,
		damageType: Constants.areaSplash,
		unitTypeTarget: Constants.ground,
		minRange: 0,
		maxRange: 9.5,
		attackSpeed: 5,
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
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 4,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 5,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 6,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 1,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 7,
			availableCount: 1,
			maxLevel: 7,
			stage1MaxCount: 1,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 8,
			availableCount: 1,
			maxLevel: 8,
			stage1MaxCount: 1,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 9,
			availableCount: 1,
			maxLevel: 9,
			stage1MaxCount: 1,
			stage2MaxCount: 1,
		},
		{
			builderHallLevel: 10,
			availableCount: 1,
			maxLevel: 10,
			stage1MaxCount: 1,
			stage2MaxCount: 1,
		},
	],
	achievement: [],
	levels: [
		{
			level: 1,
			hitpoints: 700,
			damagePerSecond: 41,
			damagePerShot: 205,
			buildCost: 2000000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Giant_Cannon1.png/revision/latest/scale-to-width-down/100?cb=20190616233921',
		},
		{
			level: 2,
			hitpoints: 800,
			damagePerSecond: 45,
			damagePerShot: 225,
			buildCost: 2100000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cf/Giant_Cannon2.png/revision/latest/scale-to-width-down/100?cb=20190616233937',
		},
		{
			level: 3,
			hitpoints: 950,
			damagePerSecond: 49,
			damagePerShot: 245,
			buildCost: 2200000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/72/Giant_Cannon3.png/revision/latest/scale-to-width-down/100?cb=20190616233954',
		},
		{
			level: 4,
			hitpoints: 1100,
			damagePerSecond: 54,
			damagePerShot: 270,
			buildCost: 2300000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/09/Giant_Cannon4.png/revision/latest/scale-to-width-down/100?cb=20190616234009',
		},
		{
			level: 5,
			hitpoints: 1300,
			damagePerSecond: 60,
			damagePerShot: 300,
			buildCost: 2400000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 5,
			exp: 657,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8b/Giant_Cannon5.png/revision/latest/scale-to-width-down/100?cb=20190616234026',
		},
		{
			level: 6,
			hitpoints: 1500,
			damagePerSecond: 66,
			damagePerShot: 330,
			buildCost: 2500000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 6,
			exp: 720,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/77/Giant_Cannon6.png/revision/latest/scale-to-width-down/100?cb=20190616234044',
		},
		{
			level: 7,
			hitpoints: 1700,
			damagePerSecond: 72,
			damagePerShot: 360,
			buildCost: 2700000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6a/Giant_Cannon7.png/revision/latest/scale-to-width-down/100?cb=20190616234105',
		},
		{
			level: 8,
			hitpoints: 1900,
			damagePerSecond: 79,
			damagePerShot: 395,
			buildCost: 3800000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 10,
			exp: 929,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9a/Giant_Cannon8.png/revision/latest/scale-to-width-down/100?cb=20190616234124',
		},
		{
			level: 9,
			hitpoints: 2150,
			damagePerSecond: 87,
			damagePerShot: 435,
			buildCost: 4700000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 11,
			exp: 974,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/63/Giant_Cannon9.png/revision/latest/scale-to-width-down/100?cb=20190621202618',
		},
		{
			level: 10,
			hitpoints: 2400,
			damagePerSecond: 96,
			damagePerShot: 480,
			buildCost: 5700000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 12,
			exp: 1018,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/65/Giant_Cannon10.png/revision/latest/scale-to-width-down/100?cb=20230517045117',
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
	getBuilderHallLevel(level: number): BuilderHallDetails | undefined {
		if (level >= 1 && level <= this.builderHallDetails.length) {
			return this.builderHallDetails[level - 1]
		} else {
			console.error(`Invalid Town Hall level: ${level}`)
			return undefined
		}
	},
}

export default giantCannon
