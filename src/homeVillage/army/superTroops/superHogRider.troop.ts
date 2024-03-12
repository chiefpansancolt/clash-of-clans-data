import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Super Hog Rider',
	description:
		'This dangerous duo of Hog and Rider are even more superb now. They ride together, they split up and keep fighting together.',
	maxLevel: 13,
	housingSpace: 12,
	buildingName: Constants.darkBarracks,
	troopUnlockLevel: 10,
	boostCost: 25000,
	boostResource: Constants.darkElixir,
	boostDurationDays: 3,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/c/c4/Avatar_Super_Hog_Rider.png/revision/latest/scale-to-width-down/137?cb=20230613002801',
	training: {
		barracksAvailableSec: 48,
		barracksAvailableMin: 1,
		barracksUpgradingSec: 36,
		barracksUpgradingMin: 3,
	},
	mode: {
		attackType: Constants.singleTarget,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.defenses,
		minRange: 0,
		maxRange: 0.6,
		attackSpeed: 1,
		movementSpeed: 24,
		specialAbility: Constants.divideAndConquer,
	},
	levels: [
		{
			level: 10,
			damagePerSecond: 180,
			damagePerAttack: 180,
			hitpoints: 1500,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fc/Super_Hog_Rider10.png/revision/latest/scale-to-width-down/70?cb=20230613000429',
		},
		{
			level: 11,
			damagePerSecond: 200,
			damagePerAttack: 200,
			hitpoints: 1600,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fc/Super_Hog_Rider10.png/revision/latest/scale-to-width-down/70?cb=20230613000429',
		},
		{
			level: 12,
			damagePerSecond: 230,
			damagePerAttack: 230,
			hitpoints: 1700,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fc/Super_Hog_Rider10.png/revision/latest/scale-to-width-down/70?cb=20230613000429',
		},
		{
			level: 13,
			damagePerSecond: 250,
			damagePerAttack: 250,
			hitpoints: 1800,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/fc/Super_Hog_Rider10.png/revision/latest/scale-to-width-down/70?cb=20230613000429',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
