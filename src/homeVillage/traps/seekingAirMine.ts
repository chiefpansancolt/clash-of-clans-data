import * as Constants from '@/constants'
import Trap from '@IHomeVillage/traps/seekingAirMine/trap.interface'
import Level from '@IHomeVillage/traps/seekingAirMine/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const seekingAirMine: Trap = {
	name: 'Seeking Air Mine',
	description:
		'Is it a bird? Is it a plane? Well it makes no difference as the Seeking Air Mine will blow it sky high. This trap does devastating damage to a single air unit.',
	maxCount: 8,
	width: 1,
	height: 1,
	maxLevel: 5,
	mode: {
		damageType: Constants.singleTarget,
		unitTypeTarget: Constants.air,
		minTriggerRange: 0,
		maxTriggerRange: 4,
		favoriteTarget: Constants.none,
	},
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 0, maxLevel: 0 },
		{ townHall: 4, availableCount: 0, maxLevel: 0 },
		{ townHall: 5, availableCount: 0, maxLevel: 0 },
		{ townHall: 6, availableCount: 0, maxLevel: 0 },
		{ townHall: 7, availableCount: 1, maxLevel: 1 },
		{ townHall: 8, availableCount: 2, maxLevel: 1 },
		{ townHall: 9, availableCount: 4, maxLevel: 2 },
		{ townHall: 10, availableCount: 5, maxLevel: 3 },
		{ townHall: 11, availableCount: 5, maxLevel: 3 },
		{ townHall: 12, availableCount: 6, maxLevel: 3 },
		{ townHall: 13, availableCount: 7, maxLevel: 4 },
		{ townHall: 14, availableCount: 8, maxLevel: 4 },
		{ townHall: 15, availableCount: 8, maxLevel: 5 },
		{ townHall: 16, availableCount: 8, maxLevel: 5 },
	],
	levels: [
		{
			level: 1,
			damage: 1500,
			buildCost: 15000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/71/Seeking_Air_Mine1.png/revision/latest/scale-to-width-down/90?cb=20230613002136',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e8/Seeking_Air_Mine_unarmed.png/revision/latest?cb=20171009071634',
		},
		{
			level: 2,
			damage: 1800,
			buildCost: 900000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/71/Seeking_Air_Mine1.png/revision/latest/scale-to-width-down/90?cb=20230613002136',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e8/Seeking_Air_Mine_unarmed.png/revision/latest?cb=20171009071634',
		},
		{
			level: 3,
			damage: 2100,
			buildCost: 1600000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 1,
			exp: 360,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/88/Seeking_Air_Mine3.png/revision/latest/scale-to-width-down/90?cb=20230613002140',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e8/Seeking_Air_Mine_unarmed.png/revision/latest?cb=20171009071634',
		},
		{
			level: 4,
			damage: 2500,
			buildCost: 3100000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 3,
			exp: 549,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/88/Seeking_Air_Mine3.png/revision/latest/scale-to-width-down/90?cb=20230613002140',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e8/Seeking_Air_Mine_unarmed.png/revision/latest?cb=20171009071634',
		},
		{
			level: 5,
			damage: 2800,
			buildCost: 10000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 10,
			exp: 952,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6b/Seeking_Air_Mine5.png/revision/latest/scale-to-width-down/90?cb=20230613002144',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e8/Seeking_Air_Mine_unarmed.png/revision/latest?cb=20171009071634',
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

export default seekingAirMine
