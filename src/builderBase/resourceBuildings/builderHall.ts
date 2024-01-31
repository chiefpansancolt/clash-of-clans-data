import * as Constants from '@/constants'
import TownHall from '@IBuilderBase/builderHall/builderHall.interface'
import Level from '@IBuilderBase/builderHall/level.interface'

const builderHall: TownHall = {
	name: 'Archer Tower',
	description:
		"No foe can escape the Archer's arrows. This tower has a special switch - choose long range or fast attack!",
	width: 3,
	height: 3,
	maxLevel: 10,
	achievement: [],
	levels: [
		{
			level: 1,
			hitpoints: 650,
			builderGoldCapacity: 50000,
			builderElixirCapacity: 50000,
			buildCost: 0,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			maximumNumberOfBuildingsAvailable: 0,
			townHallLevelRequired: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/19/Builder_Hall1.png/revision/latest/scale-to-width-down/100?cb=20230516070448',
		},
		{
			level: 2,
			hitpoints: 800,
			builderGoldCapacity: 75000,
			builderElixirCapacity: 75000,
			buildCost: 3500,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 5,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 2,
			maximumNumberOfBuildingsAvailable: 10,
			townHallLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/03/Builder_Hall2.png/revision/latest/scale-to-width-down/100?cb=20230516070504',
		},
		{
			level: 3,
			hitpoints: 975,
			builderGoldCapacity: 100000,
			builderElixirCapacity: 100000,
			buildCost: 30000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 1,
			buildTimeDay: 0,
			exp: 60,
			maximumNumberOfBuildingsAvailable: 18,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/38/Builder_Hall3.png/revision/latest/scale-to-width-down/100?cb=20230516070513',
		},
		{
			level: 4,
			hitpoints: 1150,
			builderGoldCapacity: 150000,
			builderElixirCapacity: 150000,
			buildCost: 200000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			maximumNumberOfBuildingsAvailable: 23,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/be/Builder_Hall4.png/revision/latest/scale-to-width-down/100?cb=20230516070524',
		},
		{
			level: 5,
			hitpoints: 1350,
			builderGoldCapacity: 900000,
			builderElixirCapacity: 900000,
			buildCost: 400000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			maximumNumberOfBuildingsAvailable: 27,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/22/Builder_Hall5.png/revision/latest/scale-to-width-down/100?cb=20230516070530',
		},
		{
			level: 6,
			hitpoints: 1600,
			builderGoldCapacity: 900000,
			builderElixirCapacity: 900000,
			buildCost: 1200000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			maximumNumberOfBuildingsAvailable: 39,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Builder_Hall6.png/revision/latest/scale-to-width-down/100?cb=20230516070542',
		},
		{
			level: 7,
			hitpoints: 1850,
			builderGoldCapacity: 1100000,
			builderElixirCapacity: 1100000,
			buildCost: 1800000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			maximumNumberOfBuildingsAvailable: 44,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7f/Builder_Hall7.png/revision/latest/scale-to-width-down/100?cb=20230516070552',
		},
		{
			level: 8,
			hitpoints: 2150,
			builderGoldCapacity: 1300000,
			builderElixirCapacity: 1300000,
			buildCost: 2800000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 5,
			exp: 657,
			maximumNumberOfBuildingsAvailable: 50,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/0e/Builder_Hall8.png/revision/latest/scale-to-width-down/100?cb=20230516070604',
		},
		{
			level: 9,
			hitpoints: 2450,
			builderGoldCapacity: 1500000,
			builderElixirCapacity: 1500000,
			buildCost: 3800000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 6,
			exp: 720,
			maximumNumberOfBuildingsAvailable: 54,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/43/Builder_Hall9.png/revision/latest/scale-to-width-down/100?cb=20230516070619',
		},
		{
			level: 10,
			hitpoints: 2750,
			builderGoldCapacity: 1500000,
			builderElixirCapacity: 1500000,
			buildCost: 4800000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 7,
			exp: 777,
			maximumNumberOfBuildingsAvailable: 55,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/87/Builder_Hall10.png/revision/latest/scale-to-width-down/100?cb=20230516070454',
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
}

export default builderHall
