import * as Constants from '@/constants'
import Defense from '@IClanCapital/defenses/rocketArtillery/defense.interface'
import Level from '@IClanCapital/defenses/level.interface'
import HallDetails from '@IClanCapital/hall/hallDetails.interface'

const rocketArtillery: Defense = {
	name: 'Rocket Artillery',
	description:
		'Hurls exploding rockets at both air and ground targets. Miraculously they never miss!',
	width: 3,
	height: 3,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/9/95/Rocket_Artillery_Ruin.png/revision/latest/scale-to-width-down/100?cb=20221211225721',
	mode: {
		name: Constants.mainMode,
		damageType: Constants.splash,
		unitTypeTarget: Constants.groundAndAir,
		tiles: 1.5,
		minRange: 3,
		maxRange: 12,
		attackSpeed: 4,
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
				{ hallLevel: 7, availableCount: 1, maxLevel: 3 },
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
				{ hallLevel: 4, availableCount: 1, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.wizardValley,
			levels: [],
		},
		{
			name: Constants.ballonLagoon,
			levels: [
				{ hallLevel: 1, availableCount: 0, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 3, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 4, maxLevel: 5 },
			],
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
			levels: [
				{ hallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 3, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 3, maxLevel: 5 },
			],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ hallLevel: 1, availableCount: 0, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 0, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 1, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 2, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 140,
			damagePerShot: 560,
			hitpoints: 2400,
			buildCost: 12500,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 5,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c8/Rocket_Artillery1.png/revision/latest/scale-to-width-down/100?cb=20221211225729',
		},
		{
			level: 2,
			damagePerSecond: 160,
			damagePerShot: 640,
			hitpoints: 2800,
			buildCost: 25000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 6,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/53/Rocket_Artillery2.png/revision/latest/scale-to-width-down/100?cb=20221211225736',
		},
		{
			level: 3,
			damagePerSecond: 180,
			damagePerShot: 720,
			hitpoints: 3200,
			buildCost: 50000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 7,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e0/Rocket_Artillery3.png/revision/latest/scale-to-width-down/100?cb=20221211225742',
		},
		{
			level: 4,
			damagePerSecond: 200,
			damagePerShot: 800,
			hitpoints: 3600,
			buildCost: 78000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 8,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/ae/Rocket_Artillery4.png/revision/latest/scale-to-width-down/100?cb=20221211225748',
		},
		{
			level: 5,
			damagePerSecond: 220,
			damagePerShot: 880,
			hitpoints: 4000,
			buildCost: 130000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 10,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c4/Rocket_Artillery5.png/revision/latest/scale-to-width-down/100?cb=20221211225754',
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

export default rocketArtillery
