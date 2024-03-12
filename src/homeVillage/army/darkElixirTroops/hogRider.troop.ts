import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Hog Rider',
	description:
		'Having tamed the fierce leaping hog, the Hog Rider punishes those who hide behind their puny walls! Fueled by Dark Elixir, these warriors have never known defeat!',
	maxLevel: 12,
	housingSpace: 5,
	buildingLevelRequired: 2,
	buildingName: Constants.darkBarracks,
	superTroopUnlocked: 'Super Hog Rider',
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/e/e9/Avatar_Hog_Rider.png/revision/latest/scale-to-width-down/120?cb=20200913195505',
	training: {
		barracksAvailableSec: 45,
		barracksAvailableMin: 0,
		barracksUpgradingSec: 30,
		barracksUpgradingMin: 1,
	},
	mode: {
		attackType: Constants.melee,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.defenses,
		minRange: 0,
		maxRange: 0.6,
		attackSpeed: 1,
		movementSpeed: 24,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 60,
			damagePerAttack: 60,
			hitpoints: 270,
			researchCost: 0,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 0,
			laboratoryLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a5/Hog_Rider1.png/revision/latest?cb=20230613101441',
		},
		{
			level: 2,
			damagePerSecond: 70,
			damagePerAttack: 70,
			hitpoints: 312,
			researchCost: 4000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 10,
			researchTimeDay: 0,
			laboratoryLevelRequired: 5,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/a/a5/Hog_Rider1.png/revision/latest?cb=20230613101441',
		},
		{
			level: 3,
			damagePerSecond: 80,
			damagePerAttack: 80,
			hitpoints: 370,
			researchCost: 7000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 20,
			researchTimeDay: 0,
			laboratoryLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d9/Hog_Rider3.png/revision/latest?cb=20230613101449',
		},
		{
			level: 4,
			damagePerSecond: 92,
			damagePerAttack: 92,
			hitpoints: 430,
			researchCost: 10000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 6,
			researchTimeDay: 1,
			laboratoryLevelRequired: 6,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/d/d9/Hog_Rider3.png/revision/latest?cb=20230613101449',
		},
		{
			level: 5,
			damagePerSecond: 105,
			damagePerAttack: 105,
			hitpoints: 500,
			researchCost: 20000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 2,
			laboratoryLevelRequired: 7,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/99/Hog_Rider5.png/revision/latest?cb=20230613101456',
		},
		{
			level: 6,
			damagePerSecond: 118,
			damagePerAttack: 118,
			hitpoints: 590,
			researchCost: 37000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 16,
			researchTimeDay: 2,
			laboratoryLevelRequired: 8,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/4/43/Hog_Rider6.png/revision/latest?cb=20230613101503',
		},
		{
			level: 7,
			damagePerSecond: 135,
			damagePerAttack: 135,
			hitpoints: 700,
			researchCost: 70000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 12,
			researchTimeDay: 3,
			laboratoryLevelRequired: 9,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/f/f0/Hog_Rider7.png/revision/latest?cb=20230613101511',
		},
		{
			level: 8,
			damagePerSecond: 148,
			damagePerAttack: 148,
			hitpoints: 810,
			researchCost: 95000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 6,
			researchTimeDay: 5,
			laboratoryLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/9/9e/Hog_Rider8.png/revision/latest?cb=20230613101516',
		},
		{
			level: 9,
			damagePerSecond: 161,
			damagePerAttack: 161,
			hitpoints: 890,
			researchCost: 150000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 7,
			laboratoryLevelRequired: 10,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/81/Hog_Rider9.png/revision/latest?cb=20230613101521',
		},
		{
			level: 10,
			damagePerSecond: 174,
			damagePerAttack: 174,
			hitpoints: 970,
			researchCost: 175000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 7,
			laboratoryLevelRequired: 11,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/c/c3/Hog_Rider10.png/revision/latest?cb=20230613101526',
		},
		{
			level: 11,
			damagePerSecond: 187,
			damagePerAttack: 187,
			hitpoints: 1080,
			researchCost: 240000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 12,
			laboratoryLevelRequired: 12,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/8/8a/Hog_Rider11.png/revision/latest?cb=20230613101531',
		},
		{
			level: 12,
			damagePerSecond: 200,
			damagePerAttack: 200,
			hitpoints: 1230,
			researchCost: 335000,
			researchCostResource: Constants.darkElixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 6,
			researchTimeDay: 13,
			laboratoryLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/6/60/Hog_Rider12.png/revision/latest?cb=20230613101535',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
