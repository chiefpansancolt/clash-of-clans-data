import * as Constants from '@/constants'
import Trap from '@IHomeVillage/traps/tornadoTrap/trap.interface'
import Level from '@IHomeVillage/traps/tornadoTrap/level.interface'
import TownHallDetails from '@IHomeVillage/townHall/details.interface'

const tornadoTrap: Trap = {
	name: 'Tornado Trap',
	description:
		'Wind and stones may break some bones, but this trap will definitely confound you. Just place one of these traps down and the released vortex will draw the enemy troops in, hindering their progress.',
	maxCount: 1,
	width: 1,
	height: 1,
	maxLevel: 3,
	mode: {
		damageType: Constants.areaSplash,
		unitTypeTarget: Constants.groundAndAir,
		minTriggerRange: 0,
		maxTriggerRange: 3,
		damageRadius: 3,
		damagePerSecond: 8,
		favoriteTarget: Constants.none,
	},
	townHallDetails: [
		{ townHallLevel: 1, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 2, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 3, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 4, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 5, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 6, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 7, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 8, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 9, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 10, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 11, availableCount: 1, maxLevel: 2 },
		{ townHallLevel: 12, availableCount: 1, maxLevel: 3 },
		{ townHallLevel: 13, availableCount: 1, maxLevel: 3 },
		{ townHallLevel: 14, availableCount: 1, maxLevel: 3 },
		{ townHallLevel: 15, availableCount: 1, maxLevel: 3 },
		{ townHallLevel: 16, availableCount: 1, maxLevel: 3 },
	],
	levels: [
		{
			level: 1,
			duration: 5,
			totalDamage: 39,
			buildCost: 1800000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/54/Tornado_Trap1.png/revision/latest/scale-to-width-down/90?cb=20181022220244',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/ab/Tornado_Trap_Unarmed.png/revision/latest?cb=20200829091018',
		},
		{
			level: 2,
			duration: 6,
			totalDamage: 47,
			buildCost: 2800000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/ab/Tornado_Trap2.png/revision/latest/scale-to-width-down/90?cb=20181022220256',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/ab/Tornado_Trap_Unarmed.png/revision/latest?cb=20200829091018',
		},
		{
			level: 3,
			duration: 7,
			totalDamage: 55,
			buildCost: 3500000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/ab/Tornado_Trap2.png/revision/latest/scale-to-width-down/90?cb=20181022220256',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/ab/Tornado_Trap_Unarmed.png/revision/latest?cb=20200829091018',
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

export default tornadoTrap
