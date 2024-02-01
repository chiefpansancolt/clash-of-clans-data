import * as Constants from '@/constants'
import Defense from '@IClanCapital/defenses/defense.interface'
import Level from '@IClanCapital/defenses/level.interface'
import HallDetails from '@IClanCapital/hall/hallDetails.interface'

const spearThrower: Defense = {
	name: 'Spear Thrower',
	description: 'Throws big spears at enemies on the ground and in the air. Very intimidating.',
	width: 2,
	height: 2,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/d/d8/Spear_Thrower_Ruin.png/revision/latest/scale-to-width-down/100?cb=20221211225352',
	mode: {
		name: Constants.mainMode,
		damageType: Constants.singleTarget,
		unitTypeTarget: Constants.groundAndAir,
		minRange: 0,
		maxRange: 9,
		attackSpeed: 0.9,
	},
	clanCapitalDetails: [
		{
			name: Constants.capitalHall,
			levels: [
				{ hallLevel: 1, availableCount: 4, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 4, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 4, maxLevel: 2 },
				{ hallLevel: 4, availableCount: 4, maxLevel: 3 },
				{ hallLevel: 5, availableCount: 4, maxLevel: 3 },
				{ hallLevel: 6, availableCount: 5, maxLevel: 4 },
				{ hallLevel: 7, availableCount: 6, maxLevel: 4 },
				{ hallLevel: 8, availableCount: 6, maxLevel: 4 },
				{ hallLevel: 9, availableCount: 6, maxLevel: 5 },
				{ hallLevel: 10, availableCount: 6, maxLevel: 5 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [
				{ hallLevel: 1, availableCount: 4, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 6, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 8, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 9, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 9, maxLevel: 5 },
			],
		},
		{
			name: Constants.wizardValley,
			levels: [
				{ hallLevel: 1, availableCount: 11, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 12, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 13, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 14, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 14, maxLevel: 5 },
			],
		},
		{
			name: Constants.ballonLagoon,
			levels: [
				{ hallLevel: 1, availableCount: 8, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 10, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 12, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 13, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 14, maxLevel: 5 },
			],
		},
		{
			name: Constants.builderWorkshop,
			levels: [
				{ hallLevel: 1, availableCount: 8, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 10, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 11, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 12, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 13, maxLevel: 5 },
			],
		},
		{
			name: Constants.dragonCliffs,
			levels: [
				{ hallLevel: 1, availableCount: 9, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 10, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 11, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 12, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 13, maxLevel: 5 },
			],
		},
		{
			name: Constants.golemQuarry,
			levels: [
				{ hallLevel: 1, availableCount: 7, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 9, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 10, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 11, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 12, maxLevel: 5 },
			],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ hallLevel: 1, availableCount: 3, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 4, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 6, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 7, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ hallLevel: 1, availableCount: 4, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 5, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 6, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 7, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 90,
			damagePerShot: 81,
			hitpoints: 1200,
			buildCost: 3000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 1,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/97/Spear_Thrower1.png/revision/latest/scale-to-width-down/100?cb=20221211225358',
		},
		{
			level: 2,
			damagePerSecond: 105,
			damagePerShot: 94.5,
			hitpoints: 1350,
			buildCost: 6000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 2,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cd/Spear_Thrower2.png/revision/latest/scale-to-width-down/100?cb=20221211225406',
		},
		{
			level: 3,
			damagePerSecond: 120,
			damagePerShot: 108,
			hitpoints: 1500,
			buildCost: 12000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 4,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/82/Spear_Thrower3.png/revision/latest/scale-to-width-down/100?cb=20221211225427',
		},
		{
			level: 4,
			damagePerSecond: 135,
			damagePerShot: 121.5,
			hitpoints: 1650,
			buildCost: 21000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 6,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/62/Spear_Thrower4.png/revision/latest/scale-to-width-down/100?cb=20221211225420',
		},
		{
			level: 5,
			damagePerSecond: 150,
			damagePerShot: 135,
			hitpoints: 1800,
			buildCost: 35000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 9,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/60/Spear_Thrower5.png/revision/latest/scale-to-width-down/100?cb=20221211225432',
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

export default spearThrower
