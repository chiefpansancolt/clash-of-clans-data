import * as Constants from '@/constants'
import Defense from '@IClanCapital/defenses/defense.interface'
import Level from '@IClanCapital/defenses/level.interface'
import HallDetails from '@IClanCapital/hall/hallDetails.interface'

const multiMortor: Defense = {
	name: 'Multi Mortor',
	description:
		'Fires long range splash damage multiple times to maximize chances of hitting its target!',
	width: 2,
	height: 2,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/0/06/Multi_Mortar_Ruin.png/revision/latest/scale-to-width-down/100?cb=20221128085808',
	mode: {
		name: Constants.mainMode,
		damageType: Constants.splash,
		unitTypeTarget: Constants.ground,
		minRange: 0,
		maxRange: 0,
		attackSpeed: 0,
	},
	clanCapitalDetails: [
		{
			name: Constants.capitalHall,
			levels: [
				{ hallLevel: 1, availableCount: 0, maxLevel: 0 },
				{ hallLevel: 2, availableCount: 1, maxLevel: 0 },
				{ hallLevel: 3, availableCount: 2, maxLevel: 0 },
				{ hallLevel: 4, availableCount: 2, maxLevel: 0 },
				{ hallLevel: 5, availableCount: 2, maxLevel: 0 },
				{ hallLevel: 6, availableCount: 2, maxLevel: 0 },
				{ hallLevel: 7, availableCount: 2, maxLevel: 0 },
				{ hallLevel: 8, availableCount: 2, maxLevel: 0 },
				{ hallLevel: 9, availableCount: 2, maxLevel: 0 },
				{ hallLevel: 10, availableCount: 2, maxLevel: 0 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [
				{ hallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 3, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 4, maxLevel: 5 },
			],
		},
		{
			name: Constants.wizardValley,
			levels: [],
		},
		{
			name: Constants.ballonLagoon,
			levels: [],
		},
		{
			name: Constants.builderWorkshop,
			levels: [
				{ hallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 2, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.dragonCliffs,
			levels: [],
		},
		{
			name: Constants.golemQuarry,
			levels: [
				{ hallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 3, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 4, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 4, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 4, maxLevel: 5 },
			],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ hallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 3, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 3, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ hallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 3, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 4, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 45,
			damagePerShot: 80,
			hitpoints: 1700,
			buildCost: 5000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 2,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5d/Multi_Mortar1C.png/revision/latest/scale-to-width-down/100?cb=20221128085706',
		},
		{
			level: 2,
			damagePerSecond: 51,
			damagePerShot: 90,
			hitpoints: 1900,
			buildCost: 10000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 3,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d5/Multi_Mortar2C.png/revision/latest/scale-to-width-down/100?cb=20221128085714',
		},
		{
			level: 3,
			damagePerSecond: 56,
			damagePerShot: 100,
			hitpoints: 2100,
			buildCost: 20000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 5,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d4/Multi_Mortar3C.png/revision/latest/scale-to-width-down/100?cb=20221128085728',
		},
		{
			level: 4,
			damagePerSecond: 62,
			damagePerShot: 110,
			hitpoints: 2300,
			buildCost: 33000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 7,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Multi_Mortar4C.png/revision/latest/scale-to-width-down/100?cb=20221128085739',
		},
		{
			level: 5,
			damagePerSecond: 68,
			damagePerShot: 120,
			hitpoints: 2500,
			buildCost: 55000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 9,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7d/Multi_Mortar5C.png/revision/latest/scale-to-width-down/100?cb=20221128085751',
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
	getHallLevel(name: string, level: number): HallDetails | undefined {
		const hallDetails = this.clanCapitalDetails.find(
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

export default multiMortor
