import * as Constants from '@/constants'
import Trap from '@IClanCapital/traps/trap.interface'
import Level from '@IClanCapital/traps/level.interface'
import HallDetails from '@IClanCapital/hall/hallDetails.interface'

const logTrap: Trap = {
	name: 'Log Trap',
	description: 'Beware of rolling logs.',
	width: 2,
	height: 2,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/e/eb/Log_Trap_Ruin.png/revision/latest/scale-to-width-down/100?cb=20220508105806',
	mode: {
		damageType: Constants.singleTarget,
		unitTypeTarget: Constants.ground,
		minTriggerRange: 0,
		maxTriggerRange: 9,
		favoriteTarget: Constants.any,
	},
	clanCapitalDetails: [
		{
			name: Constants.capitalHall,
			levels: [
				{ hallLevel: 1, availableCount: 0, maxLevel: 0 },
				{ hallLevel: 2, availableCount: 0, maxLevel: 0 },
				{ hallLevel: 3, availableCount: 0, maxLevel: 0 },
				{ hallLevel: 4, availableCount: 1, maxLevel: 2 },
				{ hallLevel: 5, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 6, availableCount: 3, maxLevel: 3 },
				{ hallLevel: 7, availableCount: 4, maxLevel: 3 },
				{ hallLevel: 8, availableCount: 4, maxLevel: 4 },
				{ hallLevel: 9, availableCount: 4, maxLevel: 4 },
				{ hallLevel: 10, availableCount: 4, maxLevel: 5 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [],
		},
		{
			name: Constants.wizardValley,
			levels: [
				{ hallLevel: 1, availableCount: 0, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 1, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 1, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 1, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 1, maxLevel: 5 },
			],
		},
		{
			name: Constants.ballonLagoon,
			levels: [
				{ hallLevel: 1, availableCount: 4, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 4, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 4, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 4, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 4, maxLevel: 5 },
			],
		},
		{
			name: Constants.builderWorkshop,
			levels: [
				{ hallLevel: 1, availableCount: 5, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 6, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 7, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 8, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 8, maxLevel: 5 },
			],
		},
		{
			name: Constants.dragonCliffs,
			levels: [
				{ hallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 2, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.golemQuarry,
			levels: [
				{ hallLevel: 1, availableCount: 4, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 5, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 6, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 6, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 6, maxLevel: 5 },
			],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ hallLevel: 1, availableCount: 4, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 6, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 7, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 7, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ hallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 3, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damage: 400,
			buildCost: 1500,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 4,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8b/Log_Trap1.png/revision/latest/scale-to-width-down/100?cb=20220508105807',
		},
		{
			level: 2,
			damage: 450,
			buildCost: 3000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 4,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/07/Log_Trap2.png/revision/latest/scale-to-width-down/100?cb=20220508105808',
		},
		{
			level: 3,
			damage: 500,
			buildCost: 6000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 6,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a3/Log_Trap3.png/revision/latest/scale-to-width-down/100?cb=20220508105809',
		},
		{
			level: 4,
			damage: 550,
			buildCost: 12000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 8,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7e/Log_Trap4.png/revision/latest/scale-to-width-down/100?cb=20220508105810',
		},
		{
			level: 5,
			damage: 600,
			buildCost: 20000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 10,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/55/Log_Trap5.png/revision/latest/scale-to-width-down/100?cb=20220508105811',
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

export default logTrap
