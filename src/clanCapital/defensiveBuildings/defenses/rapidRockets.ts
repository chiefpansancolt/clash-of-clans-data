import * as Constants from '@/constants'
import Defense from '@IClanCapital/defenses/rapidRockets/defense.interface'
import Level from '@IClanCapital/defenses/level.interface'
import HallDetails from '@IClanCapital/hall/hallDetails.interface'

const rapidRockets: Defense = {
	name: 'Rapid Rockets',
	description:
		'This tightly packed bundle of rockets has a shorter range compared to the Air Defense, but makes up for it by packing a meaner punch.',
	width: 2,
	height: 2,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/e/ef/Rapid_Rockets_Ruin.png/revision/latest/scale-to-width-down/100?cb=20231217075205',
	mode: {
		name: Constants.mainMode,
		damageType: Constants.singleTarget,
		unitTypeTarget: Constants.air,
		minRange: 0,
		maxRange: 7,
		shotsPerBurst: 5,
		attackSpeed: 0.55,
	},
	clanCapitalDetails: [
		{
			name: Constants.capitalHall,
			levels: [
				{ hallLevel: 1, availableCount: 0, maxLevel: 0 },
				{ hallLevel: 2, availableCount: 0, maxLevel: 0 },
				{ hallLevel: 3, availableCount: 0, maxLevel: 0 },
				{ hallLevel: 4, availableCount: 2, maxLevel: 1 },
				{ hallLevel: 5, availableCount: 4, maxLevel: 2 },
				{ hallLevel: 6, availableCount: 6, maxLevel: 3 },
				{ hallLevel: 7, availableCount: 8, maxLevel: 3 },
				{ hallLevel: 8, availableCount: 8, maxLevel: 4 },
				{ hallLevel: 9, availableCount: 8, maxLevel: 4 },
				{ hallLevel: 10, availableCount: 8, maxLevel: 5 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [
				{ hallLevel: 1, availableCount: 0, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 0, maxLevel: 2 },
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
				{ hallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 3, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 4, maxLevel: 3 },
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
			levels: [
				{ hallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 3, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 3, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 3, maxLevel: 5 },
			],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ hallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 3, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 4, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 5, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ hallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 4, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 6, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 8, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 328,
			damagePerShot: 143,
			hitpoints: 1400,
			buildCost: 5500,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 4,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/04/Rapid_Rockets1.png/revision/latest/scale-to-width-down/100?cb=20231217075209',
		},
		{
			level: 2,
			damagePerSecond: 372,
			damagePerShot: 162,
			hitpoints: 1500,
			buildCost: 11000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 5,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/58/Rapid_Rockets2.png/revision/latest/scale-to-width-down/100?cb=20231217075213',
		},
		{
			level: 3,
			damagePerSecond: 417,
			damagePerShot: 181,
			hitpoints: 1600,
			buildCost: 22000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 6,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/70/Rapid_Rockets3.png/revision/latest/scale-to-width-down/100?cb=20231217075217',
		},
		{
			level: 4,
			damagePerSecond: 461,
			damagePerShot: 200,
			hitpoints: 1700,
			buildCost: 36000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 8,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8e/Rapid_Rockets4.png/revision/latest/scale-to-width-down/100?cb=20231217075220',
		},
		{
			level: 5,
			damagePerSecond: 505,
			damagePerShot: 220,
			hitpoints: 1900,
			buildCost: 60000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 10,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/71/Rapid_Rockets5.png/revision/latest/scale-to-width-down/100?cb=20231217075223',
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

export default rapidRockets
