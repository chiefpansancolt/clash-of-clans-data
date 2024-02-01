import * as Constants from '@/constants'
import Defense from '@IClanCapital/defenses/defense.interface'
import Level from '@IClanCapital/defenses/level.interface'
import HallDetails from '@IClanCapital/hall/hallDetails.interface'

const airBombs: Defense = {
	name: 'Air Bombs',
	description:
		'For heavyweight air defense, Air Bombs do the trick. An endless supply of explosive barrels launch into the sky to ravage flying enemies!',
	width: 2,
	height: 2,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/c/cf/Air_Bombs_Ruin.png/revision/latest/scale-to-width-down/100?cb=20231217073744',
	mode: {
		name: Constants.mainMode,
		damageType: Constants.areaSplash,
		unitTypeTarget: Constants.air,
		minRange: 0,
		maxRange: 8.5,
		attackSpeed: 3,
	},
	clanCapitalDetails: [
		{
			name: Constants.capitalHall,
			levels: [
				{ hallLevel: 1, availableCount: 0, maxLevel: 0 },
				{ hallLevel: 2, availableCount: 0, maxLevel: 0 },
				{ hallLevel: 3, availableCount: 1, maxLevel: 1 },
				{ hallLevel: 4, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 5, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 6, availableCount: 2, maxLevel: 3 },
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
				{ hallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 3, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 3, maxLevel: 5 },
			],
		},
		{
			name: Constants.wizardValley,
			levels: [
				{ hallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 3, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 3, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 3, maxLevel: 5 },
			],
		},
		{
			name: Constants.ballonLagoon,
			levels: [
				{ hallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 3, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 4, maxLevel: 5 },
			],
		},
		{
			name: Constants.builderWorkshop,
			levels: [
				{ hallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 3, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 3, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 3, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 3, maxLevel: 5 },
			],
		},
		{
			name: Constants.dragonCliffs,
			levels: [
				{ hallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 2, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.golemQuarry,
			levels: [
				{ hallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 2, maxLevel: 4 },
				{ hallLevel: 5, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ hallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 3, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 3, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ hallLevel: 1, availableCount: 1, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 2, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 2, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 225,
			damagePerShot: 675,
			hitpoints: 2300,
			buildCost: 6000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 3,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9c/Air_Bombs1C.png/revision/latest/scale-to-width-down/100?cb=20231217073748',
		},
		{
			level: 2,
			damagePerSecond: 250,
			damagePerShot: 750,
			hitpoints: 2550,
			buildCost: 12000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 4,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/21/Air_Bombs2C.png/revision/latest/scale-to-width-down/100?cb=20231217073753',
		},
		{
			level: 3,
			damagePerSecond: 275,
			damagePerShot: 825,
			hitpoints: 2700,
			buildCost: 24000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 6,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/0a/Air_Bombs3C.png/revision/latest/scale-to-width-down/100?cb=20231217073757',
		},
		{
			level: 4,
			damagePerSecond: 300,
			damagePerShot: 900,
			hitpoints: 2950,
			buildCost: 39000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 8,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/70/Air_Bombs4C.png/revision/latest/scale-to-width-down/100?cb=20231217073801',
		},
		{
			level: 5,
			damagePerSecond: 325,
			damagePerShot: 975,
			hitpoints: 3200,
			buildCost: 65000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 10,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/ae/Air_Bombs5C.png/revision/latest/scale-to-width-down/100?cb=20231217073805',
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

export default airBombs
