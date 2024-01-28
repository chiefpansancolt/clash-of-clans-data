import * as Constants from '@/constants'
import Level from '@IClanCapital/level.interface'
import Defense from '@IClanCapital/defense.interface'
import TownHallDefense from '@ICommon/townHallDefense.interface'

const airDefense: Defense = {
	name: 'Air Defense',
	description:
		"This anti-air tower is deadly against flying enemies, but can't target foes on the ground. Place it wisely to cover as much airspace as possible.",
	width: 2,
	height: 2,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/f/f0/Air_Defense_Ruin.png/revision/latest/scale-to-width-down/100?cb=20221225050413',
	modes: [
		{
			name: Constants.mainMode,
			damageType: Constants.singleTarget,
			unitTypeTarget: Constants.air,
			minRange: 0,
			maxRange: 10,
			attackSpeed: 1.5,
		},
	],
	capitalHallDetails: [
		{
			name: Constants.capitalHall,
			levels: [
				{ townHall: 1, availableCount: 4, maxLevel: 1 },
				{ townHall: 2, availableCount: 4, maxLevel: 2 },
				{ townHall: 3, availableCount: 4, maxLevel: 2 },
				{ townHall: 4, availableCount: 4, maxLevel: 3 },
				{ townHall: 5, availableCount: 4, maxLevel: 3 },
				{ townHall: 6, availableCount: 4, maxLevel: 4 },
				{ townHall: 7, availableCount: 4, maxLevel: 4 },
				{ townHall: 8, availableCount: 4, maxLevel: 4 },
				{ townHall: 9, availableCount: 4, maxLevel: 5 },
				{ townHall: 10, availableCount: 4, maxLevel: 5 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [
				{ townHall: 1, availableCount: 4, maxLevel: 1 },
				{ townHall: 2, availableCount: 4, maxLevel: 2 },
				{ townHall: 3, availableCount: 6, maxLevel: 3 },
				{ townHall: 4, availableCount: 7, maxLevel: 4 },
				{ townHall: 5, availableCount: 7, maxLevel: 5 },
			],
		},
		{
			name: Constants.wizardValley,
			levels: [
				{ townHall: 1, availableCount: 4, maxLevel: 1 },
				{ townHall: 2, availableCount: 4, maxLevel: 2 },
				{ townHall: 3, availableCount: 6, maxLevel: 3 },
				{ townHall: 4, availableCount: 7, maxLevel: 4 },
				{ townHall: 5, availableCount: 7, maxLevel: 5 },
			],
		},
		{
			name: Constants.ballonLagoon,
			levels: [
				{ townHall: 1, availableCount: 2, maxLevel: 1 },
				{ townHall: 2, availableCount: 2, maxLevel: 2 },
				{ townHall: 3, availableCount: 3, maxLevel: 3 },
				{ townHall: 4, availableCount: 3, maxLevel: 4 },
				{ townHall: 5, availableCount: 3, maxLevel: 5 },
			],
		},
		{
			name: Constants.builderWorkshop,
			levels: [
				{ townHall: 1, availableCount: 6, maxLevel: 1 },
				{ townHall: 2, availableCount: 7, maxLevel: 2 },
				{ townHall: 3, availableCount: 8, maxLevel: 3 },
				{ townHall: 4, availableCount: 8, maxLevel: 4 },
				{ townHall: 5, availableCount: 8, maxLevel: 5 },
			],
		},
		{
			name: Constants.dragonCliffs,
			levels: [
				{ townHall: 1, availableCount: 4, maxLevel: 1 },
				{ townHall: 2, availableCount: 5, maxLevel: 2 },
				{ townHall: 3, availableCount: 6, maxLevel: 3 },
				{ townHall: 4, availableCount: 7, maxLevel: 4 },
				{ townHall: 5, availableCount: 7, maxLevel: 5 },
			],
		},
		{
			name: Constants.golemQuarry,
			levels: [
				{ townHall: 1, availableCount: 5, maxLevel: 1 },
				{ townHall: 2, availableCount: 6, maxLevel: 2 },
				{ townHall: 3, availableCount: 7, maxLevel: 3 },
				{ townHall: 4, availableCount: 8, maxLevel: 4 },
				{ townHall: 5, availableCount: 9, maxLevel: 5 },
			],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ townHall: 1, availableCount: 3, maxLevel: 1 },
				{ townHall: 2, availableCount: 3, maxLevel: 2 },
				{ townHall: 3, availableCount: 4, maxLevel: 3 },
				{ townHall: 4, availableCount: 5, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ townHall: 1, availableCount: 2, maxLevel: 1 },
				{ townHall: 2, availableCount: 2, maxLevel: 2 },
				{ townHall: 3, availableCount: 3, maxLevel: 3 },
				{ townHall: 4, availableCount: 3, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 260,
			damagePerShot: 590,
			hitpoints: 1400,
			buildCost: 3500,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 1,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d7/Air_Defense1C.png/revision/latest/scale-to-width-down/100?cb=20221225050420',
		},
		{
			level: 2,
			damagePerSecond: 290,
			damagePerShot: 435,
			hitpoints: 1500,
			buildCost: 7000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 2,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3a/Air_Defense2C.png/revision/latest/scale-to-width-down/100?cb=20221225050427',
		},
		{
			level: 3,
			damagePerSecond: 320,
			damagePerShot: 480,
			hitpoints: 1600,
			buildCost: 14000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 4,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e4/Air_Defense3C.png/revision/latest/scale-to-width-down/100?cb=20221225050435',
		},
		{
			level: 4,
			damagePerSecond: 350,
			damagePerShot: 525,
			hitpoints: 1700,
			buildCost: 24000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 6,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/17/Air_Defense4C.png/revision/latest/scale-to-width-down/100?cb=20221225050442',
		},
		{
			level: 5,
			damagePerSecond: 380,
			damagePerShot: 570,
			hitpoints: 1800,
			buildCost: 40000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 9,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d8/Air_Defense5C.png/revision/latest/scale-to-width-down/100?cb=20221225050449',
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
	getCapitalHallLevel(name: string, level: number): TownHallDefense | undefined {
		const hallDetails = this.capitalHallDetails.find(
			(detail: { name: string }) => detail.name === name
		)

		if (hallDetails && level >= 1 && level <= hallDetails.levels.length) {
			return hallDetails.levels[level - 1]
		} else {
			console.error(`Invalid Capital Hall level or name: ${level} or ${name}`)
			return undefined
		}
	},
}

export default airDefense
