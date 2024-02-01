import * as Constants from '@/constants'
import Defense from '@IClanCapital/defenses/defense.interface'
import Level from '@IClanCapital/defenses/level.interface'
import HallDetails from '@IClanCapital/hall/hallDetails.interface'

const nameHere: Defense = {
	name: 'Giant Cannon',
	description:
		'Nothing gets in the way of the Giant Cannon. Its mammoth-sized cannon balls push past anything and just keep going and going and going...',
	width: 3,
	height: 3,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/e/e8/Giant_Cannon_Ruin.png/revision/latest/scale-to-width-down/100?cb=20220507083836',
	mode: {
		name: Constants.mainMode,
		damageType: Constants.areaSplash,
		unitTypeTarget: Constants.ground,
		minRange: 0,
		maxRange: 10,
		attackSpeed: 5,
	},
	clanCapitalDetails: [
		{
			name: Constants.capitalHall,
			levels: [
				{ hallLevel: 1, availableCount: 0, maxLevel: 0 },
				{ hallLevel: 2, availableCount: 0, maxLevel: 0 },
				{ hallLevel: 3, availableCount: 0, maxLevel: 0 },
				{ hallLevel: 4, availableCount: 0, maxLevel: 0 },
				{ hallLevel: 5, availableCount: 1, maxLevel: 1 },
				{ hallLevel: 6, availableCount: 1, maxLevel: 2 },
				{ hallLevel: 7, availableCount: 2, maxLevel: 3 },
				{ hallLevel: 8, availableCount: 2, maxLevel: 4 },
				{ hallLevel: 9, availableCount: 2, maxLevel: 4 },
				{ hallLevel: 10, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [
				{ hallLevel: 1, availableCount: 0, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 0, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 1, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 2, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.wizardValley,
			levels: [
				{ hallLevel: 1, availableCount: 0, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 0, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 0, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 2, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 2, maxLevel: 5 },
			],
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
				{ hallLevel: 3, availableCount: 3, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 4, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 4, maxLevel: 5 },
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
				{ hallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 1, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 1, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 1, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ hallLevel: 1, availableCount: 0, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 1, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 1, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 1, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 80,
			damagePerShot: 400,
			hitpoints: 3700,
			buildCost: 10000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 5,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d3/Giant_Cannon1C.png/revision/latest/scale-to-width-down/100?cb=20220507083837',
		},
		{
			level: 2,
			damagePerSecond: 90,
			damagePerShot: 450,
			hitpoints: 3900,
			buildCost: 20000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 6,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/ce/Giant_Cannon2C.png/revision/latest/scale-to-width-down/100?cb=20220507083838',
		},
		{
			level: 3,
			damagePerSecond: 100,
			damagePerShot: 500,
			hitpoints: 4100,
			buildCost: 40000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 7,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/12/Giant_Cannon3C.png/revision/latest/scale-to-width-down/100?cb=20220507083839',
		},
		{
			level: 4,
			damagePerSecond: 110,
			damagePerShot: 550,
			hitpoints: 4300,
			buildCost: 63000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 8,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e5/Giant_Cannon4C.png/revision/latest/scale-to-width-down/100?cb=20220507083840',
		},
		{
			level: 5,
			damagePerSecond: 120,
			damagePerShot: 600,
			hitpoints: 4500,
			buildCost: 105000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 10,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/07/Giant_Cannon5C.png/revision/latest/scale-to-width-down/100?cb=20220507083841',
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

export default nameHere
