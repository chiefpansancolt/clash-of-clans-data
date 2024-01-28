import * as Constants from '@/constants'
import Level from '@IClanCapital/defenses/infernoTower/level.interface'
import Defense from '@IClanCapital/defenses/infernoTower/defense.interface'
import TownHallDefense from '@ICommon/townHallDefense.interface'

const infernoTower: Defense = {
	name: 'Inferno Tower',
	description:
		'Bane of all big troops, the Inferno Tower can deal devastating damage to units it stays focused on.',
	width: 3,
	height: 3,
	maxLevel: 5,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/c/c0/Inferno_Tower_Ruin.png/revision/latest/scale-to-width-down/100?cb=20220507090709',
	modes: [
		{
			name: Constants.mainMode,
			damageType: Constants.singleTarget,
			unitTypeTarget: Constants.groundAndAir,
			minRange: 0,
			maxRange: 9,
			attackSpeed: 0.128,
		},
	],
	capitalHallDetails: [
		{
			name: Constants.capitalHall,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 0 },
				{ townHall: 2, availableCount: 0, maxLevel: 0 },
				{ townHall: 3, availableCount: 0, maxLevel: 0 },
				{ townHall: 4, availableCount: 0, maxLevel: 0 },
				{ townHall: 5, availableCount: 0, maxLevel: 0 },
				{ townHall: 6, availableCount: 1, maxLevel: 1 },
				{ townHall: 7, availableCount: 1, maxLevel: 2 },
				{ townHall: 8, availableCount: 1, maxLevel: 3 },
				{ townHall: 9, availableCount: 2, maxLevel: 4 },
				{ townHall: 10, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [],
		},
		{
			name: Constants.wizardValley,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 1 },
				{ townHall: 2, availableCount: 0, maxLevel: 2 },
				{ townHall: 3, availableCount: 2, maxLevel: 3 },
				{ townHall: 4, availableCount: 2, maxLevel: 4 },
				{ townHall: 5, availableCount: 3, maxLevel: 5 },
			],
		},
		{
			name: Constants.ballonLagoon,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 1 },
				{ townHall: 2, availableCount: 0, maxLevel: 2 },
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
				{ townHall: 1, availableCount: 1, maxLevel: 1 },
				{ townHall: 2, availableCount: 2, maxLevel: 2 },
				{ townHall: 3, availableCount: 2, maxLevel: 3 },
				{ townHall: 4, availableCount: 2, maxLevel: 4 },
				{ townHall: 5, availableCount: 2, maxLevel: 5 },
			],
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
			damagePerSecond: 200,
			damagePerSecondAfter25: 500,
			damagePerSecondAfter75: 2000,
			damagePerShot: 0,
			hitpoints: 3600,
			buildCost: 15000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 6,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c8/Inferno_Tower1C.png/revision/latest/scale-to-width-down/100?cb=20220507090710',
		},
		{
			level: 2,
			damagePerSecond: 230,
			damagePerSecondAfter25: 575,
			damagePerSecondAfter75: 2300,
			damagePerShot: 0,
			hitpoints: 4000,
			buildCost: 30000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 7,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5d/Inferno_Tower2C.png/revision/latest/scale-to-width-down/100?cb=20220507090711',
		},
		{
			level: 3,
			damagePerSecond: 260,
			damagePerSecondAfter25: 650,
			damagePerSecondAfter75: 2600,
			damagePerShot: 0,
			hitpoints: 4400,
			buildCost: 60000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 8,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/49/Inferno_Tower3C.png/revision/latest/scale-to-width-down/100?cb=20220507090712',
		},
		{
			level: 4,
			damagePerSecond: 290,
			damagePerSecondAfter25: 725,
			damagePerSecondAfter75: 2900,
			damagePerShot: 0,
			hitpoints: 4800,
			buildCost: 93000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 9,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/21/Inferno_Tower4C.png/revision/latest/scale-to-width-down/100?cb=20220507090713',
		},
		{
			level: 5,
			damagePerSecond: 320,
			damagePerSecondAfter25: 800,
			damagePerSecondAfter75: 3200,
			damagePerShot: 0,
			hitpoints: 5200,
			buildCost: 155000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 10,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/97/Inferno_Tower5C.png/revision/latest/scale-to-width-down/100?cb=20220507090714',
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

export default infernoTower
