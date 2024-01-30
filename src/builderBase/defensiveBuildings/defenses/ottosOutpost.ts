import * as Constants from '@/constants'
import Defense from '@IBuilderBase/defenses/ottosOutpost/defense.interface'
import Level from '@IBuilderBase/defenses/ottosOutpost/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const nameHere: Defense = {
	name: "O.T.T.O's Outpost",
	description:
		"O.T.T.O's home and the main building of the second stage. May contain additional feisty robots. Destroying O.T.T.O's Outpost awards an extra star in attacks.",
	maxCount: 1,
	width: 4,
	height: 4,
	maxLevel: 10,
	mode: [],
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
			hitpoints: 650,
			spawnedZappies: 2,
			buildCost: 0,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bf/O.T.T.O%27s_Outpost1.png/revision/latest/scale-to-width-down/100?cb=20230516082344',
		},
		{
			level: 2,
			hitpoints: 800,
			spawnedZappies: 2,
			buildCost: 1000000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/80/O.T.T.O%27s_Outpost2.png/revision/latest/scale-to-width-down/100?cb=20230516082345',
		},
		{
			level: 3,
			hitpoints: 975,
			spawnedZappies: 2,
			buildCost: 1250000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/62/O.T.T.O%27s_Outpost3.png/revision/latest/scale-to-width-down/100?cb=20230516082346',
		},
		{
			level: 4,
			hitpoints: 1150,
			spawnedZappies: 3,
			buildCost: 1500000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/62/O.T.T.O%27s_Outpost4.png/revision/latest/scale-to-width-down/100?cb=20230516082347',
		},
		{
			level: 5,
			hitpoints: 1350,
			spawnedZappies: 3,
			buildCost: 1750000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d3/O.T.T.O%27s_Outpost5.png/revision/latest/scale-to-width-down/100?cb=20230516082348',
		},
		{
			level: 6,
			hitpoints: 1600,
			spawnedZappies: 3,
			buildCost: 2000000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 5,
			exp: 657,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/97/O.T.T.O%27s_Outpost6.png/revision/latest/scale-to-width-down/100?cb=20230607054238',
		},
		{
			level: 7,
			hitpoints: 1850,
			spawnedZappies: 4,
			buildCost: 3000000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 7,
			exp: 777,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/O.T.T.O%27s_Outpost7.png/revision/latest/scale-to-width-down/100?cb=20230607054249',
		},
		{
			level: 8,
			hitpoints: 2150,
			spawnedZappies: 4,
			buildCost: 4000000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 9,
			exp: 881,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/20/O.T.T.O%27s_Outpost8.png/revision/latest/scale-to-width-down/100?cb=20230516082350',
		},
		{
			level: 9,
			hitpoints: 2450,
			spawnedZappies: 4,
			buildCost: 5000000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 10,
			exp: 929,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/2e/O.T.T.O%27s_Outpost9.png/revision/latest/scale-to-width-down/100?cb=20230516082351',
		},
		{
			level: 10,
			hitpoints: 2750,
			spawnedZappies: 5,
			buildCost: 6000000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 11,
			exp: 974,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7f/O.T.T.O%27s_Outpost10.png/revision/latest/scale-to-width-down/100?cb=20230516082352',
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

export default nameHere
