import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Super Archer',
	description:
		'Having achieved serious arm strength, the Super Archer can now threaten targets several buildings away.',
	maxLevel: 12,
	housingSpace: 12,
	buildingName: Constants.barracks,
	troopUnlockLevel: 8,
	boostCost: 25000,
	boostResource: Constants.darkElixir,
	boostDurationDays: 3,
	training: {
		barracksAvailableSec: 12,
		barracksAvailableMin: 1,
		barracksUpgradingSec: 24,
		barracksUpgradingMin: 2,
	},
	mode: {
		attackType: Constants.melee,
		unitTypeTarget: Constants.groundAndAir,
		preferredTarget: Constants.none,
		minRange: 0,
		maxRange: 1.5,
		attackSpeed: 0.8,
		movementSpeed: 24,
		specialAbility: Constants.sharpShot,
	},
	levels: [
		{
			level: 8,
			damagePerSecond: 120,
			damagePerAttack: 180,
			hitpoints: 450,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/be/Super_Archer8.png/revision/latest?cb=20200901090418',
		},
		{
			level: 9,
			damagePerSecond: 132,
			damagePerAttack: 198,
			hitpoints: 510,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/be/Super_Archer8.png/revision/latest?cb=20200901090418',
		},
		{
			level: 10,
			damagePerSecond: 144,
			damagePerAttack: 216,
			hitpoints: 550,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/be/Super_Archer8.png/revision/latest?cb=20200901090418',
		},
		{
			level: 11,
			damagePerSecond: 156,
			damagePerAttack: 234,
			hitpoints: 575,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/be/Super_Archer8.png/revision/latest?cb=20200901090418',
		},
		{
			level: 12,
			damagePerSecond: 162,
			damagePerAttack: 243,
			hitpoints: 600,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/be/Super_Archer8.png/revision/latest?cb=20200901090418',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
