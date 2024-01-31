import * as Constants from '@/constants'
import Building from '@IHomeVillage/army/alter/army.interface'
import Level from '@IHomeVillage/army/alter/level.interface'
import TownHallDetails from '@ICommon/hall/details.interface'

const barbarianKingAlter: Building = {
	name: 'Barbarian King Alter',
	description:
		'This colossal menace soaks up huge amounts of damage and bashes everything in his path. He guards his territory fiercely when defending, and can launch into a devastating rage when attacking once his Iron Fist ability is unlocked!',
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 1,
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 0, maxLevel: 0 },
		{ townHall: 4, availableCount: 0, maxLevel: 0 },
		{ townHall: 5, availableCount: 0, maxLevel: 0 },
		{ townHall: 6, availableCount: 0, maxLevel: 0 },
		{ townHall: 7, availableCount: 1, maxLevel: 1 },
		{ townHall: 8, availableCount: 1, maxLevel: 1 },
		{ townHall: 9, availableCount: 1, maxLevel: 1 },
		{ townHall: 10, availableCount: 1, maxLevel: 1 },
		{ townHall: 11, availableCount: 1, maxLevel: 1 },
		{ townHall: 12, availableCount: 1, maxLevel: 1 },
		{ townHall: 13, availableCount: 1, maxLevel: 1 },
		{ townHall: 14, availableCount: 1, maxLevel: 1 },
		{ townHall: 15, availableCount: 1, maxLevel: 1 },
		{ townHall: 16, availableCount: 1, maxLevel: 1 },
	],
	achievement: [],
	levels: [
		{
			level: 1,
			unlockedUnit: 'Barbarian King',
			hitpoints: 250,
			buildCost: 5000,
			buildCostResource: Constants.darkElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/86/BarbarianKing_Altar.png/revision/latest?cb=20171206125643',
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

export default barbarianKingAlter
