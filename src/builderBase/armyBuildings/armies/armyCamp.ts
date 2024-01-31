import * as Constants from '@/constants'
import Building from '@IBuilderBase/army/armyCamp/army.interface'
import Level from '@IBuilderBase/army/armyCamp/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const armyCamp: Building = {
	name: 'Army Camp',
	description:
		'Your troops are stationed in Army Camps. Each camp can house only one troop type at a time. Some troops can be upgraded to fit more units per camp!',
	maxCount: 6,
	width: 3,
	height: 3,
	maxLevel: 1,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/0/01/ArmyCampB_Ruin.png/revision/latest?cb=20170726151441',
	townHallDetails: [
		{ townHall: 1, availableCount: 1, maxLevel: 1 },
		{ townHall: 2, availableCount: 2, maxLevel: 1 },
		{ townHall: 3, availableCount: 3, maxLevel: 1 },
		{ townHall: 4, availableCount: 4, maxLevel: 1 },
		{ townHall: 5, availableCount: 4, maxLevel: 1 },
		{ townHall: 6, availableCount: 5, maxLevel: 1 },
		{ townHall: 7, availableCount: 6, maxLevel: 1 },
		{ townHall: 8, availableCount: 6, maxLevel: 1 },
		{ townHall: 9, availableCount: 6, maxLevel: 1 },
		{ townHall: 10, availableCount: 6, maxLevel: 1 },
	],
	achievement: [],
	levels: [
		{
			level: 1,
			numberOfArymCamps: 1,
			hitpoints: 300,
			buildCost: 0,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Army_CampB.png/revision/latest?cb=20170726151144',
		},
		{
			level: 2,
			numberOfArymCamps: 2,
			hitpoints: 300,
			buildCost: 12000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 5,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 17,
			townHallLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Army_CampB.png/revision/latest?cb=20170726151144',
		},
		{
			level: 3,
			numberOfArymCamps: 3,
			hitpoints: 300,
			buildCost: 180000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 3,
			buildTimeDay: 0,
			exp: 103,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Army_CampB.png/revision/latest?cb=20170726151144',
		},
		{
			level: 4,
			numberOfArymCamps: 4,
			hitpoints: 300,
			buildCost: 350000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 8,
			buildTimeDay: 0,
			exp: 169,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Army_CampB.png/revision/latest?cb=20170726151144',
		},
		{
			level: 5,
			numberOfArymCamps: 5,
			hitpoints: 300,
			buildCost: 2000000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Army_CampB.png/revision/latest?cb=20170726151144',
		},
		{
			level: 6,
			numberOfArymCamps: 6,
			hitpoints: 300,
			buildCost: 3000000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 6,
			exp: 720,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Army_CampB.png/revision/latest?cb=20170726151144',
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

export default armyCamp
