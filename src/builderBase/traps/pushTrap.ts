import * as Constants from '@/constants'
import Trap from '@IBuilderBase/traps/pushTrap/trap.interface'
import Level from '@IBuilderBase/traps/pushTrap/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const pushTrap: Trap = {
	name: 'Push Trap',
	description: 'Toss ground troops in a direction you choose. Heave ho!',
	maxCount: 5,
	width: 2,
	height: 2,
	maxLevel: 10,
	mode: {
		damageType: Constants.launchTroops,
		unitTypeTarget: Constants.ground,
		minTriggerRange: 0,
		maxTriggerRange: 1,
		aoeRadius: 3.5,
		pushDistance: 6,
		favoriteTarget: Constants.none,
	},
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 1, maxLevel: 2 },
		{ townHall: 3, availableCount: 2, maxLevel: 3 },
		{ townHall: 4, availableCount: 3, maxLevel: 4 },
		{ townHall: 5, availableCount: 4, maxLevel: 5 },
		{ townHall: 6, availableCount: 4, maxLevel: 6 },
		{ townHall: 7, availableCount: 5, maxLevel: 7 },
		{ townHall: 8, availableCount: 5, maxLevel: 8 },
		{ townHall: 9, availableCount: 5, maxLevel: 9 },
		{ townHall: 10, availableCount: 5, maxLevel: 10 },
	],
	levels: [
		{
			level: 1,
			springCapacity: 8,
			buildCost: 1000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/77/Push_Trap1.png/revision/latest/scale-to-width-down/100?cb=20171130154513',
		},
		{
			level: 2,
			springCapacity: 10,
			buildCost: 3000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 5,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 17,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/25/Push_Trap2.png/revision/latest/scale-to-width-down/100?cb=20171130154513',
		},
		{
			level: 3,
			springCapacity: 12,
			buildCost: 10000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 20,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 34,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1a/Push_Trap3.png/revision/latest/scale-to-width-down/100?cb=20171130154514',
		},
		{
			level: 4,
			springCapacity: 14,
			buildCost: 20000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 2,
			buildTimeDay: 0,
			exp: 84,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/33/Push_Trap4.png/revision/latest/scale-to-width-down/100?cb=20171130154514',
		},
		{
			level: 5,
			springCapacity: 16,
			buildCost: 40000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 4,
			buildTimeDay: 0,
			exp: 120,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cb/Push_Trap5.png/revision/latest/scale-to-width-down/100?cb=20171130154515',
		},
		{
			level: 6,
			springCapacity: 18,
			buildCost: 60000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8c/Push_Trap6.png/revision/latest/scale-to-width-down/100?cb=20171130154515',
		},
		{
			level: 7,
			springCapacity: 20,
			buildCost: 100000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 16,
			buildTimeDay: 0,
			exp: 240,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Push_Trap7.png/revision/latest/scale-to-width-down/100?cb=20171130154515',
		},
		{
			level: 8,
			springCapacity: 22,
			buildCost: 200000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a1/Push_Trap8.png/revision/latest/scale-to-width-down/100?cb=20171130154516',
		},
		{
			level: 9,
			springCapacity: 24,
			buildCost: 300000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 1,
			exp: 360,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/67/Push_Trap9.png/revision/latest/scale-to-width-down/100?cb=20190617033045',
		},
		{
			level: 10,
			springCapacity: 26,
			buildCost: 500000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1e/Push_Trap10.png/revision/latest/scale-to-width-down/100?cb=20230517082021',
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

export default pushTrap
