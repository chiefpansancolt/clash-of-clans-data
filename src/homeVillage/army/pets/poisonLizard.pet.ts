import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Poison Lizard',
	description:
		"Always the fastest never the lastest, Poison Lizard spits slowing toxins at its foes. Is it actually a venom lizard? Possibly, but who's brave enough to correct it?",
	maxLevel: 10,
	buildingLevelRequired: 7,
	buildingName: Constants.petHouse,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/a/aa/Avatar_Poison_Lizard.png/revision/latest/scale-to-width-down/120?cb=20221010075234',
	mode: {
		attackType: Constants.singleTarget,
		unitTypeTarget: Constants.groundAndAir,
		preferredTarget: Constants.herosAndTroops,
		minRange: 0,
		maxRange: 3.5,
		attackSpeed: 0.35,
		movementSpeed: 36,
		specialAbility: Constants.badBreath,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 181,
			damagePerAttack: 63.35,
			poisonMaxDamagePerSecond: 80,
			poisonSpeedDecrease: 26,
			poisonAttackRateDecrease: 35,
			hitpoints: 1250,
			researchCost: 0,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 0,
			laboratoryLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1d/Poison_Lizard_field.png/revision/latest/scale-to-width-down/100?cb=20221012063805',
		},
		{
			level: 2,
			damagePerSecond: 192,
			damagePerAttack: 67.2,
			poisonMaxDamagePerSecond: 80,
			poisonSpeedDecrease: 26,
			poisonAttackRateDecrease: 35,
			hitpoints: 1300,
			researchCost: 190000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 3,
			laboratoryLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1d/Poison_Lizard_field.png/revision/latest/scale-to-width-down/100?cb=20221012063805',
		},
		{
			level: 3,
			damagePerSecond: 203,
			damagePerAttack: 71.05,
			poisonMaxDamagePerSecond: 80,
			poisonSpeedDecrease: 26,
			poisonAttackRateDecrease: 35,
			hitpoints: 1350,
			researchCost: 195000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 4,
			laboratoryLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1d/Poison_Lizard_field.png/revision/latest/scale-to-width-down/100?cb=20221012063805',
		},
		{
			level: 4,
			damagePerSecond: 214,
			damagePerAttack: 74.9,
			poisonMaxDamagePerSecond: 80,
			poisonSpeedDecrease: 26,
			poisonAttackRateDecrease: 35,
			hitpoints: 1400,
			researchCost: 200000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 5,
			laboratoryLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1d/Poison_Lizard_field.png/revision/latest/scale-to-width-down/100?cb=20221012063805',
		},
		{
			level: 5,
			damagePerSecond: 225,
			damagePerAttack: 78.75,
			poisonMaxDamagePerSecond: 100,
			poisonSpeedDecrease: 34,
			poisonAttackRateDecrease: 45,
			hitpoints: 1450,
			researchCost: 210000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 5,
			laboratoryLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1d/Poison_Lizard_field.png/revision/latest/scale-to-width-down/100?cb=20221012063805',
		},
		{
			level: 6,
			damagePerSecond: 236,
			damagePerAttack: 82.6,
			poisonMaxDamagePerSecond: 100,
			poisonSpeedDecrease: 34,
			poisonAttackRateDecrease: 45,
			hitpoints: 1500,
			researchCost: 215000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 6,
			laboratoryLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1d/Poison_Lizard_field.png/revision/latest/scale-to-width-down/100?cb=20221012063805',
		},
		{
			level: 7,
			damagePerSecond: 247,
			damagePerAttack: 86.45,
			poisonMaxDamagePerSecond: 100,
			poisonSpeedDecrease: 34,
			poisonAttackRateDecrease: 45,
			hitpoints: 1550,
			researchCost: 225000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 6,
			laboratoryLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1d/Poison_Lizard_field.png/revision/latest/scale-to-width-down/100?cb=20221012063805',
		},
		{
			level: 8,
			damagePerSecond: 258,
			damagePerAttack: 90.3,
			poisonMaxDamagePerSecond: 100,
			poisonSpeedDecrease: 34,
			poisonAttackRateDecrease: 45,
			hitpoints: 1600,
			researchCost: 230000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 7,
			laboratoryLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1d/Poison_Lizard_field.png/revision/latest/scale-to-width-down/100?cb=20221012063805',
		},
		{
			level: 9,
			damagePerSecond: 269,
			damagePerAttack: 94.15,
			poisonMaxDamagePerSecond: 100,
			poisonSpeedDecrease: 34,
			poisonAttackRateDecrease: 45,
			hitpoints: 1650,
			researchCost: 240000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 7,
			laboratoryLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1d/Poison_Lizard_field.png/revision/latest/scale-to-width-down/100?cb=20221012063805',
		},
		{
			level: 10,
			damagePerSecond: 280,
			damagePerAttack: 98,
			poisonMaxDamagePerSecond: 120,
			poisonSpeedDecrease: 38,
			poisonAttackRateDecrease: 50,
			hitpoints: 1700,
			researchCost: 245000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 8,
			laboratoryLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1d/Poison_Lizard_field.png/revision/latest/scale-to-width-down/100?cb=20221012063805',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
