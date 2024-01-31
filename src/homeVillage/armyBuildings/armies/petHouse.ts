import * as Constants from '@/constants'
import Building from '@IHomeVillage/army/petHouse/army.interface'
import Level from '@IHomeVillage/army/petHouse/level.interface'
import TownHallDetails from '@ICommon/hall/details.interface'

const petHouse: Building = {
	name: 'Pet House',
	description:
		'Every hero deserves a loyal companion. The Pet House allows you to unlock powerful Pets with various abilities to fight alongside your heroes.',
	maxCount: 1,
	width: 4,
	height: 4,
	maxLevel: 9,
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
		{ townHall: 12, availableCount: 0, maxLevel: 0 },
		{ townHall: 13, availableCount: 0, maxLevel: 0 },
		{ townHall: 14, availableCount: 1, maxLevel: 4 },
		{ townHall: 15, availableCount: 1, maxLevel: 8 },
		{ townHall: 16, availableCount: 1, maxLevel: 9 },
	],
	achievement: [],
	levels: [
		{
			level: 1,
			unlockedPet: 'L.A.S.S.I',
			hitpoints: 700,
			buildCost: 10000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 12,
			exp: 1018,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/21/Pet_House1.png/revision/latest/scale-to-width-down/100?cb=20210412213218',
		},
		{
			level: 2,
			unlockedPet: 'Electro Owl',
			hitpoints: 800,
			buildCost: 12000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 12,
			exp: 1039,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9d/Pet_House2.png/revision/latest/scale-to-width-down/100?cb=20210412213219',
		},
		{
			level: 3,
			unlockedPet: 'Mighty Yak',
			hitpoints: 900,
			buildCost: 14000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 12,
			exp: 1049,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c5/Pet_House3.png/revision/latest/scale-to-width-down/100?cb=20210412213220',
		},
		{
			level: 4,
			unlockedPet: 'Unicorn',
			hitpoints: 1000,
			buildCost: 16000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 13,
			exp: 1059,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/34/Pet_House4.png/revision/latest/scale-to-width-down/100?cb=20210412213221',
		},
		{
			level: 5,
			unlockedPet: 'Frosty',
			hitpoints: 1050,
			buildCost: 19750000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 13,
			exp: 1069,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c2/Pet_House5.png/revision/latest/scale-to-width-down/100?cb=20221124093007',
		},
		{
			level: 6,
			unlockedPet: 'Diggy',
			hitpoints: 1100,
			buildCost: 20000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 13,
			exp: 1080,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1b/Pet_House6.png/revision/latest/scale-to-width-down/100?cb=20221124093035',
		},
		{
			level: 7,
			unlockedPet: 'Poison Lizard',
			hitpoints: 1150,
			buildCost: 20250000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 13,
			exp: 1089,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Pet_House7.png/revision/latest/scale-to-width-down/100?cb=20221124093045',
		},
		{
			level: 8,
			unlockedPet: 'Phoenix',
			hitpoints: 1200,
			buildCost: 20500000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 14,
			exp: 1099,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/2d/Pet_House8.png/revision/latest/scale-to-width-down/100?cb=20221124093059',
		},
		{
			level: 9,
			unlockedPet: 'Spirit Fox',
			hitpoints: 1250,
			buildCost: 21000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 15,
			exp: 1138,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6e/Pet_House9.png/revision/latest/scale-to-width-down/100?cb=20231213083040',
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

export default petHouse
