import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Super Minion',
	description:
		"Super Minion's big forehead isn't just for show: sniping enemy defenses from a safe distance is simply a brainy move! Especially when you've grown too big to avoid Seeking Air Mines.",
	maxLevel: 12,
	housingSpace: 12,
	buildingName: Constants.darkBarracks,
	troopUnlockLevel: 8,
	boostCost: 25000,
	boostResource: Constants.darkElixir,
	boostDurationDays: 3,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/b/be/Avatar_Super_Minion.png/revision/latest/scale-to-width-down/137?cb=20201013063740',
	training: {
		barracksAvailableSec: 48,
		barracksAvailableMin: 1,
		barracksUpgradingSec: 36,
		barracksUpgradingMin: 3,
	},
	mode: {
		attackType: Constants.singleTarget,
		unitTypeTarget: Constants.groundAndAir,
		preferredTarget: Constants.none,
		minRange: 4,
		maxRange: 10,
		attackSpeed: 1,
		movementSpeed: 16,
		specialAbility: Constants.longShot,
	},
	levels: [
		{
			level: 8,
			damagePerSecond: 300,
			damagePerAttack: 300,
			hitpoints: 1500,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3a/Super_Minion8.png/revision/latest?cb=20201012180920',
		},
		{
			level: 9,
			damagePerSecond: 325,
			damagePerAttack: 325,
			hitpoints: 1600,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3a/Super_Minion8.png/revision/latest?cb=20201012180920',
		},
		{
			level: 10,
			damagePerSecond: 350,
			damagePerAttack: 350,
			hitpoints: 1700,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3a/Super_Minion8.png/revision/latest?cb=20201012180920',
		},
		{
			level: 11,
			damagePerSecond: 360,
			damagePerAttack: 360,
			hitpoints: 1800,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3a/Super_Minion8.png/revision/latest?cb=20201012180920',
		},
		{
			level: 12,
			damagePerSecond: 370,
			damagePerAttack: 370,
			hitpoints: 1900,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3a/Super_Minion8.png/revision/latest?cb=20201012180920',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
