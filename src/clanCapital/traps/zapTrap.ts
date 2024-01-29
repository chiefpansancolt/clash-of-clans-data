import * as Constants from '@/constants'
import Trap from '@IClanCapital/traps/trap.interface'
import Level from '@IClanCapital/traps/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const zapTrap: Trap = {
	name: 'Zap Trap',
	description: "Passing troops are very shocked when there's a Zap Trap nearby.",
	width: 1,
	height: 1,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/d/df/Small_Trap_Ruin.png/revision/latest/scale-to-width-down/80?cb=20220510203732',
	mode: {
		damageType: Constants.singleTarget,
		unitTypeTarget: Constants.groundAndAir,
		minTriggerRange: 0,
		maxTriggerRange: 5,
		favoriteTarget: Constants.none,
	},
	capitalHallDetails: [
		{
			name: Constants.capitalHall,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 0 },
				{ townHall: 2, availableCount: 0, maxLevel: 0 },
				{ townHall: 3, availableCount: 0, maxLevel: 0 },
				{ townHall: 4, availableCount: 0, maxLevel: 0 },
				{ townHall: 5, availableCount: 1, maxLevel: 2 },
				{ townHall: 6, availableCount: 2, maxLevel: 3 },
				{ townHall: 7, availableCount: 3, maxLevel: 3 },
				{ townHall: 8, availableCount: 4, maxLevel: 4 },
				{ townHall: 9, availableCount: 5, maxLevel: 4 },
				{ townHall: 10, availableCount: 5, maxLevel: 5 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [],
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
				{ townHall: 1, availableCount: 4, maxLevel: 1 },
				{ townHall: 2, availableCount: 5, maxLevel: 2 },
				{ townHall: 3, availableCount: 6, maxLevel: 3 },
				{ townHall: 4, availableCount: 6, maxLevel: 4 },
				{ townHall: 5, availableCount: 6, maxLevel: 5 },
			],
		},
		{
			name: Constants.dragonCliffs,
			levels: [
				{ townHall: 1, availableCount: 3, maxLevel: 1 },
				{ townHall: 2, availableCount: 4, maxLevel: 2 },
				{ townHall: 3, availableCount: 5, maxLevel: 3 },
				{ townHall: 4, availableCount: 5, maxLevel: 4 },
				{ townHall: 5, availableCount: 5, maxLevel: 5 },
			],
		},
		{
			name: Constants.golemQuarry,
			levels: [
				{ townHall: 1, availableCount: 3, maxLevel: 1 },
				{ townHall: 2, availableCount: 4, maxLevel: 2 },
				{ townHall: 3, availableCount: 5, maxLevel: 3 },
				{ townHall: 4, availableCount: 6, maxLevel: 4 },
				{ townHall: 5, availableCount: 6, maxLevel: 5 },
			],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ townHall: 1, availableCount: 1, maxLevel: 1 },
				{ townHall: 2, availableCount: 1, maxLevel: 2 },
				{ townHall: 3, availableCount: 3, maxLevel: 3 },
				{ townHall: 4, availableCount: 4, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ townHall: 1, availableCount: 2, maxLevel: 1 },
				{ townHall: 2, availableCount: 3, maxLevel: 2 },
				{ townHall: 3, availableCount: 4, maxLevel: 3 },
				{ townHall: 4, availableCount: 4, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damage: 1000,
			buildCost: 2500,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 5,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3f/Zap_Trap1.png/revision/latest/scale-to-width-down/80?cb=20220510205256',
		},
		{
			level: 2,
			damage: 1400,
			buildCost: 5000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 5,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6c/Zap_Trap2.png/revision/latest/scale-to-width-down/80?cb=20220510205257',
		},
		{
			level: 3,
			damage: 1600,
			buildCost: 10000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 6,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7c/Zap_Trap3.png/revision/latest/scale-to-width-down/80?cb=20220510205258',
		},
		{
			level: 4,
			damage: 1800,
			buildCost: 18000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 8,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/14/Zap_Trap4.png/revision/latest/scale-to-width-down/80?cb=20220510205259',
		},
		{
			level: 5,
			damage: 2000,
			buildCost: 30000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 10,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Zap_Trap5.png/revision/latest/scale-to-width-down/80?cb=20220510205302',
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

export default zapTrap
