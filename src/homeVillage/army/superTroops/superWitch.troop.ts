import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Super Witch',
	description:
		'Focused magic creates focused results. Instead of summoning hordes of tiny Skeletons, Super Witch summons just one really big skeleton with very formidable bone density.',
	maxLevel: 7,
	housingSpace: 40,
	buildingName: Constants.darkBarracks,
	troopUnlockLevel: 5,
	boostCost: 25000,
	boostResource: Constants.darkElixir,
	boostDurationDays: 3,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/1/18/Avatar_Super_Witch.png/revision/latest/scale-to-width-down/137?cb=20200913075918',
	training: {
		barracksAvailableSec: 40,
		barracksAvailableMin: 6,
		barracksUpgradingSec: 20,
		barracksUpgradingMin: 13,
	},
	mode: {
		attackType: Constants.areaSplash,
		unitTypeTarget: Constants.groundAndAir,
		preferredTarget: Constants.none,
		minRange: 0,
		maxRange: 4,
		attackSpeed: 0.7,
		movementSpeed: 12,
		specialAbility: Constants.bigBoy,
	},
	levels: [
		{
			level: 5,
			damagePerSecond: 360,
			damagePerAttack: 252,
			hitpoints: 3200,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/66/Super_Witch5.png/revision/latest?cb=20200901090419',
		},
		{
			level: 6,
			damagePerSecond: 390,
			damagePerAttack: 273,
			hitpoints: 3400,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/66/Super_Witch5.png/revision/latest?cb=20200901090419',
		},
		{
			level: 7,
			damagePerSecond: 420,
			damagePerAttack: 294,
			hitpoints: 3600,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/66/Super_Witch5.png/revision/latest?cb=20200901090419',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
