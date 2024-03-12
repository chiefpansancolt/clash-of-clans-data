import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Super Valkyrie',
	description:
		"Not only are Super Valkyries superior to regular Valkyries in every way, they're also way more angry!",
	maxLevel: 11,
	housingSpace: 20,
	buildingName: Constants.darkBarracks,
	troopUnlockLevel: 7,
	boostCost: 25000,
	boostResource: Constants.darkElixir,
	boostDurationDays: 3,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/9/9e/Avatar_Super_Valkyrie.png/revision/latest/scale-to-width-down/137?cb=20201012035954',
	training: {
		barracksAvailableSec: 45,
		barracksAvailableMin: 3,
		barracksUpgradingSec: 30,
		barracksUpgradingMin: 7,
	},
	mode: {
		attackType: Constants.areaSplash,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.none,
		minRange: 0,
		maxRange: 0.6,
		attackSpeed: 1.1,
		movementSpeed: 24,
		specialAbility: Constants.farewellGift,
	},
	levels: [
		{
			level: 7,
			damagePerSecond: 250,
			damagePerAttack: 275,
			hitpoints: 2400,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/85/Super_Valkyrie7.png/revision/latest?cb=20201012035031',
		},
		{
			level: 8,
			damagePerSecond: 300,
			damagePerAttack: 330,
			hitpoints: 2700,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/85/Super_Valkyrie7.png/revision/latest?cb=20201012035031',
		},
		{
			level: 9,
			damagePerSecond: 325,
			damagePerAttack: 357.5,
			hitpoints: 2900,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/85/Super_Valkyrie7.png/revision/latest?cb=20201012035031',
		},
		{
			level: 10,
			damagePerSecond: 350,
			damagePerAttack: 385,
			hitpoints: 3400,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/85/Super_Valkyrie7.png/revision/latest?cb=20201012035031',
		},
		{
			level: 11,
			damagePerSecond: 375,
			damagePerAttack: 412.5,
			hitpoints: 3900,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/85/Super_Valkyrie7.png/revision/latest?cb=20201012035031',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
