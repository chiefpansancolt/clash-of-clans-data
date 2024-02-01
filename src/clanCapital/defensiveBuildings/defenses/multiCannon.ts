import * as Constants from '@/constants'
import Defense from '@IClanCapital/defenses/multiCannon/defense.interface'
import Level from '@IClanCapital/defenses/level.interface'
import HallDetails from '@IClanCapital/hall/hallDetails.interface'

const multiCannon: Defense = {
	name: 'Multi Cannon',
	description: "It's a cannon with many barrels!",
	width: 2,
	height: 2,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/b/bc/Multi_Cannon_Ruin.png/revision/latest/scale-to-width-down/100?cb=20221203044732',
	mode: {
		name: Constants.mainMode,
		damageType: Constants.singleTarget,
		unitTypeTarget: Constants.ground,
		minRange: 0,
		maxRange: 6,
		shotsPerBurst: 8,
		attackSpeed: 1.6,
	},
	clanCapitalDetails: [
		{
			name: Constants.capitalHall,
			levels: [
				{ hallLevel: 1, availableCount: 0, maxLevel: 0 },
				{ hallLevel: 2, availableCount: 1, maxLevel: 1 },
				{ hallLevel: 3, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 4, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 5, availableCount: 2, maxLevel: 3 },
				{ hallLevel: 6, availableCount: 2, maxLevel: 3 },
				{ hallLevel: 7, availableCount: 2, maxLevel: 4 },
				{ hallLevel: 8, availableCount: 2, maxLevel: 4 },
				{ hallLevel: 9, availableCount: 2, maxLevel: 5 },
				{ hallLevel: 10, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [
				{ hallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 5, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 6, maxLevel: 5 },
			],
		},
		{
			name: Constants.wizardValley,
			levels: [
				{ hallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 2, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.ballonLagoon,
			levels: [
				{ hallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 2, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 2, maxLevel: 5 },
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
				{ hallLevel: 1, availableCount: 3, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 4, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 4, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 5, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ hallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 2, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 222,
			damagePerShot: 80,
			hitpoints: 1800,
			buildCost: 4000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 2,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/05/Multi_Cannon1.png/revision/latest/scale-to-width-down/100?cb=20221203044740',
		},
		{
			level: 2,
			damagePerSecond: 250,
			damagePerShot: 90,
			hitpoints: 2050,
			buildCost: 8000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 3,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/05/Multi_Cannon1.png/revision/latest/scale-to-width-down/100?cb=20221203044740',
		},
		{
			level: 3,
			damagePerSecond: 277,
			damagePerShot: 100,
			hitpoints: 2300,
			buildCost: 16000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 5,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c7/Multi_Cannon3.png/revision/latest/scale-to-width-down/100?cb=20221203044758',
		},
		{
			level: 4,
			damagePerSecond: 305,
			damagePerShot: 110,
			hitpoints: 2550,
			buildCost: 27000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 7,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b6/Multi_Cannon4.png/revision/latest/scale-to-width-down/100?cb=20221203044807',
		},
		{
			level: 5,
			damagePerSecond: 333,
			damagePerShot: 120,
			hitpoints: 2800,
			buildCost: 45000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 9,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/22/Multi_Cannon5.png/revision/latest/scale-to-width-down/100?cb=20221203044815',
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

export default multiCannon
