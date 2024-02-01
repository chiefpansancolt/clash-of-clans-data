import * as Constants from '@/constants'
import Defense from '@IClanCapital/defenses/raidCartPost/defense.interface'
import Level from '@IClanCapital/defenses/raidCartPost/level.interface'
import HallDetails from '@IClanCapital/hall/hallDetails.interface'

const raidCartPost: Defense = {
	name: 'Raid Cart Post',
	description: 'If a Raid Cart could feel happy, blasting at attackers would make it happy',
	width: 3,
	height: 3,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/8/86/Guard_Post_Ruin.png/revision/latest/scale-to-width-down/100?cb=20231217070455',
	mode: [],
	troops: [
		{
			name: 'Seige Cart',
			availableCount: 1,
		},
	],
	clanCapitalDetails: [
		{
			name: Constants.capitalHall,
			levels: [
				{ hallLevel: 1, availableCount: 0, maxLevel: 0 },
				{ hallLevel: 2, availableCount: 0, maxLevel: 0 },
				{ hallLevel: 3, availableCount: 0, maxLevel: 0 },
				{ hallLevel: 4, availableCount: 0, maxLevel: 0 },
				{ hallLevel: 5, availableCount: 0, maxLevel: 0 },
				{ hallLevel: 6, availableCount: 0, maxLevel: 0 },
				{ hallLevel: 7, availableCount: 0, maxLevel: 0 },
				{ hallLevel: 8, availableCount: 0, maxLevel: 0 },
				{ hallLevel: 9, availableCount: 1, maxLevel: 4 },
				{ hallLevel: 10, availableCount: 1, maxLevel: 5 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [],
		},
		{
			name: Constants.wizardValley,
			levels: [
				{ hallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 2, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 3, maxLevel: 5 },
			],
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
			levels: [],
		},
	],
	levels: [
		{
			level: 1,
			troopLevel: 1,
			hitpoints: 800,
			buildCost: 9000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 9,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/ef/Raid_Cart_Post1.png/revision/latest/scale-to-width-down/100?cb=20231217050810',
		},
		{
			level: 2,
			troopLevel: 2,
			hitpoints: 920,
			buildCost: 18000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 9,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/92/Raid_Cart_Post2.png/revision/latest/scale-to-width-down/100?cb=20231217050815',
		},
		{
			level: 3,
			troopLevel: 3,
			hitpoints: 1065,
			buildCost: 36000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 9,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8d/Raid_Cart_Post3.png/revision/latest/scale-to-width-down/100?cb=20231217050820',
		},
		{
			level: 4,
			troopLevel: 4,
			hitpoints: 1225,
			buildCost: 57000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 9,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cb/Raid_Cart_Post4.png/revision/latest/scale-to-width-down/100?cb=20231217050823',
		},
		{
			level: 5,
			troopLevel: 5,
			hitpoints: 1400,
			buildCost: 95000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 10,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/ff/Raid_Cart_Post5.png/revision/latest/scale-to-width-down/100?cb=20231217050827',
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

export default raidCartPost
