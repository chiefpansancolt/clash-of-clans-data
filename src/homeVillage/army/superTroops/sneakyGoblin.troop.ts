import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Sneaky Goblin',
	description:
		"Sneaky Goblins have a talent going unnoticed for a while after being deployed. It's usually the incredibly loud sound of resources being pilfered that gives them away.",
	maxLevel: 9,
	housingSpace: 3,
	buildingName: Constants.barracks,
	troopUnlockLevel: 7,
	boostCost: 25000,
	boostResource: Constants.darkElixir,
	boostDurationDays: 3,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/6/6e/Avatar_Sneaky_Goblin.png/revision/latest/scale-to-width-down/137?cb=20200913075807',
	training: {
		barracksAvailableSec: 0,
		barracksAvailableMin: 21,
		barracksUpgradingSec: 0,
		barracksUpgradingMin: 42,
	},
	mode: {
		attackType: Constants.melee,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.resources2X,
		minRange: 0,
		maxRange: 0.4,
		attackSpeed: 1,
		movementSpeed: 32,
		specialAbility: Constants.cloak,
	},
	levels: [
		{
			level: 7,
			damagePerSecond: 155,
			damagePerAttack: 155,
			dpsOnResourceBuildings: 310,
			hitpoints: 270,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/90/Sneaky_Goblin7.png/revision/latest/scale-to-width-down/70?cb=20200401131102',
		},
		{
			level: 8,
			damagePerSecond: 170,
			damagePerAttack: 170,
			dpsOnResourceBuildings: 340,
			hitpoints: 320,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/90/Sneaky_Goblin7.png/revision/latest/scale-to-width-down/70?cb=20200401131102',
		},
		{
			level: 9,
			damagePerSecond: 180,
			damagePerAttack: 180,
			dpsOnResourceBuildings: 360,
			hitpoints: 350,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/90/Sneaky_Goblin7.png/revision/latest/scale-to-width-down/70?cb=20200401131102',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
