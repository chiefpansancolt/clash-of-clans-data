import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Battle Drill',
	description:
		'A fine example of goblin ingenuity, the Battle Drill burrows underground towards the nearest defense. On arrival it pops up to stun and demolish with its dastardly drill.',
	maxLevel: 4,
	housingSpace: 1,
	buildingLevelRequired: 7,
	buildingName: Constants.barracks,
	baseImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/9/99/Avatar_Battle_Drill.png/revision/latest/scale-to-width-down/120?cb=20221010103416',
	training: {
		barracksAvailableSec: 0,
		barracksAvailableMin: 20,
		barracksUpgradingSec: 0,
		barracksUpgradingMin: 40,
	},
	mode: {
		attackType: Constants.singleTarget,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.defenses,
		minRange: 0,
		maxRange: 1,
		attackSpeed: 1.7,
		movementSpeed: 24,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 430,
			damagePerAttack: 731,
			hitpoints: 4600,
			researchCost: 0,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 0,
			laboratoryLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/66/Battle_Drill1.png/revision/latest/scale-to-width-down/100?cb=20221124204157',
		},
		{
			level: 2,
			damagePerSecond: 470,
			damagePerAttack: 799,
			hitpoints: 4900,
			researchCost: 8000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 10,
			laboratoryLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c4/Battle_Drill2.png/revision/latest/scale-to-width-down/100?cb=20221124204218',
		},
		{
			level: 3,
			damagePerSecond: 510,
			damagePerAttack: 867,
			hitpoints: 5200,
			researchCost: 11000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 12,
			laboratoryLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/ae/Battle_Drill3.png/revision/latest/scale-to-width-down/100?cb=20221124204230',
		},
		{
			level: 4,
			damagePerSecond: 550,
			damagePerAttack: 935,
			hitpoints: 5500,
			researchCost: 14000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 12,
			laboratoryLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5f/Battle_Drill4.png/revision/latest/scale-to-width-down/100?cb=20221124204241',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
