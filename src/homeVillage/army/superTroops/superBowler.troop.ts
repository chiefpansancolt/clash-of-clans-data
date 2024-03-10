import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Super Bowler',
	description:
		"Super Bowler now has everything he's ever wanted: a grippier glove, more comfortable footwear, and even more ridiculously massive boulders to toss.",
	maxLevel: 8,
	housingSpace: 30,
	buildingName: Constants.darkBarracks,
	troopUnlockLevel: 4,
	boostCost: 25000,
	boostResource: Constants.darkElixir,
	boostDurationDays: 3,
	training: {
		barracksAvailableSec: 0,
		barracksAvailableMin: 5,
		barracksUpgradingSec: 0,
		barracksUpgradingMin: 10,
	},
	mode: {
		attackType: Constants.areaSplash,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.none,
		minRange: 0,
		maxRange: 3,
		attackSpeed: 2.2,
		movementSpeed: 14,
		tiles: 3,
		specialAbility: Constants.tripleStrike,
	},
	levels: [
		{
			level: 4,
			damagePerSecond: 170,
			damagePerAttack: 374,
			hitpoints: 1600,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f7/Super_Bowler4.png/revision/latest/scale-to-width-down/120?cb=20210928060809',
		},
		{
			level: 5,
			damagePerSecond: 185,
			damagePerAttack: 407,
			hitpoints: 1800,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f7/Super_Bowler4.png/revision/latest/scale-to-width-down/120?cb=20210928060809',
		},
		{
			level: 6,
			damagePerSecond: 200,
			damagePerAttack: 440,
			hitpoints: 2000,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f7/Super_Bowler4.png/revision/latest/scale-to-width-down/120?cb=20210928060809',
		},
		{
			level: 7,
			damagePerSecond: 215,
			damagePerAttack: 473,
			hitpoints: 2200,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f7/Super_Bowler4.png/revision/latest/scale-to-width-down/120?cb=20210928060809',
		},
		{
			level: 8,
			damagePerSecond: 230,
			damagePerAttack: 506,
			hitpoints: 2400,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f7/Super_Bowler4.png/revision/latest/scale-to-width-down/120?cb=20210928060809',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
