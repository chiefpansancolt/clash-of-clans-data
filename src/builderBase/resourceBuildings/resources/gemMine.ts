import * as Constants from '@/constants'
import Resource from '@IBuilderBase/resources/gemMine/resource.interface'
import Level from '@IBuilderBase/resources/gemMine/level.interface'
import BuilderHallDetails from '@IBuilderBase/builderHall/details.interface'

const gemMine: Resource = {
	name: 'gemMine',
	description:
		'Gem Mines access a rare deposit of this highly valuable resource! Mining gems is slow and hard work.',
	maxCount: 1,
	width: 3,
	height: 3,
	maxLevel: 10,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/8/8e/Gem_Mine_Ruin.png/revision/latest/scale-to-width-down/100?cb=20170830100510',
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
			availableCount: 1,
			maxLevel: 3,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 4,
			availableCount: 1,
			maxLevel: 4,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 5,
			availableCount: 1,
			maxLevel: 5,
			stage1MaxCount: 0,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 6,
			availableCount: 1,
			maxLevel: 6,
			stage1MaxCount: 1,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 7,
			availableCount: 1,
			maxLevel: 7,
			stage1MaxCount: 1,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 8,
			availableCount: 1,
			maxLevel: 8,
			stage1MaxCount: 1,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 9,
			availableCount: 1,
			maxLevel: 9,
			stage1MaxCount: 1,
			stage2MaxCount: 0,
		},
		{
			builderHallLevel: 10,
			availableCount: 1,
			maxLevel: 10,
			stage1MaxCount: 1,
			stage2MaxCount: 0,
		},
	],
	achievement: [],
	levels: [
		{
			level: 1,
			capacity: 10,
			productionRatePerDay: 2.16,
			productionTimePerGemSec: 40,
			productionTimePerGemMin: 6,
			productionTimePerGemHour: 11,
			productionTimePerGemDay: 0,
			timeToFillSec: 40,
			timeToFillMin: 6,
			timeToFillHour: 15,
			timeToFillDay: 4,
			hitpoints: 300,
			buildCost: 120000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 1,
			buildTimeDay: 0,
			exp: 60,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/ae/Gem_Mine1.png/revision/latest/scale-to-width-down/100?cb=20170830100532',
		},
		{
			level: 2,
			capacity: 11,
			productionRatePerDay: 2.4,
			productionTimePerGemSec: 0,
			productionTimePerGemMin: 0,
			productionTimePerGemHour: 10,
			productionTimePerGemDay: 0,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 14,
			timeToFillDay: 4,
			hitpoints: 350,
			buildCost: 180000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 2,
			buildTimeDay: 0,
			exp: 84,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/96/Gem_Mine2.png/revision/latest/scale-to-width-down/100?cb=20170830100551',
		},
		{
			level: 3,
			capacity: 12,
			productionRatePerDay: 2.64,
			productionTimePerGemSec: 27,
			productionTimePerGemMin: 5,
			productionTimePerGemHour: 9,
			productionTimePerGemDay: 0,
			timeToFillSec: 27,
			timeToFillMin: 5,
			timeToFillHour: 13,
			timeToFillDay: 4,
			hitpoints: 400,
			buildCost: 240000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 6,
			buildTimeDay: 0,
			exp: 146,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Gem_Mine3.png/revision/latest/scale-to-width-down/100?cb=20170830100614',
		},
		{
			level: 4,
			capacity: 13,
			productionRatePerDay: 2.88,
			productionTimePerGemSec: 0,
			productionTimePerGemMin: 20,
			productionTimePerGemHour: 8,
			productionTimePerGemDay: 0,
			timeToFillSec: 0,
			timeToFillMin: 20,
			timeToFillHour: 12,
			timeToFillDay: 4,
			hitpoints: 450,
			buildCost: 450000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 8,
			buildTimeDay: 0,
			exp: 169,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/25/Gem_Mine4.png/revision/latest/scale-to-width-down/100?cb=20170830100632',
		},
		{
			level: 5,
			capacity: 14,
			productionRatePerDay: 3.12,
			productionTimePerGemSec: 32,
			productionTimePerGemMin: 41,
			productionTimePerGemHour: 7,
			productionTimePerGemDay: 0,
			timeToFillSec: 32,
			timeToFillMin: 41,
			timeToFillHour: 11,
			timeToFillDay: 4,
			hitpoints: 550,
			buildCost: 1000000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f9/Gem_Mine5.png/revision/latest/scale-to-width-down/100?cb=20170830100652',
		},
		{
			level: 6,
			capacity: 15,
			productionRatePerDay: 3.36,
			productionTimePerGemSec: 34,
			productionTimePerGemMin: 8,
			productionTimePerGemHour: 7,
			productionTimePerGemDay: 0,
			timeToFillSec: 34,
			timeToFillMin: 8,
			timeToFillHour: 11,
			timeToFillDay: 4,
			hitpoints: 650,
			buildCost: 1500000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 1,
			exp: 293,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/ff/Gem_Mine6.png/revision/latest/scale-to-width-down/100?cb=20170830100710',
		},
		{
			level: 7,
			capacity: 16,
			productionRatePerDay: 3.84,
			productionTimePerGemSec: 0,
			productionTimePerGemMin: 15,
			productionTimePerGemHour: 6,
			productionTimePerGemDay: 0,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 0,
			timeToFillDay: 4,
			hitpoints: 750,
			buildCost: 2500000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9f/Gem_Mine7.png/revision/latest/scale-to-width-down/100?cb=20170927112119',
		},
		{
			level: 8,
			capacity: 17,
			productionRatePerDay: 4.32,
			productionTimePerGemSec: 20,
			productionTimePerGemMin: 33,
			productionTimePerGemHour: 5,
			productionTimePerGemDay: 0,
			timeToFillSec: 40,
			timeToFillMin: 26,
			timeToFillHour: 22,
			timeToFillDay: 3,
			hitpoints: 850,
			buildCost: 3500000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a8/Gem_Mine8.png/revision/latest/scale-to-width-down/100?cb=20170927112823',
		},
		{
			level: 9,
			capacity: 18,
			productionRatePerDay: 4.8,
			productionTimePerGemSec: 0,
			productionTimePerGemMin: 0,
			productionTimePerGemHour: 5,
			productionTimePerGemDay: 0,
			timeToFillSec: 0,
			timeToFillMin: 0,
			timeToFillHour: 18,
			timeToFillDay: 3,
			hitpoints: 1000,
			buildCost: 4500000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 6,
			exp: 720,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/be/Gem_Mine9.png/revision/latest/scale-to-width-down/100?cb=20200901052741',
		},
		{
			level: 10,
			capacity: 19,
			productionRatePerDay: 5.04,
			productionTimePerGemSec: 43,
			productionTimePerGemMin: 45,
			productionTimePerGemHour: 4,
			productionTimePerGemDay: 0,
			timeToFillSec: 34,
			timeToFillMin: 28,
			timeToFillHour: 18,
			timeToFillDay: 3,
			hitpoints: 1150,
			buildCost: 5500000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/0f/Gem_Mine10.png/revision/latest/scale-to-width-down/100?cb=20230518054357',
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

export default gemMine
