import * as Constants from '@/constants'
import Level from '@IClanCapital/level.interface'
import Defense from '@IClanCapital/defense.interface'
import TownHallDefense from '@ICommon/townHallDefense.interface'

const blastBow: Defense = {
	name: 'Blast Bow',
	description:
		'Blast Bow finally gives a definitive answer to an age-old question: how dangerous would arrows the size of tree trunks be? Perhaps not surprisingly, very dangerous.',
	width: 4,
	height: 4,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/3/3f/Blast_Bow_Ruin.png/revision/latest/scale-to-width-down/100?cb=20220508102214',
	modes: [
		{
			name: Constants.mainMode,
			damageType: Constants.areaSplash,
			unitTypeTarget: Constants.groundAndAir,
			minRange: 3.5,
			maxRange: 14,
			attackSpeed: 4,
		},
	],
	capitalHallDetails: [
		{
			name: Constants.capitalHall,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 0 },
				{ townHall: 2, availableCount: 0, maxLevel: 0 },
				{ townHall: 3, availableCount: 0, maxLevel: 0 },
				{ townHall: 4, availableCount: 0, maxLevel: 0 },
				{ townHall: 5, availableCount: 0, maxLevel: 0 },
				{ townHall: 6, availableCount: 1, maxLevel: 1 },
				{ townHall: 7, availableCount: 1, maxLevel: 2 },
				{ townHall: 8, availableCount: 1, maxLevel: 3 },
				{ townHall: 9, availableCount: 1, maxLevel: 4 },
				{ townHall: 10, availableCount: 2, maxLevel: 5 },
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
				{ townHall: 1, availableCount: 0, maxLevel: 1 },
				{ townHall: 2, availableCount: 1, maxLevel: 2 },
				{ townHall: 3, availableCount: 1, maxLevel: 3 },
				{ townHall: 4, availableCount: 1, maxLevel: 4 },
				{ townHall: 5, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.dragonCliffs,
			levels: [
				{ townHall: 1, availableCount: 1, maxLevel: 1 },
				{ townHall: 2, availableCount: 1, maxLevel: 2 },
				{ townHall: 3, availableCount: 1, maxLevel: 3 },
				{ townHall: 4, availableCount: 1, maxLevel: 4 },
				{ townHall: 5, availableCount: 1, maxLevel: 5 },
			],
		},
		{
			name: Constants.golemQuarry,
			levels: [
				{ townHall: 1, availableCount: 1, maxLevel: 1 },
				{ townHall: 2, availableCount: 1, maxLevel: 2 },
				{ townHall: 3, availableCount: 2, maxLevel: 3 },
				{ townHall: 4, availableCount: 2, maxLevel: 4 },
				{ townHall: 5, availableCount: 3, maxLevel: 5 },
			],
		},
		{
			name: Constants.skeletonPark,
			levels: [],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 1 },
				{ townHall: 2, availableCount: 0, maxLevel: 2 },
				{ townHall: 3, availableCount: 0, maxLevel: 3 },
				{ townHall: 4, availableCount: 1, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 170,
			damagePerShot: 680,
			hitpoints: 4800,
			buildCost: 20000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 6,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/08/Blast_Bow1.png/revision/latest/scale-to-width-down/100?cb=20220508102215',
		},
		{
			level: 2,
			damagePerSecond: 185,
			damagePerShot: 740,
			hitpoints: 5400,
			buildCost: 40000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 7,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/82/Blast_Bow2.png/revision/latest/scale-to-width-down/100?cb=20220508102216',
		},
		{
			level: 3,
			damagePerSecond: 200,
			damagePerShot: 800,
			hitpoints: 6000,
			buildCost: 80000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 8,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b7/Blast_Bow3.png/revision/latest/scale-to-width-down/100?cb=20220508102217',
		},
		{
			level: 4,
			damagePerSecond: 215,
			damagePerShot: 860,
			hitpoints: 6600,
			buildCost: 133000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 9,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/36/Blast_Bow4.png/revision/latest/scale-to-width-down/100?cb=20220508102218',
		},
		{
			level: 5,
			damagePerSecond: 230,
			damagePerShot: 920,
			hitpoints: 7200,
			buildCost: 205000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 10,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/79/Blast_Bow5.png/revision/latest/scale-to-width-down/100?cb=20220508102219',
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

export default blastBow
