import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/elixirTroops/apprenticeWarden/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Apprentice Warden',
	description:
		'Despite his grand ambitions, Apprentice Warden is still just a student. Supports troops with his magical Life Aura and less-magical slingshot.',
	maxLevel: 4,
	housingSpace: 20,
	barracksLevelRequired: 10,
	training: {
		barracksAvailableSec: 0,
		barracksAvailableMin: 4,
		barracksUpgradingSec: 0,
		barracksUpgradingMin: 8,
	},
	mode: {
		attackType: Constants.melee,
		unitTypeTarget: Constants.groundAndAir,
		preferredTarget: Constants.any,
		minRange: 0,
		maxRange: 5,
		attackSpeed: 0.9,
		movementSpeed: 0,
		auraRange: 7,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 170,
			damagePerAttack: 153,
			auraHpIncrease: 24,
			hitpoints: 1500,
			researchCost: 0,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 0,
			laboratoryLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/09/Apprentice_Warden1.png/revision/latest?cb=20230613000149',
		},
		{
			level: 2,
			damagePerSecond: 185,
			damagePerAttack: 166.5,
			auraHpIncrease: 26,
			hitpoints: 1650,
			researchCost: 180000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 9,
			laboratoryLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/38/Apprentice_Warden2.png/revision/latest?cb=20230613000149',
		},
		{
			level: 3,
			damagePerSecond: 200,
			damagePerAttack: 180,
			auraHpIncrease: 28,
			hitpoints: 1800,
			researchCost: 300000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 12,
			laboratoryLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/00/Apprentice_Warden3.png/revision/latest?cb=20230613000150',
		},
		{
			level: 4,
			damagePerSecond: 215,
			damagePerAttack: 193.5,
			auraHpIncrease: 30,
			hitpoints: 1950,
			researchCost: 340000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 14,
			laboratoryLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/39/Apprentice_Warden4.png/revision/latest?cb=20230613000151',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
