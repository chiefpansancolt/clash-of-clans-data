import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Bowler',
	description:
		'This big blue dude digs the simple things in life - Dark Elixir drinks and throwing rocks. His massive boulders bounce off their targets and hit again behind it for a double strike!',
	maxLevel: 7,
	housingSpace: 6,
	buildingLevelRequired: 7,
	buildingName: Constants.darkBarracks,
	superTroopUnlocked: 'Super Bowler',
	training: {
		barracksAvailableSec: 0,
		barracksAvailableMin: 1,
		barracksUpgradingSec: 0,
		barracksUpgradingMin: 2,
	},
	mode: {
		attackType: Constants.areaSplash,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.none,
		minRange: 0,
		maxRange: 3,
		attackSpeed: 2.2,
		movementSpeed: 14,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 60,
			damagePerAttack: 132,
			hitpoints: 325,
			researchCost: 0,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 0,
			laboratoryLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/ab/Bowler1.png/revision/latest/scale-to-width-down/120?cb=20230613084211',
		},
		{
			level: 2,
			damagePerSecond: 70,
			damagePerAttack: 154,
			hitpoints: 350,
			researchCost: 65000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 3,
			laboratoryLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/ab/Bowler1.png/revision/latest/scale-to-width-down/120?cb=20230613084211',
		},
		{
			level: 3,
			damagePerSecond: 80,
			damagePerAttack: 176,
			hitpoints: 385,
			researchCost: 88000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 3,
			laboratoryLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/3/3a/Bowler3.png/revision/latest/scale-to-width-down/120?cb=20230613084219',
		},
		{
			level: 4,
			damagePerSecond: 90,
			damagePerAttack: 198,
			hitpoints: 420,
			researchCost: 125000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 5,
			laboratoryLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d2/Bowler4.png/revision/latest/scale-to-width-down/120?cb=20230613084224',
		},
		{
			level: 5,
			damagePerSecond: 96,
			damagePerAttack: 211.2,
			hitpoints: 455,
			researchCost: 170000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 7,
			laboratoryLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c5/Bowler5.png/revision/latest/scale-to-width-down/120?cb=20230613084230',
		},
		{
			level: 6,
			damagePerSecond: 102,
			damagePerAttack: 224.4,
			hitpoints: 500,
			researchCost: 240000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 12,
			laboratoryLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/be/Bowler6.png/revision/latest/scale-to-width-down/120?cb=20230613084236',
		},
		{
			level: 7,
			damagePerSecond: 114,
			damagePerAttack: 250.8,
			hitpoints: 550,
			researchCost: 335000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 6,
			researchTimeDay: 13,
			laboratoryLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/63/Bowler7.png/revision/latest/scale-to-width-down/120?cb=20230613084117',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
