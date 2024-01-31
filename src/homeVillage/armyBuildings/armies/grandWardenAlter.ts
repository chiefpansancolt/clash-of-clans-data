import * as Constants from '@/constants'
import Building from '@IHomeVillage/army/alter/army.interface'
import Level from '@IHomeVillage/army/alter/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const granWardenAlter: Building = {
	name: 'Grand Warden Alter',
	description:
		'This veteran battle-scholar seeks out groups of friendly troops to fight behind and boost with his Life Aura and assumes the form of a tower on Building. Attacking, he can walk over walls or fly high, and can make nearby troops immune to damage once his Eternal Tome ability is unlocked!',
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
		{ townHall: 7, availableCount: 0, maxLevel: 0 },
		{ townHall: 8, availableCount: 0, maxLevel: 0 },
		{ townHall: 9, availableCount: 0, maxLevel: 0 },
		{ townHall: 10, availableCount: 0, maxLevel: 0 },
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
			unlockedUnit: 'Grand Warden',
			hitpoints: 250,
			buildCost: 1000000,
			buildCostResource: Constants.elixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/eb/GrandWarden_Altar.png/revision/latest?cb=20201018085628',
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

export default granWardenAlter
