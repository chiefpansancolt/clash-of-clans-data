import * as Constants from '@/constants'
import Defense from '@IBuilderBase/defenses/roaster/defense.interface'
import Level from '@IBuilderBase/defenses/level.interface'
import TownHallDetails from '@ICommon/hall/details.interface'

const roaster: Defense = {
	name: 'Roaster',
	description:
		'Bathe foes in a fiery flood of scalding plasma! Both air and ground troops will feel the burn!',
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 10,
	mode: {
		name: Constants.mainMode,
		damageType: Constants.areaSplash,
		unitTypeTarget: Constants.groundAndAir,
		tiles: 1.2,
		minRange: 0,
		maxRange: 7,
		shotsPerAttackSpeed: 15,
		attackSpeed: 1.8,
	},
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 0, maxLevel: 0 },
		{ townHall: 4, availableCount: 0, maxLevel: 0 },
		{ townHall: 5, availableCount: 0, maxLevel: 0 },
		{ townHall: 6, availableCount: 1, maxLevel: 6 },
		{ townHall: 7, availableCount: 1, maxLevel: 7 },
		{ townHall: 8, availableCount: 1, maxLevel: 8 },
		{ townHall: 9, availableCount: 1, maxLevel: 9 },
		{ townHall: 10, availableCount: 1, maxLevel: 10 },
	],
	achievement: [],
	levels: [
		{
			level: 1,
			hitpoints: 800,
			damagePerSecond: 56,
			damagePerShot: 15,
			buildCost: 1000000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/30/Roaster1.png/revision/latest/scale-to-width-down/100?cb=20200902074125',
		},
		{
			level: 2,
			hitpoints: 950,
			damagePerSecond: 64,
			damagePerShot: 17,
			buildCost: 1200000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f2/Roaster2.png/revision/latest/scale-to-width-down/100?cb=20200902074057',
		},
		{
			level: 3,
			hitpoints: 1100,
			damagePerSecond: 72,
			damagePerShot: 19,
			buildCost: 1400000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/72/Roaster3.png/revision/latest/scale-to-width-down/100?cb=20200902074023',
		},
		{
			level: 4,
			hitpoints: 1300,
			damagePerSecond: 79,
			damagePerShot: 21,
			buildCost: 1500000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4e/Roaster4.png/revision/latest/scale-to-width-down/100?cb=20200902073956',
		},
		{
			level: 5,
			hitpoints: 1500,
			damagePerSecond: 87,
			damagePerShot: 23,
			buildCost: 1600000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 5,
			exp: 657,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/70/Roaster5.png/revision/latest/scale-to-width-down/100?cb=20200902073859',
		},
		{
			level: 6,
			hitpoints: 1700,
			damagePerSecond: 94,
			damagePerShot: 25,
			buildCost: 1700000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 6,
			exp: 720,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c7/Roaster6.png/revision/latest/scale-to-width-down/100?cb=20200902073836',
		},
		{
			level: 7,
			hitpoints: 1900,
			damagePerSecond: 102,
			damagePerShot: 27,
			buildCost: 2600000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/97/Roaster7.png/revision/latest/scale-to-width-down/100?cb=20200902073750',
		},
		{
			level: 8,
			hitpoints: 2100,
			damagePerSecond: 113,
			damagePerShot: 30,
			buildCost: 3600000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 10,
			exp: 929,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/82/Roaster8.png/revision/latest/scale-to-width-down/100?cb=20200902073711',
		},
		{
			level: 9,
			hitpoints: 2350,
			damagePerSecond: 125,
			damagePerShot: 33,
			buildCost: 4600000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 11,
			exp: 974,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b6/Roaster9.png/revision/latest/scale-to-width-down/100?cb=20200902073520',
		},
		{
			level: 10,
			hitpoints: 2600,
			damagePerSecond: 136,
			damagePerShot: 36,
			buildCost: 5600000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 12,
			exp: 1018,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/69/Roaster10.png/revision/latest/scale-to-width-down/100?cb=20230517044108',
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

export default roaster
