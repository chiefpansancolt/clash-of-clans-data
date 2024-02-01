import * as Constants from '@/constants'
import Trap from '@IClanCapital/traps/spearTrap/trap.interface'
import Level from '@IClanCapital/traps/spearTrap/level.interface'
import HallDetails from '@IClanCapital/hall/hallDetails.interface'

const nameHere: Trap = {
	name: 'Spear Trap',
	description:
		'Awaits a group of units to pass by and become the unwilling recipients of a flock of lethally spiky spears."',
	width: 2,
	height: 2,
	maxLevel: 4,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/c/c1/Spear_Trap_Ruin.png/revision/latest?cb=20231212023926',
	mode: {
		damageType: Constants.singleTarget,
		unitTypeTarget: Constants.groundAndAir,
		minTriggerRange: 0,
		maxTriggerRange: 10,
		favoriteTarget: Constants.any,
	},
	clanCapitalDetails: [
		{
			name: Constants.capitalHall,
			levels: [],
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
			levels: [],
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
			levels: [],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ hallLevel: 1, availableCount: 3, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 4, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 5, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 6, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damage: 120,
			projectileCount: 4,
			buildCost: 3000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6b/Spear_Trap1.png/revision/latest?cb=20231212023927',
		},
		{
			level: 2,
			damage: 140,
			projectileCount: 5,
			buildCost: 6000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/7a/Spear_Trap2.png/revision/latest?cb=20231212023931',
		},
		{
			level: 3,
			damage: 160,
			projectileCount: 6,
			buildCost: 12000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/75/Spear_Trap3.png/revision/latest?cb=20231212023935',
		},
		{
			level: 4,
			damage: 180,
			projectileCount: 7,
			buildCost: 20000,
			buildCostResource: Constants.capitalGold,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b8/Spear_Trap4.png/revision/latest?cb=20231212023938',
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
