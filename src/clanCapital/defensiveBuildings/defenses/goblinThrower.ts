import * as Constants from '@/constants'
import Defense from '@IClanCapital/defenses/goblinThrower/defense.interface'
import Level from '@IClanCapital/defenses/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const goblinThrower: Defense = {
	name: 'Goblin Thrower',
	description:
		'This piece of fine Goblin handiwork rapidly throws Goblin-filled barrels at attackers, those Goblins then throw sharp spears at the attackers. But what do the spears throw?',
	width: 3,
	height: 3,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/2/2c/Goblin_Thrower_Ruin.png/revision/latest/scale-to-width-down/100?cb=20231217044546',
	mode: {
		name: Constants.mainMode,
		damageType: Constants.areaSplash,
		unitTypeTarget: Constants.ground,
		minRange: 0,
		maxRange: 9,
		ammoCapacity: 4,
		attackSpeed: 4,
	},
	capitalHallDetails: [
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
			levels: [],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ townHall: 1, availableCount: 3, maxLevel: 1 },
				{ townHall: 2, availableCount: 3, maxLevel: 2 },
				{ townHall: 3, availableCount: 4, maxLevel: 3 },
				{ townHall: 4, availableCount: 4, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 18,
			damagePerShot: 72,
			hitpoints: 1,
			buildCost: 3100,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 0,
			districtHallLevel: 16000,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b0/Goblin_Thrower1.png/revision/latest/scale-to-width-down/100?cb=20231217044549',
		},
		{
			level: 2,
			damagePerSecond: 20,
			damagePerShot: 80,
			hitpoints: 2,
			buildCost: 3400,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 0,
			districtHallLevel: 32000,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/60/Goblin_Thrower2.png/revision/latest/scale-to-width-down/100?cb=20231217044554',
		},
		{
			level: 3,
			damagePerSecond: 22,
			damagePerShot: 88,
			hitpoints: 3,
			buildCost: 3700,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 0,
			districtHallLevel: 64000,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/ff/Goblin_Thrower3.png/revision/latest/scale-to-width-down/100?cb=20231217044558',
		},
		{
			level: 4,
			damagePerSecond: 25,
			damagePerShot: 100,
			hitpoints: 4,
			buildCost: 4000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 0,
			districtHallLevel: 99000,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1a/Goblin_Thrower4.png/revision/latest/scale-to-width-down/100?cb=20231217044602',
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
	getCapitalHallLevel(name: string, level: number): TownHallDetails | undefined {
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

export default goblinThrower
