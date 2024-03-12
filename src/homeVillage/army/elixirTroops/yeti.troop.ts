import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Yeti',
	description:
		"The heavy-hitting furry fellow digs cold weather and his Yetimite buddies. Hurt him, and you'll make the Yetimites real angry.",
	maxLevel: 5,
	housingSpace: 18,
	buildingLevelRequired: 14,
	buildingName: Constants.barracks,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/b/be/Avatar_Yeti.png/revision/latest/scale-to-width-down/120?cb=20200913074419',
	training: {
		barracksAvailableSec: 0,
		barracksAvailableMin: 3,
		barracksUpgradingSec: 0,
		barracksUpgradingMin: 6,
	},
	mode: {
		attackType: Constants.melee,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.any,
		minRange: 0,
		maxRange: 0.8,
		attackSpeed: 1,
		movementSpeed: 12,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 230,
			damagePerAttack: 230,
			hitpoints: 2900,
			yetimitesSpawned: 8,
			researchCost: 0,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 0,
			laboratoryLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/24/Yeti1.png/revision/latest/scale-to-width-down/100?cb=20230613082108',
		},
		{
			level: 2,
			damagePerSecond: 250,
			damagePerAttack: 250,
			hitpoints: 3200,
			yetimitesSpawned: 9,
			researchCost: 7000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 6,
			laboratoryLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a4/Yeti2.png/revision/latest/scale-to-width-down/100?cb=20230613082120',
		},
		{
			level: 3,
			damagePerSecond: 270,
			damagePerAttack: 270,
			hitpoints: 3500,
			yetimitesSpawned: 10,
			researchCost: 9000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 7,
			laboratoryLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/0a/Yeti3.png/revision/latest/scale-to-width-down/100?cb=20230613082127',
		},
		{
			level: 4,
			damagePerSecond: 290,
			damagePerAttack: 290,
			hitpoints: 3700,
			yetimitesSpawned: 11,
			researchCost: 17100000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 12,
			laboratoryLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/21/Yeti4.png/revision/latest/scale-to-width-down/100?cb=20230613082133',
		},
		{
			level: 5,
			damagePerSecond: 310,
			damagePerAttack: 310,
			hitpoints: 3900,
			yetimitesSpawned: 12,
			researchCost: 19000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 18,
			researchTimeDay: 13,
			laboratoryLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d7/Yeti5.png/revision/latest/scale-to-width-down/100?cb=20230613082139',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
