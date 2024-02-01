import * as Constants from '@/constants'
import Defense from '@IClanCapital/defenses/defense.interface'
import Level from '@IClanCapital/defenses/level.interface'
import HallDetails from '@IClanCapital/hall/hallDetails.interface'

const reflector: Defense = {
	name: 'Reflector',
	description:
		"Nobody would expect a whirling contraption of shields to reflect any attack back at the attacker... But that's exactly what the Reflector does.",
	width: 2,
	height: 2,
	maxLevel: 4,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/8/81/Reflector_Ruin.png/revision/latest/scale-to-width-down/130?cb=20221212223837',
	mode: {
		name: Constants.mainMode,
		damageType: Constants.singleTarget,
		unitTypeTarget: Constants.groundAndAir,
		minRange: 0,
		maxRange: 10,
		attackSpeed: 0.575,
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
			levels: [
				{ hallLevel: 1, availableCount: 2, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 3, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 5, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 6, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ hallLevel: 1, availableCount: 0, maxLevel: 1 },
				{ hallLevel: 2, availableCount: 1, maxLevel: 2 },
				{ hallLevel: 3, availableCount: 2, maxLevel: 3 },
				{ hallLevel: 4, availableCount: 4, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 260,
			damagePerShot: 149.5,
			hitpoints: 3300,
			buildCost: 7500,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 0,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f8/Reflector1.png/revision/latest/scale-to-width-down/90?cb=20221212223853',
		},
		{
			level: 2,
			damagePerSecond: 290,
			damagePerShot: 166.75,
			hitpoints: 3600,
			buildCost: 15000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 0,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/95/Reflector2.png/revision/latest/scale-to-width-down/90?cb=20221212223858',
		},
		{
			level: 3,
			damagePerSecond: 320,
			damagePerShot: 184,
			hitpoints: 3900,
			buildCost: 30000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 0,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/7/71/Reflector3.png/revision/latest/scale-to-width-down/90?cb=20221212223905',
		},
		{
			level: 4,
			damagePerSecond: 350,
			damagePerShot: 201.25,
			hitpoints: 4200,
			buildCost: 48000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 0,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/26/Reflector4.png/revision/latest/scale-to-width-down/90?cb=20221212223911',
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

export default reflector
