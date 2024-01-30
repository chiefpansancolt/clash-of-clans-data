import * as Constants from '../../../constants'
import Defense from '@IClanCapital/defenses/hiddenMegaTesla/defense.interface'
import Level from '@IClanCapital/defenses/hiddenMegaTesla/level.interface'
import TownHallDetails from '@ICommon/townHall/details.interface'

const hiddenMegaTesla: Defense = {
	name: 'Hidden Mega Tesla',
	description:
		"What happens when a Hidden Tesla goes Mega? It's powerful jolt deals heavy damage to even the toughest units!'",
	width: 2,
	height: 2,
	maxLevel: 0,
	ruinImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/8/84/Hidden_Mega_Tesla_Ruin.png/revision/latest/scale-to-width-down/100?cb=20231217065720',
	mode: {
		name: Constants.mainMode,
		damageType: Constants.singleTargetChainLighting,
		unitTypeTarget: Constants.groundAndAir,
		minRange: 0,
		maxRange: 6,
		triggerRange: 6,
		attackSpeed: 4,
	},
	capitalHallDetails: [
		{
			name: Constants.capitalHall,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 0 },
				{ townHall: 2, availableCount: 0, maxLevel: 0 },
				{ townHall: 3, availableCount: 0, maxLevel: 0 },
				{ townHall: 4, availableCount: 1, maxLevel: 1 },
				{ townHall: 5, availableCount: 2, maxLevel: 2 },
				{ townHall: 6, availableCount: 2, maxLevel: 3 },
				{ townHall: 7, availableCount: 2, maxLevel: 3 },
				{ townHall: 8, availableCount: 2, maxLevel: 4 },
				{ townHall: 9, availableCount: 2, maxLevel: 5 },
				{ townHall: 10, availableCount: 2, maxLevel: 5 },
			],
		},
		{
			name: Constants.barbarianCamp,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 1 },
				{ townHall: 2, availableCount: 0, maxLevel: 2 },
				{ townHall: 3, availableCount: 2, maxLevel: 3 },
				{ townHall: 4, availableCount: 3, maxLevel: 4 },
				{ townHall: 5, availableCount: 4, maxLevel: 5 },
			],
		},
		{
			name: Constants.wizardValley,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 1 },
				{ townHall: 2, availableCount: 2, maxLevel: 2 },
				{ townHall: 3, availableCount: 2, maxLevel: 3 },
				{ townHall: 4, availableCount: 2, maxLevel: 4 },
				{ townHall: 5, availableCount: 2, maxLevel: 5 },
			],
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
			levels: [
				{ townHall: 1, availableCount: 2, maxLevel: 1 },
				{ townHall: 2, availableCount: 3, maxLevel: 2 },
				{ townHall: 3, availableCount: 4, maxLevel: 3 },
				{ townHall: 4, availableCount: 5, maxLevel: 4 },
				{ townHall: 5, availableCount: 5, maxLevel: 5 },
			],
		},
		{
			name: Constants.dragonCliffs,
			levels: [],
		},
		{
			name: Constants.golemQuarry,
			levels: [
				{ townHall: 1, availableCount: 1, maxLevel: 1 },
				{ townHall: 2, availableCount: 1, maxLevel: 2 },
				{ townHall: 3, availableCount: 1, maxLevel: 3 },
				{ townHall: 4, availableCount: 1, maxLevel: 4 },
				{ townHall: 5, availableCount: 1, maxLevel: 5 },
			],
		},
		{
			name: Constants.skeletonPark,
			levels: [
				{ townHall: 1, availableCount: 4, maxLevel: 1 },
				{ townHall: 2, availableCount: 5, maxLevel: 2 },
				{ townHall: 3, availableCount: 5, maxLevel: 3 },
				{ townHall: 4, availableCount: 5, maxLevel: 4 },
			],
		},
		{
			name: Constants.goblinMines,
			levels: [
				{ townHall: 1, availableCount: 0, maxLevel: 1 },
				{ townHall: 2, availableCount: 1, maxLevel: 2 },
				{ townHall: 3, availableCount: 1, maxLevel: 3 },
				{ townHall: 4, availableCount: 3, maxLevel: 4 },
			],
		},
	],
	levels: [
		{
			level: 1,
			damagePerSecond: 150,
			damagePerShot: 600,
			secondaryChainDamage: 480,
			hitpoints: 1800,
			buildCost: 7000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 4,
			districtHallLevel: 1,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/08/Hidden_Mega_Tesla1.png/revision/latest/scale-to-width-down/100?cb=20231217065724',
		},
		{
			level: 2,
			damagePerSecond: 175,
			damagePerShot: 700,
			secondaryChainDamage: 560,
			hitpoints: 2000,
			buildCost: 14000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 5,
			districtHallLevel: 2,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/dc/Hidden_Mega_Tesla2.png/revision/latest/scale-to-width-down/100?cb=20231224100013',
		},
		{
			level: 3,
			damagePerSecond: 200,
			damagePerShot: 800,
			secondaryChainDamage: 640,
			hitpoints: 2200,
			buildCost: 28000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 6,
			districtHallLevel: 3,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/99/Hidden_Mega_Tesla3.png/revision/latest/scale-to-width-down/100?cb=20231224100025',
		},
		{
			level: 4,
			damagePerSecond: 225,
			damagePerShot: 900,
			secondaryChainDamage: 720,
			hitpoints: 2400,
			buildCost: 45000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 8,
			districtHallLevel: 4,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d1/Hidden_Mega_Tesla4.png/revision/latest/scale-to-width-down/100?cb=20231217065736',
		},
		{
			level: 5,
			damagePerSecond: 250,
			damagePerShot: 1000,
			secondaryChainDamage: 800,
			hitpoints: 2600,
			buildCost: 75000,
			buildCostResource: Constants.capitalGold,
			clanCapitalLevel: 10,
			districtHallLevel: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/cc/Hidden_Mega_Tesla5.png/revision/latest/scale-to-width-down/100?cb=20231217065740',
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

export default hiddenMegaTesla
