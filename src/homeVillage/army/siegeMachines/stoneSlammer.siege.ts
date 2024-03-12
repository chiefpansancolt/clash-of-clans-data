import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Stone Slammer',
	description:
		'The Stone Slammer is a heavy-duty, flying mountain that targets defensive buildings by flattening them with giant boulders and causes earthquakes. Immune to spell effects.',
	maxLevel: 5,
	housingSpace: 1,
	buildingLevelRequired: 3,
	buildingName: Constants.workshop,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/a/ad/Avatar_Stone_Slammer.png/revision/latest/scale-to-width-down/120?cb=20200913200030',
	training: {
		barracksAvailableSec: 0,
		barracksAvailableMin: 20,
		barracksUpgradingSec: 0,
		barracksUpgradingMin: 40,
	},
	mode: {
		attackType: Constants.areaSplash,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.defenses,
		attackSpeed: 2.5,
		movementSpeed: 16,
		tiles: 3,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 400,
			damagePerAttack: 1000,
			damageUponDeath: 500,
			hitpoints: 5600,
			researchCost: 0,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 0,
			laboratoryLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/0b/Stone_Slammer1.png/revision/latest/scale-to-width-down/100?cb=20230616052021',
		},
		{
			level: 2,
			damagePerSecond: 500,
			damagePerAttack: 1250,
			damageUponDeath: 500,
			hitpoints: 5900,
			researchCost: 3800000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 4,
			laboratoryLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4e/Stone_Slammer2.png/revision/latest/scale-to-width-down/100?cb=20230616052025',
		},
		{
			level: 3,
			damagePerSecond: 600,
			damagePerAttack: 1500,
			damageUponDeath: 500,
			hitpoints: 6200,
			researchCost: 5000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 5,
			laboratoryLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f5/Stone_Slammer3.png/revision/latest/scale-to-width-down/100?cb=20230616052030',
		},
		{
			level: 4,
			damagePerSecond: 700,
			damagePerAttack: 1750,
			damageUponDeath: 500,
			hitpoints: 6500,
			researchCost: 8500000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 8,
			laboratoryLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Stone_Slammer4.png/revision/latest/scale-to-width-down/100?cb=20230616052035',
		},
		{
			level: 5,
			damagePerSecond: 750,
			damagePerAttack: 1875,
			damageUponDeath: 500,
			hitpoints: 6800,
			researchCost: 15000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 13,
			laboratoryLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/62/Stone_Slammer5.png/revision/latest/scale-to-width-down/100?cb=20230616052042',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
