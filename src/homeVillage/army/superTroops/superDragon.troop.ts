import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Super Dragon',
	description:
		"Sometimes having a fire inside of you isn't enough. The Super Dragon has fires on the inside, outside, and if he gets to do his thing, all around him!",
	maxLevel: 11,
	housingSpace: 40,
	buildingName: Constants.barracks,
	troopUnlockLevel: 7,
	boostCost: 25000,
	boostResource: Constants.darkElixir,
	boostDurationDays: 3,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/0/0f/Avatar_Super_Dragon.png/revision/latest/scale-to-width-down/137?cb=20211209194802',
	training: {
		barracksAvailableSec: 0,
		barracksAvailableMin: 6,
		barracksUpgradingSec: 0,
		barracksUpgradingMin: 12,
	},
	mode: {
		attackType: Constants.areaSplash,
		unitTypeTarget: Constants.groundAndAir,
		preferredTarget: Constants.any,
		minRange: 0,
		maxRange: 3,
		movementSpeed: 14,
		specialAbility: Constants.roast,
		timeBetweenShots: 0.192,
		timeBetweenBursts: 1.8,
		numberOfShotsPerBurst: 10,
	},
	levels: [
		{
			level: 7,
			damagePerSecond: 381,
			damagePerAttack: 144,
			hitpoints: 6100,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c4/Super_Dragon7.png/revision/latest/scale-to-width-down/150?cb=20211209195922',
		},
		{
			level: 8,
			damagePerSecond: 405,
			damagePerAttack: 153,
			hitpoints: 6400,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c4/Super_Dragon7.png/revision/latest/scale-to-width-down/150?cb=20211209195922',
		},
		{
			level: 9,
			damagePerSecond: 429,
			damagePerAttack: 162,
			hitpoints: 6700,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c4/Super_Dragon7.png/revision/latest/scale-to-width-down/150?cb=20211209195922',
		},
		{
			level: 10,
			damagePerSecond: 429,
			damagePerAttack: 171,
			hitpoints: 7200,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c4/Super_Dragon7.png/revision/latest/scale-to-width-down/150?cb=20211209195922',
		},
		{
			level: 11,
			damagePerSecond: 471,
			damagePerAttack: 178.2,
			hitpoints: 7600,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c4/Super_Dragon7.png/revision/latest/scale-to-width-down/150?cb=20211209195922',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
