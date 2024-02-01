import * as Constants from '@/constants'
import Trap from '@IBuilderBase/traps/mine/trap.interface'
import Level from '@IBuilderBase/traps/mine/level.interface'
import BuilderHallDetails from '@IBuilderBase/builderHall/details.interface'

const mine: Trap = {
	name: 'Mine',
	description: 'Plan an explosive surprise for troops that get too close. Choose air or ground!',
	maxCount: 6,
	width: 1,
	height: 1,
	maxLevel: 10,
	mode: {
		damageType: Constants.areaSplash,
		unitTypeTarget: Constants.groundOrAir,
		minTriggerRange: 0,
		maxTriggerRange: 4,
		damageRadius: 5,
		favoriteTarget: Constants.any,
	},
	builderHallDetails: [
		{
			builderHallLevel: 1,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 2,
			availableCount: 0,
			maxLevel: 0,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 3,
			availableCount: 2,
			maxLevel: 3,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 4,
			availableCount: 3,
			maxLevel: 4,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 5,
			availableCount: 4,
			maxLevel: 5,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 6,
			availableCount: 5,
			maxLevel: 6,
			stage1MaxCount: 6,
			stage2MaxCount: 6,
		},
		{
			builderHallLevel: 7,
			availableCount: 5,
			maxLevel: 7,
			stage1MaxCount: 6,
			stage2MaxCount: 6,
		},
		{
			builderHallLevel: 8,
			availableCount: 5,
			maxLevel: 8,
			stage1MaxCount: 6,
			stage2MaxCount: 6,
		},
		{
			builderHallLevel: 9,
			availableCount: 5,
			maxLevel: 9,
			stage1MaxCount: 6,
			stage2MaxCount: 6,
		},
		{
			builderHallLevel: 10,
			availableCount: 6,
			maxLevel: 10,
			stage1MaxCount: 6,
			stage2MaxCount: 6,
		},
	],
	levels: [
		{
			level: 1,
			damage: 80,
			buildCost: 5000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/69/Mine1_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130165533',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a4/Mine1_Air.png/revision/latest/scale-to-width-down/80?cb=20171130171508',
		},
		{
			level: 2,
			damage: 90,
			buildCost: 10000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 30,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 42,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9c/Mine2_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130165533',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bf/Mine2_Air.png/revision/latest/scale-to-width-down/80?cb=20171130171508',
		},
		{
			level: 3,
			damage: 100,
			buildCost: 15000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 1,
			buildTimeDay: 0,
			exp: 60,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/85/Mine3_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130165533',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/30/Mine3_Air.png/revision/latest/scale-to-width-down/80?cb=20171130171509',
		},
		{
			level: 4,
			damage: 110,
			buildCost: 25000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 2,
			buildTimeDay: 0,
			exp: 84,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/10/Mine4_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130165532',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/28/Mine4_Air.png/revision/latest/scale-to-width-down/80?cb=20171130171509',
		},
		{
			level: 5,
			damage: 120,
			buildCost: 50000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 0,
			exp: 146,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b5/Mine5_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130165532',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/26/Mine5_Air.png/revision/latest/scale-to-width-down/80?cb=20171130171510',
		},
		{
			level: 6,
			damage: 130,
			buildCost: 80000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c6/Mine6_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130165532',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/ca/Mine6_Air.png/revision/latest/scale-to-width-down/80?cb=20171130171510',
		},
		{
			level: 7,
			damage: 140,
			buildCost: 120000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Mine7_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130165531',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/24/Mine7_Air.png/revision/latest/scale-to-width-down/80?cb=20171130171510',
		},
		{
			level: 8,
			damage: 150,
			buildCost: 250000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 1,
			exp: 360,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/55/Mine8_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130165531',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/ac/Mine8_Air.png/revision/latest/scale-to-width-down/80?cb=20171130171511',
		},
		{
			level: 9,
			damage: 165,
			buildCost: 500000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c8/Mine9_Ground.png/revision/latest/scale-to-width-down/80?cb=20190617033508',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8d/Mine9_Air.png/revision/latest/scale-to-width-down/80?cb=20190617033509',
		},
		{
			level: 10,
			damage: 180,
			buildCost: 1500000,
			buildCostResource: Constants.builderGold,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 2,
			exp: 464,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cd/Mine10_Ground.png/revision/latest/scale-to-width-down/80?cb=20230520053507',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/04/Mine10_Air.png/revision/latest/scale-to-width-down/80?cb=20230520053508',
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
	getBuilderHallLevel(level: number): BuilderHallDetails | undefined {
		if (level >= 1 && level <= this.builderHallDetails.length) {
			return this.builderHallDetails[level - 1]
		} else {
			console.error(`Invalid Town Hall level: ${level}`)
			return undefined
		}
	},
}

export default mine
