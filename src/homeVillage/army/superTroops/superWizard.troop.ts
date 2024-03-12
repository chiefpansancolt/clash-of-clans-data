import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Super Wizard',
	description:
		"Super Wizard is positively charged with magical energy! He's either the smartest person in the room... or else he blows the whole room to bits.",
	maxLevel: 12,
	housingSpace: 10,
	buildingName: Constants.barracks,
	troopUnlockLevel: 9,
	boostCost: 25000,
	boostResource: Constants.darkElixir,
	boostDurationDays: 3,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/f/f9/Avatar_Super_Wizard.png/revision/latest/scale-to-width-down/137?cb=20201207184826',
	training: {
		barracksAvailableSec: 1,
		barracksAvailableMin: 15,
		barracksUpgradingSec: 2,
		barracksUpgradingMin: 30,
	},
	mode: {
		attackType: Constants.singleTarget,
		unitTypeTarget: Constants.groundAndAir,
		preferredTarget: Constants.none,
		minRange: 0,
		maxRange: 3,
		attackSpeed: 2,
		movementSpeed: 20,
		specialAbility: Constants.chainMagic,
	},
	levels: [
		{
			level: 9,
			damagePerSecond: 220,
			damagePerAttack: 440,
			secondaryChainDamage: 176,
			hitpoints: 450,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d0/Super_Wizard9.png/revision/latest?cb=20201205195307',
		},
		{
			level: 10,
			damagePerSecond: 240,
			damagePerAttack: 480,
			secondaryChainDamage: 192,
			hitpoints: 500,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d0/Super_Wizard9.png/revision/latest?cb=20201205195307',
		},
		{
			level: 11,
			damagePerSecond: 260,
			damagePerAttack: 480,
			secondaryChainDamage: 208,
			hitpoints: 550,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d0/Super_Wizard9.png/revision/latest?cb=20201205195307',
		},
		{
			level: 12,
			damagePerSecond: 275,
			damagePerAttack: 550,
			secondaryChainDamage: 220,
			hitpoints: 580,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d0/Super_Wizard9.png/revision/latest?cb=20201205195307',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
