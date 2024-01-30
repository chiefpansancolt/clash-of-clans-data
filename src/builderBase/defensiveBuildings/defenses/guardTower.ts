import * as Constants from '@/constants'
import Defense from '@IBuilderBase/defenses/guardTower/defense.interface'
import Level from '@IBuilderBase/defenses/guardTower/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const guardTower: Defense = {
	name: 'Guard Tower',
	description:
		'Houses troops to aid in defense! These rabble rousers are sure to slow down the enemy.',
	maxCount: 1,
	width: 2,
	height: 2,
	maxLevel: 10,
	mode: [],
	troops: [
		{
			name: 'Raged Barbarian',
			availableCount: 1,
		},
		{
			name: 'Sneaky Archer',
			availableCount: 1,
		},
	],
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 0, maxLevel: 0 },
		{ townHall: 4, availableCount: 1, maxLevel: 4 },
		{ townHall: 5, availableCount: 1, maxLevel: 5 },
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
			hitpoints: 300,
			troopLevel: 2,
			buildCost: 200000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 4,
			buildTimeDay: 0,
			exp: 120,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/63/Guard_Post1.png/revision/latest/scale-to-width-down/100?cb=20171109182016',
		},
		{
			level: 2,
			hitpoints: 350,
			troopLevel: 4,
			buildCost: 240000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 8,
			buildTimeDay: 0,
			exp: 169,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/ba/Guard_Post2.png/revision/latest/scale-to-width-down/100?cb=20171109182017',
		},
		{
			level: 3,
			hitpoints: 400,
			troopLevel: 6,
			buildCost: 280000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cd/Guard_Post3.png/revision/latest/scale-to-width-down/100?cb=20171109182017',
		},
		{
			level: 4,
			hitpoints: 460,
			troopLevel: 8,
			buildCost: 320000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c5/Guard_Post4.png/revision/latest/scale-to-width-down/100?cb=20171109182017',
		},
		{
			level: 5,
			hitpoints: 550,
			troopLevel: 10,
			buildCost: 1000000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4f/Guard_Post5.png/revision/latest/scale-to-width-down/100?cb=20171109182018',
		},
		{
			level: 6,
			hitpoints: 650,
			troopLevel: 12,
			buildCost: 1400000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/21/Guard_Post6.png/revision/latest/scale-to-width-down/100?cb=20171109182018',
		},
		{
			level: 7,
			hitpoints: 750,
			troopLevel: 14,
			buildCost: 2300000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 6,
			exp: 720,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/28/Guard_Post7.png/revision/latest/scale-to-width-down/100?cb=20171109182018',
		},
		{
			level: 8,
			hitpoints: 850,
			troopLevel: 16,
			buildCost: 3200000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/35/Guard_Post8.png/revision/latest/scale-to-width-down/100?cb=20171109182019',
		},
		{
			level: 9,
			hitpoints: 1000,
			troopLevel: 18,
			buildCost: 4100000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 10,
			exp: 929,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/ff/Guard_Post9.png/revision/latest/scale-to-width-down/100?cb=20190616222444',
		},
		{
			level: 10,
			hitpoints: 1150,
			troopLevel: 20,
			buildCost: 5100000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 12,
			exp: 1018,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f7/Guard_Post10.png/revision/latest/scale-to-width-down/100?cb=20230517041059',
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

export default guardTower
