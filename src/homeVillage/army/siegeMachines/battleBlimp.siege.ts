import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Battle Blimp',
	description:
		'The Battle Blimp bypasses ground-based obstacles and delivers your Clan Castle troops directly into the heart of the enemy village, all while dropping bombs along the way. However, its thin hide makes it easier to shoot down. Immune to spell effects.',
	maxLevel: 4,
	housingSpace: 1,
	buildingLevelRequired: 2,
	buildingName: Constants.workshop,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/2/2f/Avatar_Battle_Blimp.png/revision/latest/scale-to-width-down/120?cb=20200913200003',
	training: {
		barracksAvailableSec: 0,
		barracksAvailableMin: 20,
		barracksUpgradingSec: 0,
		barracksUpgradingMin: 40,
	},
	mode: {
		attackType: Constants.areaSplash,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.none,
		attackSpeed: 1.5,
		movementSpeed: 18,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 100,
			damagePerAttack: 150,
			damageUponDeath: 700,
			hitpoints: 3000,
			researchCost: 0,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 0,
			laboratoryLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/6b/Battle_Blimp1.png/revision/latest/scale-to-width-down/120?cb=20180605200924',
		},
		{
			level: 2,
			damagePerSecond: 140,
			damagePerAttack: 210,
			damageUponDeath: 800,
			hitpoints: 3500,
			researchCost: 3800000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 4,
			laboratoryLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/bd/Battle_Blimp2.png/revision/latest/scale-to-width-down/120?cb=20180605201134',
		},
		{
			level: 3,
			damagePerSecond: 180,
			damagePerAttack: 270,
			damageUponDeath: 900,
			hitpoints: 4000,
			researchCost: 5000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 5,
			laboratoryLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b9/Battle_Blimp3.png/revision/latest/scale-to-width-down/120?cb=20180605201226',
		},
		{
			level: 4,
			damagePerSecond: 220,
			damagePerAttack: 330,
			damageUponDeath: 1000,
			hitpoints: 4500,
			researchCost: 8500000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 8,
			laboratoryLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/ba/Battle_Blimp4.png/revision/latest/scale-to-width-down/120?cb=20210227025338',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
