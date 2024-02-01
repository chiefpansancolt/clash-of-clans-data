import * as Constants from '@/constants'
import Trap from '@IHomeVillage/traps/giantBomb/trap.interface'
import Level from '@IHomeVillage/traps/giantBomb/level.interface'
import TownHallDetails from '@IHomeVillage/townHall/details.interface'

const giantBomb: Trap = {
	name: 'Giant Bomb',
	description: "When you're looking for a Big Boom, you need the Giant Bomb.",
	maxCount: 7,
	width: 2,
	height: 2,
	maxLevel: 10,
	mode: {
		damageType: Constants.areaSplash,
		unitTypeTarget: Constants.ground,
		minTriggerRange: 0,
		maxTriggerRange: 2,
		favoriteTarget: Constants.none,
	},
	townHallDetails: [
		{ townHallLevel: 1, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 2, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 3, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 4, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 5, availableCount: 0, maxLevel: 0 },
		{ townHallLevel: 6, availableCount: 1, maxLevel: 2 },
		{ townHallLevel: 7, availableCount: 2, maxLevel: 2 },
		{ townHallLevel: 8, availableCount: 3, maxLevel: 3 },
		{ townHallLevel: 9, availableCount: 4, maxLevel: 3 },
		{ townHallLevel: 10, availableCount: 5, maxLevel: 4 },
		{ townHallLevel: 11, availableCount: 5, maxLevel: 5 },
		{ townHallLevel: 12, availableCount: 6, maxLevel: 5 },
		{ townHallLevel: 13, availableCount: 6, maxLevel: 7 },
		{ townHallLevel: 14, availableCount: 7, maxLevel: 8 },
		{ townHallLevel: 15, availableCount: 7, maxLevel: 9 },
		{ townHallLevel: 16, availableCount: 7, maxLevel: 10 },
	],
	levels: [
		{
			level: 1,
			damage: 175,
			damageRadius: 3,
			buildCost: 12500,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7b/Giant_Bomb1.png/revision/latest/scale-to-width-down/120?cb=20230613001712',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bf/Giant_Bomb1_unarmed.png/revision/latest/scale-to-width-down/100?cb=20230613001709',
		},
		{
			level: 2,
			damage: 200,
			damageRadius: 3.5,
			buildCost: 75000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 3,
			buildTimeDay: 0,
			exp: 103,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7b/Giant_Bomb1.png/revision/latest/scale-to-width-down/120?cb=20230613001712',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bf/Giant_Bomb1_unarmed.png/revision/latest/scale-to-width-down/100?cb=20230613001709',
		},
		{
			level: 3,
			damage: 225,
			damageRadius: 3.5,
			buildCost: 480000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/31/Giant_Bomb3.png/revision/latest/scale-to-width-down/120?cb=20230613001720',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Giant_Bomb3_unarmed.png/revision/latest/scale-to-width-down/100?cb=20230613001718',
		},
		{
			level: 4,
			damage: 250,
			damageRadius: 4,
			buildCost: 1500000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 0,
			exp: 254,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/31/Giant_Bomb3.png/revision/latest/scale-to-width-down/120?cb=20230613001720',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Giant_Bomb3_unarmed.png/revision/latest/scale-to-width-down/100?cb=20230613001718',
		},
		{
			level: 5,
			damage: 275,
			damageRadius: 4,
			buildCost: 2000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a4/Giant_Bomb5.png/revision/latest/scale-to-width-down/120?cb=20230613001727',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Giant_Bomb5_unarmed.png/revision/latest/scale-to-width-down/100?cb=20230613001725',
		},
		{
			level: 6,
			damage: 325,
			damageRadius: 4,
			buildCost: 2500000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 2,
			exp: 487,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a4/Giant_Bomb5.png/revision/latest/scale-to-width-down/120?cb=20230613001727',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Giant_Bomb5_unarmed.png/revision/latest/scale-to-width-down/100?cb=20230613001725',
		},
		{
			level: 7,
			damage: 375,
			damageRadius: 4,
			buildCost: 3500000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 4,
			exp: 640,
			townHallLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Giant_Bomb7.png/revision/latest/scale-to-width-down/120?cb=20230613001734',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/15/Giant_Bomb7_unarmed.png/revision/latest/scale-to-width-down/100?cb=20230613001731',
		},
		{
			level: 8,
			damage: 400,
			damageRadius: 4,
			buildCost: 6500000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 8,
			exp: 869,
			townHallLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Giant_Bomb7.png/revision/latest/scale-to-width-down/120?cb=20230613001734',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/15/Giant_Bomb7_unarmed.png/revision/latest/scale-to-width-down/100?cb=20230613001731',
		},
		{
			level: 9,
			damage: 425,
			damageRadius: 4,
			buildCost: 10500000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 11,
			exp: 974,
			townHallLevelRequired: 15,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d8/Giant_Bomb9.png/revision/latest/scale-to-width-down/120?cb=20230613001740',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ef/Giant_Bomb9_unarmed.png/revision/latest/scale-to-width-down/100?cb=20230613001739',
		},
		{
			level: 10,
			damage: 450,
			damageRadius: 4,
			buildCost: 12000000,
			buildCostResource: Constants.gold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 18,
			buildTimeDay: 12,
			exp: 1039,
			townHallLevelRequired: 16,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d8/Giant_Bomb9.png/revision/latest/scale-to-width-down/120?cb=20230613001740',
			unarmedImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ef/Giant_Bomb9_unarmed.png/revision/latest/scale-to-width-down/100?cb=20230613001739',
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

export default giantBomb
