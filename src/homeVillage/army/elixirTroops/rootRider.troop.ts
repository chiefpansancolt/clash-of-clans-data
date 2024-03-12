import * as Constants from '@/constants'
import Army from '@IHomeVillage/troops/army.interface'
import { getLevel } from '@Utils/buildings.utility'

const troop: Army = {
	name: 'Root Rider',
	description:
		'This earth warrior is so in tune with nature she doesn’t need to walk herself. Riding into battle on top a tough tree root which can smash through walls and slam defenses into dust.',
	maxLevel: 3,
	housingSpace: 20,
	buildingLevelRequired: 17,
	buildingName: Constants.barracks,
	avatarImgUrl:
		'https://static.wikia.nocookie.net/clashofclans/images/0/0b/Avatar_Root_Rider.png/revision/latest/scale-to-width-down/120?cb=20231213214829',
	training: {
		barracksAvailableSec: 40,
		barracksAvailableMin: 3,
		barracksUpgradingSec: 7,
		barracksUpgradingMin: 20,
	},
	mode: {
		attackType: Constants.melee,
		unitTypeTarget: Constants.ground,
		preferredTarget: Constants.defenses,
		minRange: 0,
		maxRange: 1,
		attackSpeed: 2.2,
		attackSpeedVsWalls: 0.4,
		movementSpeed: 12,
	},
	levels: [
		{
			level: 1,
			damagePerSecond: 210,
			damagePerAttack: 462,
			wallDamagePerSecond: 10000,
			wallDamagePerHit: 4000,
			hitpoints: 7200,
			researchCost: 0,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 0,
			laboratoryLevelRequired: 0,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/1/1d/Root_Rider1.png/revision/latest/scale-to-width-down/100?cb=20231213082543',
		},
		{
			level: 2,
			damagePerSecond: 230,
			damagePerAttack: 506,
			wallDamagePerSecond: 10000,
			wallDamagePerHit: 4000,
			hitpoints: 7600,
			researchCost: 19000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 12,
			laboratoryLevelRequired: 13,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/5/5b/Root_Rider2.png/revision/latest/scale-to-width-down/100?cb=20231213082544',
		},
		{
			level: 3,
			damagePerSecond: 250,
			damagePerAttack: 550,
			wallDamagePerSecond: 10000,
			wallDamagePerHit: 4000,
			hitpoints: 8000,
			researchCost: 22000000,
			researchCostResource: Constants.elixir,
			researchTimeSec: 0,
			researchTimeMin: 0,
			researchTimeHour: 0,
			researchTimeDay: 14,
			laboratoryLevelRequired: 14,
			baseImgUrl:
				'https://static.wikia.nocookie.net/clashofclans/images/b/b8/Root_Rider3.png/revision/latest/scale-to-width-down/100?cb=20231213082545',
		},
	],
	getLevel: (level: number) => getLevel(troop.levels, level, 'level'),
}

export default troop
