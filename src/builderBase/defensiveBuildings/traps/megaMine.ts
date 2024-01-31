import * as Constants from '@/constants'
import Trap from '@IBuilderBase/traps/megaMine/trap.interface'
import Level from '@IBuilderBase/traps/megaMine/level.interface'
import TownHallDetails from '@ICommon/hall/details.interface'

const nameHere: Trap = {
	name: 'Mega Mine',
	description: 'A hidden dose of heavy destruction. Choose air or ground!',
	maxCount: 4,
	width: 2,
	height: 2,
	maxLevel: 10,
	mode: {
		damageType: Constants.areaSplash,
		unitTypeTarget: Constants.groundOrAir,
		minTriggerRange: 0,
		maxTriggerRange: 3,
		damageRadius: 4,
		favoriteTarget: Constants.any,
	},
	townHallDetails: [
		{ townHall: 1, availableCount: 0, maxLevel: 0 },
		{ townHall: 2, availableCount: 0, maxLevel: 0 },
		{ townHall: 3, availableCount: 0, maxLevel: 0 },
		{ townHall: 4, availableCount: 1, maxLevel: 4 },
		{ townHall: 5, availableCount: 1, maxLevel: 5 },
		{ townHall: 6, availableCount: 2, maxLevel: 6 },
		{ townHall: 7, availableCount: 2, maxLevel: 7 },
		{ townHall: 8, availableCount: 3, maxLevel: 8 },
		{ townHall: 9, availableCount: 4, maxLevel: 9 },
		{ townHall: 10, availableCount: 4, maxLevel: 10 },
	],
	levels: [
		{
			level: 1,
			damage: 250,
			buildCost: 30000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/51/Mega_Mine1_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130180338',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/64/Mega_Mine1_Air.png/revision/latest/scale-to-width-down/80?cb=20171130180410',
		},
		{
			level: 2,
			damage: 275,
			buildCost: 40000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 1,
			buildTimeDay: 0,
			exp: 60,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Mega_Mine2_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130180339',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Mega_Mine2_Air.png/revision/latest/scale-to-width-down/80?cb=20171130180410',
		},
		{
			level: 3,
			damage: 300,
			buildCost: 50000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 3,
			buildTimeDay: 0,
			exp: 103,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Mega_Mine3_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130180339',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/2e/Mega_Mine3_Air.png/revision/latest/scale-to-width-down/80?cb=20171130180411',
		},
		{
			level: 4,
			damage: 330,
			buildCost: 80000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 0,
			exp: 146,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c4/Mega_Mine4_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130180339',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d6/Mega_Mine4_Air.png/revision/latest/scale-to-width-down/80?cb=20171130180411',
		},
		{
			level: 5,
			damage: 360,
			buildCost: 120000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 169,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/76/Mega_Mine5_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130180340',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cf/Mega_Mine5_Air.png/revision/latest/scale-to-width-down/80?cb=20171130180411',
		},
		{
			level: 6,
			damage: 395,
			buildCost: 300000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1d/Mega_Mine6_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130180340',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/71/Mega_Mine6_Air.png/revision/latest/scale-to-width-down/80?cb=20171130180412',
		},
		{
			level: 7,
			damage: 430,
			buildCost: 600000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 1,
			exp: 360,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/74/Mega_Mine7_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130180341',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/13/Mega_Mine7_Air.png/revision/latest/scale-to-width-down/80?cb=20171130180412',
		},
		{
			level: 8,
			damage: 470,
			buildCost: 1000000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/43/Mega_Mine8_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130180341',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a4/Mega_Mine8_Air.png/revision/latest/scale-to-width-down/80?cb=20171130180412',
		},
		{
			level: 9,
			damage: 510,
			buildCost: 1400000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 3,
			exp: 509,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/45/Mega_Mine9_Ground.png/revision/latest/scale-to-width-down/80?cb=20200905044808',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e6/Mega_Mine9_Air.png/revision/latest/scale-to-width-down/80?cb=20190617034052',
		},
		{
			level: 10,
			damage: 550,
			buildCost: 2500000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/70/Mega_Mine10_Ground.png/revision/latest/scale-to-width-down/90?cb=20230520053506',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/81/Mega_Mine10_Air.png/revision/latest/scale-to-width-down/90?cb=20230520053506',
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

export default nameHere
