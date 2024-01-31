import * as Constants from '@/constants'
import Building from '@IBuilderBase/army/starLaboratory/army.interface'
import Level from '@IBuilderBase/army/level.interface'
import TownHallDetails from '@ICommon/hall/details.interface'

const startLaboratory: Building = {
	name: 'Star Laboratory',
	description:
		"The Star Laboratory searches the heavens for secrets to unlock a troop's full potential. Improve troop hitpoints, damage and housing space in addition to special troop abilities!",
	maxCount: 1,
	width: 4,
	height: 4,
	maxLevel: 10,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/e/ec/Star_Laboratory_Ruin.png/revision/latest/scale-to-width-down/100?cb=20170527170927',
	townHallDetails: [
		{ townHall: 1, availableCount: 1, maxLevel: 0 },
		{ townHall: 2, availableCount: 1, maxLevel: 2 },
		{ townHall: 3, availableCount: 1, maxLevel: 3 },
		{ townHall: 4, availableCount: 1, maxLevel: 4 },
		{ townHall: 5, availableCount: 1, maxLevel: 5 },
		{ townHall: 6, availableCount: 1, maxLevel: 6 },
		{ townHall: 7, availableCount: 1, maxLevel: 7 },
		{ townHall: 8, availableCount: 1, maxLevel: 8 },
		{ townHall: 9, availableCount: 1, maxLevel: 9 },
		{ townHall: 10, availableCount: 1, maxLevel: 10 },
	],
	achievement: [],
	levels: [
		{
			level: 1,
			hitpoints: 650,
			buildCost: 1000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 0,
			townHallLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1c/Star_Laboratory1.png/revision/latest/scale-to-width-down/100?cb=20180512123423',
		},
		{
			level: 2,
			hitpoints: 800,
			buildCost: 15000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 10,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 24,
			townHallLevelRequired: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b5/Star_Laboratory2.png/revision/latest/scale-to-width-down/100?cb=20180512123408',
		},
		{
			level: 3,
			hitpoints: 975,
			buildCost: 50000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 30,
			buildTimeHour: 0,
			buildTimeDay: 0,
			exp: 42,
			townHallLevelRequired: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/ac/Star_Laboratory3.png/revision/latest/scale-to-width-down/100?cb=20180512123343',
		},
		{
			level: 4,
			hitpoints: 1150,
			buildCost: 300000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 8,
			buildTimeDay: 0,
			exp: 169,
			townHallLevelRequired: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Star_Laboratory4.png/revision/latest/scale-to-width-down/100?cb=20180512123308',
		},
		{
			level: 5,
			hitpoints: 1350,
			buildCost: 700000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 12,
			buildTimeDay: 0,
			exp: 207,
			townHallLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bd/Star_Laboratory5.png/revision/latest/scale-to-width-down/100?cb=20180512123234',
		},
		{
			level: 6,
			hitpoints: 1600,
			buildCost: 1000000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 2,
			exp: 415,
			townHallLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8b/Star_Laboratory6.png/revision/latest/scale-to-width-down/100?cb=20180512123219',
		},
		{
			level: 7,
			hitpoints: 1850,
			buildCost: 2000000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 4,
			exp: 587,
			townHallLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8a/Star_Laboratory7.png/revision/latest/scale-to-width-down/100?cb=20180512123203',
		},
		{
			level: 8,
			hitpoints: 2150,
			buildCost: 3000000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 6,
			exp: 720,
			townHallLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/2d/Star_Laboratory8.png/revision/latest/scale-to-width-down/100?cb=20180512123147',
		},
		{
			level: 9,
			hitpoints: 2450,
			buildCost: 4000000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 8,
			exp: 831,
			townHallLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/98/Star_Laboratory9.png/revision/latest/scale-to-width-down/100?cb=20200901052740',
		},
		{
			level: 10,
			hitpoints: 2750,
			buildCost: 5000000,
			buildCostResource: Constants.builderElixir,
			buildTimeSec: 0,
			buildTimeMin: 0,
			buildTimeHour: 0,
			buildTimeDay: 10,
			exp: 929,
			townHallLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/32/Star_Laboratory10.png/revision/latest/scale-to-width-down/100?cb=20230518080618',
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

export default startLaboratory
