import * as Constants from '@/constants'
import Level from '@IClanCapital/level.interface'
import Defense from '@IClanCapital/defenses/miniMinionHive/defense.interface'
import TownHallDefense from '@ICommon/townHallDefense.interface'

const miniMinionHive: Defense = {
	name: 'Mini-Minion Hive',
	description:
		'Built over an underground hive, this defense opens to release a swarm of extremely territorial and extremely dangerous Mini-Minions to take down any attacker.',
	width: 3,
	height: 3,
	maxLevel: 4,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/7/72/Mini-Minion_Hive_Ruin.png/revision/latest/scale-to-width-down/100?cb=20221213031340',
	modes: [
		{
			name: Constants.mainMode,
			damageType: Constants.singleTarget,
			unitTypeTarget: Constants.groundAndAir,
			minRange: 0,
			maxRange: 14,
			miniMinionsPerBurst: 12,
			attackSpeed: 1.5,
		},
	],
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
			levels: [
				{ townHall: 1, availableCount: 1, maxLevel: 1 },
				{ townHall: 2, availableCount: 2, maxLevel: 2 },
				{ townHall: 3, availableCount: 2, maxLevel: 3 },
				{ townHall: 4, availableCount: 2, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 1 },
				{ townHall: 2, availableCount: 0, maxLevel: 2 },
				{ townHall: 3, availableCount: 1, maxLevel: 3 },
				{ townHall: 4, availableCount: 1, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 209,
			damagePerShot: 75,
			hitpoints: 4400,
			buildCost: 17500,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 0,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/88/Mini-Minion_Hive1.png/revision/latest/scale-to-width-down/100?cb=20221213031353',
		},
		{
			level: 2,
			damagePerSecond: 251,
			damagePerShot: 90,
			hitpoints: 4800,
			buildCost: 35000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 0,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c5/Mini-Minion_Hive2.png/revision/latest/scale-to-width-down/100?cb=20221213031358',
		},
		{
			level: 3,
			damagePerSecond: 293,
			damagePerShot: 105,
			hitpoints: 5200,
			buildCost: 70000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 0,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/81/Mini-Minion_Hive3.png/revision/latest/scale-to-width-down/100?cb=20221213031404',
		},
		{
			level: 4,
			damagePerSecond: 335,
			damagePerShot: 120,
			hitpoints: 5600,
			buildCost: 113000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 0,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a4/Mini-Minion_Hive4.png/revision/latest/scale-to-width-down/100?cb=20221213031534',
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

export default miniMinionHive
