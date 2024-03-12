import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Baby Dragon',
	description:
		'This fire-breathing hatchling is shy around other air units, but leave it alone and it will throw a fit! When not around other air units, Baby Dragons become enraged and gain bonus damage and attack speed.',
	maxLevel: 9,
	housingSpace: 10,
	buildingLevelRequired: 11,
	buildingName: Constants.barracks,
	superTroopUnlocked: 'Inferno Dragon',
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/7/7a/Avatar_Baby_Dragon.png/revision/latest/scale-to-width-down/120?cb=20200913014509',
	training: {
		barracksAvailableSec: 30,
		barracksAvailableMin: 1,
		barracksUpgradingSec: 0,
		barracksUpgradingMin: 3,
	},
	mode: {
		attackType: Constants.areaSplash,
		unitTypeTarget: Constants.groundAndAir,
		preferredTarget: Constants.none,
		minRange: 0,
		maxRange: 10,
		tiles: 0.3,
		attackSpeed: 1,
		movementSpeed: 20,
		abilityDamageIncrease: 100,
		abilityAttackSpeedIncrease: 50,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 75,
			abilityDamagePerSecond: 225,
			damagePerAttack: 75,
			hitpoints: 1200,
			researchCost: 0,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 0,
			laboratoryLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/be/Baby_Dragon1.png/revision/latest?cb=20180309005942',
		},
		{
			level: 2,
			damagePerSecond: 85,
			abilityDamagePerSecond: 255,
			damagePerAttack: 85,
			hitpoints: 1300,
			researchCost: 2000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 2,
			laboratoryLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/be/Baby_Dragon1.png/revision/latest?cb=20180309005942',
		},
		{
			level: 3,
			damagePerSecond: 95,
			abilityDamagePerSecond: 285,
			damagePerAttack: 95,
			hitpoints: 1400,
			researchCost: 2500000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 3,
			laboratoryLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b7/Baby_Dragon2.png/revision/latest?cb=20180309005958',
		},
		{
			level: 4,
			damagePerSecond: 105,
			abilityDamagePerSecond: 315,
			damagePerAttack: 105,
			hitpoints: 1500,
			researchCost: 3400000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 4,
			laboratoryLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3a/Baby_Dragon3.png/revision/latest?cb=20180309010013',
		},
		{
			level: 5,
			damagePerSecond: 115,
			abilityDamagePerSecond: 345,
			damagePerAttack: 115,
			hitpoints: 1600,
			researchCost: 4200000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 5,
			laboratoryLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/e/e6/Baby_Dragon4.png/revision/latest?cb=20180309010030',
		},
		{
			level: 6,
			damagePerSecond: 125,
			abilityDamagePerSecond: 375,
			damagePerAttack: 125,
			hitpoints: 1700,
			researchCost: 5500000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 6,
			researchTimeDay: 6,
			laboratoryLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Baby_Dragon6.png/revision/latest?cb=20180607160550',
		},
		{
			level: 7,
			damagePerSecond: 135,
			abilityDamagePerSecond: 405,
			damagePerAttack: 135,
			hitpoints: 1800,
			researchCost: 7200000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 7,
			laboratoryLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Baby_Dragon7.png/revision/latest?cb=20210413034454',
		},
		{
			level: 8,
			damagePerSecond: 145,
			abilityDamagePerSecond: 435,
			damagePerAttack: 145,
			hitpoints: 1900,
			researchCost: 16000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 11,
			laboratoryLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5e/Baby_Dragon8.png/revision/latest?cb=20210413034459',
		},
		{
			level: 9,
			damagePerSecond: 155,
			abilityDamagePerSecond: 465,
			damagePerAttack: 155,
			hitpoints: 2000,
			researchCost: 18000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 13,
			laboratoryLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4a/Baby_Dragon9.png/revision/latest?cb=20230613083254',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
