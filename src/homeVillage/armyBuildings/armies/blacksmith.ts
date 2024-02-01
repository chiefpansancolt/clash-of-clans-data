import * as Constants from '@/constants'
import Building from '@IHomeVillage/army/blacksmith/army.interface'
import Level from '@IHomeVillage/army/blacksmith/level.interface'
import TownHallDetails from '@IHomeVillage/townHall/details.interface'

const blacksmith: Building = {
	name: 'Blacksmith',
	description:
		'Bring the right magical ores here and your heroes’ equipment can be upgraded to be even mightier! The smoke from the furnace helps make delicious, if unhealthy, brisket.',
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 9,
	townHallDetails: [
		{ townHallLevel: 1, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 2, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 3, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 4, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 5, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 6, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 7, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 8, availableCount: 1, maxLevel: 1 },
		{ townHallLevel: 9, availableCount: 1, maxLevel: 2 },
		{ townHallLevel: 10, availableCount: 1, maxLevel: 3 },
		{ townHallLevel: 11, availableCount: 1, maxLevel: 4 },
		{ townHallLevel: 12, availableCount: 1, maxLevel: 5 },
		{ townHallLevel: 13, availableCount: 1, maxLevel: 6 },
		{ townHallLevel: 14, availableCount: 1, maxLevel: 7 },
		{ townHallLevel: 15, availableCount: 1, maxLevel: 8 },
		{ townHallLevel: 16, availableCount: 1, maxLevel: 9 },
	],
	achievement: [],
	levels: [
		{
			level: 1,
			equipmentUnlocked: 'Earthquake Boots',
			hitpoints: 700,
			shinyOreCapacity: 10000,
			glowyOreCapacity: 1000,
			starryOreCapacity: 200,
			buildCost: 750000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/18/Blacksmith1.png/revision/latest/scale-to-width-down/100?cb=20231213085709',
		},
		{
			level: 2,
			equipmentUnlocked: 'Giant Arrow',
			hitpoints: 800,
			shinyOreCapacity: 15000,
			glowyOreCapacity: 1500,
			starryOreCapacity: 300,
			buildCost: 1700000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/18/Blacksmith1.png/revision/latest/scale-to-width-down/100?cb=20231213085709',
		},
		{
			level: 3,
			equipmentUnlocked: 'Vampstache',
			hitpoints: 900,
			shinyOreCapacity: 20000,
			glowyOreCapacity: 2000,
			starryOreCapacity: 400,
			buildCost: 2300000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b2/Blacksmith3.png/revision/latest/scale-to-width-down/100?cb=20231213085710',
		},
		{
			level: 4,
			equipmentUnlocked: 'Rage Gem',
			hitpoints: 1000,
			shinyOreCapacity: 25000,
			glowyOreCapacity: 2500,
			starryOreCapacity: 500,
			buildCost: 3000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b2/Blacksmith3.png/revision/latest/scale-to-width-down/100?cb=20231213085710',
		},
		{
			level: 5,
			equipmentUnlocked: 'Healer Puppet',
			hitpoints: 1100,
			shinyOreCapacity: 30000,
			glowyOreCapacity: 3000,
			starryOreCapacity: 600,
			buildCost: 5500000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 5,
			exp: 657,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9d/Blacksmith5.png/revision/latest/scale-to-width-down/100?cb=20231213085711',
		},
		{
			level: 6,
			equipmentUnlocked: 'Healing Tome',
			hitpoints: 1200,
			shinyOreCapacity: 35000,
			glowyOreCapacity: 3500,
			starryOreCapacity: 700,
			buildCost: 8500000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 6,
			exp: 720,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9d/Blacksmith5.png/revision/latest/scale-to-width-down/100?cb=20231213085711',
		},
		{
			level: 7,
			equipmentUnlocked: 'N/A',
			hitpoints: 1300,
			shinyOreCapacity: 40000,
			glowyOreCapacity: 4000,
			starryOreCapacity: 800,
			buildCost: 12000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 7,
			exp: 777,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/73/Blacksmith7.png/revision/latest/scale-to-width-down/100?cb=20231213085712',
		},
		{
			level: 8,
			equipmentUnlocked: 'N/A',
			hitpoints: 1400,
			shinyOreCapacity: 45000,
			glowyOreCapacity: 4500,
			starryOreCapacity: 900,
			buildCost: 14000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/73/Blacksmith7.png/revision/latest/scale-to-width-down/100?cb=20231213085712',
		},
		{
			level: 9,
			equipmentUnlocked: 'N/A',
			hitpoints: 1500,
			shinyOreCapacity: 50000,
			glowyOreCapacity: 5000,
			starryOreCapacity: 1000,
			buildCost: 16000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 9,
			exp: 881,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e8/Blacksmith9.png/revision/latest/scale-to-width-down/100?cb=20231213085713',
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

export default blacksmith
