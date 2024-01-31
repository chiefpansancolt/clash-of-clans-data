import * as Constants from '@/constants'
import Building from '@IHomeVillage/army/workshop/army.interface'
import Level from '@IHomeVillage/army/workshop/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const workshop: Building = {
	name: 'Workshop',
	description:
		'The Workshop is where Siege Machines are built. Upgrade the Workshop to unlock different Siege Machines!',
	maxCount: 1,
	width: 4,
	height: 4,
	maxLevel: 7,
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 0, maxLevel: 0 },
		{ townHall: 4, availableCount: 0, maxLevel: 0 },
		{ townHall: 5, availableCount: 0, maxLevel: 0 },
		{ townHall: 6, availableCount: 0, maxLevel: 0 },
		{ townHall: 7, availableCount: 0, maxLevel: 0 },
		{ townHall: 8, availableCount: 0, maxLevel: 0 },
		{ townHall: 9, availableCount: 0, maxLevel: 0 },
		{ townHall: 10, availableCount: 0, maxLevel: 0 },
		{ townHall: 11, availableCount: 0, maxLevel: 0 },
		{ townHall: 12, availableCount: 1, maxLevel: 3 },
		{ townHall: 13, availableCount: 1, maxLevel: 5 },
		{ townHall: 14, availableCount: 1, maxLevel: 6 },
		{ townHall: 15, availableCount: 1, maxLevel: 7 },
		{ townHall: 16, availableCount: 1, maxLevel: 7 },
	],
	achievement: [],
	levels: [
		{
			level: 1,
			unlockedSiegeMachine: 'Wall Wrecker',
			siegeMachineCapacity: 1,
			hitpoints: 1000,
			buildCost: 3000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/84/Workshop1.png/revision/latest/scale-to-width-down/120?cb=20221125080815',
		},
		{
			level: 2,
			unlockedSiegeMachine: 'Battle Blimp',
			siegeMachineCapacity: 2,
			hitpoints: 1100,
			buildCost: 5000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 5,
			exp: 657,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e1/Workshop2.png/revision/latest/scale-to-width-down/120?cb=20221125080821',
		},
		{
			level: 3,
			unlockedSiegeMachine: 'Stone Slammer',
			siegeMachineCapacity: 3,
			hitpoints: 1200,
			buildCost: 7000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 7,
			exp: 777,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/28/Workshop3.png/revision/latest/scale-to-width-down/120?cb=20221125080828',
		},
		{
			level: 4,
			unlockedSiegeMachine: 'Siege Barracks',
			siegeMachineCapacity: 3,
			hitpoints: 1300,
			buildCost: 9000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 10,
			exp: 929,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ec/Workshop4.png/revision/latest/scale-to-width-down/120?cb=20221125080844',
		},
		{
			level: 5,
			unlockedSiegeMachine: 'Log Launcher',
			siegeMachineCapacity: 3,
			hitpoints: 1400,
			buildCost: 10000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 11,
			exp: 974,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1b/Workshop5.png/revision/latest/scale-to-width-down/120?cb=20221125080855',
		},
		{
			level: 6,
			unlockedSiegeMachine: 'Flame Flinger',
			siegeMachineCapacity: 3,
			hitpoints: 1500,
			buildCost: 14000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 13,
			exp: 1059,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/18/Workshop6.png/revision/latest/scale-to-width-down/120?cb=20221125080905',
		},
		{
			level: 7,
			unlockedSiegeMachine: 'Battle Drill',
			siegeMachineCapacity: 3,
			hitpoints: 1600,
			buildCost: 19000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 13,
			exp: 1080,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4c/Workshop7.png/revision/latest/scale-to-width-down/120?cb=20221125080915',
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

export default workshop
