import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Headhunter',
	description:
		"Headhunter has just one job: taking out enemy heroes. As her other job, she works at the village apothecary. She's lightweight enough to jump over walls and her poisoned weapons make her targets move and attack slower.",
	maxLevel: 3,
	housingSpace: 6,
	buildingLevelRequired: 9,
	buildingName: Constants.darkBarracks,
	training: {
		barracksAvailableSec: 0,
		barracksAvailableMin: 1,
		barracksUpgradingSec: 0,
		barracksUpgradingMin: 2,
	},
	mode: {
		attackType: Constants.melee,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.heros4x,
		minRange: 0,
		maxRange: 3,
		attackSpeed: 0.6,
		movementSpeed: 32,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 105,
			damagePerAttack: 63,
			dpsOnHeroes: 420,
			speedDecrease: 40,
			attackRateDecrease: 55,
			hitpoints: 360,
			researchCost: 0,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 0,
			laboratoryLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/98/Headhunter1.png/revision/latest/scale-to-width-down/65?cb=20201013052457',
		},
		{
			level: 2,
			damagePerSecond: 115,
			damagePerAttack: 69,
			dpsOnHeroes: 460,
			speedDecrease: 42,
			attackRateDecrease: 60,
			hitpoints: 400,
			researchCost: 115000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 9,
			laboratoryLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a6/Headhunter2.png/revision/latest/scale-to-width-down/65?cb=20201013052522',
		},
		{
			level: 3,
			damagePerSecond: 125,
			damagePerAttack: 75,
			dpsOnHeroes: 500,
			speedDecrease: 44,
			attackRateDecrease: 65,
			hitpoints: 440,
			researchCost: 145000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 10,
			laboratoryLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4c/Headhunter3.png/revision/latest/scale-to-width-down/65?cb=20201013052246',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
