import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/elixirTroops/witch/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Witch',
	description:
		'The Witch never fights alone, constantly raising dead warriors from past battles to lead her attacks. Upgraded Witches raise more skeletons at a time.',
	maxLevel: 7,
	housingSpace: 12,
	barracksLevelRequired: 5,
	superTroopUnlocked: 'Super Witch',
	training: {
		barracksAvailableSec: 0,
		barracksAvailableMin: 2,
		barracksUpgradingSec: 0,
		barracksUpgradingMin: 4,
	},
	mode: {
		attackType: Constants.areaSplash,
		unitTypeTarget: Constants.groundAndAir,
		preferredTarget: Constants.none,
		minRange: 0,
		maxRange: 4,
		tiles: 0.3,
		attackSpeed: 0.7,
		movementSpeed: 12,
		summonCooldown: 7,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 100,
			damagePerAttack: 70,
			skeletonsPerSummon: 4,
			maxSkeletonsSummoned: 6,
			hitpoints: 300,
			researchCost: 0,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 0,
			laboratoryLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c9/Witch1.png/revision/latest?cb=20221123235934',
		},
		{
			level: 2,
			damagePerSecond: 110,
			damagePerAttack: 77,
			skeletonsPerSummon: 4,
			maxSkeletonsSummoned: 8,
			hitpoints: 320,
			researchCost: 40000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 4,
			laboratoryLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c9/Witch1.png/revision/latest?cb=20221123235934',
		},
		{
			level: 3,
			damagePerSecond: 140,
			damagePerAttack: 98,
			skeletonsPerSummon: 4,
			maxSkeletonsSummoned: 10,
			hitpoints: 400,
			researchCost: 58000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 18,
			researchTimeDay: 4,
			laboratoryLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8a/Witch3.png/revision/latest?cb=20221123235948',
		},
		{
			level: 4,
			damagePerSecond: 160,
			damagePerAttack: 112,
			skeletonsPerSummon: 4,
			maxSkeletonsSummoned: 12,
			hitpoints: 440,
			researchCost: 90000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 18,
			researchTimeDay: 6,
			laboratoryLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8a/Witch3.png/revision/latest?cb=20221123235948',
		},
		{
			level: 5,
			damagePerSecond: 180,
			damagePerAttack: 126,
			skeletonsPerSummon: 4,
			maxSkeletonsSummoned: 14,
			hitpoints: 480,
			researchCost: 125000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 7,
			laboratoryLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/2/2a/Witch5.png/revision/latest?cb=20221124000007',
		},
		{
			level: 6,
			damagePerSecond: 200,
			damagePerAttack: 140,
			skeletonsPerSummon: 4,
			maxSkeletonsSummoned: 15,
			hitpoints: 520,
			researchCost: 340000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 14,
			laboratoryLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/db/Witch6.png/revision/latest?cb=20221124000020',
		},
		{
			level: 7,
			damagePerSecond: 220,
			damagePerAttack: 154,
			skeletonsPerSummon: 5,
			maxSkeletonsSummoned: 16,
			hitpoints: 560,
			researchCost: 360000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 16,
			laboratoryLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/0/06/Witch7.png/revision/latest?cb=20231213082928',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop