import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Super Barbarian',
	description:
		'Superior in health, power, speed and most importantly, hair, the Super Barbarians are what regular Barbarians dream of becoming!',
	maxLevel: 12,
	housingSpace: 5,
	buildingName: Constants.barracks,
	troopUnlockLevel: 8,
	boostCost: 25000,
	boostResource: Constants.darkElixir,
	boostDurationDays: 3,
	training: {
		barracksAvailableSec: 25,
		barracksAvailableMin: 0,
		barracksUpgradingSec: 50,
		barracksUpgradingMin: 0,
	},
	mode: {
		attackType: Constants.melee,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.none,
		minRange: 0,
		maxRange: 0.6,
		attackSpeed: 0.8,
		movementSpeed: 20,
		specialAbility: Constants.ranged,
		rageMovementSpeedIncreased: 16,
		rageDamageIncrease: 70,
	},
	levels: [
		{
			level: 8,
			damagePerSecond: 180,
			damagePerAttack: 144,
			hitpoints: 1000,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/43/Super_Barbarian1.png/revision/latest/scale-to-width-down/80?cb=20200401130240',
		},
		{
			level: 9,
			damagePerSecond: 200,
			damagePerAttack: 160,
			hitpoints: 1100,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/43/Super_Barbarian1.png/revision/latest/scale-to-width-down/80?cb=20200401130240',
		},
		{
			level: 10,
			damagePerSecond: 220,
			damagePerAttack: 176,
			hitpoints: 1200,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/43/Super_Barbarian1.png/revision/latest/scale-to-width-down/80?cb=20200401130240',
		},
		{
			level: 11,
			damagePerSecond: 240,
			damagePerAttack: 192,
			hitpoints: 1300,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/43/Super_Barbarian1.png/revision/latest/scale-to-width-down/80?cb=20200401130240',
		},
		{
			level: 12,
			damagePerSecond: 260,
			damagePerAttack: 208,
			hitpoints: 1350,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/43/Super_Barbarian1.png/revision/latest/scale-to-width-down/80?cb=20200401130240',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
