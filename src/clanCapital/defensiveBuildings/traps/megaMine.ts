import * as Constants from '@/constants'
import Trap from '@IClanCapital/traps/megaMine/trap.interface'
import Level from '@IClanCapital/traps/megaMine/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const megaMine: Trap = {
	name: 'Mega Mine',
	description: 'A hidden dose of heavy destruction. Choose air or ground!',
	width: 2,
	height: 2,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/1/1e/Mega_Mine_Ruin.png/revision/latest/scale-to-width-down/80?cb=20220510204335',
	mode: {
		damageType: Constants.areaSplash,
		unitTypeTarget: Constants.groundOrAir,
		minTriggerRange: 0,
		maxTriggerRange: 2,
		damageRadius: 4,
		favoriteTarget: Constants.any,
	},
	capitalHallDetails: [
		{
			name: Constants.capitalHall,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 0 },
				{ townHall: 2, availableCount: 4, maxLevel: 1 },
				{ townHall: 3, availableCount: 5, maxLevel: 2 },
				{ townHall: 4, availableCount: 6, maxLevel: 2 },
				{ townHall: 5, availableCount: 7, maxLevel: 3 },
				{ townHall: 6, availableCount: 8, maxLevel: 3 },
				{ townHall: 7, availableCount: 9, maxLevel: 4 },
				{ townHall: 8, availableCount: 10, maxLevel: 4 },
				{ townHall: 9, availableCount: 11, maxLevel: 5 },
				{ townHall: 10, availableCount: 12, maxLevel: 5 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 1 },
				{ townHall: 2, availableCount: 2, maxLevel: 2 },
				{ townHall: 3, availableCount: 3, maxLevel: 3 },
				{ townHall: 4, availableCount: 4, maxLevel: 4 },
				{ townHall: 5, availableCount: 4, maxLevel: 5 },
			],
		},
		{
			name: Constants.wizardValley,
			levels: [
				{ townHall: 1, availableCount: 2, maxLevel: 1 },
				{ townHall: 2, availableCount: 4, maxLevel: 2 },
				{ townHall: 3, availableCount: 5, maxLevel: 3 },
				{ townHall: 4, availableCount: 6, maxLevel: 4 },
				{ townHall: 5, availableCount: 6, maxLevel: 5 },
			],
		},
		{
			name: Constants.ballonLagoon,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 1 },
				{ townHall: 2, availableCount: 0, maxLevel: 2 },
				{ townHall: 3, availableCount: 1, maxLevel: 3 },
				{ townHall: 4, availableCount: 2, maxLevel: 4 },
				{ townHall: 5, availableCount: 3, maxLevel: 5 },
			],
		},
		{
			name: Constants.builderWorkshop,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 1 },
				{ townHall: 2, availableCount: 0, maxLevel: 2 },
				{ townHall: 3, availableCount: 1, maxLevel: 3 },
				{ townHall: 4, availableCount: 2, maxLevel: 4 },
				{ townHall: 5, availableCount: 3, maxLevel: 5 },
			],
		},
		{
			name: Constants.dragonCliffs,
			levels: [],
		},
		{
			name: Constants.golemQuarry,
			levels: [],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ townHall: 1, availableCount: 2, maxLevel: 1 },
				{ townHall: 2, availableCount: 3, maxLevel: 2 },
				{ townHall: 3, availableCount: 3, maxLevel: 3 },
				{ townHall: 4, availableCount: 3, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ townHall: 1, availableCount: 1, maxLevel: 1 },
				{ townHall: 2, availableCount: 2, maxLevel: 2 },
				{ townHall: 3, availableCount: 3, maxLevel: 3 },
				{ townHall: 4, availableCount: 3, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damage: 400,
			buildCost: 2000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 2,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/51/Mega_Mine1_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130180338',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/64/Mega_Mine1_Air.png/revision/latest/scale-to-width-down/80?cb=20171130180410',
		},
		{
			level: 2,
			damage: 450,
			buildCost: 4000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 3,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Mega_Mine2_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130180339',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/29/Mega_Mine2_Air.png/revision/latest/scale-to-width-down/80?cb=20171130180410',
		},
		{
			level: 3,
			damage: 500,
			buildCost: 8000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 5,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Mega_Mine3_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130180339',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/2e/Mega_Mine3_Air.png/revision/latest/scale-to-width-down/80?cb=20171130180411',
		},
		{
			level: 4,
			damage: 550,
			buildCost: 15000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 7,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c4/Mega_Mine4_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130180339',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d6/Mega_Mine4_Air.png/revision/latest/scale-to-width-down/80?cb=20171130180411',
		},
		{
			level: 5,
			damage: 600,
			buildCost: 25000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 9,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/76/Mega_Mine5_Ground.png/revision/latest/scale-to-width-down/80?cb=20171130180340',
			airImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cf/Mega_Mine5_Air.png/revision/latest/scale-to-width-down/80?cb=20171130180411',
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

export default megaMine
