import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Electro Titan',
	description:
		'Barely controlling her raw magical power, the Electro Titan is a formidable force on the battlefield. She channels some of her magic into a powerful electro whip while the rest spills out to damage everything around her.',
	maxLevel: 3,
	housingSpace: 32,
	buildingLevelRequired: 16,
	buildingName: Constants.barracks,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/6/67/Avatar_Electro_Titan.png/revision/latest/scale-to-width-down/120?cb=20221010075230',
	training: {
		barracksAvailableSec: 0,
		barracksAvailableMin: 6,
		barracksUpgradingSec: 0,
		barracksUpgradingMin: 12,
	},
	mode: {
		attackType: Constants.ranged,
		unitTypeTarget: Constants.groundAndAir,
		preferredTarget: Constants.none,
		minRange: 0,
		maxRange: 1.25,
		attackSpeed: 1.5,
		movementSpeed: 16,
		auraAttackSpeed: 0.4,
		auraRadius: 3.5,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 180,
			damagePerAttack: 270,
			auraDamagePerSecond: 75,
			auraDamagePerHit: 30,
			hitpoints: 7200,
			researchCost: 0,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 0,
			laboratoryLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bd/Electro_Titan1.png/revision/latest?cb=20221120070541',
		},
		{
			level: 2,
			damagePerSecond: 200,
			damagePerAttack: 300,
			auraDamagePerSecond: 100,
			auraDamagePerHit: 40,
			hitpoints: 7700,
			researchCost: 19500000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 13,
			laboratoryLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/12/Electro_Titan2.png/revision/latest?cb=20221120070550',
		},
		{
			level: 3,
			damagePerSecond: 220,
			damagePerAttack: 330,
			auraDamagePerSecond: 125,
			auraDamagePerHit: 50,
			hitpoints: 8200,
			researchCost: 20500000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 14,
			laboratoryLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d1/Electro_Titan3.png/revision/latest?cb=20221120070600',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
