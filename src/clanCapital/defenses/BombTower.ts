import * as Constants from '../../Constats'
import { ClanCapitalLevel, TownHallDefense, ClanCapitalDefense } from '../../CommonInterfaces'

interface BombTowerLevel extends ClanCapitalLevel {
	damageWhenDestroyed: number
}

interface BombTower extends ClanCapitalDefense {
	levels: BombTowerLevel[]

	getLevel(level: number): BombTowerLevel | undefined
}

const bombTower: BombTower = {
	name: 'Bomb Tower',
	description:
		'Bomb Towers bombard nearby ground troops and go up in a big BOOM when destroyed! Melee units best stand clear!',
	minRange: 0,
	maxRange: 5,
	tiles: 0,
	attackSpeed: 1.1,
	width: 2,
	height: 2,
	damageType: Constants.areaSplash,
	unitTypeTarget: Constants.ground,
	maxLevel: 5,
	capitalHallDetails: [
		{
			name: Constants.capitalHall,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 0 },
				{ townHall: 2, availableCount: 1, maxLevel: 1 },
				{ townHall: 3, availableCount: 2, maxLevel: 2 },
				{ townHall: 4, availableCount: 2, maxLevel: 2 },
				{ townHall: 5, availableCount: 2, maxLevel: 3 },
				{ townHall: 6, availableCount: 2, maxLevel: 3 },
				{ townHall: 7, availableCount: 2, maxLevel: 4 },
				{ townHall: 8, availableCount: 2, maxLevel: 4 },
				{ townHall: 9, availableCount: 2, maxLevel: 5 },
				{ townHall: 10, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [
				{ townHall: 1, availableCount: 2, maxLevel: 1 },
				{ townHall: 2, availableCount: 3, maxLevel: 2 },
				{ townHall: 3, availableCount: 3, maxLevel: 3 },
				{ townHall: 4, availableCount: 4, maxLevel: 4 },
				{ townHall: 5, availableCount: 4, maxLevel: 5 },
			],
		},
		{
			name: Constants.wizardValley,
			levels: [],
		},
		{
			name: Constants.ballonLagoon,
			levels: [
				{ townHall: 1, availableCount: 2, maxLevel: 1 },
				{ townHall: 2, availableCount: 2, maxLevel: 2 },
				{ townHall: 3, availableCount: 2, maxLevel: 3 },
				{ townHall: 4, availableCount: 2, maxLevel: 4 },
				{ townHall: 5, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.builderWorkshop,
			levels: [],
		},
		{
			name: Constants.dragonCliffs,
			levels: [
				{ townHall: 1, availableCount: 2, maxLevel: 1 },
				{ townHall: 2, availableCount: 3, maxLevel: 2 },
				{ townHall: 3, availableCount: 3, maxLevel: 3 },
				{ townHall: 4, availableCount: 3, maxLevel: 4 },
				{ townHall: 5, availableCount: 3, maxLevel: 5 },
			],
		},
		{
			name: Constants.golemQuarry,
			levels: [],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ townHall: 1, availableCount: 3, maxLevel: 1 },
				{ townHall: 2, availableCount: 4, maxLevel: 2 },
				{ townHall: 3, availableCount: 4, maxLevel: 3 },
				{ townHall: 4, availableCount: 4, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ townHall: 1, availableCount: 1, maxLevel: 1 },
				{ townHall: 2, availableCount: 1, maxLevel: 2 },
				{ townHall: 3, availableCount: 2, maxLevel: 3 },
				{ townHall: 4, availableCount: 2, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 65,
			damagePerShot: 71.5,
			damageWhenDestroyed: 300,
			hitpoints: 2000,
			buildCost: 4500,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 2,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/86/Bomb_Tower1C.png/revision/latest/scale-to-width-down/100?cb=20221225050400',
		},
		{
			level: 2,
			damagePerSecond: 75,
			damagePerShot: 82.5,
			damageWhenDestroyed: 350,
			hitpoints: 2250,
			buildCost: 9000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 3,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e8/Bomb_Tower2C.png/revision/latest/scale-to-width-down/100?cb=20221225050406',
		},
		{
			level: 3,
			damagePerSecond: 85,
			damagePerShot: 93.5,
			damageWhenDestroyed: 400,
			hitpoints: 2500,
			buildCost: 18000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 5,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/14/Bomb_Tower3C.png/revision/latest/scale-to-width-down/100?cb=20221225050412',
		},
		{
			level: 4,
			damagePerSecond: 95,
			damagePerShot: 104.5,
			damageWhenDestroyed: 450,
			hitpoints: 2750,
			buildCost: 30000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 7,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/22/Bomb_Tower4C.png/revision/latest/scale-to-width-down/100?cb=20221225050419',
		},
		{
			level: 5,
			damagePerSecond: 105,
			damagePerShot: 115.5,
			damageWhenDestroyed: 500,
			hitpoints: 3000,
			buildCost: 50000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 9,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4c/Bomb_Tower5C.png/revision/latest/scale-to-width-down/100?cb=20221225050425',
		},
	],
	getSize(): string {
		return `${this.width}x${this.height}`
	},
	getLevel(level: number): BombTowerLevel | undefined {
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

export default bombTower
