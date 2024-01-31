import * as Constants from '@/constants'
import Trap from '@IClanCapital/traps/trap.interface'
import Level from '@IClanCapital/traps/level.interface'
import TownHallDetails from '@ICommon/hall/details.interface'

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
	capitalHallDetails: [
		{
			name: Constants.capitalHall,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 0 },
				{ townHall: 2, availableCount: 0, maxLevel: 0 },
				{ townHall: 3, availableCount: 0, maxLevel: 0 },
				{ townHall: 4, availableCount: 1, maxLevel: 2 },
				{ townHall: 5, availableCount: 2, maxLevel: 2 },
				{ townHall: 6, availableCount: 3, maxLevel: 3 },
				{ townHall: 7, availableCount: 4, maxLevel: 3 },
				{ townHall: 8, availableCount: 4, maxLevel: 4 },
				{ townHall: 9, availableCount: 4, maxLevel: 4 },
				{ townHall: 10, availableCount: 4, maxLevel: 5 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [],
		},
		{
			name: Constants.wizardValley,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 1 },
				{ townHall: 2, availableCount: 1, maxLevel: 2 },
				{ townHall: 3, availableCount: 1, maxLevel: 3 },
				{ townHall: 4, availableCount: 1, maxLevel: 4 },
				{ townHall: 5, availableCount: 1, maxLevel: 5 },
			],
		},
		{
			name: Constants.ballonLagoon,
			levels: [
				{ townHall: 1, availableCount: 4, maxLevel: 1 },
				{ townHall: 2, availableCount: 4, maxLevel: 2 },
				{ townHall: 3, availableCount: 4, maxLevel: 3 },
				{ townHall: 4, availableCount: 4, maxLevel: 4 },
				{ townHall: 5, availableCount: 4, maxLevel: 5 },
			],
		},
		{
			name: Constants.builderWorkshop,
			levels: [
				{ townHall: 1, availableCount: 5, maxLevel: 1 },
				{ townHall: 2, availableCount: 6, maxLevel: 2 },
				{ townHall: 3, availableCount: 7, maxLevel: 3 },
				{ townHall: 4, availableCount: 8, maxLevel: 4 },
				{ townHall: 5, availableCount: 8, maxLevel: 5 },
			],
		},
		{
			name: Constants.dragonCliffs,
			levels: [
				{ townHall: 1, availableCount: 2, maxLevel: 1 },
				{ townHall: 2, availableCount: 2, maxLevel: 2 },
				{ townHall: 3, availableCount: 2, maxLevel: 3 },
				{ townHall: 4, availableCount: 2, maxLevel: 4 },
				{ townHall: 5, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.golemQuarry,
			levels: [
				{ townHall: 1, availableCount: 4, maxLevel: 1 },
				{ townHall: 2, availableCount: 5, maxLevel: 2 },
				{ townHall: 3, availableCount: 6, maxLevel: 3 },
				{ townHall: 4, availableCount: 6, maxLevel: 4 },
				{ townHall: 5, availableCount: 6, maxLevel: 5 },
			],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ townHall: 1, availableCount: 4, maxLevel: 1 },
				{ townHall: 2, availableCount: 6, maxLevel: 2 },
				{ townHall: 3, availableCount: 7, maxLevel: 3 },
				{ townHall: 4, availableCount: 7, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ townHall: 1, availableCount: 2, maxLevel: 1 },
				{ townHall: 2, availableCount: 2, maxLevel: 2 },
				{ townHall: 3, availableCount: 2, maxLevel: 3 },
				{ townHall: 4, availableCount: 3, maxLevel: 4 },
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
	getCapitalHallLevel(name: string, level: number): TownHallDetails | undefined {
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

export default logTrap
