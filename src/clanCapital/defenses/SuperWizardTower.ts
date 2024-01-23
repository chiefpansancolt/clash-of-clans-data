import * as Constants from '../../Constats'
import { ClanCapitalLevel, TownHallDefense, ClanCapitalDefense } from '../../CommonInterfaces'

const cannon: ClanCapitalDefense = {
	name: 'Super Wizard Tower',
	description:
		"Super Wizards' electrickery is shockingly powerful against swarms of attackers, as it bounces to everyone too close to the initial target.",
	minRange: 0,
	maxRange: 5.5,
	tiles: 0,
	attackSpeed: 2,
	width: 2,
	height: 2,
	damageType: Constants.singleTargetChainLighting,
	unitTypeTarget: Constants.groundAndAir,
	maxLevel: 5,
	capitalHallDetails: [
		{
			name: Constants.capitalHall,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 0 },
				{ townHall: 2, availableCount: 0, maxLevel: 0 },
				{ townHall: 3, availableCount: 1, maxLevel: 1 },
				{ townHall: 4, availableCount: 2, maxLevel: 2 },
				{ townHall: 5, availableCount: 2, maxLevel: 2 },
				{ townHall: 6, availableCount: 2, maxLevel: 3 },
				{ townHall: 7, availableCount: 2, maxLevel: 3 },
				{ townHall: 8, availableCount: 2, maxLevel: 4 },
				{ townHall: 9, availableCount: 2, maxLevel: 5 },
				{ townHall: 10, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.wizardValley,
			levels: [
				{ townHall: 1, availableCount: 4, maxLevel: 1 },
				{ townHall: 2, availableCount: 4, maxLevel: 2 },
				{ townHall: 3, availableCount: 5, maxLevel: 3 },
				{ townHall: 4, availableCount: 6, maxLevel: 4 },
				{ townHall: 5, availableCount: 6, maxLevel: 5 },
			],
		},
		{
			name: Constants.builderWorkshop,
			levels: [
				{ townHall: 1, availableCount: 2, maxLevel: 1 },
				{ townHall: 2, availableCount: 2, maxLevel: 2 },
				{ townHall: 3, availableCount: 2, maxLevel: 3 },
				{ townHall: 4, availableCount: 2, maxLevel: 4 },
				{ townHall: 5, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.dragonCliffs,
			levels: [
				{ townHall: 1, availableCount: 2, maxLevel: 1 },
				{ townHall: 2, availableCount: 3, maxLevel: 2 },
				{ townHall: 3, availableCount: 4, maxLevel: 3 },
				{ townHall: 4, availableCount: 4, maxLevel: 4 },
				{ townHall: 5, availableCount: 4, maxLevel: 5 },
			],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ townHall: 1, availableCount: 4, maxLevel: 1 },
				{ townHall: 2, availableCount: 4, maxLevel: 2 },
				{ townHall: 3, availableCount: 4, maxLevel: 3 },
				{ townHall: 4, availableCount: 4, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 1 },
				{ townHall: 2, availableCount: 1, maxLevel: 2 },
				{ townHall: 3, availableCount: 2, maxLevel: 3 },
				{ townHall: 4, availableCount: 2, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 60,
			damagePerShot: 120,
			hitpoints: 48,
			buildCost: 1800,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 6500,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/68/Super_Wizard_Tower1.png/revision/latest/scale-to-width-down/100?cb=20221225050441',
		},
		{
			level: 2,
			damagePerSecond: 70,
			damagePerShot: 140,
			hitpoints: 56,
			buildCost: 2100,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 13000,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/98/Super_Wizard_Tower2.png/revision/latest/scale-to-width-down/100?cb=20221225050448',
		},
		{
			level: 3,
			damagePerSecond: 80,
			damagePerShot: 160,
			hitpoints: 64,
			buildCost: 2400,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 26000,
			districtHallLevel: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e5/Super_Wizard_Tower3.png/revision/latest/scale-to-width-down/100?cb=20221225050455',
		},
		{
			level: 4,
			damagePerSecond: 90,
			damagePerShot: 180,
			hitpoints: 72,
			buildCost: 2700,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 42000,
			districtHallLevel: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dc/Super_Wizard_Tower4.png/revision/latest/scale-to-width-down/100?cb=20221225050501',
		},
		{
			level: 5,
			damagePerSecond: 100,
			damagePerShot: 200,
			hitpoints: 80,
			buildCost: 3000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 70000,
			districtHallLevel: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e6/Super_Wizard_Tower5.png/revision/latest/scale-to-width-down/100?cb=20221225050508',
		},
	],
	getSize(): string {
		return `${this.width}x${this.height}`
	},
	getLevel(level: number): ClanCapitalLevel | undefined {
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

export default cannon
