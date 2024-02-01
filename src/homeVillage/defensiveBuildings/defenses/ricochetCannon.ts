import * as Constants from '@/constants'
import Defense from '@IHomeVillage/defenses/defense.interface'
import Level from '@IHomeVillage/defenses/level.interface'
import TownHallDetails from '@IHomeVillage/townHall/details.interface'

const ricochetCannon: Defense = {
	name: 'Ricochet Cannon',
	description:
		'Builder has used one weird trick to develop a devastating cannonball that will ricochet and hit a second target.',
	maxCount: 2,
	width: 3,
	height: 3,
	maxLevel: 2,
	mode: {
		name: Constants.mainMode,
		damageType: Constants.singleTarget,
		unitTypeTarget: Constants.ground,
		minRange: 0,
		maxRange: 9,
		attackSpeed: 0.8,
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
		{ townHallLevel: 11, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 12, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 13, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 14, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 15, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 16, availableCount: 2, maxLevel: 2 },
	],
	achievement: [],
	levels: [
		{
			level: 0,
			damagePerSecond: 0,
			damagePerShot: 0,
			hitpoints: 0,
			buildCost: 0,
			buildCostResource: '',
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4a/Ricochet_Cannon_Ruin.png/revision/latest/scale-to-width-down/120?cb=20231213205827',
		},
		{
			level: 1,
			damagePerSecond: 360,
			damagePerShot: 288,
			hitpoints: 5400,
			buildCost: 20000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 14,
			exp: 1099,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9e/Ricochet_Cannon2.png/revision/latest/scale-to-width-down/120?cb=20231213205828',
		},
		{
			level: 2,
			damagePerSecond: 390,
			damagePerShot: 312,
			hitpoints: 5700,
			buildCost: 22000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 15,
			exp: 1157,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Multi-Archer_Tower2.png/revision/latest/scale-to-width-down/120?cb=20231213213624',
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

export default ricochetCannon
