import * as Constants from '@/constants'
import Defense from '@IHomeVillage/defenses/defense.interface'
import Level from '@IHomeVillage/defenses/level.interface'
import TownHallDetails from '@ICommon/hall/details.interface'

const multiArcherTower: Defense = {
	name: 'Multi Archer Tower',
	description:
		'These Archers have teamed up to take out attackers faster and more furiously than ever. Teamwork makes the dream work!',
	maxCount: 2,
	width: 3,
	height: 3,
	maxLevel: 2,
	mode: {
		name: Constants.mainMode,
		damageType: Constants.multipleTargets,
		unitTypeTarget: Constants.groundAndAir,
		minRange: 0,
		maxRange: 10,
		attackSpeed: 0.5,
	},
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
		{ townHall: 14, availableCount: 0, maxLevel: 0 },
		{ townHall: 15, availableCount: 0, maxLevel: 0 },
		{ townHall: 16, availableCount: 2, maxLevel: 2 },
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
				'https://static.wikia.nocookie.net/clashofclans/images/8/85/Multi-Archer_Tower_Ruin.png/revision/latest/scale-to-width-down/120?cb=20231213213550',
		},
		{
			level: 1,
			damagePerSecond: 110,
			damagePerShot: 55,
			hitpoints: 5000,
			buildCost: 20000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 14,
			exp: 1099,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/31/Multi-Archer_Tower1.png/revision/latest/scale-to-width-down/120?cb=20231213213611',
		},
		{
			level: 2,
			damagePerSecond: 120,
			damagePerShot: 60,
			hitpoints: 5200,
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

export default multiArcherTower
